console.log('Progressive Enhancement: (SW Supported)', navigator);

// if ('serviceWorker' in navigator)
if (navigator.serviceWorker) {
    console.log('service worker supported!');
    navigator.serviceWorker
        .register('./sw.js')
        .then(function(registration) {
            console.log('Then Registered', registration);
        });
}