'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "94980d3ca9921055b2217a1c36528495",
".git/config": "fecd67dbb1dd034140b64dce05b97f38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "50323bf2b7a62c6e52091522b4f5e7d0",
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
".git/index": "98a343973b3c4d7d7a0c4d8e1a97d261",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23ba80ddd4c16b1dfff7d6935a640517",
".git/logs/refs/heads/main": "65747992ce8cc6a177be5b6c464a0208",
".git/logs/refs/remotes/origin/main": "4d0fde3dbe89203df067eb8689e12404",
".git/objects/00/0295f46bcde2a6fcdbeaf09ae9a390e965d58e": "2e425a6f518e82a01e19bcbb79a8809e",
".git/objects/01/d11aea03d14788730284adca12b61ea4a1ad24": "068b27e57e02f90fc04eaabcad15e092",
".git/objects/01/ecd75f1c08fe1421a476ffb09b14f7054eb67b": "f5497cca430665c04dccbeaccf6507b4",
".git/objects/02/f9d038efbd18a8de5283f9ca205444692b4683": "590d21c300e9882b34e29a74b39a6a4a",
".git/objects/04/76bb20d8d22eb84e62fe3fc10b2d1b1efe469b": "89b4c50a69a8fbce103c20e09ad2ddbb",
".git/objects/08/06aefa8690199a76a1462cf802a5db11e87813": "4f085b054c1d40d30827c8e98a043df7",
".git/objects/09/1e83184b1e7ebc7d7d256d1d580063fa9489d9": "433bd24bee063d03e7606ef2714b4f97",
".git/objects/0a/f51e16487e279cc71921eaed97fdc0b8122fdc": "e9c5a83d30ab0017b9b579259c0af75f",
".git/objects/0e/aac3250a94686efd8c6c5128b77e853e23a277": "b39ddfbfe5e9000139aa2eaedb006673",
".git/objects/0f/0d063910dda350326900404c47c5153f22f9ac": "308f60519bfddcd1e358e163618d6322",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/9d5351dd799518b734efafff6bdf91ac8a7249": "a1cb3a34d1b5ddee7ab889d1b80a4a53",
".git/objects/11/e1a46e7d8f1cd041236df8fbbc7403217d32c4": "3040c8f19c10c2e8627faa914509aeaf",
".git/objects/13/a213b9e970a8b4993a9074fa6d78c1cc959500": "22ab4ad982d43f17227b8e2bfde2696b",
".git/objects/14/e8a014c44aa5709b0f58d757f36f7fae95a054": "00533355a1fe25ea26de072c7fc6b974",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/661699abd1d513e9ea996ff3c51d498c78bc61": "7428463a311255a8b8ad59d8c45bbdda",
".git/objects/16/ae2d14e2fb9cb08e7747cfaf045154a2b0bb79": "e8469afce116ddc653589f86f52d5d99",
".git/objects/18/1d3d6a3e098f9ab46056c5b6afb53c81ac66c2": "6621e171ba8699b69c10dc0e8e5cb469",
".git/objects/19/39a9f9b654ce410a3a17b6782fde5c8ceb85df": "f0e9324bb9f4fd355ce19551f14da376",
".git/objects/19/908d01dec45c148db59dcea1c71e8a95318215": "dd6c9e5ee6b370a2a7008794d073e1df",
".git/objects/1a/cebff797cee34b9807ea4881b389cf74436807": "5e3d9e307099a0be98ed42ea9e693b26",
".git/objects/1d/1e0146d1640719fd05c9e6083506e3bd4859ca": "49c8e5d3984f43161f9d0cb4d44ddd8a",
".git/objects/21/f55c1388591e396d8b4715a64a1240d3dd21b1": "69a13a9332a2332bc3ef7aa476b9e19d",
".git/objects/22/42f7398fd588067704eda0f82c638bbf46efb8": "7e16095311d8fc8e8770a4df0918da9b",
".git/objects/22/57c75e53305a8cb0669a86b1187fe39d7fb070": "b5f891e31b6b9413d22ec4c70e8812a2",
".git/objects/22/b88e02a45f0c89238b99d01bdc764d7ded84d4": "f38eb3435806a652dc23df862750a901",
".git/objects/22/f07d78dd236895ddf046fce073efcc1fd3215d": "b33093731dbdf203ba7b3f936bb921de",
".git/objects/23/a4c254deb4aa024632b61cf5bdf7a35b386641": "c010243e228eb514ae42c2a262a01612",
".git/objects/23/b5d7b20247fdd968a02042e23a0d783eb149d6": "0a97fbf0704eced11d9326f5ce4578b2",
".git/objects/25/9a24e4d2e66db04470a6b8362a89452328583e": "75f1f45d1ee5168ec257dd78db6b156e",
".git/objects/2c/17749fc7cb8b462817114be440b407536c10f5": "ad331697f4900f87da6bd9dddc3d5f18",
".git/objects/2c/2fdafcd4df20c45ff85a53c7c3f47457285c74": "0bd7aab21a1a2b7ffe8f041ad533a6bd",
".git/objects/2c/6db0dc29839813fd0ffa98280584ada403e7a0": "c70e4aaf706e6793a111887b9a322601",
".git/objects/30/06857a8ca7c8559b64b7ad12b09651b9c4a587": "8ae84127178a35cdd00efd722a93a78f",
".git/objects/31/a0fdb58bfe9c91c0369c131941e7a3a23a4f94": "87a662402ab01624889856eb21164b3d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/6591daa7d81d998e87ff604ca10f003602f797": "0d9dd1590948218081d2857036dd33c9",
".git/objects/36/6128fe37f31c9c9e40c4502fe7c3fc015b6c8a": "a3830fd824814298e4bbb71c85f62108",
".git/objects/3f/4946b0320792a75a6d0edf856cae21114b2b58": "60141f0890a54ac00fa4bf8d1f1dac8a",
".git/objects/40/d4c461523485d1557aa3241fa97958e9d4d030": "f0c3989b2053c5636fa993743f874586",
".git/objects/41/0931e0f498891feaf038711bb816eff3e49d50": "1e73c0206d0ec7d6315537fea3d7e0f3",
".git/objects/43/097d5a3009147bd486c9cf84072ff440c9fbe8": "d7212e8516afdc024a9e06cb986a1050",
".git/objects/43/92e1ddc6d40faf3bd104c27c424963bd7ae4ab": "14c38c39e08e49ea41cf0a013b805a30",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/44/49c5c41490b22823d446add925c3268b6cf8f7": "d49e997494e57bfc386ce53012e09c42",
".git/objects/45/cead18a6419037b59908bea447766f3d32375d": "c51a1c397dc9eea6a268a44ccec2b28e",
".git/objects/46/0d27d93ead7d50df3a7328b767b5b0de5449e5": "a2c93da976b12be0db9a4d1168bd7a76",
".git/objects/46/b9bd3cd0498f7efe8447d7c1e64f28a9dc1560": "e47b94b9b6728eb2f84895a683a532eb",
".git/objects/47/b2ed087b9a5e70698e1c1743d6ce693eb5f37d": "06fd30d6b29d14356a4d74851806db36",
".git/objects/48/75a097c4af47931faf7ea05ac3406921d3ba27": "e1d66c6f9f1170f367398d3a6823d730",
".git/objects/4b/c5bec59293cb0fd5151006cdb8e5c23135faf0": "62beec65fcf8ae2d2fe253434cc2d602",
".git/objects/51/8d7eb65f985c1e368019cde58d776a4cc5f305": "28b9612ddac3054e7a9f1a98b567a7d1",
".git/objects/52/7693dafb248b8bbdb7cc73d6073861053da58e": "39f9bc549ee54280f0d123860f548ebc",
".git/objects/54/27b44c1e9754f04a55ce3a18674ef2f7b2ec5b": "40ff7439ad16c8e345226fca7e5b0f12",
".git/objects/57/4ce6e6fea04ebd18e19a180813705c1e3e699e": "51d09754307f38e48bb362014d12754a",
".git/objects/57/510a2be4e3c97b34624a5d0966b97421692034": "c04003863c38c2ad1f319a44552c5b8d",
".git/objects/58/5f732d8a8d6e9b06a39a4573509e56562e584c": "4a665e530360f94801d21093516d8439",
".git/objects/5c/450aa8f152471f3b004493669e9fa42adfebe7": "7675303e6f371c66e8661172055c6154",
".git/objects/5c/8c80dadb784b70ebc8b578c7b6454fe4f4cbb0": "420b5027f0a36def38d4959626633a47",
".git/objects/5d/b9218afd1efb03c74ba1761926ce72c6204957": "d90aa869fd35370b6643c79e7221c052",
".git/objects/60/b03466243619809f3a47893ae7d7bde62f85b0": "99cd2848090a31b420cd373bfce0ba05",
".git/objects/6c/a57a121bf1e2329e3f8e6e78bd72ceb818c4f4": "9430ea80ad5009db6ddbc87a97a3c7b3",
".git/objects/6d/9b7fe750fa4fa919528b99a233a3d79f66c0c7": "742e9388c89caf95fdb3a4ee549a6950",
".git/objects/6e/44ab8015f2a68251c41c35496ffaa61d3eabcf": "7e52df72506145f4b28c3c9807be9779",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/e2263553066bf9968287891b1f0c15fd12db81": "d9711c9493f2a30bf839acf4e788fea9",
".git/objects/74/4a2bb0900d88f11779beef725ec51a5595a94c": "15ef17b57e50894394fa2d13996fef36",
".git/objects/78/1131c4a6f29f18701b8c524663b3ad3f4bcf40": "3811db87fe0218c08ec357ce35ec47ec",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7e/4e6e7be3041aae3aa2bc5abf4b518c254c460f": "9e1b9ce63631661b945b89b87598707d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/f390416e3a631157c0fdcecfc9f522e260dfce": "036ab11192d0eb6ae49ce89f7236bdb8",
".git/objects/83/9f166bdd16696ed62e15986138340a560577ac": "cade652097ddbfa0fde588dcdd7a13ac",
".git/objects/89/2f3b0cae95bc319e310eaf6513638a4036a0a4": "a4803dd27a19ad20492d4cb5e28ce63f",
".git/objects/8a/2bae373ec7f6ce98f6d6304cd74a748c3152a7": "f210bdcdeaec512c4bdac0be493f64e1",
".git/objects/8b/1154754ce91535d137151fea0da44cf5c048b6": "4d44479a862fa6f5a890903f0b34dc28",
".git/objects/8b/25551a97921681334176ee143b41510a117d86": "0fff8d9af2a8616c080c072abc98d2dc",
".git/objects/8b/84d18be957e41b5d9fe5bb70b709df086ebd8b": "9068516e6431d0f6502ecfd6ceb3bfb9",
".git/objects/8d/68dc1fe8179333a09ca6e893ded6825f79361c": "510be8a0a32a25e24e94cfd5152b9e16",
".git/objects/8d/c30c508426a2bfdfe954a04210b7118017eb12": "67708cef63f8424fbe0368507cfcc9d6",
".git/objects/8f/4a3ae7e0b3025446e25ca718493c8f531d7ccf": "0513c2a9f280e485e6d10585db201854",
".git/objects/8f/99015f0dcf6a71e2bb1ba6e71d3963426c651b": "9d9ca8e6763ccbfee77d49cb1df35683",
".git/objects/91/a90345c7a0ecb4d38e14d39325745861cdd066": "3186b91cbbfc669430ba63c0f435228a",
".git/objects/95/262d1534d02dee62945bd85fc8051dd3273684": "1c448a562e3d7449dd9b913b98795294",
".git/objects/96/c631d9f435c1c6c4af932f6b63fab4005f020b": "d922662a0be7b58f35106c92bc5d325c",
".git/objects/98/4e382873244c8befb84aab9913f4ce2a04b9bc": "d68618ebfb4911006c1697232527bb64",
".git/objects/9a/3f88a28f22108eddcb513f7aac8f1854b0ea62": "236b41170c85a544498151b7264ffd31",
".git/objects/9b/5677e45556cf292994e707da333fea0f5715a5": "25554ff1c2165ea44abba4f14a4ae06e",
".git/objects/9d/0e3e6fbadc6116ec7bfed6839664cfcf81b61e": "3595b79c10625669fa9764757f697bb3",
".git/objects/9e/62d92961258edb30a7de07a050023a52ac501c": "c786215d1c98a59045c28b634c98e74c",
".git/objects/a0/7d047528146a4210ba24104c273f3e2bd83a39": "cb6b35224ba08bfb96be7bd33656998d",
".git/objects/a1/64912e1ce27a60f8f594c63f0d0b4ea001dca7": "71259ddc6d2cc0c58fc15d5518c71c25",
".git/objects/a2/5c59f2b2efbec6b43966ce5b3e1c06916281a8": "f3fd96995daabe62bfae11ac99d62b56",
".git/objects/a3/6349ed77492de159d771a645abed62c2d03c95": "a04b5314756f95b1c43bec5290d99f78",
".git/objects/a4/66340398debba9b8494b1faf4cf1ef1ac48420": "c0f1f9bc4406f4d0377269e49923664d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/1e96b1738c91bf824c3a131e151f4167b0687f": "14a1366a98c0ac9cc296771d54aa4b42",
".git/objects/a9/f9ca1a0ab637f1b9552fb885a52fb3e73c74ba": "b66d5998797b4c165695bc4c88038f91",
".git/objects/ad/47c1419a5c95f769c8fb74ac3045273d007a47": "3b9672be1dca1e333eaf82b2c913d1b1",
".git/objects/ad/64f3c381e76c079a98dc5650f0e3f525d110c0": "e9747a807aefa734b4720ce952813151",
".git/objects/b2/f3108b6ddf722e184306f924277a1d647408e8": "74adea5d9378b7082310b594d54303e6",
".git/objects/b4/23b0af50328a460038104a756f8f8be722288a": "1c04d158ef3dac9fc5944eba8e28ba87",
".git/objects/b4/7f1d30a6915b614e99d3e318e26bfd163be006": "2ec441ff504e378c9bc36c2cf741be65",
".git/objects/b5/164d770798d3d4ecabb6bf55ef45989a0adc53": "29ea0fc7676aa89ee99059b100f0d9ed",
".git/objects/b5/7a5af608abc54be5058fac5ec03e3e2440810a": "f26df6163f11d083a538dd1c490f5db9",
".git/objects/b5/9d207ecebbaf5df028b7aab4d0ed7857a0a9d9": "52bf1b689a1d2dc5c435c139b87aa898",
".git/objects/bc/e14345b83dd67bb25b3a81d40095db75b7f3ba": "795a2b9df660c323fb9f32e3259cce6f",
".git/objects/bd/ef4174f1f308e284f4e10a1cf0c5f9991c9dd5": "9a2f22ffec223fb64eea9322e447466a",
".git/objects/bf/302f355bbe0f3e421e554a05a436e3a76ffeeb": "44d7022cf780a5da3bb4e9d6b86d5896",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c0/c8bb37ad18f6347cb3470c946c8af730640bb0": "3e0ed02e757511c046f8612be516894b",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/c3/ac69eb845c2dd211619a0e78ded5442edba1d9": "f36a0c24edc84b3da64b7e7598c14b35",
".git/objects/c3/bc70a57cf61febee5808188437db61aff1eb41": "6a1fcd92adad05bb5ff81118567c74ac",
".git/objects/c3/e1b7670315c30489c78ac1dd8fcc80c3e1bc3e": "a350b6b705d487fea3dd5aafcb53e219",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c5/f5b54b01505dd71e552367e9c49b27c16c8dba": "f733223400db3d5d5828ee0aebc2efca",
".git/objects/c6/fe07724d6278321aed90a1790e955b24f5ea8a": "aa291e63fddf4268911fdc2ab71ec1aa",
".git/objects/cb/1c6c2806fa0ff040fe569143df1cb1c940d9f5": "d39834bff4205e535852d198060e62d2",
".git/objects/cd/beec309281d495e2695e9ab4c2d888ccdbf1c7": "4a1c0aaf084664b8789646717f0e8d33",
".git/objects/cf/d3a17d2dde5537337fe33e3cfce7f70ad518f4": "b06a41deb763f624806b0396ff17a9b2",
".git/objects/d3/da9bfcccf9bfe73d54a1b88fa024e00bfa00f9": "55518fa87b0cc7cd29c2d4a4e2c96019",
".git/objects/d6/1d7d6d1c017536830f076e5ff1e6fa26ba7b8f": "fb39eb0633f9b5ccd074dea2874eb1ba",
".git/objects/d9/cb6b66279dcda0cea902eb77b0f51ab8944fe9": "bc1fa51723141de05996a4b12a261d43",
".git/objects/db/fcac0608e0d3f854ce198bc34cece11ac4ce35": "aeb0c2c0d4e12385486672bd2495eee2",
".git/objects/dc/aa25939b87d3b7e013da43cbb8d067a0fb0ef1": "22547c194c2b6b1c1e0de322d220da52",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e0/f35a7c1de2cc5757ee71d4e319781da1a6d83e": "860e6bd5a8c1bf719c6dae6be7ce4feb",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/e4/98acc3d9bfbf38305fc1f4bd1e14ceb0afb1c3": "13e333fd82c541563ea9e942624334e6",
".git/objects/e5/0b1b79f228be2178352c89adbe7f798d80211d": "3ad223b611dcc1f60296c6aff55fc475",
".git/objects/e5/dfd0bf6db1cab4addb574c521b15bbdb3cf646": "1ab0812a7346e7f200f5ea4bba63d4bb",
".git/objects/e6/96e88970dfdcf199a6e9fd62b7dec64ddac75a": "d4551270feb891de2620d99802fee544",
".git/objects/e7/ed2b10f98dedb5c917cdf9e4529d6743ddf456": "9758d0efa3c9c1ec5b58eaca83c7296f",
".git/objects/e9/74871b0024840ba3d5ec6c1d57703f0d4f376f": "a7c2e83d04c316a40e055d5f4216420f",
".git/objects/ea/44845e9d20c6c4b43888d607ccf7500b2e2b27": "77bed2ef45fb5ed1987ceb8fd4fe0329",
".git/objects/eb/4c30b54228372f7f9b3f47ff51b4b9216ff664": "da94709853947eb0243c03e4a2d66cc8",
".git/objects/eb/8a322ed015dd8a89c5a0a766462aa6d26e03c6": "fbec6464a163bf086a11a6b3249bfc3c",
".git/objects/ed/f9888ec8054a0b6e0ae5d603e095d46173a6e4": "df1374c47f9be1d781763af017af0e95",
".git/objects/ee/23b9252b152287fb29e7b680374917476d7b1c": "a040989cf20785ffb63db2651ad6800a",
".git/objects/ee/5e7395c995be63a4324b21209235c0fc8cb97f": "35cd9c5c590bc470138745bed927aea5",
".git/objects/ee/b9c5916b05708ef8cdd14b8dfb35c56395842a": "0ef9f9126f1a4f4fff8f38b0f93f13bc",
".git/objects/f0/104094e3e71cd88795d9018f7112d342fe4ea5": "d57bb360e842c648fd6df2bcb68f6c0b",
".git/objects/f3/fd0b9713bf25c299e056b486575fed452b717a": "5000f007b3da35f91c8cd9df10e3e5f1",
".git/objects/f4/3742069cd35a71b17693efeea0afdad54f2f55": "8ad518e2694120ff4f24e977d97fa463",
".git/objects/f4/63d3c2b93065f434e0c37de5752eda739723d3": "b973603025878c3363fc552e8790edbc",
".git/objects/fa/43392fb98a7d012a8067513173862700170152": "76b7ed7621d4e33eaa3d39e39dc4aac3",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/ece64a27e64f93d0a8f9bd7af4bb3902cc2610": "93eeaf19ef48bd5b93ef3aeeaab38cd1",
".git/objects/fe/64c903e7c1e467ba5e94c52c280295f34b2e4b": "34bcd9b974e788f7a118308ebe001fc3",
".git/objects/fe/a67ada01e3f7d873526e736719389e695db590": "7f5bec4bdabb66c4b2e77c29c97ad3e6",
".git/objects/fe/c316a48785422b9f91d9f64d48400b705a17f8": "fc7a4460208f10fb0aa61bea6df10ebe",
".git/objects/fe/f8c9311b6529f5504b4dd81d2663cb248eb553": "a055b2505c03dc8410b0f4cec61975bf",
".git/objects/ff/095f125b1cc9c0d22627ff869f46926d9383ef": "795b2c5592f9ea6e470395a801118e57",
".git/objects/ff/c7f0f48e91c91df06a2097a427fd5a629759c8": "9b01f9d9ad4f90fb5801b1c0daaed9d9",
".git/ORIG_HEAD": "795625a92ea75dc8ef07260749d7508b",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "b37c036efe11ebc4e69d869978140b55",
".git/refs/remotes/origin/main": "b37c036efe11ebc4e69d869978140b55",
"assets/AssetManifest.json": "77c7d4fb0cde2d985db07353227d99c5",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/icons/ic_GitHub.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/assets/icons/ic_linkedIn.png": "3be0aa4050ddf9998b0d4335ce4d8c7f",
"assets/assets/icons/ic_twitter.png": "84ddf699aee759ad5f3bca5cfd0d00d4",
"assets/assets/images/battery.gif": "1c256c6d596394b6bbbcb462f6fe4808",
"assets/assets/images/gears.gif": "9ad848d21e0b42ff71c75d5240f07ac1",
"assets/assets/images/programmer.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/assets/images/puffin.JPG": "61584ebda8ba22af1bf5e7ae3d90fc66",
"assets/FontManifest.json": "84b65288b758351321dc60b2eea1bf3c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c792ef5a69057eda3505d56c1813a6e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "d21db28c4b72fe31b5d9fcdcc6a40385",
"/": "d21db28c4b72fe31b5d9fcdcc6a40385",
"main.dart.js": "cf0a40e64b9fc0b6fac68b724bea5d40",
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
