const cases = [
  {
    title: 'Разработка интернет-магазина для дистрибьютора шин',
    items: [
      'Разработали уникальный дизайн карточек товаров и каталога.',
      'Настроили для сайта интеграцию с 1С и CRM системой синхронизации товаров и заказов.',
      'Создали специальные разделы «Подробнее об акциях», «Запись на шиномонтаж», «Доставка».',
      'Подключили функционал оплаты онлайн, в рассрочку или кредит.',
      'Создали закрытый раздел с заказами для менеджеров, в котором хранятся все данные по услугам.',
    ],
    img: require('../../assets/img/cases/tire-pro.png'),
  },
  {
    title: 'Разработка индивидуального корпоративного сайта для сети детских парков',
    items: [
      'Оформили интерфейс в фирменном стиле компании',
      'Разработали личный кабинет для пользователей и регистрацию через SMS для удобного доступа',
      'Создали интерфейс для просмотра и скачивания купленных билетов с QR-кодом из 1С и накопленных бонусов',
      'Провели интеграцию с 1С для синхронизации: актуальных цен, свободных билетов и залов',
      'Внедрили онлайн-оплату билетов и бронирование мероприятий'
    ],
    img: require('../../assets/img/cases/avatariya.png'),
  },
  {
    title: 'Ведение контекстной рекламы для интернет-магазина сантехники',
    items: [
      'Привлекли более 34 000 заявок с сайта через Google Ads и Яндекс.Директ',
      'На 50% снизили цену клика (CPC), с 0,08$ до 0,04$ ',
      'Снизили стоимость обращения с 3,14$ до 0,58$ ',
    ],
    img: require('../../assets/img/cases/whale.png'),
  },
  {
    title: 'Разработка корпоративного сайта для компании промышленного строительства',
    items: [
      'Разработали уникальный дизайн в фирменном стиле компании.',
      'Реализовали многоуровневый каталог продукции.',
      'Настроили SEO-оптимизацию и аналитику.',
      'Подключили форму обратной связи с уведомлениями.',
    ],
    img: require('../../assets/img/cases/kss.png'),
  },
  {
    title: 'Разработка платформы Whale',
    items: [
      'Оформили сайт в фирменном стиле компании.',
      'Разместили информацию о компании, проектах и руководстве',
      'Реализовали подачу заявок для поставщиков для участия в Закупках',
      'Добавили раздел для привлечения студентов профильных вузов на практику и трудоустройство в компанию',
      'Разработали три языковые версии: казахскую, русскую и английскую'
    ],
    img: require('../../assets/img/cases/geo-int.png'),
  },
];

const slider = document.querySelector('.cases__slider');
if (slider) {
  const track   = slider.querySelector('.cases__slide');
  const prevBtn = slider.querySelector('.cases__arrow--prev');
  const nextBtn = slider.querySelector('.cases__arrow--next');
  const dotsWrap = document.querySelector('.cases__dots');
  let current   = 0;

  dotsWrap.innerHTML = cases
    .map((_, i) => `<span class="cases__dot${i === 0 ? ' cases__dot--active' : ''}"></span>`)
    .join('');
  const dots = dotsWrap.querySelectorAll('.cases__dot');

  function renderSlide(index) {
    const c = cases[index];
    track.innerHTML = `
      <div class="cases__slide-content">
        <h3>${c.title}</h3>
        <ul>
          ${c.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="cases__slide-image">
        <img src="${c.img}" alt="${c.title}">
      </div>
    `;
  }

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('cases__dot--active', i === index);
    });
  }

  function goTo(index, direction = 1) {

    track.classList.add('cases__slide--exit');
    if (direction < 0) track.style.transform = 'translateX(24px)';

    setTimeout(() => {
      current = (index + cases.length) % cases.length;
      renderSlide(current);
      updateDots(current);

      track.classList.remove('cases__slide--exit');
      track.style.transform = '';
      track.classList.add('cases__slide--enter');
      if (direction < 0) track.style.transform = 'translateX(-24px)';

      track.offsetHeight;

      track.classList.remove('cases__slide--enter');
      track.style.transform = '';
    }, 260);
  }

  goTo(0);

  prevBtn.addEventListener('click', () => goTo(current - 1, -1));
  nextBtn.addEventListener('click', () => goTo(current + 1, 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i, i > current ? 1 : -1)));

  // Swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goTo(current + 1, 1) : goTo(current - 1, -1);
    }
  }, { passive: true });
}
