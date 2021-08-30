DROP TABLE CATEGORY CASCADE CONSTRAINTS;
DROP TABLE PRODUCT CASCADE CONSTRAINTS;
DROP TABLE BUNDLE  CASCADE CONSTRAINTS;
DROP TABLE ORDERS  CASCADE CONSTRAINTS;
DROP TABLE ORDERS_DETAILS  CASCADE CONSTRAINTS;
DROP SEQUENCE ORDERS_SEQ;
DROP SEQUENCE ORDERS_DETAILS_SEQ;

CREATE TABLE CATEGORY(
    CATEGORY_CODE VARCHAR2(10) PRIMARY KEY,
    CATEGORY_NAME VARCHAR2(30) NOT NULL
);

CREATE TABLE PRODUCT(
    PRODUCT_CODE VARCHAR2(10) PRIMARY KEY,
    PRODUCT_NAME VARCHAR2(50) NOT NULL,
    CATEGORY_CODE VARCHAR2(10) NOT NULL REFERENCES CATEGORY(CATEGORY_CODE),
    PRODUCT_PRICE NUMBER(6) NOT NULL,
    PRODUCT_DETAILS VARCHAR2(150),
    PRODUCT_IMAGE VARCHAR2(50),
    PRODUCT_OPTIONS VARCHAR2(10) REFERENCES PRODUCT(PRODUCT_CODE),
    PRODUCT_IS_BUNDLE NUMBER(1) DEFAULT 1 NOT NULL
);

CREATE TABLE BUNDLE(
    BUNDLE_CODE VARCHAR2(10) PRIMARY KEY,
    BUNDLE_NAME VARCHAR2(50) NOT NULL,
    BUNDEL_DETAILS VARCHAR2(150),
    BUNDLE_PRICE NUMBER(6) NOT NULL,
    BUNDLE_IMAGE VARCHAR2(50),
    PRODUCT_CODE VARCHAR2(10) REFERENCES PRODUCT(PRODUCT_CODE) ON DELETE CASCADE
);

CREATE TABLE ORDERS(
    ORDERS_CODE VARCHAR2(10) PRIMARY KEY,
    ORDERS_PRICE NUMBER(8) NOT NULL,
    ORDERS_DATE DATE DEFAULT SYSDATE
);

CREATE SEQUENCE ORDERS_SEQ NOCACHE;


CREATE TABLE ORDERS_DETAILS(
    ORDERS_DETAILS_CODE VARCHAR2(10) PRIMARY KEY,
    ORDERS_CODE VARCHAR2(10) NOT NULL REFERENCES ORDERS(ORDERS_CODE),
    PRODUCT_CODE VARCHAR2(10) REFERENCES PRODUCT(PRODUCT_CODE),
    BUNDLE_CODE VARCHAR2(10) REFERENCES BUNDLE(BUNDLE_CODE),
    ORDERS_DETAILS_QTY NUMBER(2) DEFAULT 1 NOT NULL
);

CREATE SEQUENCE ORDERS_DETAILS_SEQ NOCACHE;

COMMIT;

INSERT INTO CATEGORY VALUES('C100', '����');
INSERT INTO CATEGORY VALUES('C200', '����');
INSERT INTO CATEGORY VALUES('C300', '���̵�');
INSERT INTO CATEGORY VALUES('C400', '����Ʈ');

