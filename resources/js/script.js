function addComma(value) {
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return value;
}

function createProductHtml(product) {
    let img = product.productImage;
    let pName = product.productName;
    let price = product.productPrice;
    return "<div class='product-wrapper' data-code='" + product.productCode + "'><div class='product-img-wrapper'><img src='" + IMG_PATH + img + "' />"
        + "</div><p class='product-name'>" + pName + "</p><p class='product-price price'>" + addComma(price) + "</p></div>";
}

const IMG_PATH = "../images/products/"

//products = [{"categoryCode":"C100","categoryName":"버거","productList":[{"productCode":"P1013","productName":"스태커4 와퍼","productPrice":13600,"productDetails":"믿고 먹을수 있는 와퍼, 더 크게 도전하세요!","productImage":"P1013.PNG","isBundle":false},{"productCode":"P1012","productName":"스태커3 와퍼","productPrice":11600,"productDetails":"믿고 먹을수 있는 와퍼, 더 크게 도전하세요!","productImage":"P1012.PNG","isBundle":false},{"productCode":"P1011","productName":"기네스 머쉬룸 와퍼","productPrice":9800,"productDetails":"기네스 번과 기네스 바비큐 소스의 풍미!","productImage":"P1011.PNG","isBundle":false},{"productCode":"P1010","productName":"기네스 와퍼","productPrice":9400,"productDetails":"기네스 번과 기네스 바비큐 소스의 풍미!","productImage":"P1010.PNG","isBundle":false},{"productCode":"P1009","productName":"몬스터 와퍼","productPrice":9400,"productDetails":"불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛","productImage":"P1009.PNG","isBundle":false},{"productCode":"P1008","productName":"콰트로치즈 와퍼","productPrice":7800,"productDetails":"진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!","productImage":"P1008.PNG","isBundle":false},{"productCode":"P1001","productName":"와퍼","productPrice":7000,"productDetails":"불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!","productImage":"P1001.PNG","isBundle":false},{"productCode":"P1006","productName":"고추장 소불고기버거","productPrice":5200,"productDetails":"부드러운 소불고기에 매콤함을 더하다!","productImage":"P1006.PNG","isBundle":false},{"productCode":"P1005","productName":"작화소불고기버거","productPrice":6800,"productDetails":"패티까지! 진짜 불고기!","productImage":"P1005.PNG","isBundle":false},{"productCode":"P1004","productName":"베이컨치즈와퍼","productPrice":8800,"productDetails":"풍미 가득한 아메리칸 클래식의 완벽한 조화!","productImage":"P1004.PNG","isBundle":false},{"productCode":"P1003","productName":"불고기 와퍼","productPrice":7000,"productDetails":"불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!","productImage":"P1003.PNG","isBundle":false},{"productCode":"P1002","productName":"치즈 와퍼","productPrice":7600,"productDetails":"불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!","productImage":"P1002.PNG","isBundle":false},{"productCode":"P1007","productName":"통새우 와퍼","productPrice":7800,"productDetails":"불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거","productImage":"P1007.PNG","isBundle":false}]},{"categoryCode":"C200","categoryName":"음료","productList":[{"productCode":"P1026","productName":"아메리카노","productPrice":2200,"productDetails":"자연을 담은 버거킹 RA인증커피","productImage":"P1026.PNG","isBundle":true},{"productCode":"P1025","productName":"제로톡톡 청포도","productPrice":2800,"productDetails":"제로 칼로리 100% 천연 과일향 드링크","productImage":"P1025.PNG","isBundle":true},{"productCode":"P1024","productName":"제로톡톡 복숭아","productPrice":2800,"productDetails":"제로 칼로리 100% 천연 과일향 드링크","productImage":"P1024.PNG","isBundle":true},{"productCode":"P1023","productName":"씨그램-라지","productPrice":2700,"productImage":"P1023.PNG","productOptions":"P1022","isBundle":true},{"productCode":"P1022","productName":"씨그램","productPrice":2500,"productImage":"P1022.PNG","isBundle":true},{"productCode":"P1021","productName":"미닛메이드 오렌지","productPrice":3400,"productImage":"P1021.PNG","isBundle":true},{"productCode":"P1020","productName":"미네랄 워터","productPrice":1900,"productImage":"P1020.PNG","isBundle":true},{"productCode":"P1019","productName":"스프라이트-라지","productPrice":2700,"productDetails":"나를 깨우는 상쾌함!","productImage":"P1019.PNG","productOptions":"P1018","isBundle":true},{"productCode":"P1018","productName":"스프라이트","productPrice":2500,"productDetails":"나를 깨우는 상쾌함!","productImage":"P1018.PNG","isBundle":true},{"productCode":"P1017","productName":"코카콜라 제로-라지","productPrice":2700,"productDetails":"100%짜릿함, 칼로리는 제로!","productImage":"P1017.PNG","productOptions":"P1016","isBundle":true},{"productCode":"P1016","productName":"코카콜라 제로","productPrice":2500,"productDetails":"100%짜릿함, 칼로리는 제로!","productImage":"P1016.PNG","isBundle":true},{"productCode":"P1015","productName":"코카콜라-라지","productPrice":2700,"productDetails":"코카-콜라로 더 짜릿하게!","productImage":"P1015.PNG","productOptions":"P1014","isBundle":true},{"productCode":"P1014","productName":"코카콜라","productPrice":2500,"productDetails":"코카-콜라로 더 짜릿하게!","productImage":"P1014.PNG","isBundle":true},{"productCode":"P1027","productName":"아이스 아메리카노","productPrice":2200,"productDetails":"자연을 담은 버거킹 RA인증커피","productImage":"P1027.PNG","productOptions":"P1026","isBundle":true},{"productCode":"P1029","productName":"아이스 초코","productPrice":2700,"productDetails":"달콤한 초코!","productImage":"P1029.PNG","productOptions":"P1028","isBundle":true},{"productCode":"P1028","productName":"핫초코","productPrice":2700,"productDetails":"달콤한 초코!","productImage":"P1028.PNG","isBundle":true}]},{"categoryCode":"C300","categoryName":"사이드","productList":[{"productCode":"P1030","productName":"프렌치프라이","productPrice":2400,"productDetails":"세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!","productImage":"P1030.PNG","isBundle":true},{"productCode":"P1031","productName":"프렌치프라이-라지","productPrice":2900,"productDetails":"세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!","productImage":"P1031.PNG","productOptions":"P1030","isBundle":true},{"productCode":"P1045","productName":"쉐이킹프라이 구운갈릭","productPrice":2700,"productDetails":"깊은 풍미가 느껴지는 시즈닝으로 취향 저격!","productImage":"P1045.PNG","productOptions":"P1043","isBundle":true},{"productCode":"P1044","productName":"쉐이킹프라이 스윗어니언","productPrice":2700,"productDetails":"깊은 풍미가 느껴지는 시즈닝으로 취향 저격!","productImage":"P1044.PNG","productOptions":"P1043","isBundle":true},{"productCode":"P1043","productName":"쉐이킹프라이 매콤치즈","productPrice":2700,"productDetails":"깊은 풍미가 느껴지는 시즈닝으로 취향 저격!","productImage":"P1043.PNG","isBundle":true},{"productCode":"P1042","productName":"코코넛쉬림프(6조각)","productPrice":7200,"productDetails":"바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스","productImage":"P1042.PNG","productOptions":"P1041","isBundle":true},{"productCode":"P1041","productName":"코코넛쉬림프(3조각)","productPrice":4200,"productDetails":"바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스","productImage":"P1041.PNG","isBundle":true},{"productCode":"P1040","productName":"크리미모짜볼(10조각)","productPrice":5100,"productDetails":"겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!","productImage":"P1040.PNG","productOptions":"P1039","isBundle":true},{"productCode":"P1039","productName":"크리미모짜볼(5조각)","productPrice":3000,"productDetails":"겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!","productImage":"P1039.PNG","isBundle":true},{"productCode":"P1032","productName":"어니언링","productPrice":2700,"productImage":"P1032.PNG","isBundle":true},{"productCode":"P1033","productName":"치즈프라이","productPrice":3300,"productImage":"P1033.PNG","isBundle":true},{"productCode":"P1034","productName":"21치즈스틱","productPrice":2400,"productImage":"P1034.PNG","isBundle":true},{"productCode":"P1035","productName":"너겟킹(4조각)","productPrice":2700,"productDetails":"바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!","productImage":"P1035.PNG","isBundle":true},{"productCode":"P1036","productName":"너겟킹(6조각)","productPrice":3700,"productDetails":"바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!","productImage":"P1036.PNG","productOptions":"P1035","isBundle":true},{"productCode":"P1037","productName":"바삭킹(2조각)","productPrice":3500,"productDetails":"매콤하게! 바삭하게 튀긴 치킨윙","productImage":"P1037.PNG","isBundle":true},{"productCode":"P1038","productName":"바삭킹(4조각)","productPrice":6300,"productDetails":"매콤하게! 바삭하게 튀긴 치킨윙","productImage":"P1038.PNG","productOptions":"P1037","isBundle":true}]},{"categoryCode":"C400","categoryName":"디저트","productList":[{"productCode":"P1051","productName":"선데 바나나","productPrice":1900,"productDetails":"부드러운 아이스크림에 바나나가 쏙!","productImage":"P1051.PNG","isBundle":true},{"productCode":"P1052","productName":"선데 딸기바나나","productPrice":1900,"productDetails":"부드러운 아이스크림에 딸기가 쏙!","productImage":"P1052.PNG","isBundle":true},{"productCode":"P1050","productName":"선데 딸기","productPrice":1500,"productDetails":"딸기맛의 상큼함이 살아있어요!","productImage":"P1050.PNG","isBundle":true},{"productCode":"P1049","productName":"선데 초코","productPrice":1500,"productDetails":"달콤하고 진한 초코의 맛!","productImage":"P1049.PNG","isBundle":true},{"productCode":"P1048","productName":"선데 바닐라","productPrice":1500,"productDetails":"향긋한 바닐라 향 때문에 더 맛있다!","productImage":"P1048.PNG","isBundle":true},{"productCode":"P1047","productName":"콘 아이스크림","productPrice":900,"productDetails":"천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림","productImage":"P1047.PNG","isBundle":true},{"productCode":"P1046","productName":"컵 아이스크림","productPrice":900,"productDetails":"천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림","productImage":"P1046.PNG","isBundle":true},{"productCode":"P1053","productName":"선데 초코바나나","productPrice":1900,"productDetails":"부드러운 아이스크림에 초코가 쏙!","productImage":"P1053.PNG","isBundle":true}]}]
//products = [{"categoryCode":"C100","categoryName":"버거","productList":[{"productCode":"P1013","productName":"스태커4 와퍼","productPrice":13600,"productDetails":"믿고 먹을수 있는 와퍼, 더 크게 도전하세요!","productImage":"P1013.PNG","isBundle":false},{"productCode":"P1012","productName":"스태커3 와퍼","productPrice":11600,"productDetails":"믿고 먹을수 있는 와퍼, 더 크게 도전하세요!","productImage":"P1012.PNG","isBundle":false},{"productCode":"P1011","productName":"기네스 머쉬룸 와퍼","productPrice":9800,"productDetails":"기네스 번과 기네스 바비큐 소스의 풍미!","productImage":"P1011.PNG","isBundle":false},{"productCode":"P1010","productName":"기네스 와퍼","productPrice":9400,"productDetails":"기네스 번과 기네스 바비큐 소스의 풍미!","productImage":"P1010.PNG","isBundle":false},{"productCode":"P1009","productName":"몬스터 와퍼","productPrice":9400,"productDetails":"불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛","productImage":"P1009.PNG","isBundle":false},{"productCode":"P1008","productName":"콰트로치즈 와퍼","productPrice":7800,"productDetails":"진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!","productImage":"P1008.PNG","isBundle":false},{"productCode":"P1001","productName":"와퍼","productPrice":7000,"productDetails":"불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!","productImage":"P1001.PNG","isBundle":false},{"productCode":"P1006","productName":"고추장 소불고기버거","productPrice":5200,"productDetails":"부드러운 소불고기에 매콤함을 더하다!","productImage":"P1006.PNG","isBundle":false},{"productCode":"P1005","productName":"작화소불고기버거","productPrice":6800,"productDetails":"패티까지! 진짜 불고기!","productImage":"P1005.PNG","isBundle":false},{"productCode":"P1004","productName":"베이컨치즈와퍼","productPrice":8800,"productDetails":"풍미 가득한 아메리칸 클래식의 완벽한 조화!","productImage":"P1004.PNG","isBundle":false},{"productCode":"P1003","productName":"불고기 와퍼","productPrice":7000,"productDetails":"불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!","productImage":"P1003.PNG","isBundle":false},{"productCode":"P1002","productName":"치즈 와퍼","productPrice":7600,"productDetails":"불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!","productImage":"P1002.PNG","isBundle":false},{"productCode":"P1007","productName":"통새우 와퍼","productPrice":7800,"productDetails":"불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거","productImage":"P1007.PNG","isBundle":false}]},{"categoryCode":"C200","categoryName":"음료","productList":[{"productCode":"P1026","productName":"아메리카노","productPrice":2200,"productDetails":"자연을 담은 버거킹 RA인증커피","productImage":"P1026.PNG","isBundle":true},{"productCode":"P1025","productName":"제로톡톡 청포도","productPrice":2800,"productDetails":"제로 칼로리 100% 천연 과일향 드링크","productImage":"P1025.PNG","isBundle":true},{"productCode":"P1024","productName":"제로톡톡 복숭아","productPrice":2800,"productDetails":"제로 칼로리 100% 천연 과일향 드링크","productImage":"P1024.PNG","isBundle":true},{"productCode":"P1023","productName":"씨그램-라지","productPrice":2700,"productImage":"P1023.PNG","productOptions":"P1022","isBundle":true},{"productCode":"P1022","productName":"씨그램","productPrice":2500,"productImage":"P1022.PNG","isBundle":true},{"productCode":"P1021","productName":"미닛메이드 오렌지","productPrice":3400,"productImage":"P1021.PNG","isBundle":true},{"productCode":"P1020","productName":"미네랄 워터","productPrice":1900,"productImage":"P1020.PNG","isBundle":true},{"productCode":"P1019","productName":"스프라이트-라지","productPrice":2700,"productDetails":"나를 깨우는 상쾌함!","productImage":"P1019.PNG","productOptions":"P1018","isBundle":true},{"productCode":"P1018","productName":"스프라이트","productPrice":2500,"productDetails":"나를 깨우는 상쾌함!","productImage":"P1018.PNG","isBundle":true},{"productCode":"P1017","productName":"코카콜라 제로-라지","productPrice":2700,"productDetails":"100%짜릿함, 칼로리는 제로!","productImage":"P1017.PNG","productOptions":"P1016","isBundle":true},{"productCode":"P1016","productName":"코카콜라 제로","productPrice":2500,"productDetails":"100%짜릿함, 칼로리는 제로!","productImage":"P1016.PNG","isBundle":true},{"productCode":"P1015","productName":"코카콜라-라지","productPrice":2700,"productDetails":"코카-콜라로 더 짜릿하게!","productImage":"P1015.PNG","productOptions":"P1014","isBundle":true},{"productCode":"P1014","productName":"코카콜라","productPrice":2500,"productDetails":"코카-콜라로 더 짜릿하게!","productImage":"P1014.PNG","isBundle":true},{"productCode":"P1027","productName":"아이스 아메리카노","productPrice":2200,"productDetails":"자연을 담은 버거킹 RA인증커피","productImage":"P1027.PNG","productOptions":"P1026","isBundle":true},{"productCode":"P1029","productName":"아이스 초코","productPrice":2700,"productDetails":"달콤한 초코!","productImage":"P1029.PNG","productOptions":"P1028","isBundle":true},{"productCode":"P1028","productName":"핫초코","productPrice":2700,"productDetails":"달콤한 초코!","productImage":"P1028.PNG","isBundle":true}]},{"categoryCode":"C300","categoryName":"사이드","productList":[{"productCode":"P1030","productName":"프렌치프라이","productPrice":2400,"productDetails":"세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!","productImage":"P1030.PNG","isBundle":true},{"productCode":"P1031","productName":"프렌치프라이-라지","productPrice":2900,"productDetails":"세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!","productImage":"P1031.PNG","productOptions":"P1030","isBundle":true},{"productCode":"P1045","productName":"쉐이킹프라이 구운갈릭","productPrice":2700,"productDetails":"깊은 풍미가 느껴지는 시즈닝으로 취향 저격!","productImage":"P1045.PNG","productOptions":"P1043","isBundle":true},{"productCode":"P1044","productName":"쉐이킹프라이 스윗어니언","productPrice":2700,"productDetails":"깊은 풍미가 느껴지는 시즈닝으로 취향 저격!","productImage":"P1044.PNG","productOptions":"P1043","isBundle":true},{"productCode":"P1043","productName":"쉐이킹프라이 매콤치즈","productPrice":2700,"productDetails":"깊은 풍미가 느껴지는 시즈닝으로 취향 저격!","productImage":"P1043.PNG","isBundle":true},{"productCode":"P1042","productName":"코코넛쉬림프(6조각)","productPrice":7200,"productDetails":"바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스","productImage":"P1042.PNG","productOptions":"P1041","isBundle":true},{"productCode":"P1041","productName":"코코넛쉬림프(3조각)","productPrice":4200,"productDetails":"바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스","productImage":"P1041.PNG","isBundle":true},{"productCode":"P1040","productName":"크리미모짜볼(10조각)","productPrice":5100,"productDetails":"겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!","productImage":"P1040.PNG","productOptions":"P1039","isBundle":true},{"productCode":"P1039","productName":"크리미모짜볼(5조각)","productPrice":3000,"productDetails":"겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!","productImage":"P1039.PNG","isBundle":true},{"productCode":"P1032","productName":"어니언링","productPrice":2700,"productImage":"P1032.PNG","isBundle":true},{"productCode":"P1033","productName":"치즈프라이","productPrice":3300,"productImage":"P1033.PNG","isBundle":true},{"productCode":"P1034","productName":"21치즈스틱","productPrice":2400,"productImage":"P1034.PNG","isBundle":true},{"productCode":"P1035","productName":"너겟킹(4조각)","productPrice":2700,"productDetails":"바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!","productImage":"P1035.PNG","isBundle":true},{"productCode":"P1036","productName":"너겟킹(6조각)","productPrice":3700,"productDetails":"바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!","productImage":"P1036.PNG","productOptions":"P1035","isBundle":true},{"productCode":"P1037","productName":"바삭킹(2조각)","productPrice":3500,"productDetails":"매콤하게! 바삭하게 튀긴 치킨윙","productImage":"P1037.PNG","isBundle":true},{"productCode":"P1038","productName":"바삭킹(4조각)","productPrice":6300,"productDetails":"매콤하게! 바삭하게 튀긴 치킨윙","productImage":"P1038.PNG","productOptions":"P1037","isBundle":true}]},{"categoryCode":"C400","categoryName":"디저트","productList":[{"productCode":"P1051","productName":"선데 바나나","productPrice":1900,"productDetails":"부드러운 아이스크림에 바나나가 쏙!","productImage":"P1051.PNG","isBundle":true},{"productCode":"P1052","productName":"선데 딸기바나나","productPrice":1900,"productDetails":"부드러운 아이스크림에 딸기가 쏙!","productImage":"P1052.PNG","isBundle":true},{"productCode":"P1050","productName":"선데 딸기","productPrice":1500,"productDetails":"딸기맛의 상큼함이 살아있어요!","productImage":"P1050.PNG","isBundle":true},{"productCode":"P1049","productName":"선데 초코","productPrice":1500,"productDetails":"달콤하고 진한 초코의 맛!","productImage":"P1049.PNG","isBundle":true},{"productCode":"P1048","productName":"선데 바닐라","productPrice":1500,"productDetails":"향긋한 바닐라 향 때문에 더 맛있다!","productImage":"P1048.PNG","isBundle":true},{"productCode":"P1047","productName":"콘 아이스크림","productPrice":900,"productDetails":"천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림","productImage":"P1047.PNG","isBundle":true},{"productCode":"P1046","productName":"컵 아이스크림","productPrice":900,"productDetails":"천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림","productImage":"P1046.PNG","isBundle":true},{"productCode":"P1053","productName":"선데 초코바나나","productPrice":1900,"productDetails":"부드러운 아이스크림에 초코가 쏙!","productImage":"P1053.PNG","isBundle":true}]}]
//bundles = [{"productCode":"S1000001","productName":"와퍼 세트","productPrice":9300,"productImage":"S1000001","isBundle":false},{"productCode":"S1000002","productName":"치즈 와퍼 세트","productPrice":9900,"productImage":"S1000002","isBundle":false},{"productCode":"S1000003","productName":"불고기 와퍼 세트","productPrice":9600,"productImage":"S1000003","isBundle":false},{"productCode":"S1000004","productName":"통새우 와퍼 세트","productPrice":10100,"productImage":"S1000004","isBundle":false},{"productCode":"S1000005","productName":"콰트로치즈 와퍼 세트","productPrice":10100,"productImage":"S1000005","isBundle":false},{"productCode":"S1000006","productName":"몬스터 와퍼 세트","productPrice":10700,"productImage":"S1000006","isBundle":false},{"productCode":"S1000007","productName":"기네스 와퍼 세트","productPrice":11400,"productImage":"S1000007","isBundle":false},{"productCode":"S1000009","productName":"스태커3 와퍼 세트","productPrice":14200,"productImage":"S1000009","isBundle":false},{"productCode":"S1000010","productName":"스태커4 와퍼 세트","productPrice":15900,"productImage":"S1000010","isBundle":false}];
//bundles = [{"bundleCode":"S1001","bundleName":"와퍼 세트","bundleDetails":"와퍼+프렌치프라이+콜라","bundlePrice":9300,"bundleImage":"S1001.PNG","productCode":"P1001"},{"bundleCode":"S1002","bundleName":"치즈 와퍼 세트","bundleDetails":"치즈 와퍼+프렌치프라이+콜라","bundlePrice":9900,"bundleImage":"S1002.PNG","productCode":"P1002"},{"bundleCode":"S1003","bundleName":"불고기 와퍼 세트","bundleDetails":"불고기 와퍼+프렌치프라이+콜라","bundlePrice":9300,"bundleImage":"S1003.PNG","productCode":"P1003"},{"bundleCode":"S1004","bundleName":"베이컨 치즈 와퍼 세트","bundleDetails":"베이컨 치즈 와퍼+프렌치프라이+콜라","bundlePrice":10100,"bundleImage":"S1004.PNG","productCode":"P1004"},{"bundleCode":"S1005","bundleName":"직화 소불고기 버거 세트","bundleDetails":"직화 소불고기 버거+프렌치프라이+콜라","bundlePrice":6100,"bundleImage":"S1005.PNG","productCode":"P1006"},{"bundleCode":"S1006","bundleName":"고추장 소불고기 버거 세트","bundleDetails":"고추장 소불고기 버거+프렌치프라이+콜라","bundlePrice":6100,"bundleImage":"S1006.PNG","productCode":"P1006"},{"bundleCode":"S1007","bundleName":"통새우 와퍼 세트","bundleDetails":"통새우 와퍼+프렌치프라이+콜라","bundlePrice":10100,"bundleImage":"S1007.PNG","productCode":"P1007"},{"bundleCode":"S1008","bundleName":"콰트로치즈 와퍼 세트","bundleDetails":"콰트로치즈 와퍼+프렌치프라이+콜라","bundlePrice":10100,"bundleImage":"S1008.PNG","productCode":"P1009"},{"bundleCode":"S1009","bundleName":"몬스터 와퍼 세트","bundleDetails":"몬스터 와퍼+프렌치프라이+콜라","bundlePrice":10700,"bundleImage":"S1009.PNG","productCode":"P1009"},{"bundleCode":"S1010","bundleName":"기네스 와퍼 세트","bundleDetails":"기네스 와퍼+프렌치프라이+콜라","bundlePrice":10700,"bundleImage":"S1010.PNG","productCode":"P1010"},{"bundleCode":"S1011","bundleName":"기네스 머쉬룸 와퍼 세트","bundleDetails":"기네스 머쉬룸 와퍼+프렌치프라이+콜라","bundlePrice":11100,"bundleImage":"S1011.PNG","productCode":"P1011"},{"bundleCode":"S1012","bundleName":"스태커3 와퍼 세트","bundleDetails":"스태커3 와퍼+프렌치프라이+콜라","bundlePrice":13900,"bundleImage":"S1012.PNG","productCode":"P1012"},{"bundleCode":"S1013","bundleName":"스태커4 와퍼 세트","bundleDetails":"스태커4 와퍼+프렌치프라이+콜라","bundlePrice":15900,"bundleImage":"S1013.PNG","productCode":"P1013"}]

