const slides = document.querySelectorAll(".slide")
const bodyBgImage = document.querySelector("body")

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