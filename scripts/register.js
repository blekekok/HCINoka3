function validateForm() {
    const nameInput = document.getElementById('name-input')?.value;
    const emailInput = document.getElementById('email-input')?.value;
    const passwordInput = document.getElementById('password-input')?.value;
    const confirmInput = document.getElementById('confirm-input')?.value;
    const tosInput = document.getElementById('tos-input');

    if (nameInput === '') {
        alert('Name cannot be blank!');
        return false;        
    }

    if (nameInput.length < 2) {
        alert('Name cannot be shorter than 2 characters');
        return false;
    }

    const atChar = emailInput.indexOf('@');
    const dotChar = emailInput.lastIndexOf('.');
    if (emailInput == '' ||
        emailInput.length < 5 ||
        atChar <= 0 ||
        dotChar < atChar) {
        alert('Invalid email address');
        return false;
    }

    if (passwordInput === '') {
        alert('Password cannot be blank!');
        return false;
    }

    if (passwordInput.length < 8) {
        alert('Password must be longer or equal to 8 characters!');
        return false;
    }

    if (confirmInput === '') {
        alert('Confirm password cannot be blank!');
        return false;
    }

    if (passwordInput !== confirmInput) {
        alert('Password and confirm password does not match!');
        return false;
    }

    if (!tosInput.checked) {
        alert('You have to agree with the terms and condition to proceed!');
        return false;
    }
}