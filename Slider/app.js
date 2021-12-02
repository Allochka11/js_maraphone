const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
const imgHeight = container.clientHeight;

let activeSliderIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    clickedBtn('up');
})

downBtn.addEventListener('click', () => {
    clickedBtn('down');
})

function clickedBtn (direction) {
    if (direction === 'up') {
        activeSliderIndex++
        if(activeSliderIndex === slidesCount) {
            activeSliderIndex = 0;

        }
    } else if (direction === 'down') {
        activeSliderIndex--
        if( activeSliderIndex < 0 ) {
            activeSliderIndex = slidesCount - 1
        }

    }

    mainSlide.style.transform = `translateY(-${activeSliderIndex*imgHeight}px)`;
    sidebar.style.transform = `translateY(${activeSliderIndex*imgHeight}px)`;
}



