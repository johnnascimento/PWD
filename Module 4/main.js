// Cache support

if (window.caches) {
  //
  // ChacheStorage class
  // _____________________________________________________________________
  // caches.open('test2');
  // caches.keys().then(console.log);
  // caches.has('test1').then(console.log); // Exists
  // caches.has('test3').then(console.log); // Does not exist
  // caches.delete('test1').then(console.log); // Deletes the cache entry

  //
  // Cache API class
  // _____________________________________________________________________
  // caches.delete('test1').then(console.log); // Deletes the cache entry
  // caches.delete('test2').then(console.log); // Deletes the cache entry
  // caches.delete('test3').then(console.log); // Deletes the cache entry
  caches.open('pwa-v1.1').then(cache => {
    // Add one item to cacheStorage system
    // cache.add('/index.html');

    // Add one item to cacheStorage system
    // cache.addAll([
    //   '/style.css',
    //   '/thumb.png',
    //   '/sw.js'
    // ]);

    // Retrieve entry
    // cache.match('index.html').then(console.log);

    // Retrieve entry - Seeing the body of the response
    // cache.match('index.html').then(res => {
    //   res.text().then(console.log);
    // });

    // Using put call
    // cache.put('index.html', new Response('My own HTML'));
    // cache.match('index.html').then(res => {
    //   res.text().then(console.log);
    // });

    cache.keys().then(console.log);
  });
}