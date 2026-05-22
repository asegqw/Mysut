const API = './api/';
const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

const CATALOG_PRODUCTS = [
  {id:1,title:'Бамбуковая зубная щетка',category:'Красота',material:'бамбук',price:1200,old_price:1500,image:'assets/img/product-01.svg',description:'Мягкая щетина и биоразлагаемая ручка из натурального бамбука.'},
  {id:2,title:'Стеклянная эко-бутылка',category:'Лайфстайл',material:'стекло',price:5500,old_price:6900,image:'assets/img/product-02.svg',description:'Многоразовая бутылка 650 мл с защитным чехлом для города и тренировок.'},
  {id:3,title:'Хлопковый шоппер ESTO',category:'Лайфстайл',material:'органический хлопок',price:3500,old_price:4200,image:'assets/img/product-03.svg',description:'Прочная сумка для покупок вместо пластиковых пакетов.'},
  {id:4,title:'Джутовая губка для посуды',category:'Кухня',material:'джут',price:850,image:'assets/img/product-04.svg',description:'Натуральная губка для бережного мытья посуды и кухонных поверхностей.'},
  {id:5,title:'Натуральное мыло Лаванда',category:'Ванная',material:'растительные масла',price:1800,image:'assets/img/product-05.svg',description:'Мыло ручной работы без синтетических отдушек и лишней упаковки.'},
  {id:6,title:'Рефил гель для стирки',category:'Бытовая химия',material:'refill',price:4200,old_price:4800,image:'assets/img/product-06.svg',description:'Экологичный концентрат для стирки в формате refill.'},
  {id:7,title:'Восковые салфетки 3 шт',category:'Кухня',material:'хлопок и пчелиный воск',price:3900,old_price:4500,image:'assets/img/product-07.svg',description:'Замена пищевой пленке для хранения овощей, фруктов и перекусов.'},
  {id:8,title:'Металлические трубочки',category:'Кухня',material:'нержавеющая сталь',price:2400,image:'assets/img/product-08.svg',description:'Набор многоразовых трубочек с щеточкой для чистки.'},
  {id:9,title:'Термокружка из стали',category:'Лайфстайл',material:'нержавеющая сталь',price:7600,old_price:8900,image:'assets/img/product-09.svg',description:'Держит напитки горячими и холодными в дороге.'},
  {id:10,title:'Бамбуковые ватные палочки',category:'Красота',material:'бамбук и хлопок',price:950,image:'assets/img/product-10.svg',description:'Палочки без пластикового основания, 100 штук.'},
  {id:11,title:'Твердый шампунь плитка',category:'Красота',material:'натуральные масла',price:3200,old_price:3800,image:'assets/img/product-11.svg',description:'Компактная плитка для ухода за волосами без пластика.'},
  {id:12,title:'Эко порошок для посудомойки',category:'Бытовая химия',material:'минеральный состав',price:4600,image:'assets/img/product-12.svg',description:'Концентрированный порошок без агрессивных компонентов.'},
  {id:13,title:'Кокосовая щетка для овощей',category:'Кухня',material:'кокосовое волокно',price:2700,image:'assets/img/product-13.svg',description:'Щетка для овощей, фруктов и кухонных поверхностей.'},
  {id:14,title:'Мешочки для овощей 5 шт',category:'Кухня',material:'хлопковая сетка',price:2900,old_price:3400,image:'assets/img/product-14.svg',description:'Многоразовые мешочки для покупок и хранения.'},
  {id:15,title:'Деревянная мыльница',category:'Ванная',material:'бук',price:2200,image:'assets/img/product-15.svg',description:'Мыльница с дренажем, чтобы твердое мыло служило дольше.'},
  {id:16,title:'Зубная паста в таблетках',category:'Красота',material:'натуральный состав',price:3100,old_price:3600,image:'assets/img/product-16.svg',description:'Таблетки для чистки зубов в стеклянной баночке.'},
  {id:17,title:'Стиральные листы',category:'Бытовая химия',material:'биоразлагаемые листы',price:3900,image:'assets/img/product-17.svg',description:'Легкая альтернатива жидкому средству для стирки.'},
  {id:18,title:'Многоразовый стакан для кофе',category:'Лайфстайл',material:'биопластик',price:6400,old_price:7200,image:'assets/img/product-18.svg',description:'Стакан с крышкой для кофе навынос.'},
  {id:19,title:'Натуральная люфа для душа',category:'Ванная',material:'люфа',price:2100,image:'assets/img/product-19.svg',description:'Мочалка для мягкого пилинга без синтетических волокон.'},
  {id:20,title:'Соевая эко-свеча',category:'Дом',material:'соевый воск',price:4900,old_price:5600,image:'assets/img/product-20.svg',description:'Свеча с хлопковым фитилем и мягким натуральным ароматом.'},
  {id:21,title:'Компостируемые пакеты',category:'Дом',material:'кукурузный крахмал',price:2600,image:'assets/img/product-21.svg',description:'Пакеты для органических отходов, 20 штук.'},
  {id:22,title:'Органайзер из переработанного картона',category:'Дом',material:'recycled paper',price:3300,image:'assets/img/product-22.svg',description:'Мини-органайзер для рабочего стола и косметики.'},
  {id:23,title:'Натуральный дезодорант',category:'Красота',material:'минеральная основа',price:3700,old_price:4300,image:'assets/img/product-23.svg',description:'Дезодорант без алюминия в бумажной упаковке.'},
  {id:24,title:'Тряпки из recycled микрофибры',category:'Дом',material:'переработанное волокно',price:2800,image:'assets/img/product-24.svg',description:'Набор для уборки дома, 4 штуки.'},
  {id:25,title:'Подарочный эко-набор ESTO',category:'Подарки',material:'микс натуральных материалов',price:12900,old_price:14900,image:'assets/img/product-25.svg',description:'Готовый набор из популярных экотоваров.'}
];

