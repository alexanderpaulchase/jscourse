'use strict';
// section 79
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// keyboard events
document.addEventListener('keypress', function (e) {
  e.preventDefault();
  if (e.key === 'Escape') {
    // had to use that weird character, escape is not working.
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
