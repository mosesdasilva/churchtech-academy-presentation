const slides = Array.from(document.querySelectorAll(".slide"));
const counter = document.getElementById("slide-counter");
const progressBar = document.getElementById("progress-bar");
const dotNav = document.getElementById("dot-nav");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const fullscreenButton = document.getElementById("fullscreen-button");

let currentSlide = 0;

function padSlideNumber(value) {
  return String(value + 1).padStart(2, "0");
}

function isMobileLayout() {
  return window.innerWidth <= 980;
}

function buildDots() {
  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Go to slide ${index + 1}: ${slide.dataset.title}`);
    button.addEventListener("click", () => setSlide(index));
    dotNav.appendChild(button);
  });
}

function setSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });

  Array.from(dotNav.children).forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });

  counter.textContent = `${padSlideNumber(currentSlide)} / ${padSlideNumber(slides.length - 1)}`;
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
}

function nextSlide() {
  setSlide(currentSlide + 1);
}

function previousSlide() {
  setSlide(currentSlide - 1);
}

document.addEventListener("keydown", (event) => {
  if (isMobileLayout()) {
    return;
  }

  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    nextSlide();
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    previousSlide();
  }

  if (event.key.toLowerCase() === "f") {
    fullscreenButton.click();
  }
});

prevButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

fullscreenButton.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
    fullscreenButton.textContent = "Exit Fullscreen";
    return;
  }

  await document.exitFullscreen();
  fullscreenButton.textContent = "Fullscreen";
});

document.addEventListener("fullscreenchange", () => {
  fullscreenButton.textContent = document.fullscreenElement ? "Exit Fullscreen" : "Fullscreen";
});

buildDots();
setSlide(0);
