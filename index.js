let index = 0;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

function changeSlide(newIndex) {
  if (newIndex < 0) {
    index = slides.length - 1;
  } else if (newIndex >= slides.length) {
    index = 0;
  } else {
    index = newIndex;
  }

  slider.style.transform = `translateX(-${index * 100}vw)`;
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
  changeSlide(index - 1);
})

next.addEventListener('click', () => {
  changeSlide(index + 1);
})

let startX = 0;
slider.addEventListener('touchstart', (event) => {
  startX = event.changedTouches[0].clientX;
})
slider.addEventListener('touchend', (event) => {
  let endX = event.changedTouches[0].clientX;
  if (startX > endX + 50) {
    changeSlide(index + 1);
  }
  if (startX < endX + 50) {
    changeSlide(index - 1);
  }
})