console.log('SW: registered');

//
// START - Module 2 - ServiceWorkerRegistration
// -------------------------------------------------------------------------
// self.addEventListener('install', (ev) => {
//     console.log('Module 2 - ServiceWorkerRegistration class');
//     console.log('install 5');
//     console.log('SW - ev', ev);

//     ev.waitUntil(new Promise((resolve) => setTimeout(resolve, 5000)));
// });

// self.addEventListener('activate', (ev) => {
//     console.log('Module 2 - ServiceWorkerRegistration class');
//     console.log('activate 5');
//     console.log('SW - ev', ev);
// });

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

//
// START - Module 2 - Push Messages
// -------------------------------------------------------------------------
// self.addEventListener('message', (ev) => {
//     console.log('Module 2 - message', ev);
//     console.log('activate 5');
//     console.log('SW - ev', ev.data);

//     if (ev.data === 'update_self') {
//         console.log('SW skip waiting');
//         self.skipWaiting();
//     }
// });

// self.addEventListener('message', (ev) => {
//     console.log('Module 2 - Events: message', ev);
//     console.log('activate 5');
//     console.log('SW - ev', ev.data);

//     if (ev.data === 'update_self') {
//         console.log('SW skip waiting');
//         self.skipWaiting();
//     }
// });

// self.addEventListener('message', (ev) => {
//     console.log('Module  2 - Events: message', ev);

//     // Responde to all clients
//     self.clients.matchAll().then((clients) => {
//         clients.forEach((client) => {
//             client.postMessage('Hello from Service Worker');
//         })
//     });
// });

// self.addEventListener('message', (ev) => {
//     console.log('Module 2 - Events: message', ev);

//     console.log('ev.sourcev.id: ', ev.source.id);

//     // Responde to all clients
//     self.clients.matchAll().then((clients) => {
//         console.log('clients', clients);

//         clients.forEach((client) => {
//             if (ev.source.id === client.id) {
//                 client.postMessage('Private Message to client: ' + client.id);
//             }

//             client.postMessage('Hello from Service Worker Public message');
//         })
//     });
// });

// END - Module 2 - Push Messages

//
// START - Module 2 - Events: Push
// -------------------------------------------------------------------------

self.addEventListener('push', () => {
    console.Console('Push received!');
});

// END - Module 2 - Events: Push
