import Image from "next/image";
import ntfImage from "../assets/images/ntfimage.jpg";
import Logo from "../assets/images/Logogege.png";
import ntfImagePng from "../assets/images/logofinal.png";
import BannerImage from "../assets/images/banner.png";
import IconImage from "../assets/images/imgmintleft.png";
import neonLogo from "../assets/images/neonLogo.png";
import blackLogo from "../assets/images/blackLogo.png";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Mint = () => {
  const whitelist = [
    "0x640d2de7fe856741c941806afdccb3b8e94cb4fd",
    "0x94ef8cf9ad10d6901fcf58d34daa2d837655a1ac",
    "0xa7576d2b280a1e3fdab746a13c1f1ed48976a27b",
    "0xb6216706731c80d362ce3a7a7bc8468eda9a872d",
    "0xb25eef9df6172f4a93bc7dd06f8327f6e6463ee7",
    "0x16646747c8b3890f59610c1d5e54e2bb55cc85c9",
    "0x580d583272f59597f179c337b6511e61241cbe2f",
    "0xfe83851f01b76e6bac8eb5be568e15f4acbd521f",
    "0x25aef9ef697e70c00f819066b36d94d7748f5e3c",
    "0x44a27367d3e0f4c0c868d158a232ee864ad9764f",
    "0x1b1ef95b959bbefd6a27022411160a0e4b5d2fcc",
    "0xb7a9cc7a94957279e36c15591fce8b9146350e79",
    "0x9b3319caa84a3dba6be70df1eb7af3ca413f8eb1",
    "0xc6895b907ef6631b576bd9aab408410e61d7d27c",
    "0x038617eab39e8f06f72113ca5c240d9d277e0dc3",
    "0x15522cdf11aadd35ee8308fb14ff9fc4a8ab1839",
    "0xeacff32c049216b16faadf4cd38d2ee75ea78d21",
    "0x528b84f882b5b10ffe3a88d9a725e0f7c9b67a28",
    "0x18dd833f5cb10cda775766e95d01f1e9dc0a38cb",
    "0xe498ab3c65254b9b8a08b4fd05ef2a26f66a9c36",
    "0x2424aa0744b9d4879a9f7b27231f070c6183fdd0",
    "0x4be5ea87c855a1b2d6990b8c0daf273efd0c2e40",
    "0x5cc576bd013c093579bb27c596de2dac0914eed6",
    "0xc84c7472b2cbe01fe5ff1801232815b71e225da8",
    "0x5dcc17977f34fbc576d643b6becc0cd530547979",
    "0x362b85bc502ec421fb78eb8ee3842d444f5574e6",
    "0x0bc6f60b55fbb46b8f5872ca290d4a77129d9c3e",
    "0x16081de5ea9b83448c3450dae962b2866aaba925",
    "0x400bb1c0f75cd551915fa8e4c192eb07a9a91ebf",
    "0xd05fd6ed00119204804e88a3e25471b84d7072a7",
    "0x8d3266c47caaaaaec83a081febf8a36299c2a4bb",
    "0xd02e297a7d472889d5cfb2138c0d62624ce0303f",
    "0xe294a3ea7fd3dbdb13d5b5043020026d1c351152",
    "0x1c00e5aecb22744bb5968e3307c2b76cb221ff66",
    "0xb3419f794308ad4d14bc76e20dad1cf7dc9337f9",
    "0x00d9d4f7c04146d17eb0313d0058650e5bad0613",
    "0x1f4e97350b6e56f429daf73f06066f1a720f7c50",
    "0x8dd17f6ddc32fb350d12ba888fbd5d6814e7749e",
    "0x1c93e5414e87ce0221873c97ce75b41c838d0045",
    "0x9e1bc1b3e73dc1a140438967b55d1de83be838b7",
    "0x592e9b98737d7f5864ebeff0944f9b64acede51f",
    "0x8a4675be6d798ef012d713ca78742c8e2c7f0985",
    "0x73cddf71b29954f393afab3e577370e7a4c5fb4b",
    "0xbda88968986143df035ff992cb0d4d03e217f0d8",
    "0x672e0f6b58fc0a703172c787a23f96c34eab6e20",
    "0x91b14234fc9ab21261c02a5d39c50074ceb66bfc",
    "0x925f36c928646e6d137f983794d511f1534c08cc",
    "0x43ec5640e18f7384761d8817aa55d38c9a03d855",
    "0x60bbcfc16ef085bf8d3a0596afe075138734361f",
    "0x142903ab09d096e106a57cc8349a0532fc5cfcd2",
    "0xee09455ce86c2b39b26099dc314ebb4c2d300bd2",
    "0xe4c3b213feb81c70e69121d83661d77fac3650b0",
    "0x7f538566f85310c901172142e8a9a892f0eaf946",
    "0x3f8ad8e5deb9288b30441da13159bb3c0de799f0",
    "0x396df4d946d99c51e89b21d0a39ab36a80e6ec5e",
    "0xbce14a7446a25a8bf26f98b3005a0238bdf47a9b",
    "0xd55fab573968726cdcb5c0b5554d023d77852029",
    "0x28e0b94dcfe9532bff49260ea071a8be55a73dfd",
    "0x774bc1ef76ae573284fd3962a35e71629c2af041",
    "0xd4e5e6830f946349e971bad67775104f0e6d80dc",
    "0x049b775b8698b021bb198374ebb8c0c04bc80db8",
    "0x7d8ac7d63a7f1602c1fabfe76353797424f9bd59",
    "0x298b1222cd08b063279322f4e8ab108a76f2677c",
    "0xd7b5c06011b575a72550aa317b7434edc2b49c5f",
    "0xd298e5d620e7c61ce85bf40eea172d5af37d311f",
    "0x5f9bf0122e1d9fd1c8c62a73c7abc7ada896ca14",
    "0xa25183637f2241989754bd7fb0ab5b581e60bffd",
    "0x2cf63e697a9a10621dd9210c8ea88ef5fda0a228",
    "0x3218686ed9931f11def156156a7d05aab1a8f5a6",
    "0x30b9a68c13939f877316e1f8558c8e3ec0fa6246",
    "0x8444156d26dcc0729856602b73e0bd53576c8712",
    "0x8f240f5e57de39f84fd82d54c36134246ed03da1",
    "0x46fa4433dbf61dd811bad56939bc52509b6ad00f",
    "0xbb34fb9749e5501e1a4aeaee05d9d9fa1f0275a1",
    "0x64af948028cb2ba39ac4305130ed7b156788bf8f",
    "0x5c3080206b42e5efd87f9aec9fffeffcec5d9994",
    "0xb3ff2fc88f842f902be8c13b6fb62cff648ced06",
    "0x6b5eb29727b3f2c0f94610853e75555014460577",
    "0xb2479e40ebcbe1ee94e89c857b67635102b5d13a",
    "0x59a538ddca5a9a019d811f58c01ce53c74068320",
    "0x33023b6d78edfede26cf9f14c259bb7638cc1318",
    "0x15e9e61871ae5aaf73acfc11b55b0ab4da95406c",
    "0x8a4675be6d798ef012d713ca78742c8e2c7f0985",
    "0x0b34ce264ed6ae7474e3a12511700f4524ebd504",
    "0xd551076646ddaeca92810c31bc42da56204310b0",
    "0x2a69f834f5b7b804719573bd829096608d6d4ad2",
    "0x4b6a1c7da37a2c31ce3f4270e53f36d493b32e38",
    "0x2ca57dda9cca2e6b05b0eee4cb231a4a769adff2",
    "0x85e4b9c92f2a40ca2a3c39acde17f9aafe20c285",
    "0xa23b488273c5f667f619f696d3dedecbbaf756cd",
    "0x3aace8e71a831a9b4cc62713e85e32ce975e0a5a",
    "0xa35d798754ec47cf3bbca95714a1883e9a24e554",
    "0x3f4b9764e8a66f046a36ca579d6391a6e8d80ded",
    "0xa56c93f3a4ba628f8a34ebfb500b3e169a7b187c",
    "0x06ab55ee9f1b5d52cdffbf6aad99bad17bd91622",
    "0xdfd6b4f64f67b988c29f5466a4a729aa950bd680",
    "0x867ceaad974643d06fc157c48e7d28ee80082db3",
    "0xa4a808b0ebbe486ff665692c3ef4ae541569b763",
    "0x4e14ba570dd32babb3ed66af55c79a104db57f59",
    "0x17c2549b78439f056024ef500149ee75d818bf7e",
    "0x9f93e1d2fa995e4706e9beb33ccc808c56ccae6b",
    "0x862007c4f16c1755a2f32cb37c83a31ef1f14a9d",
    "0xd3902930c53eb4e77429ed6b3334b07e092ab595",
    "0xf61be8c37ecb3619ad49683df87f100838b8de0e",
    "0x8028bfbbb68ac004e0704161cd080409a8cf2950",
    "0xd19aa0e59a8ed91207f9a26b055cb3540728c6c5",
    "0x7ea8c20418a8fed0b0b97b1dd18717e5112f8016",
    "0x85ff45c903867db97872a456dcba0c2fbf5ff3d2",
    "0x2787894d740a92c4522950835b78b0996604e5d3",
    "0x2fe6ecb0301710301f5c94425b113204b74cee62",
    "0x7fb0beefa7166b098eb089ebe3b4d5ebc399e120",
    "0x0b9e1e84f4799acac4b2d9733bb5b3e24022285a",
    "0x352045580f9b8347b8a1dec4572f04a9653b8e24",
    "0xd4592b61003a3e3ae7036961751161e62b08d204",
    "0x490a688fbee889f8a913f392caa994c874ff2f03",
    "0x594077ca2644fbba4fcc50f374373606bdc52c96",
    "0x6a6d4e8888c932e3de6d15dfd44fe87bcd54c7f9",
    "0x2b8e92afc2dfdf2f732b35b86eaa206981473e6b",
    "0xcd7ab7280b0dbb253eb109381daa07a0163c58b6",
    "0xb0039feeb8d7046818eb1651edd4f90e4d2b6e93",
    "0x6bf50bc9f149c43386e36fe03adc14e798ccc140",
    "0x0f0fdbc88366b3e0bd3d7623255b00a8d60f9e23",
    "0xdfd6b4f64f67b988c29f5466a4a729aa950bd680",
    "0xeecb6eafbb26208b49c06565ca368400e977b53a",
    "0x76cbf9384820848a9a40286e503cb342dd3c8b07",
    "0xceadc50e9e498e8d7bafa52a977a9d058bf6acd8",
    "0xad4dc93136dcaef8dc2fe1517fa7d64873e36525",
    "0x580a613543b4aab1288cc85cb246b9d627282446",
    "0xdfcdc89d63118cc2d6308c30b9de38cc1ed8d2de",
    "0x9913aa317c5ae11180773330e0c20a9d2fb95874",
    "0x1af2543c4b2066b5ed258a9f7c0c4064d1b54cf7",
    "0x0c0ace9c8be6e770c1235777c1dce6b3dce48144",
    "0x0493aa2600f228376d91fa14943977c290b4d940",
    "0x638ccd7e496b2828359f06fe15a67672506b0eb8",
    "0x43986f0794670e27622b0b791838dfd05a99de3c",
    "0x4476ab2c11b74576aa3abfab19dde0aadcfca238",
    "0x4e267850f9306d69d4e6924378dfbf6bddf92987",
    "0x15e9e61871ae5aaf73acfc11b55b0ab4da95406c",
    "0x101c67e1e8d5fedda8f346ab12da4794faf20435",
    "0xb46796e1023e5e69e5667885a119b79ddf859f0d",
    "0x0610a4b90bf7be5eb0529c7901e6f2cdd4acef8d",
    "0x9c08a0851d30c6688531580ccd4678f2c2d58b0e",
    "0xe5c59ee28a4280813f99dcd701f96914c75f7b96",
    "0x38b06dbbc841e872425eefbc222de3fa08d00d27",
    "0xbd9449a239a7ab9d7ed57653b404a77970e6b259",
    "0x2016ca933d95ef5fbc5d82c3d5bd281701bebed5",
    "0x4c4ffe59f8e39d0e68cb3f3e44c3999428a4a412",
    "0xef0aa211f3e8aeaff7ede0638e681b92ce6e58ba",
    "0xcbc6a02d8b73a3db824349596a9d35a3f5cbc9c4",
    "0x6ddd775d21250c9222188c922589e765cf4cc9bc",
    "0x5c8ad9343c76cce594cb3b663410dd2fa1ac0e78",
    "0xa88b4058c91c1f6963047a132e3f8547f6e614b6",
    "0x5cc576bd013c093579bb27c596de2dac0914eed6",
    "0xe14151a0e893189cc2ff4cc7faf6d5cfc7113a40",
    "0xcc8d0af68cc3a6653aebbc08728cdad3de055255",
    "0xcc8d0af68cc3a6653aebbc08728cdad3de055255",
    "0x880da44b9c494b9fccb54bd9c6ad921613ebd98e",
    "0x89e02c1e77623be8155d4f4c05ab627aabe26ff4",
    "0xf71196d24f26b94ec146619aa590abe96a91ed5e",
    "0xde0c60cf413788cda2c9f5c211325d8b498bd171",
    "0xa8c0c3aceb4ceecd0eab9065cb0ad194a3567b1a",
    "0xb975e398a2eab4fb8bfeecfac5f74101250a0ea0",
    "0x5fd78cf7cc4abd29fc520f8fc7bbe5fba32c6369",
    "0xd0dfead3bc061f3da3c5decd2ea8418ff62782b1",
    "0xed2e7071e390c9e3e3841d1bc9a5b9f759c0962c",
    "0x9cad41d79b49412eb274f5a8016abadd487a97e2",
    "0x0ed49bdf4cbd189034bdb178c8ed243850187fa2",
    "0x20d8205be3074aa70e3a713d1a6b04a17e3fd534",
    "0x9d35ec7b213c8a310fbf3d4f0ae6a7708cc619fb",
    "0xfe9bc44ff19ebfedbde799734ef27897685d047b",
    "0x22d0c90510ce62964146f163ee2353dc7e1b7eb1",
    "0x9b0f4f79bf421ab9f25f955de687e4fb59745c2f",
    "0x04842de95939d5197a772cdcf72c8191b8214c42",
    "0x25c59677f83cc6d0b7af2159af6b8b873b5fa4ce",
    "0x3ccfdd92dbe4a95c756a786d68fa74efdf06c79b",
    "0xfedfd3afcce8d84d30152acadd065cf8f691bfb7",
    "0x3f38fd15b1ac453410d8d55e0ec6696e70be93a1",
    "0x00d0cd6b14d8cec34f94e3a05aa7f899ac8758a0",
    "0x10caf6177daf39ca35f5e1b40b4205a2496b7aba",
    "0x7a1c134b7c37802d7164c1f6197e9431cadfc786",
    "0x0af3997e63a520cd0da66a53105de37a2fe410a0",
    "0x07be1cdd0fe5407bd943b698b06045e7758e708c",
    "0xed8394f221298dbea75a3407b15c7161d678daaf",
    "0xa9a51e4c5ee7782469230e0a732b3587e2eed04e",
    "0xcf01e34a1962cfa36da70d7cc518d1992df43acf",
    "0x30b7136c1c96b53bd15dd09ada48cbab18cf5a18",
    "0xb47832ca65e661b2b54de39f24775c1d82c216f9",
    "0x76d90a07904f4702dbc7ec0ef4e829bdfb17adaf",
    "0x24ba0a1381c48c09c9e4f3d18be02418363e34c5",
    "0xf2076d4bfd112cfee3c6b17d6ba5670e8408dd73",
    "0x340294b5c697b02db375e7bdb5aebcf1ce624b89",
    "0x1ae94af0b6a7c33718d006091b7be2dc3b7186be",
    "0xce3a86c878e968b94635bb08624f74eb01ba0dd2",
    "0x5c363cd53bd265779c25f6aa536ab6dd8ebc662a",
    "0x35661d474998ca42c0971d6bb446ae2602865da0",
    "0xde2243f45f76727ecba613aa327879a025f85738",
    "0x0945be11418b180ec8dfe0447a9be1c15fb1bead",
    "0xa1accc7f86de98d81a7951afc846583a358c5e8e",
    "0x15e9e61871ae5aaf73acfc11b55b0ab4da95406c",
    "0xc377aba9732e1d679ad6446c9c88b14c3d236b69",
    "0x17e780314de59e0ba7120633a5d4c767bc6a11e3",
    "0x240931fb7d03bf3e0a5a2041267ef28368a4d9bf",
    "0xc3f9cf67f3e4c28bcf62436fff2fa18c46c41b96",
    "0xd14b91331d1ec4c43bcdeb1edcda6975a8c3b3b6",
    "0x590d75fa4f72942393c947c8dcebc81e749c54ce",
    "0x340294b5c697b02db375e7bdb5aebcf1ce624b89",
    "0xbe91a70f1886dc4c2c41ac52606db4cbb9519e79",
    "0x712e6bba75b1c1415018f53c455e20b9a5b8d4c9",
    "0xb097a64aba66b2c4404e453640213836a5acf2a6",
    "0x11601a384eb2611ef2f4702c449b2567396137be",
    "0x6835214d87af39a43159e9340e41a9ed4bb8b671",
    "0xc61b428a2159c0e6e60dd37fcdc07f7d0e22dd62",
    "0xc650fed7f41737280f8277adb3b3e9fa3db94a77",
    "0x27ff19ad4347ddf65b43ef79e20ac709e23ca9d5",
    "0x6645d156540d03df0517b8910339558de61bd5d8",
    "0x0b5f517a7dea743a7a99a2b80c91ba86bab4e3f6",
    "0x357723925dcdfcaefab156b40f5fe58e887c3cb6",
    "0x695b82186f2897b91593f744943392b3043b32ae",
    "0x2831a933f8552d0233ebb4a4f487ece230e068b9",
    "0xddd0fb4c183ad725cc2956ae0d17357fbe7d9c2e",
    "0x0f3d4595750062e9c29f6a2ab404126693c71ad2",
    "0xcf1fa16a7dfd68685230362c6f46de54dfa5ed8f",
    "0xffe5036be280896c722560c6f1ea11f677dcc1e6",
    "0x8a53a3880fe948316d36cdc756c5138179804cd2",
    "0x443452e7f0f5da7fd912ea5006bf4f278c13ea7c",
    "0x045e7ce65c0c65a32c01d59567cdc1f923f7c5fe",
    "0x511a5d7a2178ba44cc44c4cf1daea82bb2d51a2b",
    "51c7945095901ebbb9779da6454cdede3f8540fb",
    "0x8dee914e007e1ab60c2bb05650b16f5e1d85bd2f",
    "0x872eab8a707cf6ba69b4c2fb0f2c274998fede47",
    "0x164b125bb5d66cc15fa0def88a20e9ec49dd1f09",
    "0xc89a38705f0a8c9b6f05b3e98fca70996e299e57",
    "0xd3a83679c81b7ef022f53b2b4cabff070e3b5c9c",
    "0x5d7c85d6ed202494e397357efd14621e91424238",
    "0xa9d13f91f4f7f387c0f5c549d0fd17935d7f86cb",
    "0x09372e75d827e9880842515035700121281d7cc4",
    "0x2915a1fdefa79da639d5d3b6bf907481fcd6d205",
    "0x6b30e04992584eb2d917f4924272527c8ce2255a",
    "0xf85d8406acbaca3c3e69b2fefaeeb050c427337b",
    "0x771ac9279cdeb755995a13d96d773e064566cf99",
    "0xb38e7ecb41e70835e3825a8cc114a42b1f773c27",
    "0xb6ac2ba875aaf70ee0a6b327769ef5318599eef2",
    "0x02817cfb1a4c8ab29cde4f25591fc92f5e70bec4",
    "0xcc6f1321a0d1606b1635d9a31ad7f489a3ec2537",
    "0x761beec14f25ed2c243f90192737af6076b60f84",
    "0x6100d8e7291425eeab21cedacaa4a1da746e79cb",
    "0x5be818bcd43760ec3968a9aa31a4757312550925",
    "0x8f2827ffcd9d8dca35110049482aa70b079c6b01",
    "0x0dd480b9b8209b2a1438db721c2ae904df749818",
    "0xa5f8756147a4ebfb40bd32f4c789534b9fc1e017",
    "0x2f06add82fb5dceb27c16f634830a82b0d349bb3",
    "0xed4e57777c95fb3c1c5ca9c4531942b0f56e0912",
    "0xd49d0b5d4dc4d5fd34a80ce3ca98d389d96199a5",
    "0x01399d08cbcdb14267e1ab212a213110828a2cf8",
    "0x17e780314de59e0ba7120633a5d4c767bc6a11e3",
    "0x1892eb7bc7f2032fc81799aaed8279a03c2cf380",
    "0x7b0961a0f35cf0516a7047db737b33a20e56189e",
    "0x38b97b9fbf78c423196ea0cda490cd2496f92ab8",
    "0xa7b4196e95bb73a1946411d1cefd1cb881fd5b87",
    "0x084405086372c3924cd7663544433a81319f8b91",
    "0xe031b52c05b967e00f51f39e6d455530e5fabc7d",
    "0x4119e300f51bdd6a8b8151232504aa08b263ead2",
    "0x798b64a1cc38b31b21ff13ad462b816bcf44d5b7",
    "0xd21872daf984c74024fa823abdad9928edc1995a",
    "0xed7ad5c39f972ba55cd1010ec41c6412e04e3aca",
    "0x270b3333fabffa6ddc9c85ee642b80f25407a25e",
    "0x17cf9fc3fa7e3d727c8d4fe43dbfadb7784d369c",
    "0x92f3a59bc9cea7e8d2103b40959e824149f45631",
    "0x711718d47e26c7bf9f511f58938103a114fd96ae",
    "0x6c1887b41606a97b6bb8d149b1d75e430748eb49",
    "0x632f0c65b1c58b792a8e78fd6631ddfca04231a0",
    "0xfebe7837ccbdc103eedef87e8fd7405012066097",
    "0x9f5342b59cf2e92006855ede1a90924c565c3afe",
    "0xf40a2acdcfe747103ab4cdd4182807c148ad91ae",
    "0xf1af314212a43901e3cc6b514c5dc1b197b40d95",
    "0x01c83cce1efee75e89dc4c1a6197d8408cab0968",
    "0x6645d156540d03df0517b8910339558de61bd5d8",
    "0x4f3590fb742e261b424cbe238ea8294f51f8c97f",
    "0x389245ccf3dd810f49e7c9fbe13c3f158c6942f8",
    "0xe125445cfdf8b801dbe7872203821307934e0a5b",
    "0xb47832ca65e661b2b54de39f24775c1d82c216f9",
    "0x76d8b3b4d3e3c44c931c011f0494de4b07c751ac",
    "0x96a8f1769fcd2ec69b36599be509ac83bbe78b38",
    "0x381572637e9e216079d45288c04650c359c38b45",
    "0x8dd9b1cbcd446395956eb6c8523fc2a43385c78b",
    "0x12eb9c244d1feab316eca022bbe03193a3844294",
    "0xf8e8b04c382eb35209ec0b003c7eb93d331afd33",
    "0xb0dcbdf630bf46d71b9e30b0fc8154faeb99a28a",
    "0x23add6ec521cf7611a5b19f4fe8eae61973e56c3",
    "0xb20dc0800262b7ba394ee61bf19a6e2dc2960e35",
    "0x1145eecb7e6a5495288c6a9806e330879b398666",
    "0x2f4f6449a93a20e1a9f45106092f0632a119f6eb",
    "0xd64ba319a73bfde7293431d8882093050c12a522",
    "0x18daef405ebd1dfc025e2d1fd40f9b1f37ec036d",
    "0xe1b82dfefce4c44e24f971ec97e2d45a7e86673d",
    "0x340294b5c697b02db375e7bdb5aebcf1ce624b89",
    "0x9e31bc05ac358e5ae4317400871bb2b20cf91997",
    "0x3a1e43425cd5ee5b07f32899b0d9f69ce43182b1",
    "0xa7e5890ccfeacb71b6b01b44b03c035d6ea20830",
    "0xe519e23fbf1a88bf9387fedd662778b0b348e56a",
    "0x9249ebc71d14523b41330677357e2c3288d12c39",
    "0x0236c74960964f40bc46f9af9ec0ccd63531636e",
    "0xbb33221beac1bfc69bd6d27e02dfffcb83074d8b",
    "0x01240500001dabca7c4a9aa54492819e02243547",
    "0xc40c707a99ac4ac713028ace056a92d8fc3ab086",
    "0x3dde936f5641e68f0d1a6280260032838cafafd0",
    "0x9cad41d79b49412eb274f5a8016abadd487a97e2",
    "0xc50a3fdaa2372644557fa9a45482c9049ac61f32",
    "0xa4a124785ab1135baf9c0758e59c38cd9b655328",
    "0x16081de5ea9b83448c3450dae962b2866aaba925",
    "0x64ebb3f01a55a29b8917a5a27a8fc0261a86a835",
    "0x240931fb7d03bf3e0a5a2041267ef28368a4d9bf",
    "0xcf07669e0c35391b1d736302e116c42f2985cff9",
    "0xf85d8406acbaca3c3e69b2fefaeeb050c427337b",
    "0x8ee3d2ee15804c8b3289143ba41de1ca00150011",
    "8a5mgmrkahpgwruxncdmxojqjebt8swcrhudruxo6zdf",
    "0xc168f7af61402b871c1736444decf0264a694b96",
    "0xf5b90d674a430a72a77e031b10fbcec24224c487",
    "0xea5e2ce63323d962556dcd3e8a6002293bc0caac",
    "0xaf0a7dae57f3ecb6f2f30b083e46557fdf4b38b7",
    "0xa0aad8006e2f480036c24ec8425a4febdc0fb54e",
    "0xbf077a01fa200d746b3ab9c5168b69ad048bba1b",
    "0x3b8d8f9194a9d46249bbd62e9a0931957a1d2a25",
    "0xc693ef6ee91f194ab5c4805a4c0b2c64b62106cc",
    "0x70519eb2fc10c57e6c21b952df1b75e89bfd8256",
    "0x919765da8f8aec9f4638e6266a17a44e5dbd29a8",
    "0x9de4e4cc181d9d1966ab58e07378ef225425ccf0",
    "0x16e9cfe34541d8601da1fab1707fe2b1b867887f",
    "0x477fda7ec7adb3768b94a846ee75f39fc0210c89",
    "0xa3bcc5244b48c142a2ce8fb91e221704873531ab",
    "0x48494a5b6e576b37cfdb84beacbc4f6c94723705",
    "0xb9bcb3c153dbf96c826fd2bf00154a8868b30ee2",
    "0x6399b8a7d2560a38efeb73d336302bc427e7136c",
    "0xa5f8756147a4ebfb40bd32f4c789534b9fc1e017",
  ];
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [mintValue, SetMintValue] = useState(1);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);
  const claimNFTs = () => {
    console.log("first");
    if (mintValue <= 0) {
      return;
    }
    if (!whitelist.includes(blockchain.account)) {
      alert("You are not in whitelist!");
      return;
    }
    setFeedback("Minting your Ethclusive NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintValue)
      .send({
        gasLimit: `${160000 * mintValue}`,
        to: "0x08b1AAef9fD158BbDF21C3Cad6408aFA7D35DF4c",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (0.06 * mintValue).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a Etclusive NFT go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  const connectWallet = () => {
    e.preventDefault();
    dispatch(connect());
    getData();
    return;
  };
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  return (
    <div
      id="mint"
      data-aos="fade-up"
      className="neondiv text-white lg:rounded-lg lg:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10"
    >
      <div className="text-cente flex justify-evenly items-center neontextyellowr text-5xl mb-5">
        <hr className="w-5/12 in:hidden lineneonpink"></hr>
        <h1 className="neontextyellow">Mint</h1>
        <hr className="w-5/12 in:hidden lineneonpink"></hr>
      </div>
      <div className="ni:flex">
        <div className="ni:w-1/2 in:hidden flex justify-center items-center">
          <Image alt="" src={neonLogo} />
        </div>
        <div className="ni:w-1/2 m-5 p-5 border-4 lineneonpink rounded-lg ">
          <div className="flex w-full">
            <div className="w-8/12 font-bold">
              <h1 className="text-2xl mb-3">Degentlemens club</h1>
              <h4 className="text-lg mb-3">
                {blockchain.account === "" || blockchain.smartContract === null
                  ? "Connect to blockchain"
                  : `${Number(data.totalSupply)}/6000 Degents Minted! LFG`}
              </h4>
            </div>
            <div className="w-4/12 flex justify-center negativeBannerImg">
              <Image alt="" objectFit="cover" src={BannerImage} />
            </div>
          </div>

          <div className="h-1/2">
            <div className="flex justify-between ni:text-2xl mt-5">
              <input
                className="bg-transparent w-full"
                placeholder="0.06 ETH"
                type="number"
              />
            </div>
            <div className="flex justify-between border-t-2 border-b-2 border-white my-5 py-2 ni:text-2xl">
              <h1>TOTAL</h1>
              <h1>{`${mintValue * 0.06} ETH`}</h1>
            </div>
            <div className="space-y-2">
              <select
                className="MintBtn bg-transparent"
                onChange={(e) => SetMintValue(Number(e.target.value))}
                disabled={
                  blockchain.account === "" || blockchain.smartContract === null
                }
              >
                <option value={0}>Select Mint Amount</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button
                className="MintBtn "
                onClick={(e) => {
                  if (
                    blockchain.account === "" ||
                    blockchain.smartContract === null
                  ) {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  } else {
                    claimNFTs();
                  }
                }}
              >
                {blockchain.account === "" || blockchain.smartContract === null
                  ? "Connect"
                  : "Mint"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
