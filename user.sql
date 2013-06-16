

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
`uid` INTEGER NOT NULL AUTO_INCREMENT,
`fname` varchar(45) NOT NULL,
`lname` varchar(45) NOT NULL,
`name` varchar(90) NOT NULL,
`phno` varchar(20) ,
`email` varchar(60)  ,
`details` varchar(150),
PRIMARY KEY(`uid`)
)ENGINE=InnoDB;

