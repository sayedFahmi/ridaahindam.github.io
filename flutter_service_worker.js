'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "abd3f7d67aa899bcffd8f769c15d2296",
"assets/AssetManifest.bin.json": "716fa60d8ee472a844005cbe18ea28e0",
"assets/AssetManifest.json": "f45f38d316370837e858cce3592ab356",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/Josefin_Sans/JosefinSans-BoldItalic.ttf": "467018aeb342083c4c27c38bc82e4ec1",
"assets/assets/fonts/Josefin_Sans/JosefinSans-Regular.ttf": "74ae0793945e421d248fe27905c248a3",
"assets/assets/icons/5g.svg": "7c3c0aba4376dc3ceab9b0d7405665c1",
"assets/assets/icons/account1.svg": "a474ef4e352692304a54dfbe8266bf60",
"assets/assets/icons/account2.svg": "12a7480ffd1b8eae51418f52784d4834",
"assets/assets/icons/appearance1.svg": "ecbbbd88d3cfcfaf990a3452fb6b2bd1",
"assets/assets/icons/apple-pay.svg": "ed395ac6b27a3dfe422fcf5a02c25319",
"assets/assets/icons/apple.svg": "d3b4c9d69c9bb09e365ec008d5e27e56",
"assets/assets/icons/apple1.svg": "9e1731e18da115309c61265bce79bfb0",
"assets/assets/icons/apps1.svg": "aaeb4a91b769116c76921831c795cd2d",
"assets/assets/icons/archive.svg": "facdfcb2d1f21f590405ba1735a4c4fc",
"assets/assets/icons/arrow.svg": "b6163f56874a1153f9594c3a8407a14a",
"assets/assets/icons/arrow_right.svg": "9c492cd795858f3522b4debfb737cbad",
"assets/assets/icons/Back%2520ICon.svg": "48c3c4eb319f67f90296649fa8271cce",
"assets/assets/icons/battery.svg": "21601274b233a3de13fe40edcdd24b56",
"assets/assets/icons/Bell.svg": "536eb6601a35ddab0f7b6bdd6c3ff145",
"assets/assets/icons/Bill%2520Icon.svg": "100acc86a48a094da8902a47f3bab1b6",
"assets/assets/icons/businessman.svg": "e7a3aa85b2cf730095287303b18a5b79",
"assets/assets/icons/Call.svg": "3745eeef13c1facd87afe4cbe208e300",
"assets/assets/icons/call2.svg": "a6ded97c992dc9d414f35fb1acb0611f",
"assets/assets/icons/camera.svg": "d2fbbead1e389a764abf51d152e3cd25",
"assets/assets/icons/camera1.svg": "7845200c3cceba68f87a1327cb8cba05",
"assets/assets/icons/cameraflash.svg": "ebb80462884b0608519e992c0e0fc864",
"assets/assets/icons/Cart%2520Icon.svg": "b58f308b0312e4358a04eeadc02575d5",
"assets/assets/icons/cart1.svg": "eeed032b882e182f7e4ee8f549618202",
"assets/assets/icons/Cash.svg": "a24a70772c290370387c0bb33730ce01",
"assets/assets/icons/category1.svg": "7aa6e9888a1eb9e601628693e1009943",
"assets/assets/icons/charger.svg": "9fb4c05269da6917f046472519b944cf",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "997d4f0aa07c6094a4339040741b4bab",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e3ad560a09a1bf785b5505c21777ecee",
"assets/assets/icons/chef.png": "54f91091f9f7e1336112af67aa3167fe",
"assets/assets/icons/chef.svg": "031bf089d4bc8328242994f90a428381",
"assets/assets/icons/chip.svg": "297600ca2d336abc460f5a01599735b9",
"assets/assets/icons/Close.svg": "6b3561c87a732bcdf1cfc4cefd9cd9f6",
"assets/assets/icons/colors.svg": "c376b46979dd2aebe1c613c580b6e050",
"assets/assets/icons/Conversation.svg": "c23404da9004575ccff6f78b09be3b13",
"assets/assets/icons/delivercar.svg": "a11c2dbd3311b694eaa521ba8aba8241",
"assets/assets/icons/Discover.svg": "b5e8150c8f0c20351b84b2241405c8b4",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/facebook.svg": "a0e6137bba278b7d9e96f7dd296544a9",
"assets/assets/icons/facebook1.svg": "ee8491be05fc4de5cccd274314b1e66e",
"assets/assets/icons/Flash%2520Icon.svg": "fcde0c03f2836567e42a45ac08616a42",
"assets/assets/icons/gg_profile.svg": "921c312e1c6866764b6f73c584e100a4",
"assets/assets/icons/Gift%2520Icon.svg": "d109169b3e2ab8256445f626ae4c888c",
"assets/assets/icons/gmail.svg": "316b41e6781f73b3c2ba5913ce0d8698",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/Heart%2520Icon.svg": "0dcf36056268963f7b582eb3bd80ec72",
"assets/assets/icons/Heart%2520Icon_2.svg": "fd7dce0eb7741375843bcda4c7f4e52d",
"assets/assets/icons/heart.svg": "ee51e5191be0ea8774e8054a7c67c940",
"assets/assets/icons/heroicons-solid_home.svg": "6e777fbcbc06e153c5c7a4cad5646739",
"assets/assets/icons/home1.svg": "25a2f0fd15c2f8ab6f860949bd485692",
"assets/assets/icons/home_empty.svg": "27ceb0ef5918c542305575e968e06ad5",
"assets/assets/icons/huawei_logo.svg": "d9c4cd5e3fde52c5e3b4e91ab76109ff",
"assets/assets/icons/icons8_buy.svg": "630c5049ee5a192f0f7a5d9a7701e4d9",
"assets/assets/icons/ic_outline-local-offer.svg": "88957051ed166780bde3a9d88f723377",
"assets/assets/icons/ic_outline-sticky-note-2.svg": "674864a052d9bfce8e92c1a0a1371126",
"assets/assets/icons/ic_sharp-history.svg": "6cd301f97a68fc848f3d957856072ba8",
"assets/assets/icons/info.svg": "4a9ab4449bf717772b2eb111a7df234c",
"assets/assets/icons/instagram.svg": "73a21058cf6e54d04e445860824c53a8",
"assets/assets/icons/language.svg": "e63fe18dbc6db7b8dbb319a9a2a23b4d",
"assets/assets/icons/language2.svg": "74ec9a9b5e0288d0d238394f255c1b5d",
"assets/assets/icons/lcdsize.svg": "a7646873f25bfd7c90cf6654ef501736",
"assets/assets/icons/Location%2520point.svg": "5b1539e1fe1898b2155b6cc14b9f3c75",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/Log%2520out.svg": "d762ccf53dc6843df2e7fa55ca08dba0",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/mastercard.svg": "ee51dfade0aadc1d3c755e170cb98d5f",
"assets/assets/icons/memory.svg": "c0eb1cdcd43acea457d254a82379d354",
"assets/assets/icons/menu_icon.svg": "9560655597c33401eb839c982761597e",
"assets/assets/icons/mobile_repaire.svg": "05677308c327a0d136a0d3ea52114ca3",
"assets/assets/icons/nfc.svg": "d81d11579bf3e87d9bebf45d40f7e42e",
"assets/assets/icons/notification1.svg": "f8e96f076dfeda538cf10f3e74375c1a",
"assets/assets/icons/Oppo_logo.svg": "edea3bbac42a787bd835418dbfa55063",
"assets/assets/icons/order1.svg": "1b41816722d5040a961df696f21a9c01",
"assets/assets/icons/orders.svg": "667af5b9a7ef34590c30e7d94f6401ef",
"assets/assets/icons/Parcel.svg": "17e6ca2305b1da7527281d69259c855a",
"assets/assets/icons/paypal.svg": "55f45534defc231b94b9f3feefb0d27f",
"assets/assets/icons/Phone.svg": "5fc702cf20c5fc37bd28a3bd5c8d8810",
"assets/assets/icons/pickup.svg": "1fc1868c3719f0251ad1453e79b68553",
"assets/assets/icons/Plus%2520Icon.svg": "8980578e97cd2cbad00b71be8183f91d",
"assets/assets/icons/processor.svg": "cf2bc08f9ae9db7ee28da88bd3d1a6d2",
"assets/assets/icons/Question%2520mark.svg": "b20151b891eb8e9c927f259dabd6e553",
"assets/assets/icons/ram.svg": "df5996790f0fc9734c70908506dc7761",
"assets/assets/icons/receipt.svg": "6dd6b67fb2796be43a9b9d2b1ee803de",
"assets/assets/icons/remove.svg": "a3a85cd7bc1699150a2c86e850a90e60",
"assets/assets/icons/sale.svg": "4b6447c949c86947eaf0932cd6bbcfde",
"assets/assets/icons/samsung_logo.svg": "bab004557a5342fb09b5f77b69fc517d",
"assets/assets/icons/Saudi_Riyal.svg": "8ffea0488abbe494e8a3db35953f9744",
"assets/assets/icons/Search%2520Icon.svg": "e86ce3fdf2c8be303b1338a287062d69",
"assets/assets/icons/security.svg": "d1efe3c2ce5d842e28215bffb904311b",
"assets/assets/icons/Settings.svg": "d8e321d2db0af3ee55c643d20312ba8a",
"assets/assets/icons/Shop%2520Icon.svg": "71cf1a5022470cbbd1e76a923d1d968f",
"assets/assets/icons/shopping_cart.svg": "803179a42d93a3882148700e3c1b2620",
"assets/assets/icons/snapchat.svg": "49371bc31f36145e1b2e7fb83977759a",
"assets/assets/icons/Star%2520Icon.svg": "a4c930c4bf5854048edb32d7d370aada",
"assets/assets/icons/Stc_pay.svg": "5350941682b774ed587c9ca0466ac9b1",
"assets/assets/icons/Success.svg": "70f76d95e96ee6877ec6367b049fbc4d",
"assets/assets/icons/system.svg": "2a3ae1992d0eb0a3220edd84ddf6bf5b",
"assets/assets/icons/tablet.svg": "e9a3f8b8fde722ff25f03e7b0c2f7a97",
"assets/assets/icons/tiktok.svg": "62f0b987b0c084d6d0446f3281a46615",
"assets/assets/icons/touch_swipe.svg": "9fd5942c13a2ff805fd774211b08afe8",
"assets/assets/icons/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/icons/twitter1.svg": "ec23e25f7723aa94e187836806b46adc",
"assets/assets/icons/User%2520Icon.svg": "3944ad12a2e9014c192fc5795e69a589",
"assets/assets/icons/user.svg": "da6c4fccfbbf6a07d6478cb5ac7e9f9f",
"assets/assets/icons/visa.svg": "a27204273ca28c973db66586755cf2a9",
"assets/assets/icons/Vivo_logo.svg": "77630d6d24f902b15fc63ae89ba783f5",
"assets/assets/icons/warranty.svg": "d5b35824bdf84b3b366b87cbe212a3b0",
"assets/assets/icons/watch.svg": "cb87727a1d483f105eb351bff6c314eb",
"assets/assets/icons/whatsapp.svg": "65066ef33df5fd1ad4f68b06507216ae",
"assets/assets/icons/wifi.svg": "2b4d2b94a5fb62030ee040afe2bf506f",
"assets/assets/icons/xiaomi_logo.svg": "124835e4a4c62ea37a4d49ae174bfcc8",
"assets/assets/icons/youtube.svg": "4ffdc510036365a9784d3a301fffc256",
"assets/assets/images/Background.png": "9931e16bf807ddcbb6b605b464ac2b45",
"assets/assets/images/food_delivery_cover.png": "a06224ec2f34a3458a50931fb21c5a59",
"assets/assets/images/Logo.png": "8bea3d9ca8fa458565a349cf915a79ab",
"assets/assets/images/RH_logo.jpeg": "f7d3b2344e030ae4a08a67f97471010d",
"assets/assets/images/RH_logo1.png": "3517a331f18a87690fd57b0700615b69",
"assets/assets/images/rh_logo_1.png": "f8e0ca7c2beaa28584256cada608f1d9",
"assets/assets/images/RH_logo_black.png": "6b33a9076d80d9c8c4789c5cc37c7f59",
"assets/assets/images/RH_logo_white.png": "36ca2c02a2cc5430f4822592d80dd049",
"assets/assets/images/rh_new_logo.png": "9e580b4d2c084f762a9b21d220217f5a",
"assets/assets/images/ToyFaces_girl.png": "fd59ffc05bb3630d27ee21fd6d60967c",
"assets/assets/images/ToyFaces_man.png": "d4a065d7bd3e47248da859e109ff21df",
"assets/assets/images/up_logo.jpg": "28a991fbdfeb9ac5d77dd650786dbfff",
"assets/assets/lottie/86070-failuretips.json": "ad8dab440eeb34d21f21ea87118cb240",
"assets/assets/lottie/86180-offline-sky-theme.json": "ee26c55ee71da5975ceda8488c0282e9",
"assets/assets/lottie/97930-loading.json": "4802a81baa0498bd960df7c0919741d6",
"assets/assets/lottie/98642-error-404.json": "4a61d51cbb1148f2b3a8a3cbbb027f63",
"assets/assets/lottie/add_address.json": "7123431f0ee25b37682320d58351a95d",
"assets/assets/lottie/arrow_back_animation.json": "f984e3b7e2f56186cc454fb98922727d",
"assets/assets/lottie/camera_search.json": "c04c75a69e7c60043e1ab67d9a71620b",
"assets/assets/lottie/cashondelivery.json": "c401495dccee68550c70a5b3c82a0c4f",
"assets/assets/lottie/emptynotifications.json": "2d1738b03dfb2d32a1a82d496efe035b",
"assets/assets/lottie/empty_cart.json": "1db6e8180b5417d191af689780a6eed7",
"assets/assets/lottie/Loading%2520Dots.lottie": "15b89be337ed8f13fdc49f7c092110f4",
"assets/assets/lottie/loading_blue.json": "fbf8da3d6b7b1ec42c001d1257455310",
"assets/assets/lottie/logo_s.json": "466c5a6daee9a18d074334aa5168c47a",
"assets/assets/lottie/noaddress.json": "59c2aaedd3602baf489b8808dd5a70bb",
"assets/assets/lottie/noorderfound.json": "cb0e989a9590f3ae86d1cf33e33efbf9",
"assets/assets/lottie/noproduct.json": "c9baa46d5df3a0ec39ec4305b96e6bc6",
"assets/assets/lottie/no_favorite.json": "37786b7d35aa468c59cac7534c1f3342",
"assets/assets/lottie/payement_success.json": "6cb22fd4ea2d2404ccf3bc90fed8758f",
"assets/assets/lottie/rating_star.json": "ad7575c6f1a4b53eb63e056ac339dd20",
"assets/assets/lottie/smileloading.json": "f5ab03580bcebfc232abb6e0b7034b19",
"assets/assets/lottie/smileloadingblue.json": "1c9eb727ce2e9337236f13fe4d9b12e9",
"assets/assets/lottie/s_logo.json": "e7bdfc3806dd46ee1c20c73302b98152",
"assets/assets/lottie/verify_email_animation.json": "efac03d34692138b130e005e7f36f1f7",
"assets/assets/lottie/xcxc.json": "f2875c401da4c64b8deff9be34d3b334",
"assets/assets/splash/13pro.png": "6aab4bd5baeae2dafda48167c39f1460",
"assets/assets/splash/iphone13promaxblue.png": "9f13146b6291df8171b333bd2b3a4998",
"assets/assets/splash/iphone14pro.png": "550e61879a1be873bc8f426f93eeee10",
"assets/assets/splash/iPhone15ProMaxAllColors.png": "0bffb14ae860afd8687cac60de932813",
"assets/assets/splash/iphone15promaxteitanium.png": "3576790ef245f852039fddd430581818",
"assets/assets/splash/iphone_se.png": "d2cb26702c90f04c6f24cb3967c59c3f",
"assets/assets/splash/logo1.png": "00ffcd15eaf6bc428498f1544ae844e5",
"assets/assets/splash/splashx.png": "a6d0236e2df429d82158cc404fe9cf0d",
"assets/assets/svg/account-avatar.svg": "b69216a05f7be74029b1b6216c1864db",
"assets/assets/svg/all_products.svg": "1947ddadc6913e64e44c0dfa57332a57",
"assets/assets/svg/arrow.svg": "b6163f56874a1153f9594c3a8407a14a",
"assets/assets/svg/chef.png": "54f91091f9f7e1336112af67aa3167fe",
"assets/assets/svg/chef.svg": "031bf089d4bc8328242994f90a428381",
"assets/assets/svg/gg_profile.svg": "921c312e1c6866764b6f73c584e100a4",
"assets/assets/svg/heart.svg": "ee51e5191be0ea8774e8054a7c67c940",
"assets/assets/svg/heroicons-solid_home.svg": "6e777fbcbc06e153c5c7a4cad5646739",
"assets/assets/svg/home_empty.svg": "27ceb0ef5918c542305575e968e06ad5",
"assets/assets/svg/icons8_buy.svg": "630c5049ee5a192f0f7a5d9a7701e4d9",
"assets/assets/svg/ic_outline-local-offer.svg": "88957051ed166780bde3a9d88f723377",
"assets/assets/svg/ic_outline-sticky-note-2.svg": "674864a052d9bfce8e92c1a0a1371126",
"assets/assets/svg/ic_sharp-history.svg": "6cd301f97a68fc848f3d957856072ba8",
"assets/assets/svg/language.svg": "f9888dd17a30b79665a0abbc604cef3b",
"assets/assets/svg/menu_icon.svg": "9560655597c33401eb839c982761597e",
"assets/assets/svg/promotions.svg": "17cb2c5984b17ffcf26b8759beae93a9",
"assets/assets/svg/search-5.svg": "7b967351d0d9f0e2db38e63627451106",
"assets/assets/svg/search1.svg": "677cd1529e97b5f7176a25c3725c9a15",
"assets/assets/svg/security.svg": "d1efe3c2ce5d842e28215bffb904311b",
"assets/assets/svg/settings1.svg": "d6295b29988af9d60d0fb5cf262735db",
"assets/assets/svg/shopping-cart.svg": "a415eebceb2104d1c6ad99ecc9b3c28c",
"assets/assets/svg/store1.svg": "48939a1968d2945e928f605a922eaf6f",
"assets/assets/svg/touch_swipe.svg": "9fd5942c13a2ff805fd774211b08afe8",
"assets/assets/svg/user.svg": "48d46e6c59102f82a5cd59752d357e1c",
"assets/FontManifest.json": "06934fb92938014d9733cbe0e97ccd34",
"assets/fonts/MaterialIcons-Regular.otf": "1dc4d6af4476d5d26aada1fa49679e83",
"assets/NOTICES": "6e49afb0f6196988a7050a3aba7cb358",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7c7959862baef737aedc2844d5d889b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7e81380621bf1afd802def457a515744",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3499d37fd78411ffe244c1f01607a045",
"/": "3499d37fd78411ffe244c1f01607a045",
"main.dart.js": "ba0a485762e1276e8f38e4aeeed106ff",
"manifest.json": "0293c00a101d32259e8054ef3e805ced",
"version.json": "f78457014de7097b8d1d78363318236e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
