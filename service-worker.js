const CACHE_NAME = 'smart-pyramid-v1';
const ASSETS = [
    './',
    './index.html',
    './script.js',
    './assets/icon-192.png',
    './assets/icon-512.png',
    'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});
