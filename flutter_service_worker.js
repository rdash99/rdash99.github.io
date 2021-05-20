'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b857a1754da87e0ea253daa590fabef0",
".git/config": "fecd67dbb1dd034140b64dce05b97f38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "725191defaceeeceb5ff403c2b3e8e19",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "a48cef4aba7574fecbc003364e115098",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "332c36067d12e431313b61558c957109",
".git/logs/refs/heads/main": "d6fababf4742c93f87371e480c7ee5d8",
".git/logs/refs/remotes/origin/main": "19c2418d3f4bce8468a256777fd77856",
".git/objects/00/0295f46bcde2a6fcdbeaf09ae9a390e965d58e": "2e425a6f518e82a01e19bcbb79a8809e",
".git/objects/01/d11aea03d14788730284adca12b61ea4a1ad24": "068b27e57e02f90fc04eaabcad15e092",
".git/objects/01/ecd75f1c08fe1421a476ffb09b14f7054eb67b": "f5497cca430665c04dccbeaccf6507b4",
".git/objects/09/1e83184b1e7ebc7d7d256d1d580063fa9489d9": "433bd24bee063d03e7606ef2714b4f97",
".git/objects/0f/0d063910dda350326900404c47c5153f22f9ac": "308f60519bfddcd1e358e163618d6322",
".git/objects/13/a213b9e970a8b4993a9074fa6d78c1cc959500": "22ab4ad982d43f17227b8e2bfde2696b",
".git/objects/16/661699abd1d513e9ea996ff3c51d498c78bc61": "7428463a311255a8b8ad59d8c45bbdda",
".git/objects/16/ae2d14e2fb9cb08e7747cfaf045154a2b0bb79": "e8469afce116ddc653589f86f52d5d99",
".git/objects/19/908d01dec45c148db59dcea1c71e8a95318215": "dd6c9e5ee6b370a2a7008794d073e1df",
".git/objects/1a/cebff797cee34b9807ea4881b389cf74436807": "5e3d9e307099a0be98ed42ea9e693b26",
".git/objects/1d/1e0146d1640719fd05c9e6083506e3bd4859ca": "49c8e5d3984f43161f9d0cb4d44ddd8a",
".git/objects/21/f55c1388591e396d8b4715a64a1240d3dd21b1": "69a13a9332a2332bc3ef7aa476b9e19d",
".git/objects/22/42f7398fd588067704eda0f82c638bbf46efb8": "7e16095311d8fc8e8770a4df0918da9b",
".git/objects/22/57c75e53305a8cb0669a86b1187fe39d7fb070": "b5f891e31b6b9413d22ec4c70e8812a2",
".git/objects/23/b5d7b20247fdd968a02042e23a0d783eb149d6": "0a97fbf0704eced11d9326f5ce4578b2",
".git/objects/25/9a24e4d2e66db04470a6b8362a89452328583e": "75f1f45d1ee5168ec257dd78db6b156e",
".git/objects/31/a0fdb58bfe9c91c0369c131941e7a3a23a4f94": "87a662402ab01624889856eb21164b3d",
".git/objects/33/6591daa7d81d998e87ff604ca10f003602f797": "0d9dd1590948218081d2857036dd33c9",
".git/objects/36/6128fe37f31c9c9e40c4502fe7c3fc015b6c8a": "a3830fd824814298e4bbb71c85f62108",
".git/objects/3f/4946b0320792a75a6d0edf856cae21114b2b58": "60141f0890a54ac00fa4bf8d1f1dac8a",
".git/objects/43/097d5a3009147bd486c9cf84072ff440c9fbe8": "d7212e8516afdc024a9e06cb986a1050",
".git/objects/45/cead18a6419037b59908bea447766f3d32375d": "c51a1c397dc9eea6a268a44ccec2b28e",
".git/objects/46/0d27d93ead7d50df3a7328b767b5b0de5449e5": "a2c93da976b12be0db9a4d1168bd7a76",
".git/objects/46/b9bd3cd0498f7efe8447d7c1e64f28a9dc1560": "e47b94b9b6728eb2f84895a683a532eb",
".git/objects/54/27b44c1e9754f04a55ce3a18674ef2f7b2ec5b": "40ff7439ad16c8e345226fca7e5b0f12",
".git/objects/57/4ce6e6fea04ebd18e19a180813705c1e3e699e": "51d09754307f38e48bb362014d12754a",
".git/objects/57/510a2be4e3c97b34624a5d0966b97421692034": "c04003863c38c2ad1f319a44552c5b8d",
".git/objects/58/5f732d8a8d6e9b06a39a4573509e56562e584c": "4a665e530360f94801d21093516d8439",
".git/objects/5c/450aa8f152471f3b004493669e9fa42adfebe7": "7675303e6f371c66e8661172055c6154",
".git/objects/60/b03466243619809f3a47893ae7d7bde62f85b0": "99cd2848090a31b420cd373bfce0ba05",
".git/objects/82/f390416e3a631157c0fdcecfc9f522e260dfce": "036ab11192d0eb6ae49ce89f7236bdb8",
".git/objects/89/2f3b0cae95bc319e310eaf6513638a4036a0a4": "a4803dd27a19ad20492d4cb5e28ce63f",
".git/objects/8a/2bae373ec7f6ce98f6d6304cd74a748c3152a7": "f210bdcdeaec512c4bdac0be493f64e1",
".git/objects/8b/84d18be957e41b5d9fe5bb70b709df086ebd8b": "9068516e6431d0f6502ecfd6ceb3bfb9",
".git/objects/8d/c30c508426a2bfdfe954a04210b7118017eb12": "67708cef63f8424fbe0368507cfcc9d6",
".git/objects/8f/99015f0dcf6a71e2bb1ba6e71d3963426c651b": "9d9ca8e6763ccbfee77d49cb1df35683",
".git/objects/95/262d1534d02dee62945bd85fc8051dd3273684": "1c448a562e3d7449dd9b913b98795294",
".git/objects/9a/3f88a28f22108eddcb513f7aac8f1854b0ea62": "236b41170c85a544498151b7264ffd31",
".git/objects/a1/64912e1ce27a60f8f594c63f0d0b4ea001dca7": "71259ddc6d2cc0c58fc15d5518c71c25",
".git/objects/a9/f9ca1a0ab637f1b9552fb885a52fb3e73c74ba": "b66d5998797b4c165695bc4c88038f91",
".git/objects/ad/64f3c381e76c079a98dc5650f0e3f525d110c0": "e9747a807aefa734b4720ce952813151",
".git/objects/b2/f3108b6ddf722e184306f924277a1d647408e8": "74adea5d9378b7082310b594d54303e6",
".git/objects/bf/302f355bbe0f3e421e554a05a436e3a76ffeeb": "44d7022cf780a5da3bb4e9d6b86d5896",
".git/objects/c3/bc70a57cf61febee5808188437db61aff1eb41": "6a1fcd92adad05bb5ff81118567c74ac",
".git/objects/c3/e1b7670315c30489c78ac1dd8fcc80c3e1bc3e": "a350b6b705d487fea3dd5aafcb53e219",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c6/fe07724d6278321aed90a1790e955b24f5ea8a": "aa291e63fddf4268911fdc2ab71ec1aa",
".git/objects/cb/1c6c2806fa0ff040fe569143df1cb1c940d9f5": "d39834bff4205e535852d198060e62d2",
".git/objects/d3/da9bfcccf9bfe73d54a1b88fa024e00bfa00f9": "55518fa87b0cc7cd29c2d4a4e2c96019",
".git/objects/dc/aa25939b87d3b7e013da43cbb8d067a0fb0ef1": "22547c194c2b6b1c1e0de322d220da52",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e4/98acc3d9bfbf38305fc1f4bd1e14ceb0afb1c3": "13e333fd82c541563ea9e942624334e6",
".git/objects/e5/0b1b79f228be2178352c89adbe7f798d80211d": "3ad223b611dcc1f60296c6aff55fc475",
".git/objects/e5/dfd0bf6db1cab4addb574c521b15bbdb3cf646": "1ab0812a7346e7f200f5ea4bba63d4bb",
".git/objects/e7/ed2b10f98dedb5c917cdf9e4529d6743ddf456": "9758d0efa3c9c1ec5b58eaca83c7296f",
".git/objects/e9/74871b0024840ba3d5ec6c1d57703f0d4f376f": "a7c2e83d04c316a40e055d5f4216420f",
".git/objects/ea/44845e9d20c6c4b43888d607ccf7500b2e2b27": "77bed2ef45fb5ed1987ceb8fd4fe0329",
".git/objects/ee/23b9252b152287fb29e7b680374917476d7b1c": "a040989cf20785ffb63db2651ad6800a",
".git/objects/ee/b9c5916b05708ef8cdd14b8dfb35c56395842a": "0ef9f9126f1a4f4fff8f38b0f93f13bc",
".git/objects/f0/104094e3e71cd88795d9018f7112d342fe4ea5": "d57bb360e842c648fd6df2bcb68f6c0b",
".git/objects/f3/fd0b9713bf25c299e056b486575fed452b717a": "5000f007b3da35f91c8cd9df10e3e5f1",
".git/objects/fa/43392fb98a7d012a8067513173862700170152": "76b7ed7621d4e33eaa3d39e39dc4aac3",
".git/objects/fe/a67ada01e3f7d873526e736719389e695db590": "7f5bec4bdabb66c4b2e77c29c97ad3e6",
".git/objects/ff/c7f0f48e91c91df06a2097a427fd5a629759c8": "9b01f9d9ad4f90fb5801b1c0daaed9d9",
".git/ORIG_HEAD": "3d1b8fcd5a6ccc140a07f55764b58f6d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "35676d56d19c1cf937591392cedb7d0c",
".git/refs/remotes/origin/main": "35676d56d19c1cf937591392cedb7d0c",
"assets/AssetManifest.json": "8ae83442e73713cb234b40a0d97a5811",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/icons/ic_GitHub.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/assets/icons/ic_linkedIn.png": "3be0aa4050ddf9998b0d4335ce4d8c7f",
"assets/assets/icons/ic_twitter.png": "84ddf699aee759ad5f3bca5cfd0d00d4",
"assets/assets/images/programmer.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/FontManifest.json": "84b65288b758351321dc60b2eea1bf3c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c792ef5a69057eda3505d56c1813a6e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "d21db28c4b72fe31b5d9fcdcc6a40385",
"/": "d21db28c4b72fe31b5d9fcdcc6a40385",
"main.dart.js": "0c643b8fbacae63ae4c06abbae92862a",
"version.json": "f85f5bcaf1813a501923550c5d877a19",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
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
