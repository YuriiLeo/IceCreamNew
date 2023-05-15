const scrollUp = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const screenHeight = window.innerHeight;
  const scrollBottom = window.scrollY;

  if (scrollBottom < screenHeight) {
    scrollUp.classList.add('hide');
  } else {
    scrollUp.classList.remove('hide');
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
