
const item = document.querySelector('.item');

item.addEventListener('dragstart',dragstart);
item.addEventListener('dragend', dragend);

const placeholders = document.querySelectorAll('.placeholder');

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover',dragover);
    placeholder.addEventListener('dragenter',dragenter);
    placeholder.addEventListener('dragleave',dragleave);
    placeholder.addEventListener('drop',dragdrop);
}

function dragover(event) {
    event.preventDefault();
    // console.log('dragover')
}

function dragenter(event) {
    event.target.classList.add('hovered');
    // console.log('dragenter')
}

function dragleave(event) {
    event.target.classList.remove('hovered');

    // console.log('dragleave')
}

function dragdrop(event) {
    event.target.classList.remove('hovered');

    event.target.append(item);
    // console.log('dragdrop')
}




function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    },0)
}

function dragend(event) {
    event.target.classList.remove('hold','hide');
}











// const item = document.querySelector('.item');
// const placeholders = document.querySelectorAll('.placeholder');
//
// item.addEventListener('dragstart',dragstart);
// item.addEventListener('dragend',dragend);
//
// for(const placeholder of placeholders) {
//     placeholder.addEventListener('dragover',dragover);
//     placeholder.addEventListener('dragenter',dragenter);
//     placeholder.addEventListener('dragleave',dragleave);
//     placeholder.addEventListener('drop',dragdrop);
// }
//
// function dragover(event) {
//     event.preventDefault();
// }
// function dragenter(event) {
//     event.target.classList.add('hovered');
// }
// function dragleave(event) {
//     event.target.classList.remove('hovered');
// }
// function dragdrop(event) {
//     event.target.classList.remove('hovered');
//     event.target.append(item);
// }
//
// function dragstart(event) {
//     event.target.classList.add('hold');
//     setTimeout(() => {
//         event.target.classList.add('hide');
//     },0);
// }
//
// function dragend(event) {
//     event.target.classList.remove('hold','hide');
// }