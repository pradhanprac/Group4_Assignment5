document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading spinner
    const button = document.getElementById('loginButton');
    const spinner = button.querySelector('.spinner-border');
    button.disabled = true;
    spinner.classList.remove('d-none');

    // Simulate login delay
    setTimeout(() => {
        // Show error toast
        const toast = new bootstrap.Toast(document.getElementById('loginToast'));
        toast.show();

        // Hide loading spinner
        button.disabled = false;
        spinner.classList.add('d-none');
    }, 2000);
});


document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    handleSignup(e);
});

function handleLogin(email, password) {
    var email = document.querySelector('#emailInput').value;
    var password = document.querySelector('#passwordInput').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
        showErrorToast("loginToast", "Invalid email format");
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!passwordRegex.test(password)) {
        showErrorToast("loginToast", "Password must be at least 8 characters long and include uppercase, lowercase, and a number");
        return;
    }
    
    const button = document.getElementById('loginButton');
    const spinner = button.querySelector('.spinner-border');
    button.disabled = true;
    spinner.classList.remove('d-none');

    setTimeout(() => {
        button.disabled = false;
        spinner.classList.add('d-none');

        window.location.href = "homepage.html";
    }, 2000);
}

function handleSignup(event) {
    event.preventDefault();
    
    var email = document.querySelector('#emailInput').value;
    var password = document.querySelector('#passwordInput').value;
    var confirmPassword = document.querySelector('#confirmPasswordInput').value;
    var termsCheck = document.querySelector('#termsCheck').checked;
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        showErrorToast("signupToast", "Invalid email format");
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        showErrorToast("signupToast", "Password must be at least 8 characters long and include uppercase, lowercase, and a number");
        return;
    }

    if (password !== confirmPassword) {
        showErrorToast("signupToast", "Passwords do not match");
        return;
    }

    if (!termsCheck) {
        showErrorToast("signupToast", "Please accept the terms and conditions");
        return;
    }

    const button = document.getElementById('signupButton');
    if (button) {
        const spinner = button.querySelector('.spinner-border');
        if (spinner) {
            button.disabled = true;
            spinner.classList.remove('d-none');
        }

        setTimeout(() => {
            if (spinner) {
                button.disabled = false;
                spinner.classList.add('d-none');
            }
            window.location.href = "homepage.html";
        }, 2000);
    }
}

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(inputId === 'passwordInput' ? 'passwordToggleIcon' : 'confirmPasswordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('bi-eye-slash');
        toggleIcon.classList.add('bi-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('bi-eye');
        toggleIcon.classList.add('bi-eye-slash');
    }
}

function showErrorToast(id, message) {
    const toastElement = document.getElementById(id);
    if (toastElement) {
        const toastBody = toastElement.querySelector('.toast-body');
        if (toastBody) {
            toastBody.textContent = message;
        }
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    }
}