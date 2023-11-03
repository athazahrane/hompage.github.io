document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua tautan di navbar
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Fungsi untuk menghapus kelas "text-primary" dari semua tautan
    function removeTextPrimary() {
        navLinks.forEach(function (link) {
            link.classList.remove("text-primary");
        });
    }

    // Tambahkan event listener untuk setiap tautan
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            removeTextPrimary();
            link.classList.add("text-primary"); 
        });
    });
});