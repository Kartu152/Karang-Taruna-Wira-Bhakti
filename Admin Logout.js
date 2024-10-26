document.querySelector('a[href="logout.html"]').addEventListener('click', function (event) {
    const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
    if (!confirmLogout) {
        event.preventDefault();
    }
});