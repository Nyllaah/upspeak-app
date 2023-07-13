const play1 = document.querySelector('#play1');
const play2 = document.querySelector('#play2');
const play3 = document.querySelector('#play3');
const play4 = document.querySelector('#play4');
const play5 = document.querySelector('#play5');
const play6 = document.querySelector('#play6');
const play7 = document.querySelector('#play7');
const play8 = document.querySelector('#play8');

function goToOnClick(button, destination) {
    button.addEventListener('click', (ev) => {
        ev.preventDefalt();
        window.location.href = destination;
    })
}

