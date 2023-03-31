self.addEventListener('activate', (e) => {
    console.log('************************** SW from Posts activate');
    console.log('ev ', e);
});

self.addEventListener('fetch', (e) => {
    console.log('************************** FETCH SW from Posts activate');
    console.log('ev url', e.request.url);
});
