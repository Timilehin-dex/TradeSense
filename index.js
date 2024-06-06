window.addEventListener("scroll", function () {
  const header = document.getElementById("head");
  if (window.scrollY > 30) {
    // You can adjust the scroll threshold as needed
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
function toggleOpen() {
  const menu = document.querySelector(".ham-menu");
  menu.style.right = 0;
}

function toggleClose() {
  const menu = document.querySelector(".ham-menu");
  menu.style.right = "-100%";
}

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 10,
  // autoplay: true,
  // autoplayTimeout: 500,
  // autoplayHoverPause: true,
  // animateOut: "fadeOut",
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 8,
    },
  },
});