function money(value) {
  return new Intl.NumberFormat('ru-KZ').format(Number(value || 0)) + ' ₸';
}

function getStore(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function setStore(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function getCart() { return getStore('esto_cart', []); }
function setCart(cart) { setStore('esto_cart', cart); updateCounters(); }
function getFavorites() { return getStore('esto_favorites', []); }
function setFavorites(items) { setStore('esto_favorites', items); updateCounters(); }
function findProduct(id) { return CATALOG_PRODUCTS.find(p => String(p.id) === String(id)); }

function toast(text) {
  let el = qs('.toast');
  if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(el.timer);
  el.timer = setTimeout(() => el.classList.remove('show'), 2200);
}

function updateCounters() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  qsa('[data-cart-count]').forEach(el => el.textContent = count);
  const favCount = getFavorites().length;
  qsa('[data-fav-count]').forEach(el => el.textContent = favCount);
}

function addToCart(id, qty = 1) {
  const product = findProduct(id);
  if (!product) return;
  const cart = getCart();
  const item = cart.find(row => String(row.id) === String(id));
  if (item) item.qty += qty;
  else cart.push({ id: Number(id), qty });
  setCart(cart);
  toast('Товар добавлен в корзину');
  fetch(API + 'cart.php', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({action:'add', product_id:id, qty}) }).catch(() => {});
}

function toggleFavorite(id) {
  const product = findProduct(id);
  if (!product) return;
  let favs = getFavorites();
  const exists = favs.includes(Number(id));
  favs = exists ? favs.filter(x => x !== Number(id)) : [...favs, Number(id)];
  setFavorites(favs);
  toast(exists ? 'Удалено из избранного' : 'Добавлено в избранное');
  renderAllDynamicBlocks();
  fetch(API + 'favorites.php', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({action: exists ? 'remove' : 'add', product_id:id}) }).catch(() => {});
}

