(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-menu]'),
    noscroll: document.querySelector('#body1'),
    link: document.querySelector('[link-close]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.link.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.openModalBtn.classList.toggle('is-active');
    refs.modal.classList.toggle('is-open');
  }
})();
