
-- //出版社，出版时间，第几版，简介，作者简介 待添加 
set names utf8;
drop table if exists order_content;
drop table if exists orders;
drop table if exists book;
drop table if exists user;
create table book
	(ID 		int NOT NULL AUTO_INCREMENT,
	 name		varchar(20) not null, 
	 author		varchar(20), 
	 stock		int NOT NULL,
	 price		numeric(5,2),
     words int,
	 publisher varchar(20), 
	 ISBN		varchar(20),
     upshelf tinyint(1),
     detail  TEXT,
	 primary key (ID)
)character set = utf8;

insert into book values (0,'霍乱时期的爱情', '加西亚·马尔克斯', 6, 39.5, 284000,'南海出版公司', '9787544258975',1,'★马尔克斯唯一正式授权，首次完整翻译

★《霍乱时期的爱情》是我最好的作品，是我发自内心的创作。——加西亚•马尔克斯

★这部光芒闪耀、令人心碎的作品是人类有史以来最伟大的爱情小说。——《纽约时报》

《霍乱时期的爱情》是加西亚•马尔克斯获得诺贝尔文学奖之后完成的第一部小说。讲述了一段跨越半个多世纪的爱情史诗，穷尽了所有爱情的可能性：忠贞的、隐秘的、粗暴的、羞怯的、柏拉图式的、放荡的、转瞬即逝的、生死相依的……再现了时光的无情流逝，被誉为“人类有史以来最伟大的爱情小说”，是20世纪最重要的经典文学巨著之一。');

insert into book values (0,'奥丽芙·基特里奇', '[美] 伊丽莎白·斯特劳特 ', 6,  58, 284000,'南海出版公司', '9787544266703',1,'《奥丽芙·基特里奇》内容简介：

--在儿子的婚礼上，奥丽芙无意中听到新娘说了几句自己的坏话，便赌气偷走她的一只皮鞋，扔进了垃圾桶。

--丈夫送的一束鲜花被奥丽芙毫不在意地丢进了旧花瓶，她没再多看一眼。

--“你娶了一个怪物，可你还是爱她。”奥丽芙始终没有对丈夫说出这句话。

奥丽芙刻薄、暴躁，她拒绝道歉和一切无用的矫情。可在别人看不到的地方，她也会不动声色地流露出对周遭世界的关怀和善意。她会毫不客气地戳穿伪善，也会毫不犹豫地伸出援手。

斯特劳特以罕有的优雅叙述，层层剥开寻常生活的庞杂与幽微，关照着每个被生活戳得千疮百孔，却仍心怀不舍的灵魂。a');

insert into book values (0,'喧哗与骚动','[美]威廉·福克纳',2,38,226000 ,'上海文艺出版社','9787532166367',1,'本书创作于一九二九年，是福克纳最具代表性的作品之一，同时也是作家本人最喜欢、花费心血最多的小说，讲述的是南方没落地主康普生一家的家族悲剧。老康普生游手好闲、嗜酒贪杯，其妻自私冷酷、怨天尤人。长子昆丁绝望地抱住南方所谓的旧传统不放，因深感妹妹凯蒂风流放荡的生活有辱了南方淑女身份而恨疚交加，竟至溺水自杀；次子杰生冷酷贪婪、自私自利；而三子班吉则是个白痴，三十三岁时只有三岁小孩的智力。本书围绕凯蒂的堕落而展开，分别通过这三个儿子的内心独白而反映该事件在不同人的内心产生的影响及其导致的心灵变化。最后由黑人女佣迪尔西对前三部分的“有限视角”做补充，归结全书。小说大量运用多视角叙述的写作方法及意识流的表现手法，是意识流小说乃至整个现代派小说的代表作。');


insert into book values (0,'1984',' [英] 乔治·奥威尔 ',2,38,226000 ,'北京十月文艺出版社','9787530210291',1,
'★村上春树以《1Q84》向本书致敬

★著名学者刘绍铭经典译本内地首次出版

★62种文字风靡110个国家，全球销量超过5000万册

★《时代周刊》“最好的100本英语小说”

★兰登书屋“100本20世纪最佳英语小说”

★入选英美中学生必读书书目

1936年以来，我所写的每 一部严肃作品，都是直接或间接地反对极权主义，支持我所理解的民主社会主义。 ——乔治•奥威尔（《我为何写作》）

《1984》是一部杰出的政治寓言小说，也是一部幻想小说。作品刻画了人类在极权主义社会的生存状态，有若一个永不褪色的警示标签，警醒世人提防这种预想中的黑暗成为现实。历经几十年，其生命力益显强大，被誉为20世纪影响最为深远的文学经典之一。');



create table user
	(ID 		int NOT NULL AUTO_INCREMENT,
	 name		varchar(10), 
	 password  varchar(50), 
	 email  	varchar(20), 
	 is_active	tinyint(1),
     spending numeric(5,2),
	 primary key (ID)
	)character set = utf8;
insert into user values (0, 'root', 'b81e2123f11354a7121706c332da7caa','',1,0);
insert into user values ( 0,'user_one', '6434180db2887bd4d71ca5ed6329eb2a','uesr_one@126.com',1,276);
insert into user values ( 0,'user_two', '4fdcf96f8e74e0dea8930b077ee0b3e5','uesr_two@126.com',1,138);
insert into user values ( 0,'user_three', '12725eeceac0c815e909536ed2f1f809','uesr_3@126.com',1,138);
insert into user values ( 0,'user_four', '20a17f3f47c78e403ca789e84b249670','uesr_4@126.com',1,138);
insert into user values ( 0,'user_five', '4245abf66df6115cccf09adc46b19e15','uesr_5@126.com',1,0);



create table orders
	(ID 		int NOT NULL AUTO_INCREMENT,
	 u_ID		int not null,
	 buydate 		datetime,
	 tot_price 	numeric(5,2),
	 is_cart	tinyint(1),
	 primary key (ID),
	 foreign key (u_ID) references user(ID)
	 on delete cascade
	)character set = utf8;

insert into orders values (0,2,  '2018-12-31 23:59:59',138,0);
insert into orders values (0,2, now(),0,1);
insert into orders values (0,2,  '2019-5-14 23:59:59',138,0);
insert into orders values (0,3,  '2019-2-8 23:59:59',138,1);
insert into orders values (0,3,  '2019-5-15 23:59:59',138,0);
insert into orders values (0,4,  '2019-2-6 23:59:59',138,1);
insert into orders values (0,4,  '2019-5-16 23:59:59',138,0);
insert into orders values (0,5,  '2019-2-6 23:59:59',138,1);
insert into orders values (0,5,  '2019-5-17 23:59:59',138,0);

insert into orders values (0,5,  '2019-5-18 23:59:59',138,0);

insert into orders values (0,4,  '2019-5-16 23:59:59',14.2,0);
insert into orders values (0,3,  '2019-5-14 23:59:59',48.4,0);
insert into orders values (0,2,  '2019-5-13 23:59:59',148,0);
insert into orders values (0,5,  '2019-5-17 23:59:59',18,0);
insert into orders values (0,4,  '2019-5-16 23:59:59',14.2,0);
insert into orders values (0,3,  '2019-5-15 23:59:59',48.4,0);
insert into orders values (0,2,  '2019-5-13 23:59:59',148,0);
insert into orders values (0,5,  '2019-5-19 03:59:59',18,0);

create table order_content
	(ID 		int NOT NULL AUTO_INCREMENT,
	o_ID	    int,
	b_ID		int,
	b_num 		numeric(5,0),
	price		numeric(5,2),
	primary key (ID),
  	foreign key (o_ID) references orders(ID),
	foreign key (b_ID) references book(ID)
	)character set = utf8;

insert into order_content values ( 1,1,1,2,39.5);
insert into order_content values ( 2,1,2,3,58);
insert into order_content values ( 3,1,3,1,38);

insert into order_content values ( 4,2,1,2,39.5);
insert into order_content values ( 5,2,2,3,58);
insert into order_content values ( 6,2,3,1,38);

insert into order_content values ( 7,3,1,2,39.5);
insert into order_content values ( 8,3,2,3,58);
insert into order_content values ( 9,3,3,1,38);

insert into order_content values ( 10,4,1,2,39.5);
insert into order_content values ( 11,4,2,3,58);
insert into order_content values ( 12,4,3,1,38);

insert into order_content values ( 13,5,1,2,39.5);
insert into order_content values ( 14,5,2,3,58);
insert into order_content values ( 15,5,3,1,38);

insert into order_content values ( 0,7,1,2,39.5);
insert into order_content values ( 0,7,2,3,58);
insert into order_content values ( 0,7,3,1,38);

insert into order_content values ( 0,9,1,2,39.5);
insert into order_content values ( 0,9,2,3,58);
insert into order_content values ( 0,9,3,1,38); 