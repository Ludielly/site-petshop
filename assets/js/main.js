const buttonOpen = document.querySelector('.header__button');
const dialog = document.querySelector('.header__dialog');
const buttonClose = document.querySelector('.dialog__button');

buttonOpen.onclick = function () {
    dialog.showModal();
} 

buttonClose.onclick = function () {
    dialog.close();
}