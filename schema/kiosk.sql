DROP TABLE CATEGORY CASCADE CONSTRAINTS;
DROP TABLE PRODUCT CASCADE CONSTRAINTS;
DROP TABLE BUNDLE  CASCADE CONSTRAINTS;
DROP TABLE BUNDLE_SUB  CASCADE CONSTRAINTS;
DROP TABLE ORDERS  CASCADE CONSTRAINTS;
DROP TABLE ORDERS_DETAILS  CASCADE CONSTRAINTS;

CREATE TABLE CATEGORY(
    CATEGORY_CODE VARCHAR2(10) PRIMARY KEY,
    CATEGORY_NAME VARCHAR2(30) NOT NULL
);

CREATE TABLE PRODUCT(
    PRODUCT_CODE VARCHAR2(10) PRIMARY KEY,
    PRODUCT_NAME VARCHAR2(30) NOT NULL,
    CATEGORY_CODE VARCHAR2(10) NOT NULL REFERENCES CATEGORY(CATEGORY_CODE),
    PRODUCT_PRICE NUMBER(6) NOT NULL,
    PRODUCT_DETAILS VARCHAR2(150),
    PRODUCT_IMAGE VARCHAR2(50),
    PRODUCT_OPTIONS VARCHAR2(10) REFERENCES PRODUCT(PRODUCT_CODE),
    PRODUCT_IS_BUNDLE NUMBER(1) DEFAULT 1 NOT NULL
);

CREATE TABLE BUNDLE(
    BUNDLE_CODE VARCHAR2(10) PRIMARY KEY,
    BUNDLE_NAME VARCHAR2(30) NOT NULL,
    BUNDEL_DETAILS VARCHAR2(150),
    BUNDLE_PRICE NUMBER(6) NOT NULL,
    BUNDLE_IMAGE VARCHAR2(50),
    PRODUCT_CODE VARCHAR2(10) REFERENCES PRODUCT(PRODUCT_CODE)
);


CREATE TABLE ORDERS(
    ORDERS_CODE VARCHAR2(10) PRIMARY KEY,
    ORDERS_PRICE NUMBER(8) NOT NULL,
    ORDERS_DATE DATE DEFAULT SYSDATE
);

CREATE TABLE ORDERS_DETAILS(
    ORDERS_DETAILS_CODE VARCHAR2(10) PRIMARY KEY,
    ORDERS_CODE VARCHAR2(10) NOT NULL REFERENCES ORDERS(ORDERS_CODE),
    PRODUCT_CODE VARCHAR2(10) REFERENCES PRODUCT(PRODUCT_CODE),
    BUNDLE_CODE VARCHAR2(10) NOT NULL REFERENCES BUNDLE(BUNDLE_CODE),
    ORDERS_DETAILS_QTY NUMBER(2) DEFAULT 1 NOT NULL
);


INSERT INTO CATEGORY VALUES('C100', '버거');
INSERT INTO CATEGORY VALUES('C200', '음료');
INSERT INTO CATEGORY VALUES('C300', '사이드');
INSERT INTO CATEGORY VALUES('C400', '디저트');

