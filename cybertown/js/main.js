const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    console.log(halfHeight);
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5+'deg) rotateY('+ (event.offsetX - halfHeight) /5+'deg)'
};

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
};

// acc

var acc = document.getElementsByClassName('btn-eye');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle('active');

    this.nextElementSibling.classList.toggle('show-p')
  }
}

// burger

document.querySelector('.burger').onclick = function () {
    document.querySelector('.list').classList.toggle('show')
}

// scroll

const progress = document.querySelector('.progress');
 
window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;

  progress.style.width = per + '%';
}
