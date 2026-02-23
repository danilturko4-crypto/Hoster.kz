const modal = document.getElementById('modal-order');
if (modal) {
  const overlay = modal.querySelector('.modal__overlay');
  const closeBtn = modal.querySelector('.modal__close');

  function openModal() {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal="order"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  const form = modal.querySelector('.modal__form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    closeModal();
    form.reset();
  });
}
