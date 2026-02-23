# Hoster.kz — Landing Page

Лендинг для веб-агентства **Hoster.kz**. Собран на Webpack 5 + SCSS с BEM-архитектурой.

## Технологии

- **Webpack 5** — сборка, dev-сервер, обработка ассетов
- **SCSS** — стили с BEM-нотацией, `@use`-импорты
- **Babel** — транспиляция JS (ES6+)
- **PostCSS / Autoprefixer** — автопрефиксы
- **EJS-шаблоны** — через `html-webpack-plugin`

## Структура проекта

```
src/
├── assets/
│   ├── icons/          # SVG-иконки
│   └── img/            # Изображения
├── blocks/             # БЭМ-блоки (JS + SCSS)
│   ├── header/
│   ├── hero/
│   ├── topbar/
│   ├── services/
│   ├── cases/
│   ├── why-us/
│   ├── marquee/
│   ├── faq/
│   ├── footer/
│   ├── modal/
│   ├── mobile-menu/
│   ├── button/
│   └── container/
├── common/
│   └── scss/
│       ├── variables.scss
│       ├── mixins.scss
│       └── base.scss
├── js/
│   └── index.js
├── scss/
│   └── style.scss
└── index.html
```

## Брейкпоинты

| Название  | Диапазон             |
|-----------|----------------------|
| `lg`      | ≤ 1024px             |
| `tablet`  | 769px — 1199px       |
| `md`      | ≤ 768px              |
| `sm`      | ≤ 480px              |

## Запуск

```bash
# Установка зависимостей
npm install

# Dev-сервер с hot reload
npm start

# Продакшн-сборка в папку dist/
npm run build
```

## Функциональность

- Адаптивная вёрстка (мобильные, планшеты, десктоп)
- Бургер-меню на мобильных и планшетах
- Слайдер кейсов со свайп-поддержкой (touch)
- Модальное окно с формой заявки
- Бесконечная прокрутка логотипов (marquee)
- Аккордеон FAQ
- Sticky-шапка
- Favicon SVG
