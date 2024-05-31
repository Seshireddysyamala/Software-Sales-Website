document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Perform login operation here
            // For simplicity, let's assume the login is successful
            alert('Login successful!');
            window.location.href = 'index.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Perform signup operation here
            // For simplicity, let's assume the signup is successful
            alert('Signup successful!');
            window.location.href = 'login.html';
        });
    }
});