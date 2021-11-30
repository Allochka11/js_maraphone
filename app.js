function slidesPlugin(activeSlide = 3) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    for(const slide of slides) {


        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide)=> {
            slide.classList.remove('active');
        })
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

slidesPlugin(getRandomIntInclusive(0,4));


