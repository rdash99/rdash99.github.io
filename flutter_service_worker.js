'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f85f5bcaf1813a501923550c5d877a19",
"index.html": "8535403a7ec2c8a7f93d646c3c88e164",
"/": "8535403a7ec2c8a7f93d646c3c88e164",
"main.dart.js": "8f9681f1d281a2bfea4226a4a3484c1c",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0",
".git/config": "a5cbbb1458a2d8cb9d49a3f11855fc6e",
".git/objects/6a/48a4427e8ae85c304bf1818cd25816a45010f7": "d29ad3d1db829c929636d043a1f03836",
".git/objects/93/26b67720e6f7bdac4e9f2d5b2c48027dc338ba": "c16b8c7d0830b095410ff74dc3339779",
".git/objects/ad/6b1715eee3a0896aabd1242e29159f078f4c9b": "899ee224bba40477e0736a6d8c7bddd8",
".git/objects/c1/1715ddd3d03915c85136791d8e210e97dad206": "0a4f7a5532ef513d8f14965fb78f34a3",
".git/objects/pack/pack-8825b56c8a703eccc470c032c6efc95d180e0586.idx": "2bfacf68815e9f889c8e1b334ad339d0",
".git/objects/pack/pack-8825b56c8a703eccc470c032c6efc95d180e0586.pack": "ff372dd7647d80d6daba445160f00f16",
".git/objects/29/62af8f9e2e7db29034df37d5d2715d5b01e3c3": "7db02fc197e180a0cbdd88c159a8adf5",
".git/objects/97/980599829a37e79d1efbbb36242b531ade96d0": "0d8b30c432a3e6b4980e2f3a617d02ad",
".git/objects/0f/f85cac7b7fe489f86c79ec5b2b7bab617249e8": "960702b8e6b29e11529e70f891fe8585",
".git/objects/46/0e082d0d1637cca14c0879974cf12fc1d07ba8": "dc46530747265a8a61fc2412f78e791c",
".git/objects/14/4b1a1199e9105912a595ae24daa2706d7909a1": "a789e7eb29804df963a27c9b3ca11086",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f4211156c59af651604855f7575a9fb",
".git/logs/refs/heads/main": "2f4211156c59af651604855f7575a9fb",
".git/logs/refs/remotes/origin/HEAD": "40632fb62d3713ec606a23ce388d2960",
".git/logs/refs/remotes/origin/main": "1a02f0635bb795223c185c0dc70b1d0d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/main": "b34b5c4c54ac4ef2ecf4116d02d0a11c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b34b5c4c54ac4ef2ecf4116d02d0a11c",
".git/index": "9e3b20d52e23e6e6d8777ff30e944b67",
".git/packed-refs": "80bfdefabbba8dfb375a353bae976e2f",
".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/FETCH_HEAD": "d140209a3c9e5763533ad5103ce0040f",
"assets/AssetManifest.json": "77c7d4fb0cde2d985db07353227d99c5",
"assets/NOTICES": "cc72f71b75f4a750bd6fe0d030fdfc11",
"assets/FontManifest.json": "84b65288b758351321dc60b2eea1bf3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/puffin.JPG": "61584ebda8ba22af1bf5e7ae3d90fc66",
"assets/assets/images/gears.gif": "9ad848d21e0b42ff71c75d5240f07ac1",
"assets/assets/images/battery.gif": "1c256c6d596394b6bbbcb462f6fe4808",
"assets/assets/images/programmer.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/assets/icons/ic_linkedIn.png": "3be0aa4050ddf9998b0d4335ce4d8c7f",
"assets/assets/icons/ic_twitter.png": "84ddf699aee759ad5f3bca5cfd0d00d4",
"assets/assets/icons/ic_GitHub.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1"
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
