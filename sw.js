var CACHE='travel-roulette-v1';
var FILES=['/travel-roulette/','/travel-roulette/index.html','/travel-roulette/manifest.json','/travel-roulette/icon.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}))});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
