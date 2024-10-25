// script.js
function login() {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;
  
  // Contoh kredensial (ID dan password)
  const validUserId = "admin";
  const validPassword = "1234";

  if (userId === validUserId && password === validPassword) {
    // Login berhasil, arahkan ke halaman dashboard
    window.location.href = "dashboard.html";
  } else {
    // Login gagal, tampilkan pesan error
    document.getElementById("errorMsg").style.display = "block";
  }
}