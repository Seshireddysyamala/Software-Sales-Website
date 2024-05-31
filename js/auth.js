document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Perform login validation and redirect
            localStorage.setItem('user', JSON.stringify({ email: e.target.email.value }));
            window.location.href = 'index.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Perform signup and redirect
            localStorage.setItem('user', JSON.stringify({ email: e.target.email.value }));
            window.location.href = 'index.html';
        });
    }

    // Redirect to login if not authenticated
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user && window.location.pathname !== '/login.html' && window.location.pathname !== '/signup.html') {
        window.location.href = 'login.html';
    }
});