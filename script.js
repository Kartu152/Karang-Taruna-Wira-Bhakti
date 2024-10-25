// Menambah berita ke localStorage
function tambahBerita() {
  const judul = document.getElementById('judul').value;
  const konten = document.getElementById('konten').value;

  if (judul && konten) {
      const berita = { judul, konten, waktu: new Date().toLocaleString() };
      let daftarBerita = JSON.parse(localStorage.getItem('daftarBerita')) || [];
      daftarBerita.push(berita);
      localStorage.setItem('daftarBerita', JSON.stringify(daftarBerita));
      tampilkanBerita();
      document.getElementById('beritaForm').reset();
  } else {
      alert("Harap isi judul dan konten berita.");
  }
}

// Menampilkan daftar berita dari localStorage
function tampilkanBerita() {
  const daftarBerita = JSON.parse(localStorage.getItem('daftarBerita')) || [];
  const beritaContainer = document.getElementById('daftarBerita');
  beritaContainer.innerHTML = "<h2>Daftar Berita</h2>";

  daftarBerita.forEach((berita, index) => {
      beritaContainer.innerHTML += `
          <div class="berita">
              <h3>${berita.judul}</h3>
              <p>${berita.konten}</p>
              <small>Diposting pada: ${berita.waktu}</small>
              <hr>
          </div>
      `;
  });
}

// Panggil fungsi untuk menampilkan berita saat halaman dimuat
document.addEventListener("DOMContentLoaded", tampilkanBerita);

// Menambah produk ke localStorage
function tambahProduk() {
  const namaProduk = document.getElementById('namaProduk').value;
  const deskripsiProduk = document.getElementById('deskripsiProduk').value;

  if (namaProduk && deskripsiProduk) {
      const produk = { nama: namaProduk, deskripsi: deskripsiProduk };
      let daftarProduk = JSON.parse(localStorage.getItem('daftarProduk')) || [];
      daftarProduk.push(produk);
      localStorage.setItem('daftarProduk', JSON.stringify(daftarProduk));
      tampilkanProduk();
      document.getElementById('produkForm').reset();
  } else {
      alert("Harap isi nama dan deskripsi produk.");
  }
}

// Menampilkan daftar produk dari localStorage
function tampilkanProduk() {
  const daftarProduk = JSON.parse(localStorage.getItem('daftarProduk')) || [];
  const produkContainer = document.getElementById('daftarProduk');
  produkContainer.innerHTML = "<h2>Daftar Produk</h2>";

  daftarProduk.forEach((produk, index) => {
      produkContainer.innerHTML += `
          <div class="produk">
              <h3>${produk.nama}</h3>
              <p>${produk.deskripsi}</p>
              <hr>
          </div>
      `;
  });
}

// Panggil fungsi untuk menampilkan produk saat halaman dimuat
document.addEventListener("DOMContentLoaded", tampilkanProduk);

// Menambah agenda ke localStorage
function tambahAgenda() {
  const judulAgenda = document.getElementById('judulAgenda').value;
  const tanggalAgenda = document.getElementById('tanggalAgenda').value;

  if (judulAgenda && tanggalAgenda) {
      const agenda = { judul: judulAgenda, tanggal: tanggalAgenda };
      let daftarAgenda = JSON.parse(localStorage.getItem('daftarAgenda')) || [];
      daftarAgenda.push(agenda);
      localStorage.setItem('daftarAgenda', JSON.stringify(daftarAgenda));
      tampilkanAgenda();
      document.getElementById('agendaForm').reset();
  } else {
      alert("Harap isi judul dan tanggal agenda.");
  }
}

// Menampilkan daftar agenda dari localStorage
function tampilkanAgenda() {
  const daftarAgenda = JSON.parse(localStorage.getItem('daftarAgenda')) || [];
  const agendaContainer = document.getElementById('daftarAgenda');
  agendaContainer.innerHTML = "<h2>Daftar Agenda</h2>";

  daftarAgenda.forEach((agenda, index) => {
      agendaContainer.innerHTML += `
          <div class="agenda">
              <h3>${agenda.judul}</h3>
              <p>Tanggal: ${agenda.tanggal}</p>
              <hr>
          </div>
      `;
  });
}

// Panggil fungsi untuk menampilkan agenda saat halaman dimuat
document.addEventListener("DOMContentLoaded", tampilkanAgenda);