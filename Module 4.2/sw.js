const pwaCache = 'pwa-cache-2';

self.addEventListener('install', (ev) => {
    let cacheReady = caches.open(pwaCache).then(cache => {
        console.log('cacheReady', this);
        // cache.add('/');
        cache.addAll([
            '/',
            'style.css',
            'thumb.png'
        ]);
    });

    console.log('cacheReady before wait', cacheReady);

    ev.waitUntil(cacheReady);
});

self.addEventListener('activate', (ev) => {
    let cacheCleaned = caches.keys().then(keys => {
        console.log('keys', keys);

        keys.forEach(key => {
            console.log('key', key);
            if (key !== pwaCache) return caches.delete(key);
        });
    });

    ev.waitUntil(cacheCleaned);
});

self.addEventListener('fetch', (ev) => {
    let localHostUrl = 'http://127.0.0.1:5500/Module%204.2/';

    console.log('fetch', ev.request);
    console.log('fetch ev.request.url', ev.request.url);
    console.log('fetch', ev.request.url === localHostUrl);

    // skip for remote fetch
    if (!ev.request.url.match(location.origin)) return;

    console.log('Passed!!!!!');
    // Serve local fetch from cache
    let newResp = caches.open(pwaCache).then(cache => {
        console.log('newResp', cache);

        return cache.match(ev.request).then(res => {
            if (res) {
                console.log(` Serving ${res.url} from cache `);

                return res;
            }

            return fetch(ev.request).then(fetchRes => {
                cache.put(ev.request, fetchRes.clone());

                return fetchRes;
            })
        });
    });

    console.log('newResp', newResp);

    ev.respondWith(newResp);
});
