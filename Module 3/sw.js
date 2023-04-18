
// Send notification on push
self.addEventListener('push', (ev) => {
    let n = self.registration.showNotification('A new notification');

    ev.waitUntil(n);
});

// self.addEventListener('push', (ev) => {
//     let n = self.registration.showNotification = () => {
//         let nf = new Notification('A new notification', {
//             body: 'Notification bBody',
//             icon: 'https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-03-29/86005206b3861be2ae161cd111569817.ico.png'
//         });

//         nf.onclick = () => {
//             console.log('Notification was clicked!');
//         };
//     }

//     ev.waitUntil(n);
// });

