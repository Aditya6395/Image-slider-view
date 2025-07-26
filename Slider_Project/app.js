const slider = document.getElementById('slider');
let slideWidth = slider.clientWidth;

const images = slider.querySelectorAll('img');
const firstClone = images[0].cloneNode();
const lastClone = images[images.length - 1].cloneNode();

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slider.firstChild);

let index = 1;
let total = images.length + 2;

function updateWidth() {
  slideWidth = slider.clientWidth;
  slider.style.transition = 'none';
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

window.addEventListener('resize', updateWidth);
updateWidth(); // Initial width set

function updateSlide() {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  if (index >= total - 1) return;
  index++;
  updateSlide();

  setTimeout(() => {
    if (index === total - 1) {
      slider.style.transition = 'none';
      index = 1;
      slider.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  }, 510);
}

function prevSlide() {
  if (index <= 0) return;
  index--;
  updateSlide();

  setTimeout(() => {
    if (index === 0) {
      slider.style.transition = 'none';
      index = total - 2;
      slider.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  }, 510);
}

// Auto-slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);
