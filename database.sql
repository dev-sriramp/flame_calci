--database : mydata
CREATE TABLE IF NOT EXISTS `data` (
 `id` int(7) NOT NULL AUTO_INCREMENT,
 `name` varchar(120) NOT NULL,
 `crush` varchar(120) NOT NULL,
 `result` varchar(120) NOT NULL,
 PRIMARY KEY (`id`)
 ) AUTO_INCREMENT=1;