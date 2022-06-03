const siteNavigation = document.querySelector(".site-navigation");
const burger = document.querySelector(".burger");

/* for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener('click', function () {
        for (let j = 0; j < siteNavigation.length; j++) {
            siteNavigation[j].classList.toggle('open');
        }
        burger[i].classList.toggle('active')
    });
} */

burger.addEventListener("click", function () {
  siteNavigation.classList.toggle("open");
  burger.classList.toggle("active");
});

/*--------------------------------swiper-slider---------------------------------- */

new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  loop: true,
  loopedSlides: 4,
  thumbs: {
    swiper: {
      el: ".image-mini-slider-wrapper",
      slidesPerView: 4,
      slideToClickedSlide: true,
    },
  },
});

const bigSlide = document.querySelector(".big-slide");
const miniSlides = document.querySelectorAll(".mini-slide-img");
console.log(miniSlides);
for (let i = 0; i < miniSlides.length; i++) {
  if (bigSlide.src === miniSlides[i].src) {
    miniSlides[i].classList.add("active");
  }

  miniSlides[i].addEventListener("click", function () {
    console.log(miniSlides[i].src);
    if (this) {
      bigSlide.src = this.src;
    }
  });
}