products = [];
bundles = [];

productDict = {};

currentProduct = {};
selectedSide = {};
selectedDrink = {};


/*JAVA CONTROLLER*/
initProducts = function (data) {
    console.log("FROM CONTROLLER : " + data);
    products = JSON.parse(data);
}

initBundles = function (data) {
    console.log("FROM CONTROLLER : " + data);
    bundles = JSON.parse(data);
}


initDict = function () {
    products.forEach(e => {
        e.productList.forEach(p => {
            let s = p.productCode;
            p["categoryCode"] = e.categoryCode;
            p["categoryName"] = e.categoryName;
            productDict[s] = p;
        })
    })

    bundles.forEach(p => {
        let tmp = {};
        tmp["productCode"] = p.bundleCode;
        tmp["productName"] = p.bundleName;
        tmp["productDetails"] = p.bundleDetails;
        tmp["productPrice"] = p.bundlePrice;
        tmp["productImage"] = p.bundleImage;
        p["categoryCode"] = "C000";
        p["categoryName"] = "세트";
        tmp["categoryCode"] = "C000";
        tmp["categoryName"] = "세트";
        tmp.bundle = p;


        productDict[tmp.productCode] = tmp;
        // let s = p.productCode;
        // p["categoryCode"] = "C000";
        // p["categoryName"] = "세트";
        // productDict[s] = p;
    });

    defaultSide = productDict["P1030"];
    defaultDrink = productDict["P1014"];
};

