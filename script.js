document.getElementById('loginForm').addEventListener('submit', function(e) {
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

function handleLogin(email, password) {
    var email = document.querySelector('#emailInput').value;
    var password = document.querySelector('#passwordInput').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    console.log("handlefunc", email)
    if (!emailRegex.test(email)) {
        console.log("inside email")
        showErrorToast("Invalid email format");
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!passwordRegex.test(password)) {
        console.log("inside pwd")
        showErrorToast("Password must be at least 8 characters long and include uppercase, lowercase, and a number");
        return;
    }
    
    const button = document.getElementById('loginButton');
    const spinner = button.querySelector('.spinner-border');
    button.disabled = true;
    spinner.classList.remove('d-none');

    setTimeout(() => {
        button.disabled = false;
        spinner.classList.add('d-none');
    }, 2000);
}

function showErrorToast(message) {
    document.querySelector("#loginToast .toast-body").textContent = message;
    const toast = new bootstrap.Toast(document.getElementById("loginToast"));
    toast.show();
}

