const slides = Array.from(document.querySelectorAll(".slide"));
const counter = document.getElementById("slide-counter");
const progressBar = document.getElementById("progress-bar");
const dotNav = document.getElementById("dot-nav");
const mobileOutline = document.getElementById("mobile-outline");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const fullscreenButton = document.getElementById("fullscreen-button");
const layoutMode = document.getElementById("layout-mode");

let currentSlide = 0;
let mobileScrollTicking = false;

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

function slugifyTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildMobileOutline() {
  slides.forEach((slide, index) => {
    const title = slide.dataset.title || `Slide ${index + 1}`;
    const sectionId = `section-${index + 1}-${slugifyTitle(title)}`;
    slide.id = sectionId;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${index + 1}. ${title}`;
    button.setAttribute("aria-label", `Jump to ${title}`);
    button.addEventListener("click", () => {
      slide.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    mobileOutline.appendChild(button);
  });
}

function setDesktopCounter(index) {
  counter.textContent = `${padSlideNumber(index)} / ${padSlideNumber(slides.length - 1)}`;
}

function highlightMobileOutline(index) {
  Array.from(mobileOutline.children).forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
  });
}

function getMobileCurrentIndex() {
  let bestIndex = 0;
  let closest = Number.POSITIVE_INFINITY;

  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    const distanceFromTop = Math.abs(rect.top - 132);
    if (distanceFromTop < closest) {
      closest = distanceFromTop;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function updateMobileProgress() {
  const activeIndex = getMobileCurrentIndex();
  currentSlide = activeIndex;
  setDesktopCounter(activeIndex);
  highlightMobileOutline(activeIndex);
}

function setLayoutMode() {
  const mobile = isMobileLayout();
  document.body.classList.toggle("mobile-flow", mobile);
  layoutMode.textContent = mobile ? "Mobile Flow" : "Desktop Slides";

  if (mobile) {
    updateMobileProgress();
    return;
  }

  setSlide(currentSlide);
}

function setSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });

  Array.from(dotNav.children).forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });

  setDesktopCounter(currentSlide);
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  highlightMobileOutline(currentSlide);
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

window.addEventListener("resize", setLayoutMode);

window.addEventListener("scroll", () => {
  if (!isMobileLayout() || mobileScrollTicking) {
    return;
  }

  mobileScrollTicking = true;
  requestAnimationFrame(() => {
    updateMobileProgress();
    mobileScrollTicking = false;
  });
});

buildDots();
buildMobileOutline();
setSlide(0);
setLayoutMode();
