// Service Worker

// Cache name
const pwaCache = 'pwa-cache-8';

// Static assets to cache on install
const staticCache = [
  '/',
  'index.html',
  'page2.html',
  'style.css',
  'main.js',
  'thumb.png'
];

// SW install and cache static assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(pwaCache)
    .then(cache => cache.addAll(staticCache))
  );
});

// SW Activate and cache cleanup
self.addEventListener('activate', (e) => {
  let cacheCleaned = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== pwaCache) return caches.delete(key);
    });
  });
  e.waitUntil(cacheCleaned);
});

// SW fetch handler
self.addEventListener('fetch', (e) => {

  // Cache with Network Fallback
  let res = caches.match(e.request).then((res) => {

    // Check cache has response
    if (res) return res;

    // Fallback to Network
    return fetch(e.request).then((fetchRes) => {

      // Cache fetched response
      caches.open(pwaCache).then(cache => {
        console.log('put operation cache', JSON.stringify(cache));
        console.log('put operation fetchRes', fetchRes);

        if (cache && cache.put) {
          console.log('matches 1', cache);

          if (e.request.url.match('/http://localhost/')) {
            console.log('e.request', e.request);
            console.log('fetchRes', fetchRes);

            cache.put(e.request, fetchRes);
          };
        }
      });

      // Return clone of fethced response
      return fetchRes.clone();
    });
  });

  // Respond
  e.respondWith(res);
});
