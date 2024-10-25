function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "password123") {
      window.location.href = "dashboard.html";
      return false; // prevent form submission
  } else {
      errorMessage.textContent = "Username atau password salah!";
      return false; // prevent form submission
  }
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