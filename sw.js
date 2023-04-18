console.log('SW: registered');

// START - Module 2 - ServiceWorkerRegistration

self.addEventListener('install', (ev) => {
    console.log('Module 2 - ServiceWorkerRegistration class');
    console.log('install 5');
    console.log('SW - ev', ev);

    ev.waitUntil(new Promise((resolve) => setTimeout(resolve, 5000)));
});

self.addEventListener('activate', (ev) => {
    console.log('Module 2 - ServiceWorkerRegistration class');
    console.log('activate 5');
    console.log('SW - ev', ev);
});

// END - Module 2 - ServiceWorkerRegistration

// self.addEventListener('install', (e) => {
//     console.log('SW: install Event');

//     // let installPromise = new Promise((resolve) => {
//     //     setTimeout(resolve, 3000);
//     // });

//     // e.waitUntil(installPromise);

//     // This will force the installation of the new service worker over the current one
//     self.skipWaiting();
// });

// self.addEventListener('activate', (e) => {
//     console.log('SW: Activate Event Bola');

//     let activatePromise = new Promise((resolve) => {
//         setTimeout(resolve, 3000);
//     });

//     e.waitUntil(activatePromise);
// });

// self.addEventListener('fetch', (ev) => {
//     if (ev.request.url.endsWith('style.css')) {
//         console.log('style.css');
//         console.log('ev.request.url', ev.request.url);

//         ev.respondWith( fetch('/style2.css'));
//     }

//     if (ev.request.url.endsWith('/camera_feed.html')) {
//         ev.respondWith(
//             fetch(ev.request)
//                 .then((res) => {
//                     console.log('res.ok', res.ok);

//                     if (res.ok) return res;

//                     return new Response('Camera feed not available!');
//                 })
//         )
//     }
// })