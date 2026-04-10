self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('qa-pro-v1').then((cache) => {
      return cache.addAll(['/', '/index.html', '/icon-192x192.png']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});