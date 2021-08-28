function addComma(value) {
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return value;
}

function createProductHtml(obj1, inputName, inputPrice) {
    let img;
    let pName;
    let price;
    if (typeof obj1 == "string") {
        img = obj1;
        pName = inputName;
        price = inputPrice;
    } else if (obj1.productCode != undefined) {
        img = obj1.productImage;
        pName = obj1.productName;
        price = obj1.productPrice;
    } else {
        img = obj1.bundleImage;
        pName = obj1.bundleName;
        price = obj1.bundlePrice;
    }
    return "<div class='product-wrapper'><div class='product-img-wrapper'><img src='https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/ba44427b-c3eb-44d5-8c02-3a27f585f7af.png' />"
        + "</div><p class='product-name'>" + pName + "</p><p class='product-price'>₩ " + addComma(price) + "</p></div>";
}

products = [{ "categoryCode": "C100", "categoryName": "버거", "productList": [{ "productCode": "P1000001", "productName": "와퍼", "productPrice": 7000, "productDetails": "불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!", "productImage": "P1000001", "isBundle": false }, { "productCode": "P1000002", "productName": "치즈 와퍼", "productPrice": 7600, "productDetails": "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!", "productImage": "P1000002", "isBundle": false }, { "productCode": "P1000003", "productName": "불고기 와퍼", "productPrice": 7000, "productDetails": "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!", "productImage": "P1000003", "isBundle": false }, { "productCode": "P1000004", "productName": "통새우 와퍼", "productPrice": 7800, "productDetails": "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거", "productImage": "P1000004", "isBundle": false }, { "productCode": "P1000005", "productName": "콰트로치즈 와퍼", "productPrice": 7800, "productDetails": "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!", "productImage": "P1000005", "isBundle": false }, { "productCode": "P1000006", "productName": "몬스터 와퍼", "productPrice": 9400, "productDetails": "불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛", "productImage": "P1000006", "isBundle": false }, { "productCode": "P1000007", "productName": "기네스 와퍼", "productPrice": 9400, "productDetails": "기네스 번과 기네스 바비큐 소스의 풍미!", "productImage": "P1000007", "isBundle": false }, { "productCode": "P1000008", "productName": "기네스머쉬룸 와퍼", "productPrice": 9800, "productDetails": "기네스 번과 기네스 바비큐 소스의 풍미!", "productImage": "P1000008", "isBundle": false }, { "productCode": "P1000009", "productName": "스태커3 와퍼", "productPrice": 11600, "productDetails": "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!", "productImage": "P1000009", "isBundle": false }, { "productCode": "P1000010", "productName": "스태커4 와퍼", "productPrice": 13600, "productDetails": "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!", "productImage": "P1000010", "isBundle": false }] }, { "categoryCode": "C200", "categoryName": "음료", "productList": [{ "productCode": "P2000001", "productName": "코카콜라", "productPrice": 2500, "productDetails": "코카-콜라로 더 짜릿하게!", "productImage": "P2000001", "isBundle": true }, { "productCode": "P2000002", "productName": "코카콜라 제로", "productPrice": 2500, "productDetails": "100% 짜릿함, 칼로리는 제로!", "productImage": "P2000002", "isBundle": true }, { "productCode": "P2000003", "productName": "스프라이트", "productPrice": 2500, "productDetails": "나를 깨우는 상쾌함!", "productImage": "P2000003", "isBundle": true }, { "productCode": "P2000004", "productName": "씨그램", "productPrice": 2500, "productImage": "P2000004", "isBundle": true }, { "productCode": "P2000005", "productName": "미닛메이드 오렌지", "productPrice": 3400, "productImage": "P2000005", "isBundle": true }, { "productCode": "P2000006", "productName": "아메리카노", "productPrice": 2200, "productDetails": "자연을 담은 버거킹 RA인증커피", "productImage": "P2000006", "isBundle": true }, { "productCode": "P2000007", "productName": "아이스초코", "productPrice": 2700, "productDetails": "달콤한 초코!", "productImage": "P2000007", "isBundle": true }, { "productCode": "P2000008", "productName": "미네랄 워터", "productPrice": 1900, "productImage": "P2000008", "isBundle": true }, { "productCode": "P2000009", "productName": "아메리카노-아이스", "productPrice": 2200, "productDetails": "자연을 담은 버거킹 RA인증커피", "productImage": "P2000009", "productOptions": "P2000006", "isBundle": true }, { "productCode": "P2000010", "productName": "코카콜라-라지", "productPrice": 2700, "productDetails": "코카-콜라로 더 짜릿하게!", "productImage": "P2000010", "productOptions": "P2000001", "isBundle": true }, { "productCode": "P2000011", "productName": "코카콜라 제로-라지", "productPrice": 2700, "productDetails": "100% 짜릿함, 칼로리는 제로!", "productImage": "P2000011", "productOptions": "P2000002", "isBundle": true }, { "productCode": "P2000012", "productName": "스프라이트-라지", "productPrice": 2700, "productDetails": "나를 깨우는 상쾌함!", "productImage": "P2000012", "productOptions": "P2000003", "isBundle": true }] }, { "categoryCode": "C300", "categoryName": "사이드", "productList": [{ "productCode": "P3000001", "productName": "프렌치프라이", "productPrice": 2400, "productDetails": "세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!", "productImage": "P3000001", "isBundle": true }, { "productCode": "P3000002", "productName": "바삭킹", "productPrice": 3500, "productDetails": "매콤하게! 바삭하게 튀긴 치킨윙", "productImage": "P3000002", "isBundle": false }, { "productCode": "P3000003", "productName": "너겟킹", "productPrice": 2700, "productDetails": "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!", "productImage": "P3000003", "isBundle": false }, { "productCode": "P3000004", "productName": "21치즈스틱", "productPrice": 2400, "productImage": "P3000004", "isBundle": false }, { "productCode": "P3000005", "productName": "치즈프라이", "productPrice": 3300, "productImage": "P3000005", "isBundle": true }, { "productCode": "P3000006", "productName": "어니언링", "productPrice": 2700, "productImage": "P3000006", "isBundle": false }, { "productCode": "P3000007", "productName": "크리미모짜볼", "productPrice": 3000, "productDetails": "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!", "productImage": "P3000007", "isBundle": true }, { "productCode": "P3000008", "productName": "코코넛쉬림프", "productPrice": 4200, "productDetails": "바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스", "productImage": "P3000008", "isBundle": true }, { "productCode": "P3000009", "productName": "프렌치프라이-라지", "productPrice": 2700, "productDetails": "세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!", "productImage": "P3000009", "productOptions": "P3000001", "isBundle": true }, { "productCode": "P3000010", "productName": "크리미모짜볼(10개)", "productPrice": 5100, "productDetails": "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!", "productImage": "P3000010", "productOptions": "P3000007", "isBundle": false }, { "productCode": "P3000011", "productName": "너겟킹(6개)", "productPrice": 3700, "productDetails": "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!", "productImage": "P3000011", "productOptions": "P3000003", "isBundle": false }, { "productCode": "P3000012", "productName": "너겟킹(10개)", "productPrice": 5700, "productDetails": "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!", "productImage": "P3000012", "productOptions": "P3000003", "isBundle": false }] }];
bundles = [{ "bundleCode": "S1000001", "bundleName": "와퍼 세트", "bundlePrice": 9300, "bundleImage": "S1000001" }, { "bundleCode": "S1000002", "bundleName": "치즈 와퍼 세트", "bundlePrice": 9900, "bundleImage": "S1000002" }, { "bundleCode": "S1000003", "bundleName": "불고기 와퍼 세트", "bundlePrice": 9600, "bundleImage": "S1000003" }, { "bundleCode": "S1000004", "bundleName": "통새우 와퍼 세트", "bundlePrice": 10100, "bundleImage": "S1000004" }, { "bundleCode": "S1000005", "bundleName": "콰트로치즈 와퍼 세트", "bundlePrice": 10100, "bundleImage": "S1000005" }, { "bundleCode": "S1000006", "bundleName": "몬스터 와퍼 세트", "bundlePrice": 10700, "bundleImage": "S1000006" }, { "bundleCode": "S1000007", "bundleName": "기네스 와퍼 세트", "bundlePrice": 11400, "bundleImage": "S1000007" }, { "bundleCode": "S1000009", "bundleName": "스태커3 와퍼 세트", "bundlePrice": 14200, "bundleImage": "S1000009" }, { "bundleCode": "S1000010", "bundleName": "스태커4 와퍼 세트", "bundlePrice": 15900, "bundleImage": "S1000010" }];


