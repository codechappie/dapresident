CREATE TABLE president ( 
    `id` INT NOT NULL AUTO_INCREMENT, 
    `name` VARCHAR(255) NOT NULL, 
    `lastname` VARCHAR(255) NOT NULL, 
    `country` VARCHAR(255) NOT NULL, 
    `biography` TEXT NOT NULL,
    `birth` DATE NOT NULL,
    `government_period` DATE NOT NULL,
    `image_url` TEXT NOT NULL,
    PRIMARY KEY (`id`)) ENGINE = InnoDB;
