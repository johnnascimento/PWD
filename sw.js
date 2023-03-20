console.log('SW: registered');

self.addEventListener('install', (e) => {
    console.log('SW: install Event');

    // let installPromise = new Promise((resolve) => {
    //     setTimeout(resolve, 3000);
    // });

    // e.waitUntil(installPromise);

    // This will force the installation of the new service worker over the current one
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('SW: Activate Event Bola');

    let activatePromise = new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });

    e.waitUntil(activatePromise);
})