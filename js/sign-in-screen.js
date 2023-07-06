function switchScreens() {
    const switches = document.querySelectorAll('.switch')
    for (let i = 0; i < switches.length; i++) {
        switches[i].addEventListener('click', (ev) => {

            let selected = document.querySelector('.selected');
            selected.classList.remove('selected');
            ev.target.classList.add('selected');
            selected = document.querySelector('.selected');
            
            const logInBtn = document.querySelector('#login-btn');
            const inputs = document.querySelectorAll('.input');

            if (ev.target === logInBtn) {
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].firstElementChild.id !== 'email-input' && inputs[i].firstElementChild.id !== 'password-input') {
                        inputs[i].style.display = 'none';
                        inputs[i].firstElementChild.required = false;
                    }
                }
            } else {
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].firstElementChild.id !== 'email-input' && inputs[i].firstElementChild.id !== 'password-input') {
                        inputs[i].style.display = '';
                        inputs[i].firstElementChild.required = true;
                    }
                }
            }
        })
    }
}

switchScreens();

function populateCountryCodes() {
    const dropdown = document.querySelector('#country-codes');
    for (let i = 0; i < length; i++) {
        let newOpt = dropdown.appendChild('option');
        newOpt.innerText = `${countryCodes[i].name} ${code}`
    }
}

populateCountryCodes();