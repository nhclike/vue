--产品信息表
CREATE TABLE goods(
  productId INT PRIMARY KEY AUTO_INCREMENT,
  productName VARCHAR(64),
  productPrice FLOAT(8,2),
  productImg VARCHAR(32)
);
INSERT INTO goods VALUES
(1001,'小米6',2499.00,'mi6.jpg'),

(1002,'小米6',2499.00,'mi6.jpg')

