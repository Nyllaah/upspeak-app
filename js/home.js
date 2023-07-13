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

goToOnClick(play1, 'html/study-screen.html');
goToOnClick(play2, 'html/study-screen.html');
goToOnClick(play3, 'html/study-screen.html');
goToOnClick(play4, 'html/study-screen.html');
goToOnClick(play5, 'html/study-screen.html');
goToOnClick(play6, 'html/study-screen.html');
goToOnClick(play7, 'html/study-screen.html');
goToOnClick(play8, 'html/study-screen.html');