initProductsTable = function () {
    for (pid in productDict) {
        var tmp = productDict[pid];
        if (tmp.productOptions == undefined) {
            var nodes = $(createProductHtml(tmp)).data("data", tmp);
            $(".product-container[data-page='" + tmp.categoryName + "']").append(nodes);
        }
    }

    $(".menu-button:nth-child(1)").click();


    bundleSelect = function (title, src) {
        return $('<div class="modal-select-bundle"><div class="modal-select-bundle-img"><img src="' + IMG_PATH + src + '" /></div><div class="modal-select-bundle-title">' + title + '</div><button class="modal-select-bundle-button">변경</button></div>');
    }

    modalSelect = function (data) {
        let container = $('<div class="modal-select-sub"></div>');
        let content = $('<div class="modal-select-content">');
        $(content).append('<div class="modal-select-sub-title hgg99">' + data.productName + '</div>');
        $(content).append('<div>' + data.productDetails == undefined ? "" : data.productDetails);
        $(content).append('<div class="modal-select-sub-price hgg99 price">' + data.productPrice + '</div>');
        $(container).append(content).append($('<div class="modal-select-sub-img"><img src="' + IMG_PATH + data.productImage + '"/></div>'));
        $(container).data("data", data);
        $(container).click(e => addCart(data));
        return container;
    }


    $(".product-wrapper").click(function () {
        let tmp = $(this).data("data");
        selectedData = tmp;
        $(".modal-text-title").text(tmp.productName);
        $(".modal-text-content").text(tmp.productDetails ? tmp.productDetails : "");
        $(".modal-banner-img img").attr("src", IMG_PATH + tmp.productImage);
        $(".modal-select-wrapper").empty();

        if (tmp.categoryName == "세트") {
            let con = $("<div class='modal-select-bundle-container'></div>");
            let orgin = tmp.bundle.productCode;
            $(con).append(bundleSelect(productDict[orgin].productName, productDict[orgin].productImage));
            $(con).append(bundleSelect(defaultSide.productName, defaultSide.productImage));
            $(con).append(bundleSelect(defaultDrink.productName, defaultDrink.productImage));
            $(".modal-select-wrapper").append(con);


            $(".side .modal-side-select-proudct").filter(function (e) {
                return $(this).find(".modal-side-select-title").text() == "프렌치프라이";
            }).click();
            $(".drink .modal-side-select-proudct").filter(function (e) {
                return $(this).find(".modal-side-select-title").text() == "코카콜라";
            }).click();
            //$(".drink .modal-side-select-proudct").eq(0).click();


            $(".modal-select-bundle-button").eq(1).click(e => {
                $(".side").removeClass("hidden").css({ left: -1000 }).animate({ left: 0 });
            })
            $(".modal-select-bundle-button").eq(2).click(e => {
                $(".drink").removeClass("hidden").css({ left: -1000 }).animate({ left: 0 });
            })

        } else {
            let selector = $("<div class='modal-select'></div>");
            for (pid in productDict) {
                let option = productDict[pid];
                if (option.productOptions == tmp.productCode) {

                    $(selector).append(modalSelect(option));
                }
            }
            if ($(selector).find(".modal-select-sub").length >= 1) {
                $(selector).prepend(modalSelect(tmp));
                $(".modal-select-wrapper").append(selector);
            } else {
                $(".modal-add").click();
                return;
            }
        }

        $("#modal-main").removeClass("hidden");

    });

}