INSERT INTO PRODUCT VALUES('P1000001','와퍼','C100',7000,'불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!','P1000001',NULL,0);
INSERT INTO PRODUCT VALUES('P1000002','치즈 와퍼','C100',7600,'불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!','P1000002',NULL,0);
INSERT INTO PRODUCT VALUES('P1000003','불고기 와퍼','C100',7000,'불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!','P1000003',NULL,0);
INSERT INTO PRODUCT VALUES('P1000004','통새우 와퍼','C100',7800,'불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거','P1000004',NULL,0);
INSERT INTO PRODUCT VALUES('P1000005','콰트로치즈 와퍼','C100',7800,'진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!','P1000005',NULL,0);
INSERT INTO PRODUCT VALUES('P1000006','몬스터 와퍼','C100',9400,'불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛','P1000006',NULL,0);
INSERT INTO PRODUCT VALUES('P1000007','기네스 와퍼','C100',9400,'기네스 번과 기네스 바비큐 소스의 풍미!','P1000007',NULL,0);
INSERT INTO PRODUCT VALUES('P1000008','기네스머쉬룸 와퍼','C100',9800,'기네스 번과 기네스 바비큐 소스의 풍미!','P1000008',NULL,0);
INSERT INTO PRODUCT VALUES('P1000009','스태커3 와퍼','C100',11600,'믿고 먹을수 있는 와퍼, 더 크게 도전하세요!','P1000009',NULL,0);
INSERT INTO PRODUCT VALUES('P1000010','스태커4 와퍼','C100',13600,'믿고 먹을수 있는 와퍼, 더 크게 도전하세요!','P1000010',NULL,0);
INSERT INTO PRODUCT VALUES('P2000001','코카콜라','C200',2500,'코카-콜라로 더 짜릿하게!','P2000001',NULL,1);
INSERT INTO PRODUCT VALUES('P2000002','코카콜라 제로','C200',2500,'100% 짜릿함, 칼로리는 제로!','P2000002',NULL,1);
INSERT INTO PRODUCT VALUES('P2000003','스프라이트','C200',2500,'나를 깨우는 상쾌함!','P2000003',NULL,1);
INSERT INTO PRODUCT VALUES('P2000004','씨그램','C200',2500,NULL,'P2000004',NULL,1);
INSERT INTO PRODUCT VALUES('P2000005','미닛메이드 오렌지','C200',3400,NULL,'P2000005',NULL,1);
INSERT INTO PRODUCT VALUES('P2000006','아메리카노','C200',2200,'자연을 담은 버거킹 RA인증커피','P2000006',NULL,1);
INSERT INTO PRODUCT VALUES('P2000007','아이스초코','C200',2700,'달콤한 초코!','P2000007',NULL,1);
INSERT INTO PRODUCT VALUES('P2000008','미네랄 워터','C200',1900,NULL,'P2000008',NULL,1);
INSERT INTO PRODUCT VALUES('P2000009','아메리카노-아이스','C200',2200,'자연을 담은 버거킹 RA인증커피','P2000009','P2000006',1);
INSERT INTO PRODUCT VALUES('P2000010','코카콜라-라지','C200',2700,'코카-콜라로 더 짜릿하게!','P2000010','P2000001',1);
INSERT INTO PRODUCT VALUES('P2000011','코카콜라 제로-라지','C200',2700,'100% 짜릿함, 칼로리는 제로!','P2000011','P2000002',1);
INSERT INTO PRODUCT VALUES('P2000012','스프라이트-라지','C200',2700,'나를 깨우는 상쾌함!','P2000012','P2000003',1);
INSERT INTO PRODUCT VALUES('P3000001','프렌치프라이','C300',2400,'세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!','P3000001',NULL,1);
INSERT INTO PRODUCT VALUES('P3000002','바삭킹','C300',3500,'매콤하게! 바삭하게 튀긴 치킨윙','P3000002',NULL,0);
INSERT INTO PRODUCT VALUES('P3000003','너겟킹','C300',2700,'바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!','P3000003',NULL,0);
INSERT INTO PRODUCT VALUES('P3000004','21치즈스틱','C300',2400,NULL,'P3000004',NULL,0);
INSERT INTO PRODUCT VALUES('P3000005','치즈프라이','C300',3300,NULL,'P3000005',NULL,1);
INSERT INTO PRODUCT VALUES('P3000006','어니언링','C300',2700,NULL,'P3000006',NULL,0);
INSERT INTO PRODUCT VALUES('P3000007','크리미모짜볼','C300',3000,'겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!','P3000007',NULL,1);
INSERT INTO PRODUCT VALUES('P3000008','코코넛쉬림프','C300',4200,'바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스','P3000008',NULL,1);
INSERT INTO PRODUCT VALUES('P3000009','프렌치프라이-라지','C300',2700,'세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!','P3000009','P3000001',1);
INSERT INTO PRODUCT VALUES('P3000010','크리미모짜볼(10개)','C300',5100,'겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!','P3000010','P3000007',0);
INSERT INTO PRODUCT VALUES('P3000011','너겟킹(6개)','C300',3700,'바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!','P3000011','P3000003',0);
INSERT INTO PRODUCT VALUES('P3000012','너겟킹(10개)','C300',5700,'바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!','P3000012','P3000003',0);


INSERT INTO BUNDLE VALUES('S1000001','와퍼',NULL,9300,'S1000001','P1000001');
INSERT INTO BUNDLE VALUES('S1000002','치즈 와퍼',NULL,9900,'S1000002','P1000002');
INSERT INTO BUNDLE VALUES('S1000003','불고기 와퍼',NULL,9600,'S1000003','P1000003');
INSERT INTO BUNDLE VALUES('S1000004','통새우 와퍼',NULL,10100,'S1000004','P1000004');
INSERT INTO BUNDLE VALUES('S1000005','콰트로치즈 와퍼',NULL,10100,'S1000005','P1000005');
INSERT INTO BUNDLE VALUES('S1000006','몬스터 와퍼',NULL,10700,'S1000006','P1000006');
INSERT INTO BUNDLE VALUES('S1000007','기네스 와퍼',NULL,11400,'S1000007','P1000007');
INSERT INTO BUNDLE VALUES('S1000008','기네스머쉬룸 와퍼',NULL,11000,'S1000008','P1000008');
INSERT INTO BUNDLE VALUES('S1000009','스태커3 와퍼',NULL,14200,'S1000009','P1000009');
INSERT INTO BUNDLE VALUES('S1000010','스태커4 와퍼',NULL,15900,'S1000010','P1000010');

COMMIT;