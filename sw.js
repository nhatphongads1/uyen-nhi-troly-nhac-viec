const CACHE='uyennhi-nhacviec-v8';
const ASSETS=['./','./index.html','./manifest.json','./avatar.png',
  './audio/nag-intro.mp3','./audio/nag-outro.mp3','./audio/preday-intro.mp3',
  './audio/prehour-intro.mp3','./audio/added.mp3','./audio/acked.mp3','./audio/test-ok.mp3'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
