// burger

document.querySelector('.header__link-burger').onclick = function () {
  document.querySelector('.header__nav').classList.toggle('show')
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

// tab

var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('section__work__block');
    tab = document.getElementsByClassName('section__work-link');
    hideTabsContent(1);
};

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

document.getElementById('section__work__block').onclick = function (event) {
    var target = event.target;
    if (target.className=='section__work-link') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }

        }
    }
}
