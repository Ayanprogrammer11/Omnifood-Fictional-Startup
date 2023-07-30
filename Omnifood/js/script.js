const icons = document.querySelectorAll(".icon-mobile-nav");
const links = document.querySelectorAll("a[href]");
const header = document.querySelector(".header");

icons.forEach((icon) =>
  icon.addEventListener("click", () => header.classList.toggle("nav-open"))
);
/*
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    console.log(href);
    if (href === "#") {
      console.log("reached window");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (href.length > 1 && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      if(header.classList.contains('nav-open')) header.classList.toggle('nav-open');
    }
  });
});
*/

document.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop >= document.documentElement.clientHeight
  ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
