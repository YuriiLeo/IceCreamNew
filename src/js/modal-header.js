 
    let dateControl = document.querySelector('input[type="datetime-local"]');
    dateControl.value = '2022-06-11T08:30';

      (() => {
      const refs = {
        openModalBtn: document.querySelector('[data-modal-open-btn]'),
        closeModalBtn: document.querySelector('[data-modal-close-btn]'),
        modal: document.querySelector('[data-modal-btn]'),
      };

      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);

      function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
      }
    })();
