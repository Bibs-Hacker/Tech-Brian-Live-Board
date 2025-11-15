self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('techbrian-cache').then(cache => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});
