// var burgerBtn = document.querySelector('.burger');
// burgerBtn.addEventListener('click', open);
// function open() {
//     var menu = document.getElementsByClassName('header__nav-list').classList.toggle('show');
// }

document.querySelector('.burger').onclick = function() {
    document.querySelector('.header__nav-list').classList.toggle('show')
}
