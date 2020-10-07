const CACHE_NAME = 'pwa-music-player';

const urlsToCache = [
    'index.html',
    'offline.html'
];

// Install a service worker
self.addEventListener( 'install', event => {
    // Installation steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then( (cache) => {
            console.log( 'Opened cache successfully', cache );

            return cache.addAll(urlsToCache);
        })
    );
});


// Listen for requests
self.addEventListener( 'fetch', (event) => {    
    event.respondWith(
        caches.match( event.request )
        .then( () => {
            return fetch( event.request )
            .catch( () => caches.match('offline.html'))
        })
    )
});



// Update a service worker
self.addEventListener( 'activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then( (cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
    
});