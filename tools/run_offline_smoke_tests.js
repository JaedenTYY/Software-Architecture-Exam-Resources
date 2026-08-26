#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ORIGIN = "https://exam.test";
const SCOPE = `${ORIGIN}/resources/`;
const listeners = new Map();
const stores = new Map();
let online = true;
let failures = 0;

const keyFor = request => typeof request === "string" ? new URL(request, SCOPE).href : request.url;
function localFileFor(request) {
  const url = new URL(keyFor(request));
  if (!url.pathname.startsWith("/resources/")) return null;
  const relative = url.pathname.slice("/resources/".length) || "index.html";
  return path.join(ROOT, relative);
}
async function networkFetch(request) {
  if (!online) throw new Error("network disabled");
  const file = localFileFor(request);
  if (!file || !fs.existsSync(file)) return new Response("not found", { status: 404 });
  return new Response(fs.readFileSync(file), { status: 200 });
}
function cacheApi(name) {
  if (!stores.has(name)) stores.set(name, new Map());
  const store = stores.get(name);
  return {
    async add(request) {
      const absolute = new Request(new URL(request, SCOPE));
      const response = await networkFetch(absolute);
      if (!response.ok) throw new Error(`Failed to cache ${absolute.url}`);
      store.set(absolute.url, response.clone());
    },
    async addAll(requests) { for (const request of requests) await this.add(request); },
    async put(request, response) { store.set(keyFor(request), response.clone()); },
    async match(request) { return store.get(keyFor(request))?.clone(); }
  };
}

const context = {
  URL, Request, Response, Set, Map, Promise,
  fetch: networkFetch,
  caches: {
    async open(name) { return cacheApi(name); },
    async keys() { return [...stores.keys()]; },
    async delete(name) { return stores.delete(name); }
  },
  self: {
    location: { origin: ORIGIN },
    registration: { scope: SCOPE },
    clients: { async claim() {} },
    async skipWaiting() {},
    addEventListener(type, listener) { listeners.set(type, listener); }
  }
};
context.globalThis = context;
context.importScripts = source => {
  const file = path.join(ROOT, source.replace(/^\.\//, ""));
  vm.runInContext(fs.readFileSync(file, "utf8"), sandbox, { filename: file });
};
const sandbox = vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(ROOT, "sw.js"), "utf8"), sandbox, { filename: "sw.js" });

function check(name, ok, details = "") {
  console.log(`${ok ? "PASS" : "FAIL"}: ${name}${details ? ` - ${details}` : ""}`);
  if (!ok) failures += 1;
}
async function dispatchLifecycle(type) {
  let pending;
  listeners.get(type)({ waitUntil(promise) { pending = promise; } });
  await pending;
}
async function dispatchFetch(request) {
  let responsePromise;
  listeners.get("fetch")({ request, respondWith(promise) { responsePromise = promise; } });
  return responsePromise ? responsePromise : networkFetch(request);
}

(async () => {
  await dispatchLifecycle("install");
  const manifest = context.self.CSC3209_OFFLINE_MANIFEST;
  const currentCache = `csc3209-exam-${manifest.version}`;
  const cache = stores.get(currentCache);
  check("Fresh online preparation caches every critical runtime asset", manifest.critical.every(asset => cache.has(new URL(asset, SCOPE).href)), `cached=${cache.size}`);
  check("Prepared pack includes local semantic/vector assets", ["search/local-semantic.bundle.js", "search/vector_index.meta.json", "search/vector_index.bin"].every(asset => cache.has(new URL(asset, SCOPE).href)));

  online = false;
  const navigation = { method: "GET", mode: "navigate", url: `${SCOPE}search/deep-link` };
  const offlinePage = await dispatchFetch(navigation);
  check("Navigation reload works with network disabled", offlinePage && (await offlinePage.text()).includes("CSC3209 Exam Question Search Engine"));
  const offlineQuestions = await dispatchFetch(new Request(`${SCOPE}questions.js`));
  check("Offline question bank remains available", offlineQuestions && (await offlineQuestions.text()).includes("window.QUESTIONS"));

  online = true;
  const freshQuestions = await dispatchFetch(new Request(`${SCOPE}questions.js`));
  const freshText = await freshQuestions.text();
  online = false;
  const cachedFreshQuestions = await dispatchFetch(new Request(`${SCOPE}questions.js`));
  check("Mutable corpus uses network-first refresh then offline fallback", (await cachedFreshQuestions.text()) === freshText);

  stores.set("csc3209-exam-obsolete", new Map([[`${SCOPE}questions.js`, new Response("stale")]]));
  stores.set("unrelated-cache", new Map());
  await dispatchLifecycle("activate");
  check("Upgrade removes obsolete CSC3209 cache", !stores.has("csc3209-exam-obsolete"));
  check("Upgrade leaves unrelated application caches alone", stores.has("unrelated-cache"));

  const predictor = await cacheApi(currentCache).match(new Request(`${SCOPE}search/answer-predictor.js`));
  const corpus = await cacheApi(currentCache).match(new Request(`${SCOPE}questions.js`));
  check("Prepared answer/predictor assets contain current reliability fixes", (await predictor.text()).includes("out-of-domain-query") && (await corpus.text()).includes("Concrete mapping for"));

  if (failures) {
    console.error(`\n${failures} offline smoke test(s) failed.`);
    process.exit(1);
  }
  console.log("\nAll offline preparation, reload, and upgrade smoke tests passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
