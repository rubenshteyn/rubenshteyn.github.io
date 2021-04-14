var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tab-content');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
};

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className=='tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            } 
            
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show')
    }
}

// acc

var acc = document.getElementsByClassName('vitamin');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle('active');

    this.nextElementSibling.classList.toggle('show-info')
  }
}

// burger

document.querySelector('.burger').onclick = function () {
    document.querySelector('.header__list').classList.toggle('show-list')
}
