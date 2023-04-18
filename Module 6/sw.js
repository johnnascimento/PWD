const version = '2.2';

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

// static cache strategy - Cache with network Fallback
const staticCache = (req, cacheName = `static-${version}`) => {
    return caches.match(req).then(cachedRes => {
        // Return cached response if found
        if (cachedRes) return cachedRes;

        // Fall back to network
        return fetch(req).then(networkRes => {
            // Update cache with new response
            caches.open(cacheName).then(cache => cache.put(req, networkRes));

            // Return clone of network response
            return networkRes.clone();
        });
    })
}

// Network with Cache FallBack
const fallbackCache = (req) => {
    // Try network
    return fetch(req).then( networkRes => {
        // Check res is OK, else go to cache
        if (!networkRes.ok) throw new Error('Fetch Error');

        // Update cache
        caches.open(`static-${version}`).then(cache => {
            cache.put(req, networkRes);
        });

        // Return Clone of Network Response 'cause this one
        // will be before the resolve of the promise above
        return networkRes.clone();
    }).catch(err => {
        // Try catch
        caches.match(req);
    });
}

const cleanGiphyCache = (giphys) => {
    caches.open('giphy').then(cache => {
        console.log('cleanGiphyCache cache', cache);

        //Get all cache entries
        cache.keys().then(keys => {
            keys.forEach(key => {
                // If entry is NOT part of current Giphys, Delete
                if (!giphys.includes(key.url)) cache.delete(key);
            });
        });
    });
};

// SW Fetch event listener
self.addEventListener('fetch', e => {
    console.log('e.request.url OUTSIDE', e.request.url);
    console.log('e.request.url OUTSIDE 1', e.request.url.match('.giphy.com/media'));
    console.log('e.request.url OUTSIDE 4', e.request.url.match('media4.giphy.com/media'));
    // App Shell
    if (e.request.url.match(location.origin)) {
        e.respondWith(staticCache(e.request));
    } else if (e.request.url.match('api.giphy.com/v1/gifs/trending')) {
        // Giphy API
        e.respondWith(fallbackCache(e.request));
    } else if (e.request.url.match('giphy.com/media')) {
        console.log('e.request.url', e.request.url);
        console.log('e.request.url.match(\'media1.giphy.com/media\')', e.request.url.match('media1.giphy.com/media'));
        e.respondWith(staticCache(e.request, 'giphy'));
    }
});

// Listen for message API (From Client)
self.addEventListener('message', e => {
    console.log('Listening to message e', e);
    console.log('Listening to message data', e.data);
    console.log('Listening to message action', e.data.action);

    if (e.data.action === 'cleanGiphyCache') cleanGiphyCache(e.data.giphys);
});
