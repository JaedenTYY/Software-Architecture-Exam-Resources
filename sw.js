importScripts("./search/offline-manifest.js");

const manifest = self.CSC3209_OFFLINE_MANIFEST;
const CACHE_PREFIX = "csc3209-exam-";
const CACHE = `${CACHE_PREFIX}${manifest.version}`;
const criticalPaths = new Set(manifest.critical.map(path => path.replace(/^\.\//, "")));
const optionalPaths = new Set(manifest.optional.map(path => path.replace(/^\.\//, "")));

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(manifest.critical);
    await Promise.allSettled(manifest.optional.map(asset => cache.add(asset)));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

function relativePath(url) {
  const scopePath = new URL(self.registration.scope).pathname;
  if (!url.pathname.startsWith(scopePath)) return null;
  return url.pathname.slice(scopePath.length).replace(/^\/+/, "");
}

async function networkFirst(request, fallbackRequest = request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response?.ok) await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cache.match(fallbackRequest) || await cache.match(request);
    if (cached) return cached;
    throw error;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response?.ok) await cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const relative = relativePath(url);
  if (relative == null) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, new Request(new URL("./index.html", self.registration.scope))));
    return;
  }
  if (criticalPaths.has(relative)) {
    event.respondWith(networkFirst(request));
    return;
  }
  if (optionalPaths.has(relative)) event.respondWith(cacheFirst(request));
});
