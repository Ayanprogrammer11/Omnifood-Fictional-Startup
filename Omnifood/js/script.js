const icons = document.querySelectorAll(".icon-mobile-nav");
const links = document.querySelectorAll("a[href]");
const header = document.querySelector(".header");

icons.forEach((icon) =>
  icon.addEventListener("click", () => header.classList.toggle("nav-open"))
);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (header.classList.contains("nav-open"))
      header.classList.toggle("nav-open");
  });
});

document.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop >= document.documentElement.clientHeight
  ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
