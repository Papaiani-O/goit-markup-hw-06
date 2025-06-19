// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector("[data-menu-open]"),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector("[data-menu-close]"),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector("[data-menu]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle("is-open");
//   }
// })();

'use strict';

const closePopups = () => {
  const popups = document.querySelectorAll('[data-popup-name]');
  popups.forEach(el => {
    el.classList.remove('is-open');
  });
};

const popupToggle = () => {
  const popups = document.querySelectorAll('[data-popup-name]');
  popups.forEach(el => {
    const popup = el;
    const value = el.dataset.popupName;

    document
      .querySelectorAll(`[data-popup-button-toggle="${value}"]`)
      .forEach(el => {
        el.addEventListener('click', ev => {
          ev.preventDefault();
          closePopups();
          popup.classList.toggle('is-open');
        });
      });

    document
      .querySelectorAll(`[data-popup-button-close="${value}"]`)
      .forEach(el => {
        el.addEventListener('click', ev => {
          ev.preventDefault();
          closePopups();Add commentMore actions
          popup.classList.remove('is-open');
        });
      });
  });
};
popupToggle();