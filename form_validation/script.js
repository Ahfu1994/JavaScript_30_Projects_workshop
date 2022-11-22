const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('re-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput([username, email, password1, password2]);

    if (!validateEmail(email.value.trim())) {
        showError(email, 'email is incorrect');
    } else {
        showSuccess(email);
    }

    checkPassword(password1, password2);
    checkInputLength(username, 5, 10)
    checkInputLength(password1, 5, 10)

});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function checkInput(inputArray) {
    inputArray.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `please input ${getInputCase(input)}`)

        } else {
            showSuccess(input);
        }
    })
}

function getInputCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

function checkPassword(password1, password2) {
    if (password1.value.trim() !== password2.value.trim()) {
        showError(password2, 'password not match')
    }

}

function checkInputLength(input, min, max) {
    if (input.value.length <= min) {
        showError(input, `${getInputCase(input)} is less than ${min}`)
    } else if (input.value.length > max) {
        showError(input, `${getInputCase(input)} is more than ${max}`)
    } else {
        showSuccess(input);
    }
}