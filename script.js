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

// Fungsi untuk menampilkan berita
function displayNews() {
  const newsContainer = document.getElementById('news-container');
  newsData.forEach(news => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');
    newsCard.innerHTML = `
      <h3>${news.title}</h3>
      <p><strong>Tanggal:</strong> ${news.date}</p>
      <p>${news.description}</p>
      <a href="#" class="read-more">Baca Selengkapnya</a>
    `;
    newsContainer.appendChild(newsCard);
  });
}

// Fungsi untuk menampilkan galeri
function displayGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  galleryData.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img src="${image.src}" alt="${image.alt}" />`;
    galleryContainer.appendChild(galleryItem);
  });
}

// Panggil fungsi untuk menampilkan konten saat halaman dimuat
window.onload = function() {
  displayNews();
  displayGallery();
};