INSERT INTO PRODUCT VALUES('P1001','����','C100',7000,'�ҿ� ���� ���� �� ���� ��Ƽ�� �̽��� ��ä�� �Ѱ���~ ����ŷ�� ��ǥ �޴�!','P1001.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1002','ġ�� ����','C100',7600,'�ҿ� ���� ���� �� ���� ��Ƽ�� �� ���ۿ� ����� ġ�����!','P1002.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1003','�Ұ�� ����','C100',7000,'�ҿ� ���� ���� �� ���� ��Ƽ�� �� ���ۿ� ������ �Ұ�� �ҽ�����!','P1003.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1004','������ġ�����','C100',8800,'ǳ�� ������ �Ƹ޸�ĭ Ŭ������ �Ϻ��� ��ȭ!','P1004.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1005','��ȭ�ҺҰ�����','C100',6800,'��Ƽ����! ��¥ �Ұ��!','P1005.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1006','������ �ҺҰ�����','C100',5200,'�ε巯�� �ҺҰ�⿡ �������� ���ϴ�!','P1006.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1007','����� ����','C100',7800,'�Ҹ� ���� ������, �������� �����, �����̽��丶��ҽ��� ������ �����̾� ����','P1007.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1008','��Ʈ��ġ�� ����','C100',7800,'��¥ �Ҹ��� ��ܶ�, 4���� ��ǰ�� ġ��� �ҿ� ���� ���� ���� ��Ƽ�� ����!','P1008.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1009','���� ����','C100',9400,'�Ҹ� ���� ������, ġŲ, �������� ȭ���� ��ƺ�� �ҽ��� �е����� ��','P1009.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1010','��׽� ����','C100',9400,'��׽� ���� ��׽� �ٺ�ť �ҽ��� ǳ��!','P1010.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1011','��׽� �ӽ��� ����','C100',9800,'��׽� ���� ��׽� �ٺ�ť �ҽ��� ǳ��!','P1011.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1012','����Ŀ3 ����','C100',11600,'�ϰ� ������ �ִ� ����, �� ũ�� �����ϼ���!','P1012.PNG',NULL,0);
INSERT INTO PRODUCT VALUES('P1013','����Ŀ4 ����','C100',13600,'�ϰ� ������ �ִ� ����, �� ũ�� �����ϼ���!','P1013.PNG',NULL,0);

INSERT INTO PRODUCT VALUES('P1014','��ī�ݶ�','C200',2500,'��ī-�ݶ�� �� ¥���ϰ�!','P1014.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1015','��ī�ݶ�-����','C200',2700,'��ī-�ݶ�� �� ¥���ϰ�!','P1015.PNG','P1014',1);
INSERT INTO PRODUCT VALUES('P1016','��ī�ݶ� ����','C200',2500,'100%¥����, Į�θ��� ����!','P1016.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1017','��ī�ݶ� ����-����','C200',2700,'100%¥����, Į�θ��� ����!','P1017.PNG','P1016',1);
INSERT INTO PRODUCT VALUES('P1018','��������Ʈ','C200',2500,'���� ����� ������!','P1018.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1019','��������Ʈ-����','C200',2700,'���� ����� ������!','P1019.PNG','P1018',1);
INSERT INTO PRODUCT VALUES('P1020','�̳׶� ����','C200',1900,NULL,'P1020.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1021','�̴ָ��̵� ������','C200',3400,NULL,'P1021.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1022','���׷�','C200',2500,NULL,'P1022.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1023','���׷�-����','C200',2700,NULL,'P1023.PNG','P1022',1);
INSERT INTO PRODUCT VALUES('P1024','�������� ������','C200',2800,'���� Į�θ� 100% õ�� ������ �帵ũ','P1024.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1025','�������� û����','C200',2800,'���� Į�θ� 100% õ�� ������ �帵ũ','P1025.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1026','�Ƹ޸�ī��','C200',2200,'�ڿ��� ���� ����ŷ RA����Ŀ��','P1026.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1027','���̽� �Ƹ޸�ī��','C200',2200,'�ڿ��� ���� ����ŷ RA����Ŀ��','P1027.PNG','P1026',1);
INSERT INTO PRODUCT VALUES('P1028','������','C200',2700,'������ ����!','P1028.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1029','���̽� ����','C200',2700,'������ ����!','P1029.PNG','P1028',1);

