const CACHE = "csc3209-static-vectors-v2";

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

function relativePath(url) {
  const scopePath = new URL(self.registration.scope).pathname;
  if (!url.pathname.startsWith(scopePath)) return null;
  return url.pathname.slice(scopePath.length).replace(/^\/+/, "");
}

function shouldCache(pathname) {
  return pathname.startsWith("models/")
    || pathname === "search/vector_index.meta.json"
    || pathname === "search/vector_index.bin"
    || pathname.startsWith("search/")
    || pathname === "semantic_index.js"
    || pathname === "questions.js"
    || pathname.startsWith("expansion/");
}

function cacheFirst(pathname) {
  // The local model/runtime is versioned by repository contents and expensive
  // to refetch. Search code and generated indexes, however, must prefer the
  // newest deployed version so a previous service worker cannot keep an old
  // search engine alive after an update.
  return pathname.startsWith("models/");
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const rel = relativePath(url);
  if (!rel || !shouldCache(rel)) return;

  event.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(req);
      const network = fetch(req)
        .then(response => {
          if (response && response.ok) cache.put(req, response.clone());
          return response;
        })
        .catch(() => cached);

      if (cacheFirst(rel)) return cached || network;

      // Network-first for search code/indexes. Offline use still falls back to
      // the last good cached copy, while normal online/deployed use receives
      // current ranking and performance fixes immediately.
      try {
        return await network;
      } catch (_) {
        return cached;
      }
    })
  );
});
