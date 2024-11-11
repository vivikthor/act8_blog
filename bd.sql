-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema act8_blogger
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema act8_blogger
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `act8_blogger` DEFAULT CHARACTER SET utf8 ;
USE `act8_blogger` ;

-- -----------------------------------------------------
-- Table `act8_blogger`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `act8_blogger`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `image` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `act8_blogger`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `act8_blogger`.`post` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` VARCHAR(150) NULL,
  `date` DATE NOT NULL,
  `category` VARCHAR(45) NULL,
  `users_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `users_id`),
  INDEX `fk_post_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `act8_blogger`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
