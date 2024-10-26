document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials - bisa diganti dengan pengecekan dari server
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('error-message').textContent = "Username atau password salah!";
    }
});