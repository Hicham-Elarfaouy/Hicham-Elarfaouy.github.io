'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "578ecab4a230ddf140856b286d2bb5ad",
".git/config": "26df71b932bac5ae027db7c27dc08338",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3a3cff17a155e36016e17b45a3597f7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65451d5deaa5748eec03d6d7ee4a4306",
".git/logs/refs/heads/main": "0938b8954a81ab563d840f7d2e2e98ea",
".git/logs/refs/remotes/origin/main": "d6df8bccd5cd278a5caa855075251474",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/05/2825ae1cb755cc2a5dcc7fd86e8f910211da82": "1fb7f3ccb8236b9c11ec80d8ac352b0e",
".git/objects/07/7643166790b0e6c05114bc9683c476b11251a2": "f24f223d654ca8e803ef90802fd3002a",
".git/objects/0c/cfec618a47644c523019ed4073f7e95522ac9d": "ceb2e9dac0a565f5b6b2ada009c94c9d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/fe06d5b15f4bcc6ff1ea751f6ef5c7df42567f": "d3d92a88e008d794ffd8d27a525b82bf",
".git/objects/10/49b73a2cfec9e4cf051c67f197c6ebd4086a64": "93f4ed157223a1affec8ef093f3273a8",
".git/objects/14/d1e99a551d6d6ab0889514140afed7f0eb9f1d": "2231c1c92f6c0edafa3f5383d68741e4",
".git/objects/17/75bd140726151439a1c6c8347048864be0db49": "4cb60763ad5bcb8504cab2eec97eac21",
".git/objects/19/9ac7fc8a08afca336b909a41ec144c110b6a0d": "59511e8781145d5215d5b848c53f8b92",
".git/objects/1b/b3a77abd31d21bcbe99fd1c221de517b35396e": "e1a2805610844bbc1fb5a386dc55ce6b",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/d493a9069d995498c5a83763ddcdc54f08ad02": "b1bf5e0844740d6b77cf78f7d0060d2f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/adc02c443e31e8917d37553645d2c7f5617d6f": "01b8c5af0276f113929dda5d71920f48",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/e8a9d775e310b7ebb09f9054f661c576430903": "339908d80c4aa437a548f0d642fa43eb",
".git/objects/3b/3599d937bb5ab96e955b6c1f0aade8aeb1ab12": "7544f3cf3cdd30b6b69b3b6f0500f553",
".git/objects/42/98a9d4497f2ba40ad131b2e25e5779143a4491": "4bd81346af84eed1f2294686e1b16f48",
".git/objects/43/45f70d3f3d28e69c74e6eea6b74773cc6586c0": "e834579ef39c457c8ea59134bb6f88d8",
".git/objects/43/aa156f267f90a60f97600645ff0c795407c9c6": "62d5627c663cb732fc1d3a33d02bb01c",
".git/objects/49/adb154c41ad0d7a6effeb181f9cd7e112d29a1": "0bd7349140c1248b09e8939411266718",
".git/objects/4c/cf4c5a09459eeeb9d9b595a4b3f291fed1139a": "43417fc86b4c31a3f1717a7c51c64967",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/b749ceece5fd97cddf60f08c2c142feafee441": "41a87d3483560088b27efddcf2e10814",
".git/objects/53/ce2a8bf9a5e71b8ce0ac77477f5d4682e98ca2": "06be1ebdc3b0546caf870db771f3b75b",
".git/objects/54/8493966e6714e23228654679ceb2c7b600f82f": "0284bb8a22b3003170e2616384a25150",
".git/objects/56/057d431a19c8d7a37937ddf4b1134e1918887d": "012fb7e5fe43dd8e459bd5ae649827f2",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/e207a51ce7525b4ad40670f1a5481c0c0d140e": "40f49ce031b487969b3ee84607c496d4",
".git/objects/5d/3458a5713d82a04dea0a1ca54d2980d435105e": "1e992624dc2924cdc5e49a9a2daac9ba",
".git/objects/6c/caef2f5baf12d32bfe8d06add86a0a2c725f0c": "5b77a7a1e28344d606334b5dcf3041cf",
".git/objects/6f/1c713525922caf5a259bb84ce0a814b61711cd": "7f044d12d57b9b86eadeb64eb20120f5",
".git/objects/70/081aacc7e4f80c65b0a637dca638306ecb7ad1": "d3dd45fd171c6701213b3964f444947b",
".git/objects/70/ccdbedcf9d92308bb4008f50f0602d172af851": "3a5e61da2655e14a8df76a5bd8036c82",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/7d3b7fdf0dc32805f374c5100750e796017898": "ae4b840e45f488add60eb51caaff14e2",
".git/objects/86/1126da340a2a46ae94d32067be2a8fbc399a5a": "a50ddd548a85880dcaf58f0eef44fda6",
".git/objects/86/c404d94bb919fa357df5b9fddbe6fa17784a9b": "305b5b0900a710559ced45aeadc76218",
".git/objects/87/575580d1a3c936c8a166823d991f82e2445907": "7d8bb32d39d1c61ee8193f223acc3df5",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/e6d408fc53def9d6f7c3cb2ea7fc5fd9ff6449": "12d428a2e24f93ef61b004edd8331238",
".git/objects/8d/7fe80f6224e0a1106c24f878e8958934299a68": "1550e833c51a90b26d2acc22d045c803",
".git/objects/90/8c38e2d46952eba78293ad0c8425f62e9161be": "5e6a5b8afe7c2c7b5e00a47665f9e2d1",
".git/objects/96/2c54f372af6db30a07c08164ca768fd8f1d009": "93a5d5f51c5f0f6e418b9f5ae72d7d45",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ce63dc78902bdc3d2bff251d84e6e279e02ce9": "b65414ca6f85851930e3d78683ed81c8",
".git/objects/a5/b97dc22a0378f0056923ff74772e7fff7ff6fb": "635b0e51b9237c02abfe0b9831af7afe",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/359457453baf6c04efc0b2dcf403ce6c0cc030": "d7de5752678dd361185e4e1225e92290",
".git/objects/be/d5a39547e303c988db22f8c6ca9833deca2e39": "2c84836a454d40f924c7faebaa290237",
".git/objects/c0/e3e3ecd1083c1d01cab2454af43e0a2f9fca18": "2b08ab99ebc5f84ee64a03b5245c1e8e",
".git/objects/c1/eef60ade33187149c65fc880daab4505485a84": "6031f54fc5a190b76ca547ae1c6cb9a3",
".git/objects/c3/d0fcca15755ea629a810158ede98094be76118": "100b2144fc6279ab89617c017519540a",
".git/objects/c6/1d1e915f6119178720ba0b765d9b46e0dde45a": "031b69515399db2532152316048aabbb",
".git/objects/c6/b6a200b61278331d475367a06b635ade6b3aeb": "c274e38210ac9da7e8ce8a6a5490e31f",
".git/objects/c7/9ab8577e1c746ce6288a480fa93d180e473a7e": "21639bb5f18c99a2062373b4277baee7",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d2/d1d6e8d0d26716edcadf23c0fd247cfb6a8deb": "d5643c3b43de7991d277fa5d77633a4e",
".git/objects/d5/88c01c5f2fa48a509e183e4fb9bedf2b3a4292": "6551d0625a26e366216e7f1cd18659c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a5b45f173b5899d3673d6ede8803c7d8bef420": "17b29af12f113effe3ab7c5c1295edc3",
".git/objects/da/38321bb7946df42c9b0eeee4dfd504f90bc699": "ef88b06fc607ffcf76b82c93a62823b8",
".git/objects/e0/a135721eaeb29e6e82083643f3eb403f46a93d": "cd047f27c0bf67c19e36641b21782915",
".git/objects/e2/7f5e323048808f1c27681b19eba2b8933d9307": "4eb8001dde615e02b335ea67aeca6f6f",
".git/objects/e2/ef2fe6535f0a1b0f65c47d66f76acd2d535654": "d46bc0d6de5ab39e132fd0c8923e4d1d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/b26ba84bbb10890a42656acd19b5b4946a66d7": "55f1c58814614b87047b20998e5caa0c",
".git/objects/f7/d90d10c1eb12e824b2ad058dbbc8805ced9570": "810d3a32650e6bf5e275d95a057ca162",
".git/objects/fb/4844bbe20a32088625455a1d7f9360e7e81c4c": "0f9713047bf3ee08ff15ae706c03aa6a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "15b2a1eba8dc60f1c512c783c17c033a",
".git/refs/remotes/origin/main": "15b2a1eba8dc60f1c512c783c17c033a",
"assets/AssetManifest.json": "4c8f72ed0cec8924e27e70c8141c1f88",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/assets/fonts/raleway-regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/images/illustration.svg": "ab94e63ac28f1fd35c2645216814e7da",
"assets/assets/images/logo_black.png": "9b8a67a9d6920a2363d9ab4bb6e5016e",
"assets/assets/images/logo_white.png": "e99b9e0268384ae17b19c5e6aeb637d2",
"assets/assets/images/newsApp.png": "b8abc254cbcf6dfe81437786466e9dcb",
"assets/assets/images/portfolioApp.png": "32c100998a194e8e296c09b952d829c5",
"assets/assets/images/shopApp.png": "2034e4899aa5e325bd2725b6bc7576b2",
"assets/assets/images/socialApp.png": "4a3c6779f3a296826650cb47fcb2b9a2",
"assets/assets/images/splash.gif": "34db53d693ea17fcee24fc1ffb5e7d0b",
"assets/assets/images/todoApp.png": "f0b94096d5d845679859dbe7af883e3e",
"assets/FontManifest.json": "62c59142f7a9b76583df321f54dab669",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7d62f9346d14e576c4f0105346276d8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/splash.gif": "34db53d693ea17fcee24fc1ffb5e7d0b",
"index.html": "24133a004b6b4c3ccb5421261e874b55",
"/": "24133a004b6b4c3ccb5421261e874b55",
"logoweb.png": "78550428d8e064dd1ef65a8682c8e7c1",
"main.dart.js": "52161f50c6450f8bd529df04b77bef33",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
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
