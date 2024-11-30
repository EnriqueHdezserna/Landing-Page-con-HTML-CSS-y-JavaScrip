const btnOpenModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal__close');

btnOpenModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--show');
});

btnCloseModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
});
