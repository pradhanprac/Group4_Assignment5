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