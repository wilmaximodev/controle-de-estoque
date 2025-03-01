REATE DATABASE  IF NOT EXISTS `CONTROLE_DE_ESTOQUE` ;
USE `CONTROLE_DE_ESTOQUE`;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `barcode` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Insert values for table `products`
--

INSERT INTO `products` VALUES
  (1,'Camisa', '0123456789', 'camisa de grife'),(2,'Bolsa', '1234567890', 'bolsa de grife'),(3,'Calça', '1234560789', 'calça de grife'),

--
-- Table structure for table `matches`
--