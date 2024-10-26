const beritaList = [];

function tambahBerita() {
    const judul = document.querySelector('input[placeholder="Judul Berita"]').value;
    const isi = document.querySelector('textarea[placeholder="Isi Berita"]').value;

    if (judul && isi) {
        beritaList.push({ judul, isi });
        tampilkanBerita();
        document.querySelector('input[placeholder="Judul Berita"]').value = '';
        document.querySelector('textarea[placeholder="Isi Berita"]').value = '';
    }
}

function tampilkanBerita() {
    const container = document.querySelector('.admin-section');
    container.innerHTML = '';
    beritaList.forEach((berita, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${berita.judul}</h3><p>${berita.isi}</p><button onclick="hapusBerita(${index})">Hapus</button>`;
        container.appendChild(card);
    });
}

function hapusBerita(index) {
    beritaList.splice(index, 1);
    tampilkanBerita();
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    tambahBerita();
});