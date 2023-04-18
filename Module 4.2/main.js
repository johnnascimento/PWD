// Module 4 - Caching service worker class

console.log('Caching in the service worker');

if (navigator && navigator.serviceWorker) {
  // Register the SW
  navigator.serviceWorker.register('./sw.js')
    .then(function(registration){
      console.log('registration', registration);

    })
    .catch(console.log);
}