function productCard(product) {
  const fav = getFavorites().includes(Number(product.id));
  return `
    <article class="product-card" data-product-card data-category="${product.category}">
      <button class="quick-view" data-view="${product.id}" type="button">Быстрый просмотр</button>
      <div class="product-img"><img src="${product.image}" alt="${product.title}" loading="lazy"></div>
      <div class="product-body">
        <div class="product-meta"><span class="badge">${product.category}</span><button class="fav-btn ${fav ? 'active' : ''}" data-fav="${product.id}" type="button">${fav ? '♥' : '♡'}</button></div>
        <h3>${product.title}</h3>
        <p class="muted small">${product.description}</p>
        <p class="muted small">Материал: ${product.material}</p>
        <div class="price">${money(product.price)} ${product.old_price ? `<span class="old-price">${money(product.old_price)}</span>` : ''}</div>
        <div class="card-actions">
          <button class="btn add-cart" data-cart="${product.id}" type="button">В корзину</button>
          <button class="btn light" data-buy="${product.id}" type="button">Купить</button>
        </div>
      </div>
    </article>`;
}

function filteredProducts() {
  const form = qs('#filterForm');
  const data = form ? Object.fromEntries(new FormData(form)) : {};
  const search = String(data.search || '').trim().toLowerCase();
  const category = String(data.category || '').trim();
  const min = Number(data.min || 0);
  const max = Number(data.max || 999999999);
  let products = [...CATALOG_PRODUCTS];
  if (search) products = products.filter(p => `${p.title} ${p.description} ${p.material}`.toLowerCase().includes(search));
  if (category) products = products.filter(p => p.category === category);
  products = products.filter(p => p.price >= min && p.price <= max);
  if (data.sort === 'price_asc') products.sort((a,b) => a.price - b.price);
  if (data.sort === 'price_desc') products.sort((a,b) => b.price - a.price);
  if (data.sort === 'title_asc') products.sort((a,b) => a.title.localeCompare(b.title, 'ru'));
  if (!data.sort || data.sort === 'new') products.sort((a,b) => a.id - b.id);
  return products;
}

function renderCatalog() {
  const grid = qs('#productsGrid');
  if (!grid) return;
  const products = filteredProducts();
  grid.innerHTML = products.length ? products.map(productCard).join('') : '<div class="empty-box">Товары не найдены. Попробуйте изменить фильтры.</div>';
  const count = qs('#catalogCount');
  if (count) count.textContent = `${products.length} товаров на странице`;
  bindButtons();
  animateCards();
}

function renderFavorites() {
  const grid = qs('#favoritesGrid');
  if (!grid) return;
  const ids = getFavorites();
  const products = ids.map(findProduct).filter(Boolean);
  grid.innerHTML = products.length ? products.map(productCard).join('') : '<div class="empty-box">В избранном пока пусто. Перейдите в каталог и нажмите сердечко.</div>';
  bindButtons();
  animateCards();
}

function renderCart() {
  const list = qs('#cartList');
  if (!list) return;
  const cart = getCart();
  let total = 0;
  if (!cart.length) {
    list.innerHTML = '<div class="empty-box">Корзина пустая. Добавьте товары из каталога.</div>';
  } else {
    list.innerHTML = cart.map(item => {
      const p = findProduct(item.id);
      if (!p) return '';
      total += p.price * item.qty;
      return `<article class="cart-item">
        <div class="cart-thumb"><img src="${p.image}" alt="${p.title}"></div>
        <div><h3>${p.title}</h3><p class="muted small">${p.category}</p><b>${money(p.price)}</b></div>
        <div class="qty"><button data-dec="${p.id}" type="button">−</button><span>${item.qty}</span><button data-inc="${p.id}" type="button">+</button><button class="remove" data-remove="${p.id}" type="button">Удалить</button></div>
      </article>`;
    }).join('');
  }
  const totalEl = qs('#cartTotal');
  if (totalEl) totalEl.textContent = money(total);
  qsa('[data-inc]').forEach(btn => btn.onclick = () => { addToCart(btn.dataset.inc, 1); renderCart(); });
  qsa('[data-dec]').forEach(btn => btn.onclick = () => changeQty(btn.dataset.dec, -1));
  qsa('[data-remove]').forEach(btn => btn.onclick = () => removeFromCart(btn.dataset.remove));
}

