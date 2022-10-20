

CREATE TABLE `wikiredit`.`usuarios` (
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre_s` VARCHAR(50) NOT NULL,
  `apellido_1` VARCHAR(45) NOT NULL,
  `apellido_2` VARCHAR(45) NULL,
  `edad` INT NOT NULL,
  `email` VARCHAR(55) NOT NULL,
  `nick_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_usuarios`));


