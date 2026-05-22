CREATE DATABASE IF NOT EXISTS esto_store CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE esto_store;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(40),
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('user','admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(120) NOT NULL,
    material VARCHAR(120) DEFAULT 'натуральный',
    price INT NOT NULL,
    old_price INT DEFAULT NULL,
    image VARCHAR(255) DEFAULT 'assets/img/product-placeholder.jpg',
    description TEXT,
    stock INT DEFAULT 10,
    is_hit TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    session_id VARCHAR(128) NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_cart_item (session_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    session_id VARCHAR(128) NULL,
    product_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_favorite_item (session_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    customer_name VARCHAR(160) NOT NULL,
    phone VARCHAR(40) NOT NULL,
    address VARCHAR(255),
    total INT NOT NULL,
    payment_method ENUM('kaspi','cash') DEFAULT 'kaspi',
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO products (title, category, material, price, old_price, image, description, stock, is_hit) VALUES
('Бамбуковая зубная щетка', 'Красота', 'бамбук', 1200, 1500, 'assets/img/product-01.svg', 'Мягкая щетина и биоразлагаемая ручка из бамбука.', 35, 1),
('Эко бутылка из стекла', 'Дом', 'стекло', 5500, 6900, 'assets/img/product-02.svg', 'Многоразовая бутылка 650 мл с защитным чехлом.', 18, 1),
('Хлопковый шоппер ESTO', 'Лайфстайл', 'органический хлопок', 3500, 4200, 'assets/img/product-03.svg', 'Прочная сумка для покупок вместо пластиковых пакетов.', 40, 1),
('Джутовая губка для посуды', 'Дом', 'джут', 850, NULL, 'assets/img/product-04.svg', 'Натуральная губка для бережного мытья посуды.', 60, 0),
('Натуральное мыло лаванда', 'Красота', 'растительные масла', 1800, NULL, 'assets/img/product-05.svg', 'Мыло ручной работы без синтетических отдушек.', 28, 1),
('Рефил гель для стирки', 'Бытовая химия', 'refill', 4200, 4800, 'assets/img/product-06.svg', 'Экологичный гель для стирки в формате refill.', 17, 1),
('Восковые салфетки 3 шт', 'Кухня', 'хлопок и пчелиный воск', 3900, 4500, 'assets/img/product-07.svg', 'Замена пищевой пленке для хранения продуктов.', 25, 1),
('Металлические трубочки', 'Кухня', 'нержавеющая сталь', 2400, NULL, 'assets/img/product-08.svg', 'Набор трубочек с щеточкой для чистки.', 32, 0),
('Термокружка из стали', 'Лайфстайл', 'нержавеющая сталь', 7600, 8900, 'assets/img/product-09.svg', 'Держит напитки горячими и холодными в дороге.', 14, 1),
('Бамбуковые ватные палочки', 'Красота', 'бамбук и хлопок', 950, NULL, 'assets/img/product-10.svg', 'Палочки без пластикового основания, 100 шт.', 70, 0),
('Сухой шампунь плитка', 'Красота', 'натуральные масла', 3200, 3800, 'assets/img/product-11.svg', 'Компактная плитка для ухода за волосами без пластика.', 21, 0),
('Эко порошок для посудомойки', 'Бытовая химия', 'минеральный состав', 4600, NULL, 'assets/img/product-12.svg', 'Концентрированный порошок без агрессивных компонентов.', 16, 0),
('Кокосовая щетка для овощей', 'Кухня', 'кокосовое волокно', 2700, NULL, 'assets/img/product-13.svg', 'Щетка для овощей, фруктов и кухонных поверхностей.', 24, 0),
('Мешочки для овощей 5 шт', 'Кухня', 'хлопковая сетка', 2900, 3400, 'assets/img/product-14.svg', 'Многоразовые мешочки для покупок и хранения.', 38, 1),
('Деревянная мыльница', 'Ванная', 'бук', 2200, NULL, 'assets/img/product-15.svg', 'Мыльница с дренажем для продления срока службы мыла.', 30, 0),
('Зубная паста в таблетках', 'Красота', 'натуральный состав', 3100, 3600, 'assets/img/product-16.svg', 'Таблетки для чистки зубов в стеклянной баночке.', 19, 1),
('Стиральные листы', 'Бытовая химия', 'биоразлагаемые листы', 3900, NULL, 'assets/img/product-17.svg', 'Легкая альтернатива жидкому средству для стирки.', 26, 0),
('Многоразовый стакан для кофе', 'Лайфстайл', 'биопластик', 6400, 7200, 'assets/img/product-18.svg', 'Стакан с крышкой для кофе навынос.', 15, 1),
('Люфа для душа', 'Ванная', 'люфа', 2100, NULL, 'assets/img/product-19.svg', 'Натуральная мочалка для мягкого пилинга.', 42, 0),
('Эко свеча соевая', 'Дом', 'соевый воск', 4900, 5600, 'assets/img/product-20.svg', 'Свеча с хлопковым фитилем и мягким ароматом.', 20, 1),
('Компостируемые пакеты', 'Дом', 'кукурузный крахмал', 2600, NULL, 'assets/img/product-21.svg', 'Пакеты для органических отходов, 20 шт.', 55, 0),
('Органайзер из переработанного картона', 'Дом', 'recycled paper', 3300, NULL, 'assets/img/product-22.svg', 'Мини-органайзер для рабочего стола.', 22, 0),
('Натуральный дезодорант', 'Красота', 'минеральная основа', 3700, 4300, 'assets/img/product-23.svg', 'Дезодорант без алюминия в бумажной упаковке.', 27, 1),
('Тряпки из микрофибры recycled', 'Дом', 'переработанное волокно', 2800, NULL, 'assets/img/product-24.svg', 'Набор для уборки, 4 шт.', 33, 0),
('Подарочный эко-набор ESTO', 'Подарки', 'микс натуральных материалов', 12900, 14900, 'assets/img/product-25.svg', 'Готовый набор из популярных экотоваров.', 12, 1);
