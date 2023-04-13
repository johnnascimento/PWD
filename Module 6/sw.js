const version = '1.1';

// App shell files
const appAssets = [
    'index.html',
    'main.js',
    'images/flame.png',
    'images/sync.png',
    'images/logo.png',
    'images/icon.png',
    'vendor/bootstrap.min.css',
    'vendor/jquery.min.js'
];

// SW Install event listener
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(`static-${version}`)
            .then(cache => cache.addAll(appAssets))
    );
});

// SW Activate event listener
self.addEventListener('activate', e => {
    // Clean static ache
    let cleaned = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== `static-${version}` && key.match('static-')) {
                return caches.delete(key);
            }
        });
    });

    e.waitUntil(cleaned);
});

// static ache strategy - Cache with network Fallback
const staticCache = (req) => {
    return caches.match(req).then(cachedRes => {
        // Return cached response if found
        if (cachedRes) return cachedRes;

        // Fall back to network
        return fetch(req).then(networkRes => {
            // Update cache with new response
            caches.open(`static-${version}`)
                .then(cache => cache.put(req, networkRes));

            // Return clone of network response
            return networkRes.clone();
        });
    })
}

// SW Fetch event listener
self.addEventListener('fetch', e => {
    // App Shell
    if (e.request.url.match(location.origin)) {
        e.respondWith(staticCache(e.request));
    }
});
