'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eb87172cbeb52ce7a70097756b09dc1a",
"assets/assets/images/12.png": "89b7a581fc266025c2cc23970a6a8044",
"assets/assets/images/123.png": "5c24f9a694fe907d7ea3822a3a22b581",
"assets/assets/images/1page.png": "a65982dc5fafc12394d55231d6616f2a",
"assets/assets/images/2.0x/guy.png": "6636e4a3ca74c8d8899d8b81a8c28488",
"assets/assets/images/2.0x/imgface.png": "6636e4a3ca74c8d8899d8b81a8c28488",
"assets/assets/images/2.0x/Lenin.png": "07f12f28b949cde94fd684f7c5e4c39c",
"assets/assets/images/2.0x/tolbuhin.png": "f34f40520c348bdbda9f22af0095fe29",
"assets/assets/images/2.0x/uglich.png": "ef701f043f1cc02fa9f6473a8b73cb13",
"assets/assets/images/2.0x/uglich1.png": "c0a6ebe241d4626249707646061ab101",
"assets/assets/images/2.jpg": "a8979a0be380dad50cfc675797caff4d",
"assets/assets/images/21.jpg": "f379a4a93b1bfc59255f9d47e7c6ab5c",
"assets/assets/images/3.0x/guy.png": "222ea6f85670ca894ee6040ed538c9c4",
"assets/assets/images/3.0x/imgface.png": "222ea6f85670ca894ee6040ed538c9c4",
"assets/assets/images/3.0x/Lenin.png": "b84974f313d72381b7566bd6183bfe82",
"assets/assets/images/3.0x/uglich1.png": "2eb17c0f1934d7804c93c65ad6b045d1",
"assets/assets/images/as.png": "6636938e72fe7a3829963196e1e556fd",
"assets/assets/images/bigmap.png": "096bf1a0ed8bdd172e9716f3a017dbda",
"assets/assets/images/bluefon.png": "d7aaa2385d97bc24b9afbb49514db047",
"assets/assets/images/bluefon1.png": "9289f0260361dd0cfb46990181faa719",
"assets/assets/images/bluefon_main.png": "5c24f9a694fe907d7ea3822a3a22b581",
"assets/assets/images/blue_fone.png": "5c24f9a694fe907d7ea3822a3a22b581",
"assets/assets/images/church.jpg": "9415d6922237f0d7acb71f4805a50e10",
"assets/assets/images/congr.png": "bd2934014d56f3245c4d699e95dbba3c",
"assets/assets/images/continue.png": "e32eac6d2c8690e0f545c3585f876824",
"assets/assets/images/Ellipse%25206.png": "7748d29cc1b7c25c9a6aea504fdcf3d6",
"assets/assets/images/Ellipse%25207.png": "60acd1ad75d9438dc56e23ad1fbb38db",
"assets/assets/images/Ellipse%25208.png": "714c084701733e246939811201a03cbc",
"assets/assets/images/grau_button.png": "99ef8b873068681d929a82c8746703e2",
"assets/assets/images/guy.png": "5f1605b536db175158b37f1416a2a277",
"assets/assets/images/imgface.png": "5f1605b536db175158b37f1416a2a277",
"assets/assets/images/Lenin.png": "e3df1c7fda7570a36039ac961dd9e3fd",
"assets/assets/images/Login.png": "8f43fe9d85de66c33a56ac52ae5ef0a6",
"assets/assets/images/map.png": "6636938e72fe7a3829963196e1e556fd",
"assets/assets/images/minimap.png": "c6092c10a6cc21af0ed6939f1bbc6570",
"assets/assets/images/ourcity.png": "531efc9a039711518a20c33d59090ba9",
"assets/assets/images/park.png": "3703ede04a81b5cd8f5bd5aa728da458",
"assets/assets/images/Rectangle%252094.png": "5f0da59eb91affd1b03701e8ba3254b1",
"assets/assets/images/telegram.png": "2689b185cda1df06fa1c75b49d439818",
"assets/assets/images/tolbuhin.png": "42dd460773ec815b02dbbb513c9462f3",
"assets/assets/images/trog.png": "f8fe0441bf3c8da0460b7629b4052476",
"assets/assets/images/uglich.png": "820cf2a5a9463b929a30c65ced9eb6cc",
"assets/assets/images/uglich1.png": "0c942b1c63eb4fc6acbb68e6ae248bb1",
"assets/assets/images/whitecup.png": "9fec48e91ed4c292f822ebcbbcdf4ed8",
"assets/assets/images/whitefon.png": "f0184768a03344b369831cdb50082580",
"assets/assets/images/white_fon.png": "f0184768a03344b369831cdb50082580",
"assets/assets/images/zadnik1.png": "c924e28050427bdf30fbe60e91a988ba",
"assets/assets/images/zadnik2.jpg": "a8979a0be380dad50cfc675797caff4d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "888cdd5a596c4659757f67c8688db887",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52295b3fe5cab5fdf21d2dad0f55d2d9",
"/": "52295b3fe5cab5fdf21d2dad0f55d2d9",
"main.dart.js": "a0fbed1317eedbf6d2edf78e0df42cb3",
"manifest.json": "9730c4888a8fb089ec029292d21c8657",
"version.json": "0ed7ed44030c3346d20a85126926096a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
