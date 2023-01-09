function slidePlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide")
  const bodyBgImage = document.querySelector("body")
  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
      slide.addEventListener("click", () => {
          clearActiveClasses();
          const bgImage = slide.style.backgroundImage
          slide.classList.add("active");
          bodyBgImage.style.backgroundImage = bgImage
      })
  }

  function clearActiveClasses() {
      slides.forEach(slide => slide.classList.remove("active"));
  }
}

slidePlugin(2)
