KATALOG PRODUK IMAKAHI UWKS

1. Ekstrak ZIP ini.
2. Buka index.html di browser untuk melihat katalog.
3. Edit images-config.js menggunakan VS Code atau editor teks.
4. Isi linkGoogleDrive untuk produk atau logo yang ingin diganti.
   Contoh: https://drive.google.com/file/d/ID_FILE/view?usp=sharing
5. Atur akses file Google Drive menjadi Siapa saja yang memiliki link -> Pelihat.
   Gunakan link file gambar, bukan folder. Link kosong memakai foto bawaan.
6. Edit nama dan deskripsi produk di index.html.
7. Jika dipasang di hosting, unggah kembali seluruh file yang berubah.

ISI FILE
index.html: halaman katalog dan CSS responsif (HP, tablet, desktop).
images-config.js: daftar link foto dan logo yang bisa diganti.
images.js: konversi link Drive dan penanganan foto yang gagal dimuat.
assets/: foto dan logo bawaan.

CATATAN
Tidak membutuhkan npm atau instalasi library.
Google Drive bukan layanan hosting gambar; pemuatan gambar bergantung pada izin dan ketersediaan Drive.
