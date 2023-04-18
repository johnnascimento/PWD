// Web-Push
// Public base64 to Uint
function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {
  // Register the SW
  navigator.serviceWorker.register('./sw.js')
  .then(function(registration){
    console.log('registration', registration);

    // Request it from server this public key
    let pubKey = 'BMGiqb4oio6KXFmF8iG1B4iHJtFSDZwOimNg4149LZ3m0rMYbRsv8rQLPglJmbT45FW0KWcucUR3rLxHkU5y6_w';

    registration.pushManager.getSubscription().then(sub => {
      // If subscription found, return
      if (sub) return sub;

      let key = urlBase64ToUint8Array(pubKey);
      console.log('key', key);

      // let newKey = new Uint8Array(Base64.urlsafe_decode64(pubKey).bytes);
      // console.log('newKey', newKey);

      registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: key });
    })
    .then(sub => sub.toJSON())
    .then(console.log)
    .catch(console.log);
  }).catch(console.log);
}
