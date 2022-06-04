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

siteNavigation.addEventListener("click", function () {
  siteNavigation.classList.toggle("open");
  burger.classList.toggle("active");
});
