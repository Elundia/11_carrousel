/*
  Carousel
*/

var prevBtn = document.getElementById("previous");
var slider = document.getElementById("slider");
var nextBtn = document.getElementById("next");
var currentSlide = 0;

function prevSlide() {
  slider.children[currentSlide].classList.remove("myActive");

  if (currentSlide === 0) {
    currentSlide = slider.children.length - 1;
  } else {
    currentSlide--;
  }

  slider.children[currentSlide].classList.add("myActive");
}

function nextSlide() {
  slider.children[currentSlide].classList.remove("myActive");

  if (currentSlide === slider.children.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slider.children[currentSlide].classList.add("myActive");
}

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

var autoPlay = window.setInterval(nextSlide, 5000);