INSERT INTO PRODUCT VALUES('P1030','����ġ������','C300',2400,'�����ְ��� ���ڸ� �����ؼ� ����ŷ���� ������� �ٻ��ϰ�!','P1030.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1031','����ġ������-����','C300',2900,'�����ְ��� ���ڸ� �����ؼ� ����ŷ���� ������� �ٻ��ϰ�!','P1031.PNG','P1030',1);
INSERT INTO PRODUCT VALUES('P1032','��Ͼ�','C300',2700,NULL,'P1032.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1033','ġ��������','C300',3300,NULL,'P1033.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1034','21ġ�ƽ','C300',2400,NULL,'P1034.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1035','�ʰ�ŷ(4����)','C300',2700,'�ٻ�~ ����~ ���Կ� �� �ε巯�� �ʰ�ŷ!','P1035.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1036','�ʰ�ŷ(6����)','C300',3700,'�ٻ�~ ����~ ���Կ� �� �ε巯�� �ʰ�ŷ!','P1036.PNG','P1035',1);
INSERT INTO PRODUCT VALUES('P1037','�ٻ�ŷ(2����)','C300',3500,'�����ϰ�! �ٻ��ϰ� Ƣ�� ġŲ��','P1037.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1038','�ٻ�ŷ(4����)','C300',6300,'�����ϰ�! �ٻ��ϰ� Ƣ�� ġŲ��','P1038.PNG','P1037',1);
INSERT INTO PRODUCT VALUES('P1039','ũ���̸�¥��(5����)','C300',3000,'���� �ٻ�~ ���� �ε巯�� ũ��ġ� ���, ũ���̸�¥��!','P1039.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1040','ũ���̸�¥��(10����)','C300',5100,'���� �ٻ�~ ���� �ε巯�� ũ��ġ� ���, ũ���̸�¥��!','P1040.PNG','P1039',1);
INSERT INTO PRODUCT VALUES('P1041','���ڳӽ�����(3����)','C300',4200,'�ٻ��� ���ڳ� ���� ���� �ʱ��� ������ ���޴��� ĥ���ҽ�','P1041.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1042','���ڳӽ�����(6����)','C300',7200,'�ٻ��� ���ڳ� ���� ���� �ʱ��� ������ ���޴��� ĥ���ҽ�','P1042.PNG','P1041',1);
INSERT INTO PRODUCT VALUES('P1043','����ŷ������ ����ġ��','C300',2700,'���� ǳ�̰� �������� ��������� ���� ����!','P1043.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1044','����ŷ������ ������Ͼ�','C300',2700,'���� ǳ�̰� �������� ��������� ���� ����!','P1044.PNG','P1043',1);
INSERT INTO PRODUCT VALUES('P1045','����ŷ������ �����','C300',2700,'���� ǳ�̰� �������� ��������� ���� ����!','P1045.PNG','P1043',1);

INSERT INTO PRODUCT VALUES('P1046','�� ���̽�ũ��','C400',900,'õ���ٴҶ��� ǻ����� ÷���� ���� ��޽����� �����̾� ��ũ ���̽�ũ��','P1046.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1047','�� ���̽�ũ��','C400',900,'õ���ٴҶ��� ǻ����� ÷���� ���� ��޽����� �����̾� ��ũ ���̽�ũ��','P1047.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1048','���� �ٴҶ�','C400',1500,'����� �ٴҶ� �� ������ �� ���ִ�!','P1048.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1049','���� ����','C400',1500,'�����ϰ� ���� ������ ��!','P1049.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1050','���� ����','C400',1500,'������� ��ŭ���� ����־��!','P1050.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1051','���� �ٳ���','C400',1900,'�ε巯�� ���̽�ũ���� �ٳ����� ��!','P1051.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1052','���� ����ٳ���','C400',1900,'�ε巯�� ���̽�ũ���� ���Ⱑ ��!','P1052.PNG',NULL,1);
INSERT INTO PRODUCT VALUES('P1053','���� ���ڹٳ���','C400',1900,'�ε巯�� ���̽�ũ���� ���ڰ� ��!','P1053.PNG',NULL,1);

