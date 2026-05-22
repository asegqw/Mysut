# ESTO Eco Store

Готовый стартовый проект интернет-магазина экотоваров на HTML, CSS, JavaScript, PHP и MySQL.

## Что есть
- Отдельные страницы: главная, каталог, избранное, корзина, вход/регистрация, личный кабинет, admin panel.
- AJAX корзина и избранное.
- Поиск, сортировка и фильтры товаров.
- GSAP-анимации.
- Темная тема через localStorage.
- Адаптивная верстка под телефон.
- PHP API для React/Vue: `api/products.php`, `api/cart.php`, `api/favorites.php`, `api/auth.php`, `api/order.php`.
- Заготовка Kaspi оплаты в `api/order.php`.
- Заготовка Telegram уведомлений в `api/order.php`.

## Запуск
1. Скопируйте папку проекта в `htdocs` или на PHP-хостинг.
2. Создайте базу через `database.sql`.
3. В `php/db.php` укажите логин/пароль MySQL.
4. Откройте `index.html` через локальный сервер, например `http://localhost/esto_full_project/`.

## Админ
Чтобы зайти в админку, зарегистрируйте пользователя и в таблице `users` поменяйте `role` на `admin`.

```sql
UPDATE users SET role='admin' WHERE email='your@email.com';
```

## Изображения
Все изображения оставлены как placeholders. Свои картинки положите в `assets/img/` и укажите путь в таблице `products.image`.


## Каталог товаров
В проект добавлено 25 готовых экотоваров. Для каждого товара есть отдельная SVG-картинка в `assets/img/product-01.svg` ... `product-25.svg`. Их можно заменить своими JPG/PNG, главное обновить путь `image` в таблице `products`.

Чтобы быстро заполнить базу, импортируй `database.sql` в phpMyAdmin или через MySQL CLI.
