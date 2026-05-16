"use strict";

const navLinksEl = document.querySelector(".nav__links");
const navMobileEl = document.querySelector(".nav-mobile");
const linksEl = document.querySelectorAll(".link");

const heroSection = document.querySelector(".hero-section");
const contactSection = document.querySelector(".contact-section");

const projectCount = document.getElementById("projects").children.length;
const projectCountLabel = document.querySelector(".project-count");

const scrollToTopBtn = document.querySelector(".footer-back");
const hireMeBtn = document.querySelector(".cta__btn");
const navMobileCta = document.querySelector(".nav-mobile-cta");
const skillFills = document.querySelectorAll(".skill-fill");

const btnMenu = document.querySelector(".fa-bars");
const btnClose = document.querySelector(".fa-xmark");
const navMobile = document.querySelector(".nav-mobile");

// Force page to start at top on reload
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

projectCountLabel.textContent = `${projectCount} ${projectCount > 1 ? "projects" : "project"}`;

//  Modal Video
const videoModal = document.getElementById("videoModal");
const videoModalPlayer = document.getElementById("videoModalPlayer");
const playBtn = document.querySelector(".play-btn");
const videoModalClose = document.querySelector(".video-modal-close");

const playVideo = function () {
  videoModal.classList.add("open");
  videoModalPlayer.currentTime = 0;
  videoModalPlayer.play();
};

const closeVideo = function () {
  videoModal.classList.remove("open");
  videoModalPlayer.currentTime = 0;
  videoModalPlayer.pause();
};

playBtn.addEventListener("click", playVideo);
videoModalClose.addEventListener("click", closeVideo);

const closeNavMobile = function () {
  navMobile.classList.remove("mobileMenu--active");
  btnMenu.classList.remove("hide--menu");
  btnClose.classList.remove("show-close");
};

const handleNavClick = function (el) {
  el.addEventListener("click", function (e) {
    const link = e.target.closest(".link");
    if (!link) return;
    closeNavMobile();
    linksEl.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");

    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView();
  });
};
handleNavClick(navLinksEl);
handleNavClick(navMobileEl);

const fadeUpElements = document.querySelectorAll(".fade-up");
const fadeUpObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, threshold: 0.3 },
);

fadeUpElements.forEach((el) => fadeUpObserver.observe(el));

const skillFillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, threshold: 0.3 },
);

skillFills.forEach((fill) => skillFillObserver.observe(fill));

scrollToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0 });
});

const handleCtaBtn = function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    contactSection.scrollIntoView();
    closeNavMobile();
  });
};

handleCtaBtn(hireMeBtn);
handleCtaBtn(navMobileCta);

btnMenu.addEventListener("click", () => {
  btnMenu.classList.add("hide--menu");
  btnClose.classList.add("show-close");
  navMobile.classList.add("mobileMenu--active");
});

btnClose.addEventListener("click", () => {
  btnMenu.classList.remove("hide--menu");
  btnClose.classList.remove("show-close");
  navMobile.classList.remove("mobileMenu--active");
});
