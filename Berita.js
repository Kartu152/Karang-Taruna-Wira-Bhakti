const beritaData = [
    { judul: "Berita 1", konten: "Ini adalah konten berita pertama." },
    { judul: "Berita 2", konten: "Ini adalah konten berita kedua." }
];

function loadBerita() {
    const container = document.querySelector('.content');
    beritaData.forEach((berita) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${berita.judul}</h3><p>${berita.konten}</p><a href="#">Baca selengkapnya</a>`;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadBerita);