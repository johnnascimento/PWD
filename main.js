console.log('Progressive Enhancement: (SW Supported)', navigator);

// if ('serviceWorker' in navigator)
if (navigator.serviceWorker) {
    console.log('service worker supported!', navigator.serviceWorker);
    navigator.serviceWorker
        .register('./sw.js')
        .then(function(registration) {
            console.log('Then Registered', registration);
        });
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
    })