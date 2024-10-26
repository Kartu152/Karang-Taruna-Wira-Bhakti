const galeriData = [
    { src: "assets/images/image1.jpg", alt: "Gambar 1" },
    { src: "assets/images/image2.jpg", alt: "Gambar 2" }
];

function loadGaleri() {
    const galleryContainer = document.querySelector('.gallery');
    galeriData.forEach((gambar) => {
        const img = document.createElement('img');
        img.src = gambar.src;
        img.alt = gambar.alt;
        galleryContainer.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', loadGaleri);