// Ambil elemen-elemen yang diperlukan
const menuButton = document.getElementById('menu');
const navList = document.querySelector('header .navlist');

// Fungsi untuk menampilkan atau menyembunyikan menu saat tombol diklik
menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fungsi untuk menutup menu jika salah satu item di dalamnya diklik
navList.addEventListener('click', () => {
    navList.classList.remove('active');
});

// Fungsi untuk scroll ke bagian tertentu ketika item menu di klik
const menuItems = document.querySelectorAll('.item_menu');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = menuItem.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Sesuaikan offset sesuai kebutuhan
                behavior: 'smooth',
            });
        }
    });
});
