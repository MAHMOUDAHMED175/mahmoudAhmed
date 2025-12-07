'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "54b1683b1890f7525abb700ca2d26608",
"assets/AssetManifest.bin.json": "ab96b3d91176ab250404e93234012c01",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/Grantena.png": "e928893b80608a4f8b9334d5a9819701",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/certeficats%2520(1).jpg": "72c09e394f743946eed28e20454139d4",
"assets/assets/images/certeficats%2520(2).jpg": "f5c06a130d1680999c3c4b4b88190948",
"assets/assets/images/certeficats%2520(3).jpg": "e54129512e9a7776c913d7d65aab83c1",
"assets/assets/images/certeficats%2520(4).jpg": "48ce8d479b6ba01f9b52eff8d11cf87a",
"assets/assets/images/certeficats%2520(5).jpg": "55ef0cdfb0d8142517fa80c9e13b9a36",
"assets/assets/images/certeficats%2520(6).jpg": "97f5908ad1e705a8d9fdef97bd130f2b",
"assets/assets/images/certeficats%2520(7).jpg": "a07377ab02ac26e0e41149634665ef48",
"assets/assets/images/certificat.png": "910f98a3a958ba81ed9667a5fd829dcf",
"assets/assets/images/certificats.png": "925451eed6d748f7c536abb5a6490b54",
"assets/assets/images/e-commerce%2520(1).jpeg": "9d47ee93a13e82b03d50a013e780106b",
"assets/assets/images/e-commerce%2520(10).jpeg": "7527a6e2df40870d7ee2e255f3024fd2",
"assets/assets/images/e-commerce%2520(11).jpeg": "0c5ef6a5b95e2e102829307e7c968862",
"assets/assets/images/e-commerce%2520(12).jpeg": "cd9cf790d35fe408db0ba9a2b4bb6d94",
"assets/assets/images/e-commerce%2520(13).jpeg": "67ca878b46163f8882f60923cf3b1837",
"assets/assets/images/e-commerce%2520(14).jpeg": "22bdfef3e65d5a9f2ec3f860d835f634",
"assets/assets/images/e-commerce%2520(15).jpeg": "17d4f4c3c5996cd30165ebb0174ccc32",
"assets/assets/images/e-commerce%2520(16).jpeg": "1966cb077b9088e9faf6f74a1fe0f313",
"assets/assets/images/e-commerce%2520(17).jpeg": "bb4b9fc7360f83db0d49ea15cb659289",
"assets/assets/images/e-commerce%2520(18).jpeg": "0a67a3b9137d85cf1162cb94ee530c0d",
"assets/assets/images/e-commerce%2520(19).jpeg": "1f0d3095fe5b1f62b61380a9d046868b",
"assets/assets/images/e-commerce%2520(2).jpeg": "338850a4abff70a5628f6350d4e39d22",
"assets/assets/images/e-commerce%2520(20).jpeg": "6ed2df4dd590fa4a68050bbdacce2d30",
"assets/assets/images/e-commerce%2520(21).jpeg": "43b778c9cf86fb60e01e0eb651b48ec4",
"assets/assets/images/e-commerce%2520(22).jpeg": "acc827b189b7e2b0da9bcb82aba926f5",
"assets/assets/images/e-commerce%2520(23).jpeg": "bab70ab54d2a58f8b760b57a6515784e",
"assets/assets/images/e-commerce%2520(24).jpeg": "071a3a02036acc685d56cba36296a186",
"assets/assets/images/e-commerce%2520(3).jpeg": "37ef56c28be33374550b2c5617610172",
"assets/assets/images/e-commerce%2520(4).jpeg": "24b5e1a0efa75718a8db76102b291aba",
"assets/assets/images/e-commerce%2520(5).jpeg": "ce2a0f563e1ca67058735acee47e86ac",
"assets/assets/images/e-commerce%2520(6).jpeg": "855c43f103232b6bd40449b70d202548",
"assets/assets/images/e-commerce%2520(7).jpeg": "f300542fea1ac4b94f0750423eea21bc",
"assets/assets/images/e-commerce%2520(8).jpeg": "56275beae155c547e4165ca5cd0a4344",
"assets/assets/images/e-commerce%2520(9).jpeg": "70f36fda229f48503819149b91670de0",
"assets/assets/images/erp%2520(1).jpeg": "98657d620c4f0789156e62e727fb9312",
"assets/assets/images/erp%2520(10).jpeg": "d203fb0b6204e165c17358e3b6ff3086",
"assets/assets/images/erp%2520(11).jpeg": "f7fcac3c1dc3ff37df272bc69f8d298b",
"assets/assets/images/erp%2520(12).jpeg": "5a24d45cfe54d23017d37a2c5fe9535b",
"assets/assets/images/erp%2520(13).jpeg": "072bafb8e3e3320c6e90b8c478ec86d7",
"assets/assets/images/erp%2520(14).jpeg": "dbf618b2f33789000f94e1552267aaf5",
"assets/assets/images/erp%2520(15).jpeg": "566be9458a2551b335be62c90c6600bd",
"assets/assets/images/erp%2520(16).jpeg": "cce82f147c9912859fa5a60ea916772b",
"assets/assets/images/erp%2520(17).jpeg": "d9cd5ae8107acd913f3bb7bf2f083717",
"assets/assets/images/erp%2520(18).jpeg": "6153fb17e84a8cc69913d085af01a606",
"assets/assets/images/erp%2520(19).jpeg": "4c818c008031050783908db1bc79893d",
"assets/assets/images/erp%2520(2).jpeg": "ddc0c989c46d6610c63ff7e4adc0be18",
"assets/assets/images/erp%2520(20).jpeg": "fe521dfc8fed6df418ccbe16112033aa",
"assets/assets/images/erp%2520(21).jpeg": "0e8219fcbf342d7de334a2021cdf4fdf",
"assets/assets/images/erp%2520(22).jpeg": "93dbdeb77b589d1c0b06e8fccf891856",
"assets/assets/images/erp%2520(23).jpeg": "4c3756ecf30e3305b27e602f56e5424f",
"assets/assets/images/erp%2520(24).jpeg": "3c9c518287b67db8d91d3445a571b37b",
"assets/assets/images/erp%2520(25).jpeg": "facfb59da5aa8c8a8da23e7a4e2184c2",
"assets/assets/images/erp%2520(26).jpeg": "15766e1783a6926f19a44d98607b5187",
"assets/assets/images/erp%2520(27).jpeg": "d425d988d6e08654aa09f9be2e7c14d5",
"assets/assets/images/erp%2520(28).jpeg": "2608f4cbd42dea01ae7afb55383406ec",
"assets/assets/images/erp%2520(29).jpeg": "62a61ea4874693d820ca757071be6468",
"assets/assets/images/erp%2520(3).jpeg": "8837ebff96b7a51c6cc00da1e5c88def",
"assets/assets/images/erp%2520(30).jpeg": "19e595eb2c439b2b7a003772fd7bd768",
"assets/assets/images/erp%2520(4).jpeg": "c9be6265d590307f5e71a3056109eaec",
"assets/assets/images/erp%2520(5).jpeg": "868d03d5911e39a5408b2ba89f24ca72",
"assets/assets/images/erp%2520(6).jpeg": "0e68fc9b2a7515f8aee76d4f432cee7a",
"assets/assets/images/erp%2520(7).jpeg": "d6ea8931fa51c448c282787b20d3ee0b",
"assets/assets/images/erp%2520(8).jpeg": "361523c290f39562be2acb4f785887ba",
"assets/assets/images/erp%2520(9).jpeg": "7d54ed9d9506b86b93e9bb3fa043a6c3",
"assets/assets/images/face%2520(1).png": "789b6bc02691ec1d41a93b984ce1361c",
"assets/assets/images/face%2520(2).png": "4598dda217f81f3fa3821557c8a36405",
"assets/assets/images/face%2520(3).png": "a4bcb7c1ea383bfe22c2902395712b15",
"assets/assets/images/face%2520(4).png": "e6248bbba2c36dd73bfc6e8acc7b7af9",
"assets/assets/images/face%2520(5).png": "e85d0eedc46f393258fb088fe7927cec",
"assets/assets/images/face%2520(6).png": "26297c32a9180a093e66045cbdb8a0de",
"assets/assets/images/face%2520(7).png": "5df1e8e450967e6ac3c4f6edcd88f7c2",
"assets/assets/images/face%2520(8).png": "5c37732b2e79f79eff91c7a9792ef10e",
"assets/assets/images/face%2520(9).png": "aafe89ed16374f55a582e23816b7a220",
"assets/assets/images/face.png": "a65e3c015b4f7c90a3fb85eb8f5cb365",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/me.jpg": "27f726af632691b5e456537dc967e0b5",
"assets/assets/images/music%2520(1).png": "b1769c5af7ba4c7892db07d27421993b",
"assets/assets/images/music%2520(2).png": "aa1d16a1e7e86a222847bad95e7ae4f3",
"assets/assets/images/music%2520(3).png": "37942d410dcd3390847111803debe17a",
"assets/assets/images/music%2520(4).png": "451ea38cc97dbba375fa6168b34ab19d",
"assets/assets/images/music%2520(5).png": "585cc2a00826e7a764afdc338a4d7cbb",
"assets/assets/images/music%2520(6).png": "39261cad67a8328967f874e1a5902cab",
"assets/assets/images/music%2520(7).png": "4960ed11e957143cc9e0a612d72e3694",
"assets/assets/images/music%2520(8).png": "f713f119eccaf891da4df348667a98cd",
"assets/assets/images/music%2520(9).png": "abd2f943ebf987c98a39e36572dfcda2",
"assets/assets/images/news1.png": "8de274bf235b75ba620ebad92d8a455d",
"assets/assets/images/newss%2520(1).png": "b5d7a9d964861b7c1360c2ae9be29759",
"assets/assets/images/newss%2520(2).png": "209bbee6de9b52ee4f0fd84672e5dc9d",
"assets/assets/images/newss%2520(3).png": "d2682aec06f5aac78b47fa4fa394699c",
"assets/assets/images/noooote%2520(1).jpeg": "0d1e4fc07f0b88542c43e64ba590caf3",
"assets/assets/images/noooote%2520(2).jpeg": "23f6fea51886177d965f3b4ba4837fe0",
"assets/assets/images/noooote%2520(3).jpeg": "baa005a14456698bf4cfb4d458c97a2b",
"assets/assets/images/note%2520(1).png": "048364690f014bd94fc1cf432f2f9db2",
"assets/assets/images/note%2520(10).png": "3ed38588d3fac5819acb8283318026b9",
"assets/assets/images/note%2520(11).png": "31cbda02aefcb31bf7989645917e8213",
"assets/assets/images/note%2520(2).png": "027349c0ad48ebc31d25fbe957f48a25",
"assets/assets/images/note%2520(3).png": "31165493b6a9f340f541fa0835a032bd",
"assets/assets/images/note%2520(4).png": "a36fe724d407f68d3523bec7fac3da2b",
"assets/assets/images/note%2520(5).png": "ec7ffb5e89ca5bf019de95095da24d9b",
"assets/assets/images/note%2520(6).png": "5d2b5592af64ea1364778d3679cd1f63",
"assets/assets/images/note%2520(7).png": "82df664cdccb2c3fdd1333281b2fcea2",
"assets/assets/images/note%2520(8).png": "dd3d53d2c0e75d09f1bedd334a8774db",
"assets/assets/images/note%2520(9).png": "a52a3e338a5cef4d80c6e256484f9c17",
"assets/assets/images/note0.png": "531fb1a23cf7f455d8da009fe787e83a",
"assets/assets/images/payment%2520(1).png": "0f8b1b01096fb6e2d42a18e195376ff8",
"assets/assets/images/payment%2520(2).png": "3f16678674a30cb28885987997cb0e48",
"assets/assets/images/payment%2520(3).png": "cb8f11da6062cc4b79f296dc579d1b69",
"assets/assets/images/payment%2520(4).png": "011ddb4f04d24f6da1880ab378f9e097",
"assets/assets/images/payment%2520(5).png": "044a4e4534b9699f26445fbf1fd24f3b",
"assets/assets/images/payment%2520(6).png": "696b0c6bcf6e2ee2857ea5f32f22743f",
"assets/assets/images/payment%2520(7).png": "80a99420b657f71f2a500a16d316f084",
"assets/assets/images/payment.png": "cadbce7668d2a1fd30737f7c11f0d5cc",
"assets/assets/images/qoute%2520(1).png": "ba05bb1d95764788772dd79f781863f3",
"assets/assets/images/qoute%2520(2).png": "7ff4fa9ae217fcc9df5cfa10dff5197d",
"assets/assets/images/qoute%2520(3).png": "8bff809e5e9748a1240dc5a03b711ec4",
"assets/assets/images/qoute%2520(4).png": "3c8f3b5d7807511a0c08296a637270ac",
"assets/assets/images/qoute%2520(5).png": "1455db9fbf75944e25e8e62006b5bc02",
"assets/assets/images/quotes1.png": "3dba965cd43609234e707aa7ad02e4b8",
"assets/assets/images/quotes2.png": "629020f3825554a81e28e38b65e3c487",
"assets/assets/images/quotes3.png": "fbb9f79a9ebbaf1dcae1adf2ac9e0583",
"assets/assets/images/quran%2520(1).jpeg": "ee599c1580357d23843160d44d0063fc",
"assets/assets/images/quran%2520(1).png": "6738f3dcdbb359a9e22fc61e95dc87c9",
"assets/assets/images/quran%2520(1.png": "1a9e6cc7b7c8af75df8315e5550305bb",
"assets/assets/images/quran%2520(2).png": "a46b1b92663c37994b8abb768f216b1f",
"assets/assets/images/quran%2520(3).png": "cb06d51bd130ca199056e5503d9f9eb2",
"assets/assets/images/quran%2520(4).png": "8a3f441ac1846ba4b577e050dc735dcd",
"assets/assets/images/quran%2520(5).png": "6d05b7faae40efe7bec2001702bda452",
"assets/assets/images/quran.png": "39874194fde47dcada050c50282b3b80",
"assets/assets/images/reasturant%25207_10_2024%25202_07_25%2520PM.png": "564de65416fca918a815816db988f62d",
"assets/assets/images/reasturant%25207_10_2024%25202_07_58%2520PM.png": "a4e15b62eac41df7a864739c33fb74af",
"assets/assets/images/tertits%2520(1).png": "7f20736de6315a8c302c81dcd0cf108c",
"assets/assets/images/tertits%2520(2).png": "aa6f454f9f884b559021a21c1ceb332f",
"assets/assets/images/weather%2520(1).png": "2a2667ea461a58e1e4006fc225445624",
"assets/assets/images/weather%2520(2).png": "2a2667ea461a58e1e4006fc225445624",
"assets/assets/images/weather%2520(3).png": "417a4e1f97cda11b01bfd87379f52db0",
"assets/assets/images/weather%2520(4).png": "cdf1d6c3c28a664e554da22a0ca77829",
"assets/assets/images/weather%2520(5).png": "c9281e44f5e9634447e1239e9f56e171",
"assets/assets/images/weather%2520(6).png": "2cd127c4bc6ba62cef4008cb0f6f4a30",
"assets/assets/images/weather%2520(7).png": "ebaad2fc0a24eb7a2bb76e00bd72f6eb",
"assets/assets/images/weather.png": "dd4c62c39ee4bdbe5fbdd54b9f184c4c",
"assets/assets/images/WhatsApp%2520Image%25202024-07-10%2520at%252012.18.13%2520PM.jpeg": "058b353cab1178a96b0eac1b3a0f6684",
"assets/assets/images/WhatsApp%2520Image%25202024-07-10%2520at%252012.18.14%2520PM%2520(1).jpeg": "09cd0ddacd31d0bcd6bc43c34fba51ea",
"assets/assets/images/WhatsApp%2520Image%25202024-07-10%2520at%252012.18.14%2520PM.jpeg": "94382c76772c16712b339ffaccb8b9b8",
"assets/assets/images/zoom%2520(1).png": "0e7f2dc44f843766657fd8e73786e93b",
"assets/assets/images/zoom%2520(2).png": "9382b2ce811ce3d04a69670df06a2f32",
"assets/assets/images/zoom%2520(3).png": "e8eb5a47f23ab6cdcca8246aa01206e2",
"assets/assets/images/zoom%2520(4).png": "dec09cf985a55c6e95f4deb3b64b40d3",
"assets/assets/images/zoom%2520(5).png": "c3619569e420ab3b8624a2cdbef8442a",
"assets/assets/images/zoom%2520(6).png": "79c162fcf59d046695273e99445f183b",
"assets/assets/images/zoom%2520(7).png": "f6c69e72c6d442e9828068a60840b74b",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "77dfe80fd9e11775a1a8d5264575040f",
"assets/NOTICES": "21574c3d3b188017419e44e33b6e9251",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a18d15b9cf93e44f98ad7354f6bfa3e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "7fe58c3dafe4b60cafa38826cc5c7a66",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "ed4c7b34d798681d57e02d25a22fdea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a42e069994095250484ecc1b93a85685",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b6e6b46fb2e9fe7a692a9ce6aa6aa4a",
"/": "7b6e6b46fb2e9fe7a692a9ce6aa6aa4a",
"main.dart.js": "13f9b57a70c5eac8e99bf6b8d17ec743",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "f15907a8c8ce454bce109c301850a074"};
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
