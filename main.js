console.log('Progressive Enhancement: (SW Supported)', navigator);

// if ('serviceWorker' in navigator)
if (navigator.serviceWorker) {
    // console.log('service worker supported!', navigator.serviceWorker);
    // navigator.serviceWorker.register('./sw.js').then(function(registration) {
    //     console.log('Then Registered', registration);
    // }).catch(console.log);

    navigator.serviceWorker.register('/posts/sw.js').then(function(registration) {
        console.log('./posts/sw.js', registration);
    }).catch(console.log);

    navigator.serviceWorker.register('/sw.js', { scope: '/gallery' }).then(function(registration) {
        console.log('./gallery/sw.js with scope object', registration);
    }).catch(console.log);
}

// Get camera feed
fetch('camera_feed.html')
    .then((res) => {
        resBody = res.text();
        console.log('fetch', resBody);
        return resBody;
    })
    .then((html) => {
        console.log('fetch html', html);

        document.getElementById('camera').innerHTML = html;
    });