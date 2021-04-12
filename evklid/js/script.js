// burger

document.querySelector('.header__link-burger').onclick = function () {
  document.querySelector('.header__nav').classList.toggle('show')
};

document.querySelector('.burger-close').onclick = function () {
  document.querySelector('.show').classList.remove('show');
};

// accordion

var acc = document.getElementsByClassName('section__questions-item');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle('active');

    this.nextElementSibling.classList.toggle('show-p')
  }
}
