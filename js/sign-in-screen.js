const logInBtn = document.querySelector('#login-btn');
const signInBtn = document.querySelector('#sign-in-btn');

function switchBtn() {
    if (signInBtn.style.backgroundColor = '#A134F6') {
        signInBtn.style.backgroundColor = '#FFF';
        signInBtn.style.color = '#F5C620';
    } else if (signInBtn.style.backgroundColor = '#FFF') {
        signInBtn.style.backgroundColor = '#A134F6';
        signInBtn.style.color = '#F5C620';
    }
}

window.onload = () => {
    signInBtn.addEventListener('click', switchBtn);
}
