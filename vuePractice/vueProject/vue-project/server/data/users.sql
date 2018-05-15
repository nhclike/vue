create database dumall charset=utf8;
use dumall;
set names utf8;
--用户信息表
create table users(
		id int primary key AUTO_INCREMENT,
		uname varchar(20),
		upwd varchar(32),
		tel varchar(32),
    	rtime datetime
		);
insert into users values(null,'nhc','201108','13900000000','2017-5-12');
insert into users values(null,'tom','123456','13900000000','2017-5-12');
insert into users values(null,'like','123456','13900000000','2017-5-12');