initBundleOptions = function () {
    function bundleHtml(name, price, src) {

        return $('<div class="modal-side-select-proudct"><div class="modal-side-select-img"><img src="' + IMG_PATH + src + '" /></div><div class="modal-side-select-title">' + name + '</div><div class="modal-side-select-price">+' + price + '원</div></div>');
    }

    let side = $('.side .modal-side-select');
    side.empty();
    var dPrice = defaultSide.productPrice; //프렌치 프라이 가격
    (products.find(e => e.categoryName == "사이드").productList.filter(p => p.isBundle)).forEach(tmp => {
        tmp.subPrice = (tmp.productPrice - dPrice) >= 0 ? tmp.productPrice - dPrice : 0;
        let nodes = $(bundleHtml(tmp.productName, tmp.subPrice, tmp.productImage, tmp.subPrice)).data("data", tmp);
        side.append(nodes);
    });

    var dPrice = defaultDrink.productPrice;
    let drink = $('.drink .modal-side-select');
    (products.find(e => e.categoryName == "음료").productList.filter(p => p.isBundle)).forEach(tmp => {
        tmp.subPrice = (tmp.productPrice - dPrice) >= 0 ? tmp.productPrice - dPrice : 0;
        let nodes = $(bundleHtml(tmp.productName, tmp.subPrice, tmp.productImage,)).data("data", tmp);
        drink.append(nodes);
    });

    $(".modal-side-select-proudct").click(function () {
        let data = $(this).data("data")
        let code = data.categoryName == "사이드" ? 1 : 2;
        let target = $(".modal-select-bundle").eq(code);

        $(this).parent().find(".checked").remove();
        if (code == 1) {
            selectedSide = data;
        } else {
            selectedDrink = data;
        }
        $(target).find(".modal-select-bundle-img img").attr("src", $(this).find("img").attr('src'));
        $(target).find(".modal-select-bundle-title").text($(this).find(".modal-side-select-title").text());

        $(this).find(".modal-side-select-img").append("<img src='../images/check.png' class='checked' />");

    });

    $(".modal-side-button").click(function () {
        $(this).parent().parent().animate({ "left": -1000 }, function () {
            $(this).addClass("hidden").css({ "left": 0 });
        });
    })
}

