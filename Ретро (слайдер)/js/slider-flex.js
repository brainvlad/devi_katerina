const slides = document.querySelectorAll('.slide');


for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
        setTimeout(() => {
            slide.classList.add('active-content');
        }, 500)
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.classList.remove('active-content');
    })
}