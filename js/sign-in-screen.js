const logInBtn = document.querySelector('#login-btn');
const signInBtn = document.querySelector('#sign-in-btn');

function switchBtn() {
    if (signInBtn.style.color === '#FFF') {
        signInBtn.style.backgroundColor = '#FFF';
        signInBtn.style.color = '#F5C620';
    } else {
        signInBtn.style.backgroundColor = '#A134F6';
        signInBtn.style.color = '#FFF';
    }
}

window.onload = () => {
    signInBtn.addEventListener('click', switchBtn);
}
