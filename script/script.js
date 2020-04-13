let btnLeft = document.querySelector('#btn-left');
let btnRight = document.querySelector('#btn-right');
let arrRooms = ['Для зала', 'Для кухни', 'Для спальни', 'Для гостиной'];
let arrImages = ['зал.jpg', 'кухня.jpg', 'спальня.jpg', 'гостиная.jpg'];
let arrPrice = [50, 55, 60, 65];
let room = document.querySelector('#room');
let mainBlock = document.querySelector('#main-block');
let price = document.querySelector('#price');
let i = 0;

const next = () => {
  document.querySelectorAll('.checkbox')[i].classList.remove('active');
  i++;
  document.querySelectorAll('.checkbox')[i].classList.add('active');
  price.textContent = arrPrice[i];
  room.textContent = arrRooms[i];
  mainBlock.style.background = `url(./images/${arrImages[i]})`;
  btnLeft.removeAttribute('disabled');
  if(i > 2) {
    btnRight.setAttribute('disabled', 'true');
  }
};

const previous = () => {
  document.querySelectorAll('.checkbox')[i].classList.remove('active');
  i--;
  document.querySelectorAll('.checkbox')[i].classList.add('active');
  price.textContent = arrPrice[i];
  room.textContent = arrRooms[i];
  mainBlock.style.background = `url(./images/${arrImages[i]})`;
  btnRight.removeAttribute('disabled');
  if(i === 0) {
    btnLeft.setAttribute('disabled', 'true');
  }
};

btnRight.addEventListener('click', next);
btnLeft.addEventListener('click', previous);