updateCart = function () {
    let cartAmount = 0;
    let cartQty = 0;
    $(".cart-list").each(function (e) {
        let data = $(this).data("data");
        let prcie = $(this).data("price");
        let qty = parseInt($(this).find(".cart-item-qty").text());

        $(this).find(".price").text(addComma(prcie * qty));
        cartQty += qty;
        cartAmount = cartAmount + qty * prcie;
    })
    $(".cart-badge").text(cartQty);
    $(".cart-price").text(addComma(cartAmount));
}

cartRowHtml = function (data) {

    return $('<tr class="cart-list"><td>' + data.productName + '</td><td><i class="fas fa-minus-square"></i><span class="cart-item-qty">1</span><i class="fas fa-plus-square"></i></td><td class="price">' + addComma(data.productPrice) + '</td><td><span class="close">&times;</span></td></tr>');

}

addCart = function (data) {
    console.log(data)

    let state = false;
    $($(".cart-list").each(function (e) {
        let tmp = $(this).data("data");
        let isBundle = tmp.categoryName == "세트" && tmp.productCode == data.productCode && $(this).data("side").productCode == selectedSide.productCode && $(this).data("drink").productCode == selectedDrink.productCode
        if (isBundle || (data.categoryName != "세트" && data.productCode == tmp.productCode)) {
            let qty = $(this).find(".cart-item-qty");
            $(qty).text(parseInt(qty.text()) + 1);
            state = true;
            return;
        }
    }));

    if (!state) {
        let row = cartRowHtml(data).data("data", data);

        if (data.categoryName == "세트") {
            $(row).data("side", selectedSide);
            $(row).data("drink", selectedDrink);
            $(row).data("price", data.productPrice + selectedSide.subPrice + selectedDrink.subPrice);
            console.log(row);
        } else {
            $(row).data("price", data.productPrice);
        }


        $(".table-cart tbody").append(row);

        $(row).find(".fa-minus-square").click(function () {
            let qty = $(this).parent().find(".cart-item-qty");
            if (qty.text() >= 2) {
                $(qty).text(parseInt($(qty).text()) - 1);
            }
            updateCart();
        });

        $(row).find(".fa-plus-square").click(function () {
            let qty = $(this).parent().find(".cart-item-qty");
            $(qty).text(parseInt($(qty).text()) + 1);
            updateCart();
        });

        $(row).find(".close").click(function () {
            $(this).parent().parent().remove();
            updateCart();
        });

        console.log(data);

    }


    $(".modal").addClass("hidden");



    updateCart();
}



