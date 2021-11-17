
const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

let buttonOpen = document.querySelector('.button-show');
let buttonClose = document.querySelector('.button-close');
let block = document.querySelector('.main-block');

buttonOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    buttonOpen.classList.add('class-hidden');
    buttonClose.classList.add('class-show');
    block.classList.add('class-overflowVisible');
})

buttonClose.addEventListener('click', function (evt){
    evt.preventDefault();
    buttonOpen.classList.remove('class-hidden');
    buttonClose.classList.remove('class-show');
    block.classList.remove('class-overflowVisible');
});