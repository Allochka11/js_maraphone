const board = document.querySelector('#board');
const colors = [ '#e06377', '#80ced6', '#b9b0b0', '#d9ecd0', '#77a8a8', '#f0efef', '#96ceb4', '#c2d4dd','#b0aac0', '#ffef96' ];
const SQUARES_NUMBER = 500;

for(let i = 0; i < SQUARES_NUMBER; i++ ) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #1d1d1d';
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)];
}