initialize = function () {
    initDict();
    initBundleOptions();
    initProductsTable();

    $(".menu-button").click(function () {
        $(".menu-button").removeClass("selected");
        $(this).addClass("selected");
        let target = $(this).text();

        $(".product-container").removeClass("show");
        $(".product-container[data-page=" + target + "]").addClass("show");
    });

    $(".menu-button:nth-child(1)").click();

    $(".modal-add").click(function () {
        addCart(selectedData);
    })

    $(".modal-close").click(function () {
        $(".modal").hide("slow", function () {
            $(this).addClass("hidden").css({ "display": "flex" });
        });
    });



    $(".pay-close").click(function(){
        $("#pay-modal").slideDown("slow", function(){
            $(this).addClass("hidden");
        })
    })

    $(".pay-button").click(function () {
        orderList = [];

        $("#pay-modal").removeClass("hidden");

        if ($(".cart-list").length < 1) {
            return;
        }

        $(".cart-list").each(function (e) {
            let data = $(this).data("data");
            let ordersDetails = {};
            if (data.categoryName == "세트") {
                ordersDetails.bundleCode = data.productCode;
                ordersDetails.productCode = $(this).data("drink").productCode;
                ordersDetails.productCode2 = $(this).data("side").productCode;
            } else {
                ordersDetails.productCode = data.productCode;
            }
            ordersDetails.ordersDetailsQTY = $(this).find(".cart-item-qty").text();

            orderList.push(ordersDetails);

        });

        //controller.insertOrders(JSON.stringify(orderList));
        $(".cart-list").remove();
    });

}


