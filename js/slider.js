let slides = document.getElementsByClassName("slide");

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  // let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

/*choose item by preview */

const sliderItemPreview = document.querySelectorAll(".mini-slide");
let currentImage = document.querySelector(".current-slide");
console.log(currentImage);
for (let j = 0; j < sliderItemPreview.length; j++) {
  sliderItemPreview[j].addEventListener("click", function () {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex = j + 1;
    slides[slideIndex - 1].style.display = "block";
  });
}

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", function () {
  minusSlide();
});
nextBtn.addEventListener("click", function () {
  plusSlide();
});