$(document).ready(function () {

    $(".menu-button").click(function () {
        $(".menu-button").removeClass("selected");
        $(this).addClass("selected");
        let target = $(this).text();

        $(".product-container").removeClass("show");
        $(".product-container[data-page=" + target + "]").addClass("show");
    });

    $(".product-wrapper").click(function () {
        $(".modal").removeClass("hidden");
    });

    $(".modal-close").click(function () {
        $(".modal").addClass("hidden");
    });

    $(".fa-minus-square").click(function () {
        let qty = $(this).parent().find(".cart-item-qty");
        $(qty).text(parseInt($(qty).text()) - 1);
    });

    $(".fa-plus-square").click(function () {
        let qty = $(this).parent().find(".cart-item-qty");
        $(qty).text(parseInt($(qty).text()) + 1);
    });

    $(".close").click(function () {
        $(this).parent().parent().remove();
    });

    // initProducts = function(data){
    //     products = JSON.parse(data);
    // }

    // initBundles = function(data){
    //     bundles = JSON.parse(data);
    // }

    initProducts = function () {
        let con = $(".product-container-bg");
        $(con).empty();

        var bundleContent = $('<div class="product-container show" data-page="세트"></div>');
        bundles.forEach(p => {
            $(bundleContent).append(createProductHtml(p));
        });
        $(con).append(bundleContent);

        products.forEach(e => {
            var content = $('<div class="product-container" data-page="' + e.categoryName + '"></div>');
            e.productList.forEach(p => {
                if (p.productOptions == undefined) {
                    $(content).append(createProductHtml(p));
                }
            });
            $(con).append(content);
        });
    }
    initProducts();

});