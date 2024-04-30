-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- -- USE DATABASE
-- USE ecommerce_db;

-- -- Category TABLE
-- CREATE TABLE Category (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   category_name VARCHAR(50) NOT NULL
-- );

-- -- Product TABLE
-- CREATE TABLE Product (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   product_name VARCHAR(50) NOT NULL,
--   price DECIMAL(10,2) NOT NULL,
--   stock_quantity INT NOT NULL DEFAULT 10,
--   category_id INT,
--     FOREIGN KEY (category_id)
--     REFERENCES category(id)
-- );

-- -- Tag TABLE
-- CREATE TABLE Tag (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   tag_name VARCHAR(50) NOT NULL
-- );

-- -- ProductTag TABLE
-- CREATE TABLE ProductTag (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   product_id INT,
--     FOREIGN KEY (product_id)
--     REFERENCES product(id),
--   tag_id INT,
--     FOREIGN KEY (tag_id)
--     REFERENCES tag(id)
-- );
