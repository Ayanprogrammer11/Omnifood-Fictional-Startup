// ////////////////////////////
// Setting Year
// /////////////////////////
const yearEl = document.querySelector(".year");
const year = new Date().getFullYear();
yearEl.textContent = year;

// ////////////////////////////
// Navigation
// //////////////////////////
const navigation = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", function (e) {
  navigation.classList.toggle("nav-open");
});

// /////////////////
// Smooth Scrolling
// /////////////////
const navParent = document.querySelector(".main-nav-list");
navParent.addEventListener("click", function (e) {
  e.preventDefault();
  // Checking appropriate element and Implementing Smooth Scrolling
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const href = link.getAttribute("href");
    if (href.length !== 1 && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Closing Navigation
  if (navigation.classList.contains("nav-open")) {
    navigation.classList.remove("nav-open");
  }
});

document.querySelectorAll('a:link[href="#"]').forEach((l) => {
  l.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ////////////////////////////
// Sticky Navigatiion
// ////////////////////////////
const heroSection = document.querySelector(".section-hero");
const headerCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) document.body.classList.add("sticky");
  else document.body.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(headerCallback, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});

headerObserver.observe(heroSection);

// //////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// //////////////////////////////////////////////////
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