function changeQty(id, delta) {
  let cart = getCart();
  const item = cart.find(row => String(row.id) === String(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(row => String(row.id) !== String(id));
  setCart(cart);
  renderCart();
}
function removeFromCart(id) {
  setCart(getCart().filter(row => String(row.id) !== String(id)));
  toast('Товар удален');
  renderCart();
}

function bindButtons() {
  qsa('[data-cart]').forEach(btn => btn.onclick = () => addToCart(btn.dataset.cart, 1));
  qsa('[data-buy]').forEach(btn => btn.onclick = () => { addToCart(btn.dataset.buy, 1); window.location.href = 'cart.html'; });
  qsa('[data-fav]').forEach(btn => btn.onclick = () => toggleFavorite(btn.dataset.fav));
  qsa('[data-view]').forEach(btn => btn.onclick = () => openProductModal(btn.dataset.view));
}

function openProductModal(id) {
  const p = findProduct(id);
  if (!p) return;
  let modal = qs('#productModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'modal';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `<div class="modal-card">
    <button class="modal-close" type="button">×</button>
    <img src="${p.image}" alt="${p.title}">
    <div><span class="badge">${p.category}</span><h2>${p.title}</h2><p class="muted">${p.description}</p><p class="muted">Материал: ${p.material}</p><div class="price">${money(p.price)}</div><div class="card-actions"><button class="btn" data-cart="${p.id}" type="button">В корзину</button><button class="btn light" data-buy="${p.id}" type="button">Купить</button></div></div>
  </div>`;
  modal.classList.add('show');
  qs('.modal-close', modal).onclick = () => modal.classList.remove('show');
  modal.onclick = e => { if (e.target === modal) modal.classList.remove('show'); };
  bindButtons();
}

function renderAllDynamicBlocks() {
  renderCatalog();
  renderFavorites();
  renderCart();
}

function animateCards() {
  if (!window.gsap) return;
  gsap.fromTo('[data-product-card]', { opacity:0, y:24 }, { opacity:1, y:0, duration:.45, stagger:.035, ease:'power2.out' });
}

function initTheme() {
  const saved = localStorage.getItem('esto_theme');
  if (saved === 'dark') document.documentElement.classList.add('dark');
  qsa('[data-theme-toggle]').forEach(btn => btn.onclick = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('esto_theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
}

function initForms() {
  const filter = qs('#filterForm');
  if (filter) {
    filter.addEventListener('submit', e => { e.preventDefault(); renderCatalog(); });
    qsa('input,select', filter).forEach(el => el.addEventListener('input', renderCatalog));
  }
  const reset = qs('#resetFilters');
  if (reset) reset.onclick = () => { filter.reset(); renderCatalog(); };
  const order = qs('#orderForm');
  if (order) order.addEventListener('submit', e => {
    e.preventDefault();
    if (!getCart().length) return toast('Корзина пустая');
    toast('Заказ оформлен. Kaspi и Telegram подключаются в api/order.php');
    const link = qs('#kaspiLink');
    if (link) { link.hidden = false; link.href = 'https://kaspi.kz/shop/'; }
  });
}

function initMobileMenu() {
  const toggle = qs('#mobileToggle');
  const menu = qs('#menu');
  if (toggle && menu) toggle.onclick = () => menu.classList.toggle('open');
}

function initHomeSlider() {
  const slider = qs('#homeSlider') || qs('#productSlider');
  if (!slider) return;
  slider.innerHTML = CATALOG_PRODUCTS.slice(0, 10).map(productCard).join('');
  bindButtons();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initForms();
  initHomeSlider();
  renderAllDynamicBlocks();
  updateCounters();
});