INSERT INTO BUNDLE VALUES('S1001','���� ��Ʈ','����+����ġ������+�ݶ�',9300,'S1001.PNG','P1001');
INSERT INTO BUNDLE VALUES('S1002','ġ�� ���� ��Ʈ','ġ�� ����+����ġ������+�ݶ�',9900,'S1002.PNG','P1002');
INSERT INTO BUNDLE VALUES('S1003','�Ұ�� ���� ��Ʈ','�Ұ�� ����+����ġ������+�ݶ�',9300,'S1003.PNG','P1003');
INSERT INTO BUNDLE VALUES('S1004','������ ġ�� ���� ��Ʈ','������ ġ�� ����+����ġ������+�ݶ�',10100,'S1004.PNG','P1004');
INSERT INTO BUNDLE VALUES('S1005','��ȭ �ҺҰ�� ���� ��Ʈ','��ȭ �ҺҰ�� ����+����ġ������+�ݶ�',6100,'S1005.PNG','P1006');
INSERT INTO BUNDLE VALUES('S1006','������ �ҺҰ�� ���� ��Ʈ','������ �ҺҰ�� ����+����ġ������+�ݶ�',6100,'S1006.PNG','P1006');
INSERT INTO BUNDLE VALUES('S1007','����� ���� ��Ʈ','����� ����+����ġ������+�ݶ�',10100,'S1007.PNG','P1007');
INSERT INTO BUNDLE VALUES('S1008','��Ʈ��ġ�� ���� ��Ʈ','��Ʈ��ġ�� ����+����ġ������+�ݶ�',10100,'S1008.PNG','P1009');
INSERT INTO BUNDLE VALUES('S1009','���� ���� ��Ʈ','���� ����+����ġ������+�ݶ�',10700,'S1009.PNG','P1009');
INSERT INTO BUNDLE VALUES('S1010','��׽� ���� ��Ʈ','��׽� ����+����ġ������+�ݶ�',10700,'S1010.PNG','P1010');
INSERT INTO BUNDLE VALUES('S1011','��׽� �ӽ��� ���� ��Ʈ','��׽� �ӽ��� ����+����ġ������+�ݶ�',11100,'S1011.PNG','P1011');
INSERT INTO BUNDLE VALUES('S1012','����Ŀ3 ���� ��Ʈ','����Ŀ3 ����+����ġ������+�ݶ�',13900,'S1012.PNG','P1012');
INSERT INTO BUNDLE VALUES('S1013','����Ŀ4 ���� ��Ʈ','����Ŀ4 ����+����ġ������+�ݶ�',15900,'S1013.PNG','P1013');

COMMIT;

SELECT * FROM category;
SELECT * FROM product;
SELECT * FROM bundle;
SELECT * FROM orders;
SELECT * FROM orders_details;

select orders.orders_code, orders.orders_price, orders.orders_date,
       sum(orders.orders_price) over (partition by orders.orders_code order by orders.orders_date)
from orders
        left join orders_details on orders.orders_code = orders.orders_code
 where  to_char(ORDERS_DATE, 'yy/mm/dd' ) = '21/08/29';
 
 SELECT * FROM (SELECT ROWNUM, (SELECT SUM(ORDERS_DETAILS_QTY) FROM ORDERS_DETAILS) FROM ORDERS NATURAL JOIN ORDERS_DETAILS ORDER BY ORDERS_DATE);
 
 insert into orders(ORDERS_CODE,ORDERS_PRICE,ORDERS_DATE) values(ORDERS_SEQ.nextval,7000, default);
insert into orders(ORDERS_CODE,ORDERS_PRICE,ORDERS_DATE) values(ORDERS_SEQ.nextval,7600, default);

insert into ORDERS_DETAILS(ORDERS_DETAILS_CODE,ORDERS_CODE,PRODUCT_CODE,BUNDLE_CODE,ORDERS_DETAILS_QTY) values(ORDERS_DETAILS_SEQ.nextval,ORDERS_SEQ.currval, 'P1001','S1001',1);
insert into ORDERS_DETAILS(ORDERS_DETAILS_CODE,ORDERS_CODE,PRODUCT_CODE,BUNDLE_CODE,ORDERS_DETAILS_QTY) values(ORDERS_DETAILS_SEQ.nextval,ORDERS_SEQ.currval, 'P1002','S1002',2);