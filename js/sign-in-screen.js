function switchBtnColor() {
    const switches = document.querySelectorAll('.switch');
    for (let i = 0; i < switches.length; i++) {
        switches[i].addEventListener('click', (e) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            e.target.classList.add('selected'); 
        })
    }
    e.target.className.add('selected');
}

function hideInputs() {
    
}

function switchScreens() {
    switchBtnColor();
    

}

switchScreens();


