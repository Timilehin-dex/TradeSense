window.addEventListener("scroll", function () {
  const header = document.getElementById("head");
  if (window.scrollY > 30) {
    // You can adjust the scroll threshold as needed
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