/* 테스트 용*/
// $(document).ready(function () {
//     products = [{ "categoryCode": "C100", "categoryName": "버거", "productList": [{ "productCode": "P1013", "productName": "스태커4 와퍼", "productPrice": 13600, "productDetails": "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!", "productImage": "P1013.PNG", "isBundle": false }, { "productCode": "P1012", "productName": "스태커3 와퍼", "productPrice": 11600, "productDetails": "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!", "productImage": "P1012.PNG", "isBundle": false }, { "productCode": "P1011", "productName": "기네스 머쉬룸 와퍼", "productPrice": 9800, "productDetails": "기네스 번과 기네스 바비큐 소스의 풍미!", "productImage": "P1011.PNG", "isBundle": false }, { "productCode": "P1010", "productName": "기네스 와퍼", "productPrice": 9400, "productDetails": "기네스 번과 기네스 바비큐 소스의 풍미!", "productImage": "P1010.PNG", "isBundle": false }, { "productCode": "P1009", "productName": "몬스터 와퍼", "productPrice": 9400, "productDetails": "불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛", "productImage": "P1009.PNG", "isBundle": false }, { "productCode": "P1008", "productName": "콰트로치즈 와퍼", "productPrice": 7800, "productDetails": "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!", "productImage": "P1008.PNG", "isBundle": false }, { "productCode": "P1001", "productName": "와퍼", "productPrice": 7000, "productDetails": "불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!", "productImage": "P1001.PNG", "isBundle": false }, { "productCode": "P1006", "productName": "고추장 소불고기버거", "productPrice": 5200, "productDetails": "부드러운 소불고기에 매콤함을 더하다!", "productImage": "P1006.PNG", "isBundle": false }, { "productCode": "P1005", "productName": "작화소불고기버거", "productPrice": 6800, "productDetails": "패티까지! 진짜 불고기!", "productImage": "P1005.PNG", "isBundle": false }, { "productCode": "P1004", "productName": "베이컨치즈와퍼", "productPrice": 8800, "productDetails": "풍미 가득한 아메리칸 클래식의 완벽한 조화!", "productImage": "P1004.PNG", "isBundle": false }, { "productCode": "P1003", "productName": "불고기 와퍼", "productPrice": 7000, "productDetails": "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!", "productImage": "P1003.PNG", "isBundle": false }, { "productCode": "P1002", "productName": "치즈 와퍼", "productPrice": 7600, "productDetails": "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!", "productImage": "P1002.PNG", "isBundle": false }, { "productCode": "P1007", "productName": "통새우 와퍼", "productPrice": 7800, "productDetails": "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거", "productImage": "P1007.PNG", "isBundle": false }] }, { "categoryCode": "C200", "categoryName": "음료", "productList": [{ "productCode": "P1026", "productName": "아메리카노", "productPrice": 2200, "productDetails": "자연을 담은 버거킹 RA인증커피", "productImage": "P1026.PNG", "isBundle": true }, { "productCode": "P1025", "productName": "제로톡톡 청포도", "productPrice": 2800, "productDetails": "제로 칼로리 100% 천연 과일향 드링크", "productImage": "P1025.PNG", "isBundle": true }, { "productCode": "P1024", "productName": "제로톡톡 복숭아", "productPrice": 2800, "productDetails": "제로 칼로리 100% 천연 과일향 드링크", "productImage": "P1024.PNG", "isBundle": true }, { "productCode": "P1023", "productName": "씨그램-라지", "productPrice": 2700, "productImage": "P1023.PNG", "productOptions": "P1022", "isBundle": true }, { "productCode": "P1022", "productName": "씨그램", "productPrice": 2500, "productImage": "P1022.PNG", "isBundle": true }, { "productCode": "P1021", "productName": "미닛메이드 오렌지", "productPrice": 3400, "productImage": "P1021.PNG", "isBundle": true }, { "productCode": "P1020", "productName": "미네랄 워터", "productPrice": 1900, "productImage": "P1020.PNG", "isBundle": true }, { "productCode": "P1019", "productName": "스프라이트-라지", "productPrice": 2700, "productDetails": "나를 깨우는 상쾌함!", "productImage": "P1019.PNG", "productOptions": "P1018", "isBundle": true }, { "productCode": "P1018", "productName": "스프라이트", "productPrice": 2500, "productDetails": "나를 깨우는 상쾌함!", "productImage": "P1018.PNG", "isBundle": true }, { "productCode": "P1017", "productName": "코카콜라 제로-라지", "productPrice": 2700, "productDetails": "100%짜릿함, 칼로리는 제로!", "productImage": "P1017.PNG", "productOptions": "P1016", "isBundle": true }, { "productCode": "P1016", "productName": "코카콜라 제로", "productPrice": 2500, "productDetails": "100%짜릿함, 칼로리는 제로!", "productImage": "P1016.PNG", "isBundle": true }, { "productCode": "P1015", "productName": "코카콜라-라지", "productPrice": 2700, "productDetails": "코카-콜라로 더 짜릿하게!", "productImage": "P1015.PNG", "productOptions": "P1014", "isBundle": true }, { "productCode": "P1014", "productName": "코카콜라", "productPrice": 2500, "productDetails": "코카-콜라로 더 짜릿하게!", "productImage": "P1014.PNG", "isBundle": true }, { "productCode": "P1027", "productName": "아이스 아메리카노", "productPrice": 2200, "productDetails": "자연을 담은 버거킹 RA인증커피", "productImage": "P1027.PNG", "productOptions": "P1026", "isBundle": true }, { "productCode": "P1029", "productName": "아이스 초코", "productPrice": 2700, "productDetails": "달콤한 초코!", "productImage": "P1029.PNG", "productOptions": "P1028", "isBundle": true }, { "productCode": "P1028", "productName": "핫초코", "productPrice": 2700, "productDetails": "달콤한 초코!", "productImage": "P1028.PNG", "isBundle": true }] }, { "categoryCode": "C300", "categoryName": "사이드", "productList": [{ "productCode": "P1030", "productName": "프렌치프라이", "productPrice": 2400, "productDetails": "세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!", "productImage": "P1030.PNG", "isBundle": true }, { "productCode": "P1031", "productName": "프렌치프라이-라지", "productPrice": 2900, "productDetails": "세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!", "productImage": "P1031.PNG", "productOptions": "P1030", "isBundle": true }, { "productCode": "P1045", "productName": "쉐이킹프라이 구운갈릭", "productPrice": 2700, "productDetails": "깊은 풍미가 느껴지는 시즈닝으로 취향 저격!", "productImage": "P1045.PNG", "productOptions": "P1043", "isBundle": true }, { "productCode": "P1044", "productName": "쉐이킹프라이 스윗어니언", "productPrice": 2700, "productDetails": "깊은 풍미가 느껴지는 시즈닝으로 취향 저격!", "productImage": "P1044.PNG", "productOptions": "P1043", "isBundle": true }, { "productCode": "P1043", "productName": "쉐이킹프라이 매콤치즈", "productPrice": 2700, "productDetails": "깊은 풍미가 느껴지는 시즈닝으로 취향 저격!", "productImage": "P1043.PNG", "isBundle": true }, { "productCode": "P1042", "productName": "코코넛쉬림프(6조각)", "productPrice": 7200, "productDetails": "바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스", "productImage": "P1042.PNG", "productOptions": "P1041", "isBundle": true }, { "productCode": "P1041", "productName": "코코넛쉬림프(3조각)", "productPrice": 4200, "productDetails": "바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스", "productImage": "P1041.PNG", "isBundle": true }, { "productCode": "P1040", "productName": "크리미모짜볼(10조각)", "productPrice": 5100, "productDetails": "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!", "productImage": "P1040.PNG", "productOptions": "P1039", "isBundle": true }, { "productCode": "P1039", "productName": "크리미모짜볼(5조각)", "productPrice": 3000, "productDetails": "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!", "productImage": "P1039.PNG", "isBundle": true }, { "productCode": "P1032", "productName": "어니언링", "productPrice": 2700, "productImage": "P1032.PNG", "isBundle": true }, { "productCode": "P1033", "productName": "치즈프라이", "productPrice": 3300, "productImage": "P1033.PNG", "isBundle": true }, { "productCode": "P1034", "productName": "21치즈스틱", "productPrice": 2400, "productImage": "P1034.PNG", "isBundle": true }, { "productCode": "P1035", "productName": "너겟킹(4조각)", "productPrice": 2700, "productDetails": "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!", "productImage": "P1035.PNG", "isBundle": true }, { "productCode": "P1036", "productName": "너겟킹(6조각)", "productPrice": 3700, "productDetails": "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!", "productImage": "P1036.PNG", "productOptions": "P1035", "isBundle": true }, { "productCode": "P1037", "productName": "바삭킹(2조각)", "productPrice": 3500, "productDetails": "매콤하게! 바삭하게 튀긴 치킨윙", "productImage": "P1037.PNG", "isBundle": true }, { "productCode": "P1038", "productName": "바삭킹(4조각)", "productPrice": 6300, "productDetails": "매콤하게! 바삭하게 튀긴 치킨윙", "productImage": "P1038.PNG", "productOptions": "P1037", "isBundle": true }] }, { "categoryCode": "C400", "categoryName": "디저트", "productList": [{ "productCode": "P1051", "productName": "선데 바나나", "productPrice": 1900, "productDetails": "부드러운 아이스크림에 바나나가 쏙!", "productImage": "P1051.PNG", "isBundle": true }, { "productCode": "P1052", "productName": "선데 딸기바나나", "productPrice": 1900, "productDetails": "부드러운 아이스크림에 딸기가 쏙!", "productImage": "P1052.PNG", "isBundle": true }, { "productCode": "P1050", "productName": "선데 딸기", "productPrice": 1500, "productDetails": "딸기맛의 상큼함이 살아있어요!", "productImage": "P1050.PNG", "isBundle": true }, { "productCode": "P1049", "productName": "선데 초코", "productPrice": 1500, "productDetails": "달콤하고 진한 초코의 맛!", "productImage": "P1049.PNG", "isBundle": true }, { "productCode": "P1048", "productName": "선데 바닐라", "productPrice": 1500, "productDetails": "향긋한 바닐라 향 때문에 더 맛있다!", "productImage": "P1048.PNG", "isBundle": true }, { "productCode": "P1047", "productName": "콘 아이스크림", "productPrice": 900, "productDetails": "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림", "productImage": "P1047.PNG", "isBundle": true }, { "productCode": "P1046", "productName": "컵 아이스크림", "productPrice": 900, "productDetails": "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림", "productImage": "P1046.PNG", "isBundle": true }, { "productCode": "P1053", "productName": "선데 초코바나나", "productPrice": 1900, "productDetails": "부드러운 아이스크림에 초코가 쏙!", "productImage": "P1053.PNG", "isBundle": true }] }]
//     bundles = [{ "bundleCode": "S1001", "bundleName": "와퍼 세트", "bundleDetails": "와퍼+프렌치프라이+콜라", "bundlePrice": 9300, "bundleImage": "S1001.PNG", "productCode": "P1001" }, { "bundleCode": "S1002", "bundleName": "치즈 와퍼 세트", "bundleDetails": "치즈 와퍼+프렌치프라이+콜라", "bundlePrice": 9900, "bundleImage": "S1002.PNG", "productCode": "P1002" }, { "bundleCode": "S1003", "bundleName": "불고기 와퍼 세트", "bundleDetails": "불고기 와퍼+프렌치프라이+콜라", "bundlePrice": 9300, "bundleImage": "S1003.PNG", "productCode": "P1003" }, { "bundleCode": "S1004", "bundleName": "베이컨 치즈 와퍼 세트", "bundleDetails": "베이컨 치즈 와퍼+프렌치프라이+콜라", "bundlePrice": 10100, "bundleImage": "S1004.PNG", "productCode": "P1004" }, { "bundleCode": "S1005", "bundleName": "직화 소불고기 버거 세트", "bundleDetails": "직화 소불고기 버거+프렌치프라이+콜라", "bundlePrice": 6100, "bundleImage": "S1005.PNG", "productCode": "P1006" }, { "bundleCode": "S1006", "bundleName": "고추장 소불고기 버거 세트", "bundleDetails": "고추장 소불고기 버거+프렌치프라이+콜라", "bundlePrice": 6100, "bundleImage": "S1006.PNG", "productCode": "P1006" }, { "bundleCode": "S1007", "bundleName": "통새우 와퍼 세트", "bundleDetails": "통새우 와퍼+프렌치프라이+콜라", "bundlePrice": 10100, "bundleImage": "S1007.PNG", "productCode": "P1007" }, { "bundleCode": "S1008", "bundleName": "콰트로치즈 와퍼 세트", "bundleDetails": "콰트로치즈 와퍼+프렌치프라이+콜라", "bundlePrice": 10100, "bundleImage": "S1008.PNG", "productCode": "P1009" }, { "bundleCode": "S1009", "bundleName": "몬스터 와퍼 세트", "bundleDetails": "몬스터 와퍼+프렌치프라이+콜라", "bundlePrice": 10700, "bundleImage": "S1009.PNG", "productCode": "P1009" }, { "bundleCode": "S1010", "bundleName": "기네스 와퍼 세트", "bundleDetails": "기네스 와퍼+프렌치프라이+콜라", "bundlePrice": 10700, "bundleImage": "S1010.PNG", "productCode": "P1010" }, { "bundleCode": "S1011", "bundleName": "기네스 머쉬룸 와퍼 세트", "bundleDetails": "기네스 머쉬룸 와퍼+프렌치프라이+콜라", "bundlePrice": 11100, "bundleImage": "S1011.PNG", "productCode": "P1011" }, { "bundleCode": "S1012", "bundleName": "스태커3 와퍼 세트", "bundleDetails": "스태커3 와퍼+프렌치프라이+콜라", "bundlePrice": 13900, "bundleImage": "S1012.PNG", "productCode": "P1012" }, { "bundleCode": "S1013", "bundleName": "스태커4 와퍼 세트", "bundleDetails": "스태커4 와퍼+프렌치프라이+콜라", "bundlePrice": 15900, "bundleImage": "S1013.PNG", "productCode": "P1013" }]

//     initialize();
// });
