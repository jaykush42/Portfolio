// Define a unique cache name for your app
const cacheName = 'portfolio-website-v1';

// List the files you want to cache
const filesToCache = [
  '/',
  '/index.html', // Add paths to your HTML files
  '/styles.css', // Add paths to your CSS files
  '/main.js',    // Add paths to your JavaScript files
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/safari-pinned-tab.svg',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
];

// Install the service worker and cache the files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Fetch assets from cache or network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// Activate the service worker and remove old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});
