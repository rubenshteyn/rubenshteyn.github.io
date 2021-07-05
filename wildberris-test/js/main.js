
document.querySelector('.burger').onclick = function() {
    open()
}

function open() {
    document.querySelector('.header__list-item2').classList.toggle("active-menu");
}