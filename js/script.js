// Fungsi untuk membuka dan menutup menu navigasi di HP
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active-nav");
}

window.onload = function() {
    let jam = new Date().getHours();
    let elemenSalam = document.getElementById("salamOtomatic");

    if (elemenSalam) {
        if (jam >= 4 && jam < 11) {
            elemenSalam.innerText = "Selamat Pagi! Wilujeng Enjang di Jogja";
        } else if (jam >= 11 && jam < 15) {
            elemenSalam.innerText = "Selamat Siang! Selamat Menjelajahi Jogja";
        } else if (jam >= 15 && jam < 18) {
            elemenSalam.innerText = "Selamat Sore! Nikmati Senja di Jogja";
        } else {
            elemenSalam.innerText = "Selamat Malam! Nikmati Suasana Malam Jogja";
        }
    }
};

let daftarGambar = [
    {
        gambar: "jogja.jpg",
        judul: "Keindahan Kota Jogja",
        deskripsi: "Suasana dan keindahan Yogyakarta yang penuh dengan budaya dan keramahan."
    },
    {
        gambar: "keraton jogja.jpg",
        judul: "Keraton Yogyakarta",
        deskripsi: "Keraton Yogyakarta merupakan salah satu tempat bersejarah yang menjadi pusat budaya Jawa."
    },
    {
        gambar: "taman sari.jpg",
        judul: "Taman Sari",
        deskripsi: "Taman Sari merupakan kompleks bangunan bersejarah dengan arsitektur khas Yogyakarta."
    }
];

let indexGambar = 0;

function geserGambar(arah) {
    indexGambar += arah;

    if (indexGambar >= daftarGambar.length) {
        indexGambar = 0;
    }

    if (indexGambar < 0) {
        indexGambar = daftarGambar.length - 1;
    }

    let elemenGambar = document.getElementById("sliderImage");
    let elemenJudul = document.getElementById("sliderTitle");
    let elemenDeskripsi = document.getElementById("sliderDescription");

    if (elemenGambar) {
        elemenGambar.src = daftarGambar[indexGambar].gambar;
    }

    if (elemenJudul) {
        elemenJudul.textContent = daftarGambar[indexGambar].judul;
    }

    if (elemenDeskripsi) {
        elemenDeskripsi.textContent = daftarGambar[indexGambar].deskripsi;
    }
}

// Fungsi untuk membuka modal
function bukaModal(idModal) {
    let modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = "flex";
    }
}

// Fungsi untuk menutup modal
function tutupModal(idModal) {
    let modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.classList && event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

const dataDestinasi = [
    //rekomendasi
    {
        id: "tugu-jogja",
        nama: "Tugu Yogyakarta",
        kategori: "rekomendasi",
        gambar: "assets/images/jogja.jpg",
        deskripsiSingkat: "Ikon landmark paling bersejarah dan simbol filosofis Kota Jogja.",
        deskripsiLengkap: "Tugu Pal Putih atau Tugu Jogja adalah poros garis imajiner yang menghubungkan Laut Selatan, Keraton Yogyakarta, dan Gunung Merapi. Tempat ini menjadi spot wajib untuk berswafoto saat berkunjung ke Jogja.",
        htm: "Gratis",
        jam: "24 Jam",
        alamat: "Jl. Jend. Sudirman, Gowongan, Kec. Jetis, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.003923594223!2d110.36471927575338!3d-7.783020277237765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583132e4d023%3A0x6335122e239330a9!2sTugu%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "goa-jomblang",
        nama: "Goa Jomblang",
        kategori: "rekomendasi",
        gambar: "assets/images/Goa Jomblang.jpg",
        deskripsiSingkat: "Goa vertikal dengan fenomena fenomena Cahaya Surga yang menakjubkan.",
        deskripsiLengkap: "Goa vertikal yang membutuhkan teknik caving/candi turun menggunakan tali harness. Di dasar goa terdapat vegetasi purba dan pemandangan sinar matahari yang menembus ke dalam goa (Ray of Light).",
        htm: "Rp 500.000 (Paket susur goa lengkap)",
        jam: "08.00 - 12.30 WIB",
        alamat: "Jetis Wetan, Pacarejo, Kec. Semanu, Kabupaten Gunungkidul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.100000000000!2d110.6380000!3d-8.0280000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a330000000000%3A0x123456789!2sGoa%20Jomblang!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "lava-tour-merapi",
        nama: "Lava Tour Merapi",
        kategori: "rekomendasi",
        gambar: "assets/images/lava tour.jpg",
        deskripsiSingkat: "Petualangan seru mengendarai Jeep offroad di lereng Gunung Merapi.",
        deskripsiLengkap: "Wisata petualangan menyusuri sisa-sisa jalur lahar dingin erupsi Merapi, mengunjungi Bunker Kaliadem, Museum Sisa Hartaku, dan perlintasan basah Kali Kuning.",
        htm: "Mulai Rp 400.000 / Jeep (4 Orang)",
        jam: "06.00 - 17.00 WIB",
        alamat: "Kaliurang, Hargobinangun, Kec. Pakem, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.500000000000!2d110.4280000!3d-7.5880000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a600000000000%3A0x123456789!2sLava%20Tour%20Merapi!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "tebing-breksi",
        nama: "Tebing Breksi",
        kategori: "rekomendasi",
        gambar: "assets/images/tebing breksi.jpg",
        deskripsiSingkat: "Tebing kapur raksasa dengan seni ukiran relief pewayangan yang megah.",
        deskripsiLengkap: "Tebing batu kapur bekas tambang yang diubah menjadi destinasi wisata seni pahat raksasa. Menawarkan pemandangan panorama lanskap kota Jogja dan Gunung Merapi dari ketinggian.",
        htm: "Rp 10.000 / orang",
        jam: "06.00 - 20.00 WIB",
        alamat: "Gn. Sari, Sambirejo, Kec. Prambanan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.000000000000!2d110.4900000!3d-7.7800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b0000000000%3A0x123456789!2sTebing%20Breksi!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "hutan-pinus-mangunan",
        nama: "Hutan Pinus Mangunan",
        kategori: "rekomendasi",
        gambar: "assets/images/hutan pinus.jpg",
        deskripsiSingkat: "Deretan pepohonan pinus rindang dengan panggung alam berfoto aesthetic.",
        deskripsiLengkap: "Kawasan hutan pinus asri yang menyejukkan mata. Dilengkapi dengan spot amphitheater panggung kayu yang sering digunakan untuk pertunjukkan atau foto prewedding.",
        htm: "Rp 5.000 / orang",
        jam: "06.00 - 18.00 WIB",
        alamat: "Sukorame, Mangunan, Kec. Dlingo, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.100000000000!2d110.4280000!3d-7.9280000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a540000000000%3A0x123456789!2sHutan%20Pinus%20Mangunan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "candi-prambanan",
        nama: "Candi Prambanan",
        kategori: "rekomendasi",
        gambar: "assets/images/candi prambanan.jpg",
        deskripsiSingkat: "Kompleks candi Hindu terbesar di Indonesia dan Situs Warisan Dunia UNESCO.",
        deskripsiLengkap: "Candi Hindu megah abad ke-9 yang dipersembahkan untuk Trimurti (Brahma, Wisnu, dan Siwa). Tempat terbaik menikmati arsitektur kuno berskala internasional.",
        htm: "Rp 50.000 / orang",
        jam: "06.30 - 17.00 WIB",
        alamat: "Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo, Kec. Prambanan, Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.050000000000!2d110.4910000!3d-7.7520000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae000000000%3A0x123456789!2sCandi%20Prambanan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "alun-alun-selatan",
        nama: "Alun-Alun Selatan (Altar)",
        kategori: "rekomendasi",
        gambar: "assets/images/alun alun.jpg",
        deskripsiSingkat: "Pusat keramaian malam hari dengan tradisi Masangin dan sepeda hias kelap-kelip.",
        deskripsiLengkap: "Ruang terbuka publik di belakang Keraton Jogja. Terkenal dengan mitos Masangin (berjalan menutup mata melintasi dua pohon beringin kembar) serta sewa sepeda lampu warna-warni.",
        htm: "Gratis",
        jam: "24 Jam",
        alamat: "Patehan, Kec. Kraton, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.880000000000!2d110.3630000!3d-7.8120000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579000000000%3A0x123456789!2sAlun-Alun%20Selatan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "heha-sky-view",
        nama: "HeHa Sky View",
        kategori: "rekomendasi",
        gambar: "assets/images/heha.jpg",
        deskripsiSingkat: "Restoran & spot foto kekinian dengan pemandangan lanskap malam kota dari bukit.",
        deskripsiLengkap: "Destinasi wisata modern yang menyuguhkan restoran, area swafoto berlatar perkotaan dari ketinggian, dan pemandangan matahari terbenam Gunungkidul.",
        htm: "Rp 20.000 - Rp 25.000 / orang",
        jam: "08.00 - 21.00 WIB",
        alamat: "Jl. Dingo-Patuk No.2, Plesedan, RT.001/RW.001, Kec. Patuk, Gunungkidul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.500000000000!2d110.4780000!3d-7.8380000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a510000000000%3A0x123456789!2sHeHa%20Sky%20View!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "obelix-hills",
        nama: "Obelix Hills",
        kategori: "rekomendasi",
        gambar: "assets/images/obelix.jpg",
        deskripsiSingkat: "Spot nongkrong santai di atas tebing batu purba bersuasana sunset ceria.",
        deskripsiLengkap: "Tempat wisata hits bernuansa tempat makan outdoor luas dengan puluhan spot foto Instagramable di atas batuan purba raksasa.",
        htm: "Rp 20.000 - Rp 25.000 / orang",
        jam: "10.00 - 21.00 WIB",
        alamat: "Klumprit, Blok I & 2, Wukirharjo, Kec. Prambanan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.100000000000!2d110.5100000!3d-7.7900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5c0000000000%3A0x123456789!2sObelix%20Hills!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "desa-wisata-kasongan",
        nama: "Desa Wisata Kasongan",
        kategori: "rekomendasi",
        gambar: "assets/images/kasongan.jpg",
        deskripsiSingkat: "Pusat kerajinan gerabah tanah clay bernilai seni tinggi khas Bantul.",
        deskripsiLengkap: "Sentra seni kerajinan gerabah tradisional yang memproduksi berbagai produk tanah liat mulai dari pot tanaman hias, patung, hingga perabotan rumah tangga.",
        htm: "Gratis",
        jam: "08.00 - 17.00 WIB",
        alamat: "Kajen, Bangunjiwo, Kec. Kasihan, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.700000000000!2d110.3400000!3d-7.8400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a570000000000%3A0x123456789!2sDesa%20Wisata%20Kasongan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "prawirotaman",
        nama: "Jalan Prawirotaman",
        kategori: "rekomendasi",
        gambar: "assets/images/prawirotaman.jpg",
        deskripsiSingkat: "Kawasan 'Kampung Bule' dengan deretan kafe, gelato, dan boutique hotel estetik.",
        deskripsiLengkap: "Pusat pemukiman wisatawan mancanegara yang terkenal dengan suasana kafenya yang artistik, toko cenderamata unik, serta jajaran penjual gelato ternama.",
        htm: "Gratis",
        jam: "24 Jam",
        alamat: "Jl. Prawirotaman, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.850000000000!2d110.3700000!3d-7.8180000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57c000000000%3A0x123456789!2sJalan%20Prawirotaman!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "pantai-indrayanti",
        nama: "Pantai Indrayanti (Pulang Sawal)",
        kategori: "rekomendasi",
        gambar: "assets/images/indrayanti.jpg",
        deskripsiSingkat: "Pantai pasir putih bersih dengan fasilitas restoran tepi laut yang lengkap.",
        deskripsiLengkap: "Salah satu pantai paling populer di Gunungkidul yang memiliki bukit karang eksotis, gazebo tepi pantai, serta deretan resto kuliner laut.",
        htm: "Rp 10.000 / orang",
        jam: "24 Jam",
        alamat: "Desa Tepus, Kecamatan Tepus, Kabupaten Gunungkidul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.800000000000!2d110.6100000!3d-8.1500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b900000000000%3A0x123456789!2sPantai%20Indrayanti!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    //BUDAYA & ADAT
    {
        id: "ramayana-ballet",
        nama: "Sendratari Ramayana Prambanan",
        kategori: "budaya",
        gambar: "assets/images/ramayana.jpg",
        deskripsiSingkat: "Pertunjukan seni tari Jawa legendaris berlatar belakang Candi Prambanan.",
        deskripsiLengkap: "Pertunjukan seni tari dan drama tanpa dialog yang mengisahkan legenda Ramayana. Disajikan secara megah dengan musik gamelan Jawa dan latar panggung terbuka berlatar belakang Candi Prambanan yang menyala di malam hari.",
        htm: "Rp 150.000 - Rp 450.000",
        jam: "19.30 - 21.30 WIB (Selasa, Kamis, Sabtu)",
        alamat: "Jl. Raya Jogja - Solo Km 16, Prambanan, Sleman, D.I. Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.072124169223!2d110.49122887575344!3d-7.751906277317765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae28e6c927f%3A0xb3e7e8b6f3c8d9e68!2sRamayana%20Ballet%20Prambanan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "upacara-sekaten",
        nama: "Upacara Adat Sekaten & Grebeg",
        kategori: "budaya",
        gambar: "assets/images/sekaten.jpg",
        deskripsiSingkat: "Rangkaian pesta rakyat dan tradisi peringatan Maulid Nabi dari Keraton.",
        deskripsiLengkap: "Sekaten adalah tradisi tahunan Keraton Yogyakarta yang dimeriahkan dengan dibunyikannya Gamelan Sekati di Masjid Gedhe Kauman, lalu diakhiri dengan Upacara Grebeg Maulud berupa arak-arakan Gunung Gunungan rezeki.",
        htm: "Gratis",
        jam: "Sesuai Jadwal Kalender Jawa (Tahun Sekali)",
        alamat: "Alun-Alun Utara & Keraton Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.925004169223!2d110.36322887575344!3d-7.803906277317765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5786f0592f6b%3A0xe54e60ef3c8d9e68!2sAlun-Alun%20Utara%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "museum-sonobudoyo",
        nama: "Museum Sonobudoyo",
        kategori: "budaya",
        gambar: "assets/images/sonobudoyo.jpg",
        deskripsiSingkat: "Museum sejarah dan kebudayaan Jawa terlengkap kedua di Indonesia.",
        deskripsiLengkap: "Menyimpan puluhan ribu koleksi benda bersejarah, topeng Jawa, keris pusaka, gamelan, hingga pementasan Wayang Kulit rutin setiap malam.",
        htm: "Rp 10.000 / orang",
        jam: "08.00 - 21.00 WIB",
        alamat: "Jl. Pangurakan No.6, Ngupasan, Kec. Gondomanan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.910000000000!2d110.3630000!3d-7.8020000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578000000000%3A0x123456789!2sMuseum%20Sonobudoyo!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "kampung-batik-giriloyo",
        nama: "Kampung Batik Tulis Giriloyo",
        kategori: "budaya",
        gambar: "assets/images/giriloyo.jpg",
        deskripsiSingkat: "Pusat kerajinan batik tulis tradisional klasik Keraton Mataram.",
        deskripsiLengkap: "Desa wisata tempat pengunjung dapat belajar langsung teknik mencanting batik tulis halus menggunakan bahan canting dan pewarna alami tradisional.",
        htm: "Mulai Rp 50.000 (Paket Belajar Batik)",
        jam: "08.00 - 16.00 WIB",
        alamat: "Giriloyo, Wukirsari, Kec. Imogiri, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.000000000000!2d110.3900000!3d-7.9100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a550000000000%3A0x123456789!2sKampung%20Batik%20Giriloyo!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "padepokan-bagong-kussudiardja",
        nama: "Padepokan Seni Bagong Kussudiardja",
        kategori: "budaya",
        gambar: "assets/images/psbk.jpg",
        deskripsiSingkat: "Pusat laboratorium kreatif seni tari dan seni rupa legendaris.",
        deskripsiLengkap: "Didirikan oleh tokoh seniman besar Bagong Kussudiardja. Menjadi ruang terbuka pameran karya seni, pelatihan koreografi tari kontemporer, dan pertunjukan visual.",
        htm: "Donasi Sukarela / Tergantung Acara",
        jam: "09.00 - 17.00 WIB",
        alamat: "Kembaran, Tamantirto, Kec. Kasihan, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.800000000000!2d110.3300000!3d-7.8200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a560000000000%3A0x123456789!2sPadepokan%20Seni%20Bagong%20Kussudiardja!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "museum-ullen-sentalu",
        nama: "Museum Ullen Sentalu",
        kategori: "budaya",
        gambar: "assets/images/ullen-sentalu.jpg",
        deskripsiSingkat: "Museum privat arsitektur unik yang menceritakan kejayaan dinasti Kerajaan Mataram.",
        deskripsiLengkap: "Museum terbaik di Indonesia yang menyajikan koleksi seni, busana batik bangsawan, lukisan, serta surat-surat bersejarah Keraton Mataram Islam dalam tur pemandu eksklusif.",
        htm: "Rp 50.000 / orang",
        jam: "08.30 - 16.00 WIB (Senin Tutup)",
        alamat: "Jl. Boyong No.KM 25, Kaliurang, Hargobinangun, Kec. Pakem, Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.400000000000!2d110.4200000!3d-7.5900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a610000000000%3A0x123456789!2sMuseum%20Ullen%20Sentalu!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "wayang-kulit-sasanahinggil",
        nama: "Pertunjukan Wayang Kulit Sasana Hinggil",
        kategori: "budaya",
        gambar: "assets/images/wayang-kulit.jpg",
        deskripsiSingkat: "Pementasan wayang kulit semalam suntuk khas tradisi Keraton Yogyakarta.",
        deskripsiLengkap: "Pagelaran wayang kulit otentik yang dibawakan oleh dalang ternama lengkap dengan sinden dan gamelan Jawa di Sasana Hinggil Alun-Alun Selatan.",
        htm: "Rp 20.000 / orang",
        jam: "21.00 - 04.30 WIB (Sabtu Kliwon)",
        alamat: "Alun-Alun Selatan, Patehan, Kec. Kraton, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.880000000000!2d110.3630000!3d-7.8120000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579000000000%3A0x123456789!2sSasana%20Hinggil!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "sanggar-didik-nini-thowok",
        nama: "Sanggar Seni Didik Nini Thowok",
        kategori: "budaya",
        gambar: "assets/images/didik-nini-thowok.jpg",
        deskripsiSingkat: "Sanggar pembelajaran tari tradisional dan lintas budaya maestro tari Indonesia.",
        deskripsiLengkap: "Sanggar tari legendaris yang mengolah dan melestarikan tarian komedi, tarian lintas gender, serta tarian klasik Nusantara yang tersohor hingga mancanegara.",
        htm: "Khusus Kunjungan & Kelas Pelatihan",
        jam: "Sesuai Janji / Jadwal Kelas",
        alamat: "Jembangan, Segoroyoso, Kec. Pleret, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.300000000000!2d110.4000000!3d-7.8800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a530000000000%3A0x123456789!2sSanggar%20Didik%20Nini%20Thowok!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "museum-benteng-vredeburg",
        nama: "Benteng Vredeburg",
        kategori: "budaya",
        gambar: "assets/images/vredeburg.jpg",
        deskripsiSingkat: "Museum benteng peninggalan era kolonial Belanda di Ujung Malioboro.",
        deskripsiLengkap: "Benteng pertahanan abad ke-18 yang kini difungsikan sebagai museum sejarah perjuangan nasional lengkap dengan diorama interaktif dan bangunan vintage.",
        htm: "Rp 3.000 / orang",
        jam: "08.00 - 20.00 WIB",
        alamat: "Jl. Margo Mulyo No.6, Ngupasan, Kec. Gondomanan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.910000000000!2d110.3650000!3d-7.8000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578000000000%3A0x123456789!2sBenteng%20Vredeburg!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "upacara-labuhan-merapi",
        nama: "Upacara Adat Labuhan Merapi",
        kategori: "budaya",
        gambar: "assets/images/labuhan-merapi.jpg",
        deskripsiSingkat: "Ritual persembahan dan doa keselamatan Keraton Yogya kepada Gunung Merapi.",
        deskripsiLengkap: "Upacara adat tahunan memperingati Tingalan Dalem Jumenengan Sultan. Abdi dalem mengarak ubarampe persembahan dari keraton menuju puncak Gunung Merapi.",
        htm: "Gratis",
        jam: "Sesuai Kalender Jawa (Bulan Rajab)",
        alamat: "Kinahrejo, Hargobinangun, Kec. Pakem, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.600000000000!2d110.4300000!3d-7.5800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a600000000000%3A0x123456789!2sKinahrejo!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "omah-petitih",
        nama: "Omah Petitih & Rumah Joglo Jawa",
        kategori: "budaya",
        gambar: "assets/images/omah-petitih.jpg",
        deskripsiSingkat: "Destinasi preservasi rumah adat Joglo kuno berbahan kayu jati ukir.",
        deskripsiLengkap: "Galeri edukasi arsitektur tradisional Jawa yang menampilkan bentuk tatanan pendopo, pringgitan, hingga senthong lengkap dengan filosofinya.",
        htm: "Rp 15.000 / orang",
        jam: "09.00 - 17.00 WIB",
        alamat: "Brosot, Kec. Galur, Kabupaten Kulon Progo.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.000000000000!2d110.2200000!3d-7.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a400000000000%3A0x123456789!2sOmah%20Petitih!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "desa-wisata-pentingsari",
        nama: "Desa Wisata Pentingsari",
        kategori: "budaya",
        gambar: "assets/images/pentingsari.jpg",
        deskripsiSingkat: "Desa bernuansa pedesaan lereng gunung dengan atraksi budaya gamelan.",
        deskripsiLengkap: "Pemenang penghargaan desa wisata berkelanjutan yang menawarkan kegiatan bajak sawah, belajar gamelan, tari klasik, serta menginap di homestay warga.",
        htm: "Mulai Rp 100.000 / paket kegiatan",
        jam: "24 Jam",
        alamat: "Pentingsari, Umbulharjo, Kec. Cangkringan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.200000000000!2d110.4400000!3d-7.6200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a620000000000%3A0x123456789!2sDesa%20Wisata%20Pentingsari!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
// wusata
    {
        id: "malioboro",
        nama: "Jalan Malioboro",
        kategori: "wisata",
        gambar: "assets/images/malioboro.jpg",
        deskripsiSingkat: "Jantung kota Jogja yang tak pernah tidur dengan suasana khas belanja.",
        deskripsiLengkap: "Kawasan pusat perbelanjaan dan jalan paling terkenal di Yogyakarta. Berjalan kaki di malam hari menyuguhkan kuliner lesehan dan cinderamata batik.",
        htm: "Gratis",
        jam: "24 Jam",
        alamat: "Jl. Malioboro, Sosromenduran, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.915004169223!2d110.36322887575344!3d-7.790906277317765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5786f0592f6b%3A0xe54e60ef3c8d9e68!2sJl.%20Malioboro%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "parangtritis",
        nama: "Pantai Parangtritis",
        kategori: "wisata",
        gambar: "assets/images/parangtritis.jpg",
        deskripsiSingkat: "Pantai ikonik di selatan Jogja dengan pemandangan matahari terbenam yang memukau.",
        deskripsiLengkap: "Pantai Parangtritis terkenal dengan ombaknya yang besar, gundukan pasir (gumuk pasir), serta wisata naik delman atau ATV menyusuri bibir pantai saat sunset.",
        htm: "Rp 10.000 / orang",
        jam: "24 Jam",
        alamat: "Kretep, Parangtritis, Kec. Kretek, Kabupaten Bantul, D.I. Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.488318485202!2d110.3292418757549!3d-8.024467079912061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a503a0937c02b%3A0xedbf554d3d81b94e!2sPantai%20Parangtritis!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "pantai-timang",
        nama: "Pantai Timang",
        kategori: "wisata",
        gambar: "assets/images/pantai-timang.jpg",
        deskripsiSingkat: "Uji adrenalin menyeberangi lautan ganas menggunakan gondola kayu tradisional.",
        deskripsiLengkap: "Pantai ekstrem di Gunungkidul yang menawarkan sensasi menyeberangi karang laut menggunakan gondola kayu gantung atau jembatan tali gantung.",
        htm: "Rp 10.000 (Gondola: Rp 200.000)",
        jam: "08.00 - 17.00 WIB",
        alamat: "Jl. Pantai Selatan Jawa, Purwodadi, Kec. Tepus, Kabupaten Gunungkidul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.500000000000!2d110.6600000!3d-8.1700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b930000000000%3A0x123456789!2sPantai%20Timang!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "wisata-kalibiru",
        nama: "Wisata Alam Kalibiru",
        kategori: "wisata",
        gambar: "assets/images/kalibiru.jpg",
        deskripsiSingkat: "Spot menara pandang kayu di atas pohon dengan latar belakang Waduk Sermo.",
        deskripsiLengkap: "Destinasi wisata hijau di Perbukitan Menoreh Kulon Progo. Menawarkan gardu pandang kayu ikonik berlatar air waduk biru dan hutan asri.",
        htm: "Rp 10.000 / orang",
        jam: "08.00 - 17.00 WIB",
        alamat: "Jalan Waduk Sermo, Kalibiru, Hargowilis, Kec. Kokap, Kulon Progo.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.300000000000!2d110.1200000!3d-7.8100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a900000000000%3A0x123456789!2sKalibiru!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "puncak-becici",
        nama: "Puncak Becici",
        kategori: "wisata",
        gambar: "assets/images/puncak-becici.jpg",
        deskripsiSingkat: "Hutan pinus tinggi dengan pemandangan lanskap matahari terbenam Kota Jogja.",
        deskripsiLengkap: "Kawasan hutan pinus bukit yang pernah dikunjungi Mantan Presiden AS Barack Obama. Memiliki banyak gardu pandang kayu untuk melihat panorama kota dari atas.",
        htm: "Rp 5.000 / orang",
        jam: "06.00 - 19.00 WIB",
        alamat: "Gunungsari, Muncar, Gunungmutuk, Kec. Dlingo, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.200000000000!2d110.4300000!3d-7.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a541000000000%3A0x123456789!2sPuncak%20Becici!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "pantai-kesirat",
        nama: "Pantai Kesirat (Hidden Gem)",
        kategori: "wisata",
        gambar: "assets/images/kesirat.jpg",
        deskripsiSingkat: "Tebing karang hijau tanpa pasir putih, spot camping dan sunset terbaik.",
        deskripsiLengkap: "Pantai tebing karang unik tanpa pasir, ditumbuhi rumput hijau padang tebing. Sangat favorit untuk lokasi kemping malam hari dan menikmati pemandangan sunset memukau.",
        htm: "Rp 5.000 / orang",
        jam: "24 Jam",
        alamat: "Karang, Girikarto, Kec. Panggang, Kabupaten Gunungkidul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.000000000000!2d110.4300000!3d-8.0800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4f0000000000%3A0x123456789!2sPantai%20Kesirat!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "grojogan-watu-purbo",
        nama: "Grojogan Watu Purbo",
        kategori: "wisata",
        gambar: "assets/images/watu-purbo.jpg",
        deskripsiSingkat: "Air terjun buatan 6 undakan terasering berlatar Gunung Merapi.",
        deskripsiLengkap: "Dam/sabo penahan lahar dingin yang dibentuk menjadi air terjun bertingkat enam. Suasana sangat asri dan sejuk dengan latar belakang gunung merapi yang jelas.",
        htm: "Rp 5.000 / orang",
        jam: "06.00 - 18.00 WIB",
        alamat: "Bangunrejo, Merdikorejo, Kec. Tempel, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.100000000000!2d110.3300000!3d-7.6300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a630000000000%3A0x123456789!2sGrojogan%20Watu%20Purbo!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "kedung-pedut",
        nama: "Air Terjun Kedung Pedut",
        kategori: "wisata",
        gambar: "assets/images/kedung-pedut.jpg",
        deskripsiSingkat: "Kolam air terjun alami dengan dua warna air biru toska dan jernih.",
        deskripsiLengkap: "Destinasi air terjun tersembunyi di Kulon Progo yang memiliki tingkatan kolam renang alami unik berwarna perpaduan toska dan bening kristal.",
        htm: "Rp 10.000 / orang",
        jam: "08.00 - 16.00 WIB",
        alamat: "Jatimulyo, Kec. Girimulyo, Kabupaten Kulon Progo.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.000000000000!2d110.1100000!3d-7.7600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a980000000000%3A0x123456789!2sKedung%20Pedut!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "bukit-pengilon",
        nama: "Bukit Pengilon",
        kategori: "wisata",
        gambar: "assets/images/bukit-pengilon.jpg",
        deskripsiSingkat: "Padang rumput hijau tepi tebing lautan luas menyerupai pemandangan New Zealand.",
        deskripsiLengkap: "Hamparan bukit rumput hijau luas yang berbatasan langsung dengan tebing tinggi samudera Hindia. Sangat direkomendasikan bagi pecinta trekking dan fotografi alam.",
        htm: "Rp 5.000 / orang",
        jam: "24 Jam",
        alamat: "Purwodadi, Kec. Tepus, Kabupaten Gunungkidul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.400000000000!2d110.6700000!3d-8.1800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b940000000000%3A0x123456789!2sBukit%20Pengilon!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "laguna-depok",
        nama: "Laguna Pantai Depok",
        kategori: "wisata",
        gambar: "assets/images/laguna-depok.jpg",
        deskripsiSingkat: "Wisata perahu muara sungai dengan resto apung dan jetski.",
        deskripsiLengkap: "Muara sungai tempat pertemuan air tawar dan laut di dekat Pantai Depok. Pengunjung dapat menyewa wahana kapal perahu keliling muara atau mencoba olahraga jetski.",
        htm: "Rp 10.000 / orang",
        jam: "06.00 - 18.00 WIB",
        alamat: "Parangtritis, Kec. Kretek, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.400000000000!2d110.3100000!3d-8.0100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a500000000000%3A0x123456789!2sLaguna%20Depok!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "waduk-sermo",
        nama: "Waduk Sermo",
        kategori: "wisata",
        gambar: "assets/images/waduk-sermo.jpg",
        deskripsiSingkat: "Danau penampungan air raksasa untuk tempat kemping tepi air yang syahdu.",
        deskripsiLengkap: "Satu-satunya waduk berukuran raksasa di Jogja dikelilingi perbukitan hijau Menoreh. Sangat terkenal sebagai tempat kemping pinggir air serta menyewa perahu.",
        htm: "Rp 6.000 / orang",
        jam: "06.00 - 18.00 WIB",
        alamat: "Hargowilis, Kec. Kokap, Kabupaten Kulon Progo.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.400000000000!2d110.1100000!3d-7.8200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a910000000000%3A0x123456789!2sWaduk%20Sermo!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "pantai-sedahan",
        nama: "Pantai Sedahan (Perawan)",
        kategori: "wisata",
        gambar: "assets/images/sedahan.jpg",
        deskripsiSingkat: "Pantai perawan diapit dua tebing besar yang alami dan sepi pengunjung.",
        deskripsiLengkap: "Pantai tersembunyi yang membutuhkan trekking singkat. Suasana pantai masih sangat alami, bersih, dan diapit tebing karang raksasa di kanan kirinya.",
        htm: "Rp 5.000 / orang",
        jam: "24 Jam",
        alamat: "Pendowo, Jepitu, Kec. Girisubo, Kabupaten Gunungkidul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.300000000000!2d110.7100000!3d-8.1900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b950000000000%3A0x123456789!2sPantai%20Sedahan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },

    //sejataah
    {
        id: "tamansari",
        nama: "Taman Sari Yogyakarta",
        kategori: "sejarah",
        gambar: "assets/images/tamansari.jpg",
        deskripsiSingkat: "Situs bekas taman istana Kasultanan Yogyakarta yang memiliki arsitektur air.",
        deskripsiLengkap: "Situs sejarah kolam pemandian kerajaan dan tempat peristirahatan Sultan Yogya yang dibangun pada abad ke-18.",
        htm: "Rp 15.000 / orang",
        jam: "09.00 - 15.00 WIB",
        alamat: "Patehan, Kec. Kraton, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.89421884705!2d110.35629167575344!3d-7.80998967753907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5792d4f82877%3A0x28f9b9511ef5cb!2sTaman%20Sari!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "keraton-jogja",
        nama: "Keraton Ngayogyakarta Hadiningrat",
        kategori: "sejarah",
        gambar: "assets/images/keraton.jpg",
        deskripsiSingkat: "Istana resmi Kesultanan Ngayogyakarta Hadiningrat yang kaya nilai budaya.",
        deskripsiLengkap: "Pusat pemerintahan dan tempat tinggal Sultan Yogyakarta. Pengunjung dapat melihat benda-benda koleksi museum kerajaan serta pementasan seni tradisional saban harinya.",
        htm: "Rp 15.000 / orang",
        jam: "08.30 - 14.00 WIB",
        alamat: "Jl. Rotowijayan No.1, Panembahan, Kec. Kraton, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.92312485293!2d110.36218767575338!3d-7.805284477329805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57876a4a2b91%3A0x1d75225c93c4e67!2sKeraton%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "situs-warungboto",
        nama: "Situs Warungboto",
        kategori: "sejarah",
        gambar: "assets/images/warungboto.jpg",
        deskripsiSingkat: "Pesanggrahan kuno peninggalan Sultan Hamengkubuwono II bergaya arsitektur tegas.",
        deskripsiLengkap: "Situs bersejarah tempat pemandian dan pesanggrahan keluarga istana dengan lorong-lorong batu bata merah simetris yang sangat eksotis.",
        htm: "Gratis (Parkir Rp 2.000)",
        jam: "08.00 - 17.00 WIB",
        alamat: "Jl. Veteran No.77, Warungboto, Kec. Umbulharjo, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.900000000000!2d110.3900000!3d-7.8100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a570000000000%3A0x123456789!2sSitus%20Warungboto!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "candi-sambisari",
        nama: "Candi Sambisari",
        kategori: "sejarah",
        gambar: "assets/images/sambisari.jpg",
        deskripsiSingkat: "Candi unik di bawah permukaan tanah akibat tertimbun lahar dingin Merapi.",
        deskripsiLengkap: "Candi Hindu abad ke-9 yang ditemukan 6.5 meter di bawah permukaan tanah oleh petani setempat pada tahun 1966.",
        htm: "Rp 5.000 / orang",
        jam: "08.00 - 16.00 WIB",
        alamat: "Jl. Candi Sambisari, Purwomartani, Kec. Kalasan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.100000000000!2d110.4400000!3d-7.7600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a0000000000%3A0x123456789!2sCandi%20Sambisari!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "candi-ijo",
        nama: "Candi Ijo",
        kategori: "sejarah",
        gambar: "assets/images/candi-ijo.jpg",
        deskripsiSingkat: "Candi tertinggi di Yogyakarta dengan pemandangan lanskap kota dan bandara.",
        deskripsiLengkap: "Kompleks candi Hindu yang berdiri di atas perbukitan setinggi 410 mdpl. Menjadi candi paling tinggi lokasinya di Jogja dengan pemandangan terbenamnya matahari yang dramatis.",
        htm: "Rp 7.500 / orang",
        jam: "08.00 - 18.00 WIB",
        alamat: "Nglengkong, Sambirejo, Kec. Prambanan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.000000000000!2d110.5000000!3d-7.7800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b1000000000%3A0x123456789!2sCandi%20Ijo!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "makam-imogiri",
        nama: "Makam Raja-Raja Imogiri",
        kategori: "sejarah",
        gambar: "assets/images/imogiri.jpg",
        deskripsiSingkat: "Kompleks pemakaman resmi raja-raja Kesultanan Mataram di puncak bukit.",
        deskripsiLengkap: "Situs cagar budaya makam para raja Jawa Mataram Islam. Wisatawan harus menaiki ratusan anak tangga batu bata merah yang penuh nilai mistis dan filosofis.",
        htm: "Donasi Sukarela",
        jam: "08.00 - 16.00 WIB (Sesuai Ketentuan Tradisi)",
        alamat: "Pajimatan, Karangwuni, Wukirsari, Kec. Imogiri, Kabupaten Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.900000000000!2d110.3900000!3d-7.9200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a551000000000%3A0x123456789!2sMakam%20Imogiri!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "candi-barong",
        nama: "Candi Barong",
        kategori: "sejarah",
        gambar: "assets/images/candi-barong.jpg",
        deskripsiSingkat: "Candi peninggalan Hindu di hamparan perbukitan rumput hijau yang tenang.",
        deskripsiLengkap: "Candi pemujaan Dewa Wisnu abad ke-9 yang dihiasi hiasan Kala/Barong pada ambang pintu candi. Suasananya sepi dan rindang.",
        htm: "Rp 5.000 / orang",
        jam: "08.00 - 17.00 WIB",
        alamat: "Dowangsan, Sambirejo, Kec. Prambanan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.000000000000!2d110.4950000!3d-7.7750000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b2000000000%3A0x123456789!2sCandi%20Barong!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "candi-plaosan",
        nama: "Candi Plaosan",
        kategori: "sejarah",
        gambar: "assets/images/plaosan.jpg",
        deskripsiSingkat: "Candi Kembar megah lambang cinta beda agama Raja Mataram Kuno.",
        deskripsiLengkap: "Kompleks candi Buddha yang dibangun oleh Rakai Pikatan untuk permaisurinya Pramodhawardhani. Sangat terkenal sebagai lokasi berburu foto sunset matahari terbenam.",
        htm: "Rp 10.000 / orang",
        jam: "08.00 - 17.00 WIB",
        alamat: "Plososing revolt, Bugisan, Kec. Prambanan, Kabupaten Klaten (Dekat Sleman).",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.200000000000!2d110.5000000!3d-7.7400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ad000000000%3A0x123456789!2sCandi%20Plaosan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "candi-ratu-boko",
        nama: "Situs Ratu Boko",
        kategori: "sejarah",
        gambar: "assets/images/ratu-boko.jpg",
        deskripsiSingkat: "Bekas kompleks istana megah abad ke-8 di atas bukit bersiluet gerbang sunset.",
        deskripsiLengkap: "Reruntuhan kompleks istana kerajaan megah yang memiliki gerbang batu raksasa, kolam pemandian, dan pendopo. Terkenal dengan pemandangan sunset siluet terbaik.",
        htm: "Rp 40.000 / orang",
        jam: "07.00 - 18.00 WIB",
        alamat: "Gatak, Bokoharjo, Kec. Prambanan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.000000000000!2d110.4880000!3d-7.7700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5af000000000%3A0x123456789!2sCandi%20Ratu%20Boko!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "museum-dewantara",
        nama: "Museum Dewantara Kirti Griya",
        kategori: "sejarah",
        gambar: "assets/images/dewantara.jpg",
        deskripsiSingkat: "Kediaman asli pahlawan nasional Ki Hajar Dewantara Bapak Pendidikan.",
        deskripsiLengkap: "Museum bekas tempat tinggal Bapak Pendidikan Indonesia yang menyimpan naskah asli, barang pribadi, surat-surat bersejarah, serta jejak berdirinya Taman Siswa.",
        htm: "Rp 5.000 / orang",
        jam: "08.00 - 14.00 WIB (Sabtu-Minggu Tutup)",
        alamat: "Jl. Taman Siswa No.31, Wirogunan, Kec. Mergangsan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.900000000000!2d110.3750000!3d-7.8050000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a000000000%3A0x123456789!2sMuseum%20Dewantara!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "monumen-jogja-kembali",
        nama: "Monumen Jogja Kembali (Monjali)",
        kategori: "sejarah",
        gambar: "assets/images/monjali.jpg",
        deskripsiSingkat: "Museum berbentuk kerucut peringatan kembalinya Yogyakarta sebagai ibukota.",
        deskripsiLengkap: "Museum sejarah berbentuk kerucut 3 lantai yang menyimpan diorama penyerangan Belanda, benda sejarah perjuangan kemerdekaan, dan taman lampion malam hari.",
        htm: "Rp 15.000 / orang",
        jam: "08.00 - 16.00 WIB",
        alamat: "Jl. Ring Road Utara, Jongke Sendangadi, Kec. Mlati, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.200000000000!2d110.3680000!3d-7.7500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58e000000000%3A0x123456789!2sMonjali!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "kotagede-heritage",
        nama: "Kawasan Kotagede Heritage",
        kategori: "sejarah",
        gambar: "assets/images/kotagede.jpg",
        deskripsiSingkat: "Kota tua bekas Ibukota Kerajaan Mataram Islam dengan pusat kerajinan perak.",
        deskripsiLengkap: "Kawasan bernuansa rumah tradisional Kalang kuno, lorong-lorong batu unik, Masjid Gede Mataram Kotagede, serta pusat produksi perhiasan perak legendaris.",
        htm: "Gratis",
        jam: "24 Jam",
        alamat: "Kotagede, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.800000000000!2d110.3980000!3d-7.8280000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a576000000000%3A0x123456789!2sKotagede!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },

    //kuliner
    {
        id: "gudeg",
        nama: "Gudeg Yu Djum",
        kategori: "kuliner",
        gambar: "assets/images/gudeg.jpg",
        deskripsiSingkat: "Kuliner manis gurih olahan nangka muda khas resep tradisional.",
        deskripsiLengkap: "Pelopor gudeg kering khas Wijilan yang legit. Disajikan lengkap dengan krecek pedas gurih, ayam kampung, dan telur bacem.",
        htm: "Rp 20.000 - Rp 80.000",
        jam: "06.00 - 22.00 WIB",
        alamat: "Jl. Wijilan No.167, Panembahan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.92348589255!2d110.3639893!3d-7.8085188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579294f99999%3A0x1034089c2534567!2sGudeg%20Yu%20Djum!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "bakpia-pathok-25",
        nama: "Bakpia Pathok 25",
        kategori: "kuliner",
        gambar: "assets/images/bakpia-25.jpg",
        deskripsiSingkat: "Oleh-oleh khas Jogja legendaris dengan varian rasa kacang hijau hingga keju.",
        deskripsiLengkap: "Pusat pembuatan bakpia legendaris di kawasan Pathok. Pengunjung bisa melihat langsung proses pembuatan bakpia hangat yang baru diangkat dari tungku pembakaran.",
        htm: "Rp 35.000 - Rp 50.000 / kotak",
        jam: "06.00 - 23.00 WIB",
        alamat: "Jl. Sangaskara No.25, Ngampil, Sangaktunggal, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.93000000000!2d110.3550000!3d-7.7980000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583000000000%3A0x123456789abcdef!2sBakpia%20Pathok%2025!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "sate-klathak-pak-pong",
        nama: "Sate Klathak Pak Pong",
        kategori: "kuliner",
        gambar: "assets/images/sate-klathak.jpg",
        deskripsiSingkat: "Sate kambing gurih yang ditusuk menggunakan jeruji besi sepeda.",
        deskripsiLengkap: "Sate kambing muda unik khas Bantul yang ditusuk dengan jeruji besi agar panas matang hingga ke dalam. Hanya dibumbui garam namun rasanya gurih manis luar biasa.",
        htm: "Rp 30.000 - Rp 45.000 / porsi",
        jam: "09.00 - 23.30 WIB",
        alamat: "Jl. Sultan Agung No.18, Jejeran II, Wonokromo, Kec. Pleret, Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.300000000000!2d110.3900000!3d-7.8700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a53e000000000%3A0x123456789!2sSate%20Klathak%20Pak%20Pong!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "kopi-joss-lik-man",
        nama: "Kopi Joss Lik Man",
        kategori: "kuliner",
        gambar: "assets/images/kopi-joss.jpg",
        deskripsiSingkat: "Sensasi ngopi unik dengan arang membara yang dicelupkan ke dalam gelas.",
        deskripsiLengkap: "Warung angkringan legendaris penjual kopi joss. Arang kayu membara dimasukkan langsung ke gelas kopi hitam memberikan aroma karamel gurih yang khas.",
        htm: "Rp 5.000 - Rp 15.000",
        jam: "16.00 - 01.00 WIB",
        alamat: "Jl. Pasar Kembang, Sosromenduran, Kec. Gedong Tengen, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.950000000000!2d110.3620000!3d-7.7890000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584000000000%3A0x123456789!2sKopi%20Joss%20Lik%20Man!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "oseng-mercon-bu-narti",
        nama: "Oseng-Oseng Mercon Bu Narti",
        kategori: "kuliner",
        gambar: "assets/images/oseng-mercon.jpg",
        deskripsiSingkat: "Kuliner tetelan daging sapi super pedas dengan ratusan cabai rawit.",
        deskripsiLengkap: "Pelopor oseng-oseng mercon di Jogja. Mengolah kikil dan tetelan sapi dengan bumbu rempah melimpah serta rasa pedas menyengat bak petasan mercon.",
        htm: "Rp 25.000 - Rp 35.000 / porsi",
        jam: "16.00 - 23.00 WIB",
        alamat: "Jl. KH. Ahmad Dahlan No.107, Notoprajan, Ngampilan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.910000000000!2d110.3580000!3d-7.8010000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578a00000000%3A0x123456789!2sOseng%20Mercon%20Bu%20Narti!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "lupis-mbah-satinem",
        nama: "Lupis Mbah Satinem",
        kategori: "kuliner",
        gambar: "assets/images/lupis-satinem.jpg",
        deskripsiSingkat: "Jajanan pasar lupis cenil legendaris yang masuk serial Netflix Street Food.",
        deskripsiLengkap: "Kuliner sarapan pagi legendaris olahan beras ketan yang disajikan dengan cenil, tiwul, cenil, dan guyuran gula jawa kental cair yang sangat nikmat.",
        htm: "Rp 10.000 / porsi",
        jam: "06.00 - 09.00 WIB (Cepat Habis)",
        alamat: "Jl. Ponegaran, Bumijo, Kec. Jetis, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.980000000000!2d110.3600000!3d-7.7850000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583a00000000%3A0x123456789!2sLupis%20Mbah%20Satinem!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "mangut-lele-mbah-marto",
        nama: "Mangut Lele Mbah Marto",
        kategori: "kuliner",
        gambar: "assets/images/mangut-lele.jpg",
        deskripsiSingkat: "Lele asap kuah santan pedas gurih yang dimasak dan diambil langsung dari dapur.",
        deskripsiLengkap: "Pengalaman prasmanan unik makan langsung di dapur tradisional (pawon). Lele diasap di atas tungku kayu sebelum dimasak dalam kuah mangut santan pedas.",
        htm: "Rp 25.000 - Rp 35.000 / porsi",
        jam: "10.00 - 20.00 WIB",
        alamat: "Jl. Sewon Indah, Ngireng-Iren, Panggungharjo, Kec. Sewon, Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.600000000000!2d110.3600000!3d-7.8400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a572000000000%3A0x123456789!2sMangut%20Lele%20Mbah%20Marto!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "mie-lethek-mbah-mendes",
        nama: "Mie Lethek Mbah Mendes",
        kategori: "kuliner",
        gambar: "assets/images/mie-lethek.jpg",
        deskripsiSingkat: "Mie olahan tepung tapioka singkong khas Bantul tanpa pengawet.",
        deskripsiLengkap: "Mie berwarna kusam alami (lethek) yang dibuat tradisional menggunakan bantuan tenaga sapi. Dimasak menggunakan anglo tungku arang dengan cita rasa gurih nagih.",
        htm: "Rp 20.000 - Rp 30.000 / porsi",
        jam: "11.00 - 22.00 WIB",
        alamat: "Jl. Sarjito No.11, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.010000000000!2d110.3680000!3d-7.7790000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a582000000000%3A0x123456789!2sMie%20Lethek%20Mbah%20Mendes!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "kopi-merapi",
        nama: "Warung Kopi Merapi",
        kategori: "kuliner",
        gambar: "assets/images/kopi-merapi.jpg",
        deskripsiSingkat: "Ngopi santai di warung batu terbuka berlatar pemandangan puncak Merapi.",
        deskripsiLengkap: "Warung kopi sederhana dari batu sisa erupsi di kaki gunung. Menikmati seduhan kopi Arabika atau Robusta lokal Merapi dengan hawa dingin pedesaan.",
        htm: "Rp 10.000 - Rp 20.000",
        jam: "07.00 - 22.00 WIB",
        alamat: "Kepuharjo, Kec. Cangkringan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.450000000000!2d110.4400000!3d-7.5950000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a60a000000000%3A0x123456789!2sWarung%20Kopi%20Merapi!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "soto-kadipiro",
        nama: "Soto Kadipiro Asli",
        kategori: "kuliner",
        gambar: "assets/images/soto-kadipiro.jpg",
        deskripsiSingkat: "Soto ayam kampung kuah bening resep legendaris sejak tahun 1921.",
        deskripsiLengkap: "Salah satu hidangan soto paling tua di Yogyakarta. Menyajikan kuah kaldu ayam bening rempah yang segar disajikan bersama perasan jeruk nipis dan gorengan hangat.",
        htm: "Rp 20.000 / porsi",
        jam: "07.30 - 14.30 WIB",
        alamat: "Jl. Wates No.33, Kadipiro, Ngestiharjo, Kec. Kasihan, Bantul.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.920000000000!2d110.3480000!3d-7.8000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a800000000%3A0x123456789!2sSoto%20Kadipiro!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "entok-slenget-kang-tanir",
        nama: "Entok Slenget Kang Tanir",
        kategori: "kuliner",
        gambar: "assets/images/entok-slenget.jpg",
        deskripsiSingkat: "Rica-rica entok (itik manila) empuk super pedas menyengat khas Sleman.",
        deskripsiLengkap: "Daging entok yang dimasak empuk tidak berbau amis dengan bumbu rica-rica pedas gila (slenget) yang bikin berkeringat.",
        htm: "Rp 25.000 - Rp 35.000 / porsi",
        jam: "16.00 - 21.00 WIB",
        alamat: "Jl. Pakem - Turi, Donokerto, Kec. Turi, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.100000000000!2d110.3700000!3d-7.6300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a63a000000000%3A0x123456789!2sEntok%20Slenget%20Kang%20Tanir!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "saoto-bathok-pak-katro",
        nama: "Saoto Bathok Pak Katro",
        kategori: "kuliner",
        gambar: "assets/images/saoto-bathok.jpg",
        deskripsiSingkat: "Soto sapi kuah gurih yang disajikan unik dalam mangkuk tempurung kelapa.",
        deskripsiLengkap: "Soto daging sapi lezat yang dihidangkan dalam 'bathok' (tempurung kelapa). Nikmat disantap bersama sate usus, tempe tempe mendoan hangat di pinggir persawahan.",
        htm: "Rp 8.000 - Rp 15.000",
        jam: "06.00 - 15.30 WIB",
        alamat: "Jl. Candi Sambisari No.6, Purwomartani, Kec. Kalasan, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.100000000000!2d110.4450000!3d-7.7620000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a1000000000%3A0x123456789!2sSaoto%20Bathok%20Pak%20Katro!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },

    // ==========================================
    // KATEGORI: HOTEL & PENGINAPAN (12 Total)
    // ==========================================
    {
        id: "hotel-tentrem",
        nama: "Hotel Tentrem Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/hotel-tentrem.jpg",
        deskripsiSingkat: "Hotel bintang 5 mewah dengan sentuhan budaya Jawa modern dan fasilitas lengkap.",
        deskripsiLengkap: "Salah satu hotel berbintang lima terbaik di Yogyakarta yang menawarkan kamar luas, layanan spa mewah, kolam renang outdoor, serta restoran bintang lima.",
        htm: "Mulai Rp 1.500.000 / malam",
        jam: "Check-in 15.00 | Check-out 12.00",
        alamat: "Jl. P. Mangkubumi No.72A, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.01234567890!2d110.3660000!3d-7.7780000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a582100000000%3A0xabcdef123456789!2sHotel%20Tentrem%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "phoenix-hotel",
        nama: "The Phoenix Hotel Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/phoenix-hotel.jpg",
        deskripsiSingkat: "Hotel klasik bernuansa kolonial vintage di pusat Kota Yogyakarta.",
        deskripsiLengkap: "Hotel warisan sejarah yang memadukan arsitektur kolonial Eropa dan gaya Jawa klasik, berlokasi sangat dekat dengan Tugu Jogja.",
        htm: "Mulai Rp 900.000 / malam",
        jam: "Check-in 14.00 | Check-out 12.00",
        alamat: "Jl. Jend. Sudirman No.9, Cokrodiningratan, Kec. Jetis, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.00500000000!2d110.3670000!3d-7.7820000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583200000000%3A0x987654321fedcba!2sThe%20Phoenix%20Hotel%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "hyatt-regency-yogyakarta",
        nama: "Hyatt Regency Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/hyatt-regency.jpg",
        deskripsiSingkat: "Resor bintang 5 seluas 22 hektar dengan lapangan golf dan nuansa alam.",
        deskripsiLengkap: "Resor mewah bergaya arsitektur candi Candi Borobudur yang dilengkapi dengan lapangan golf 9-hole, kolam renang bertingkat, dan taman tropis yang indah.",
        htm: "Mulai Rp 1.200.000 / malam",
        jam: "Check-in 15.00 | Check-out 12.00",
        alamat: "Jl. Palagan Tentara Pelajar No.KM.7, Sariharjo, Kec. Ngaglik, Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.50000000000!2d110.3700000!3d-7.7300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a590000000000%3A0x123456789!2sHyatt%20Regency%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "melia-purosani",
        nama: "Melia Purosani Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/melia-purosani.jpg",
        deskripsiSingkat: "Hotel resor di pusat kota dekat Malioboro dengan taman tropis dan kolam renang indah.",
        deskripsiLengkap: "Menawarkan kenyamanan bintang lima tepat di jantung kota Jogja. Dilengkapi fasilitas spa Yhi Wellness, restoran internasional, dan kebun hijau oasis.",
        htm: "Mulai Rp 1.100.000 / malam",
        jam: "Check-in 15.00 | Check-out 12.00",
        alamat: "Jl. Mayor Suryotomo No.31, Ngupasan, Kec. Gondomanan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.92000000000!2d110.3680000!3d-7.7980000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578800000000%3A0x123456789!2sMelia%20Purosani!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "royal-ambarrukmo",
        nama: "Royal Ambarrukmo Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/royal-ambarrukmo.jpg",
        deskripsiSingkat: "Hotel bersejarah bintang 5 berdampingan dengan Pendopo Istana Kedhaton Ambarrukmo.",
        deskripsiLengkap: "Memadukan kemewahan fasilitas modern dengan cagar budaya pendopo kerajaan Mataram. Terhubung langsung dengan mall Plaza Ambarrukmo.",
        htm: "Mulai Rp 1.300.000 / malam",
        jam: "Check-in 15.00 | Check-out 12.00",
        alamat: "Jl. Laksda Adisucipto No.81, Ambarukmo, Caturtunggal, Kec. Depok, Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.00000000000!2d110.4000000!3d-7.7820000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f000000000%3A0x123456789!2sRoyal%20Ambarrukmo!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "gaia-cosmo-hotel",
        nama: "GAIA Cosmo Hotel",
        kategori: "hotel",
        gambar: "assets/images/gaia-cosmo.jpg",
        deskripsiSingkat: "Hotel bergaya stylish industrial kekinian favorit para wisatawan muda.",
        deskripsiLengkap: "Hotel urban modern bertema industrial yang ramah lingkungan. Memiliki kafe kedai kopi hits, kamar yang stylish, serta ruang kerja fleksibel.",
        htm: "Mulai Rp 600.000 / malam",
        jam: "Check-in 14.00 | Check-out 12.00",
        alamat: "Jl. Ipda Tut Harsono No.16, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.93000000000!2d110.3900000!3d-7.7950000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a575000000000%3A0x123456789!2sGAIA%20Cosmo%20Hotel!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "greenhost-boutique-hotel",
        nama: "Greenhost Boutique Hotel",
        kategori: "hotel",
        gambar: "assets/images/greenhost.jpg",
        deskripsiSingkat: "Eco-hotel instagramable berkonsep ramah lingkungan di kawasan Prawirotaman.",
        deskripsiLengkap: "Hotel ramah lingkungan bernuansa hijau di daerah Prawirotaman. Terkenal dengan kebun hydroponik di rooftop dan arsitektur unik bertema go-green.",
        htm: "Mulai Rp 550.000 / malam",
        jam: "Check-in 14.00 | Check-out 12.00",
        alamat: "Jl. Prawirotaman 2 No.629, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.84000000000!2d110.3720000!3d-7.8190000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57c800000000%3A0x123456789!2sGreenhost%20Boutique%20Hotel!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "eastparc-hotel",
        nama: "Eastparc Hotel Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/eastparc.jpg",
        deskripsiSingkat: "Hotel staycation keluarga bintang 5 dengan wahana permainan anak melimpah.",
        deskripsiLengkap: "Hotel bernuansa kebun ramah keluarga. Dilengkapi taman bermain anak, kebun binatang mini, kolam renang wahana air, serta area berkuda.",
        htm: "Mulai Rp 950.000 / malam",
        jam: "Check-in 15.00 | Check-out 12.00",
        alamat: "Jl. Laksda Adisucipto KM.6.5, Seturan, Caturtunggal, Kec. Depok, Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.02000000000!2d110.4100000!3d-7.7800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59e000000000%3A0x123456789!2sEastparc%20Hotel!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "grand-mercure-yogyakarta",
        nama: "Grand Mercure Yogyakarta Adisucipto",
        kategori: "hotel",
        gambar: "assets/images/grand-mercure.jpg",
        deskripsiSingkat: "Hotel premium gabungan arsitektur modern dan warisan seni batik Jawa.",
        deskripsiLengkap: "Hotel berbintang empat dengan desain interior elegan yang memadukan corak batik lokal dan gaya modern khas jaringan Accor.",
        htm: "Mulai Rp 800.000 / malam",
        jam: "Check-in 14.00 | Check-out 12.00",
        alamat: "Jl. Laksda Adisucipto No.80, Caturtunggal, Kec. Depok, Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.01000000000!2d110.4020000!3d-7.7810000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59d000000000%3A0x123456789!2sGrand%20Mercure%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "swiss-belhotel-yogyakarta",
        nama: "Swiss-Belhotel Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/swiss-belhotel.jpg",
        deskripsiSingkat: "Hotel modern strategis di dekat kawasan pusat belanja Sudirman.",
        deskripsiLengkap: "Hotel bintang empat dengan lokasi sangat strategis di pusat kota. Menawarkan kolam renang outdoor di rooftop dan pemandangan perkotaan.",
        htm: "Mulai Rp 700.000 / malam",
        jam: "Check-in 14.00 | Check-out 12.00",
        alamat: "Jl. Jend. Sudirman No.69, Terban, Kec. Gondokusuman, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.00800000000!2d110.3730000!3d-7.7820000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583000000000%3A0x123456789!2sSwiss-Belhotel%20Yogyakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "yogyakarta-marriott-hotel",
        nama: "Yogyakarta Marriott Hotel",
        kategori: "hotel",
        gambar: "assets/images/marriott-jogja.jpg",
        deskripsiSingkat: "Hotel bintang 5 bertaraf internasional terhubung langsung dengan Pakuwon Mall.",
        deskripsiLengkap: "Kemewahan bintang lima bertaraf internasional di Yogyakarta dengan kolam renang outdoor terbesar dan akses privat langsung menuju Pakuwon Mall Jogja.",
        htm: "Mulai Rp 1.600.000 / malam",
        jam: "Check-in 15.00 | Check-out 12.00",
        alamat: "Jl. Ring Road Utara, Condongcatur, Kec. Depok, Kabupaten Sleman.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.25000000000!2d110.3950000!3d-7.7580000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599000000000%3A0x123456789!2sYogyakarta%20Marriott%20Hotel!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    },
    {
        id: "yats-colony",
        nama: "Yats Colony Yogyakarta",
        kategori: "hotel",
        gambar: "assets/images/yats-colony.jpg",
        deskripsiSingkat: "Penginapan boutique bertema urban tropical bersuasana tenang dan estetik.",
        deskripsiLengkap: "Boutique hotel populer dengan arsitektur tropis Scandinavian, kolam renang tenang, serta bistro kafe yang sangat disukai wisatawan lokal maupun asing.",
        htm: "Mulai Rp 650.000 / malam",
        jam: "Check-in 14.00 | Check-out 12.00",
        alamat: "Jl. Patangpuluhan No.37, Patangpuluhan, Wirobrajan, Kota Yogyakarta.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.87000000000!2d110.3500000!3d-7.8100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57a000000000%3A0x123456789!2sYats%20Colony!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
    }
];
// 2. FUNGSI UNTUK MENAMPILKAN KARTU KE HTML
function renderKartu(daftarData) {
    const wadah = document.getElementById("wadahKartu");
    if (!wadah) return;

    wadah.innerHTML = ""; // Bersihkan wadah terlebih dahulu

    daftarData.forEach(item => {
        wadah.innerHTML += `
            <div class="kartu">
                <img src="${item.gambar}" alt="${item.nama}">
                <h3>${item.nama}</h3>
                <p>${item.deskripsiSingkat}</p>
                <button onclick="bukaModalDinamis('${item.id}')">Lihat Detail</button>
            </div>
        `;
    });
}

// 3. FUNGSI UNTUK MENGISI & MEMBUKA MODAL DINAMIS
function bukaModalDinamis(idTempat) {
    // Cari data berdasarkan ID tempat yang diklik
    const tempat = dataDestinasi.find(item => item.id === idTempat);
    if (!tempat) return;

    // Isi konten modal dengan data tempat tersebut
    document.getElementById("modalJudul").innerText = tempat.nama;
    document.getElementById("modalGambar").src = tempat.gambar;
    document.getElementById("modalDeskripsi").innerText = tempat.deskripsiLengkap;
    document.getElementById("modalHtm").innerText = tempat.htm;
    document.getElementById("modalJam").innerText = tempat.jam;
    document.getElementById("modalAlamat").innerText = tempat.alamat;
    document.getElementById("modalMaps").src = tempat.maps;

    // Tampilkan modal
    document.getElementById("modalDinamis").style.display = "flex";
}

function tutupModalDinamis() {
    document.getElementById("modalDinamis").style.display = "none";
}

// 4. FUNGSI FILTER KATEGORI
function filterKartu(kategori) {
    if (kategori === "semua") {
        renderKartu(dataDestinasi);
    } else {
        const hasilFilter = dataDestinasi.filter(item => item.kategori === kategori);
        renderKartu(hasilFilter);
    }
}

// JALANKAN SAAT HALAMAN SELESAI DIMUAT
document.addEventListener("DOMContentLoaded", () => {
    renderKartu(dataDestinasi);
});
// fungsi pencarian destinasi
function cariDestinasi() {
    let input = document.getElementById('cariTempat').value.toLowerCase();
    let kartu = document.getElementsByClassName('kartu');

    for (let i = 0; i < kartu.length; i++) {
        let judul = kartu[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (judul.includes(input)) {
            kartu[i].style.display = "block"; // Tampilkan jika cocok
        } else {
            kartu[i].style.display = "none";  // Sembunyikan jika tidak cocok
        }
    }
}

function buatItinerary(event) {
    event.preventDefault(); // Mencegah reload halaman

    const durasi = parseInt(document.getElementById("durasi").value);
    const jumlahOrang = parseInt(document.getElementById("jumlahOrang").value) || 1;
    const fokus = document.getElementById("fokus").value; // Mengambil kategori pilihan (santai/budaya/kuliner)
    const budget = document.getElementById("budget").value;

    const wadahHasil = document.getElementById("hasilItinerary");
    const detailRencana = document.getElementById("detailRencana");

    // DATABASE MASTER JADWAL LENGKAP DENGAN JAM & TEMPAT WISATA TIAP KATEGORI (Mendukung hingga 4 Hari)
    const databaseMaster = {
        santai: {
            1: [
                { waktu: "08:00 - 10:00", tempat: "Sarapan Soto Kadipiro", desc: "Nikmati kuah kaldu ayam legendaris khas Jogja." },
                { waktu: "11:00 - 14:00", tempat: "Pantai Parangtritis", desc: "Menikmati angin sepoi-sepoi dan panorama Samudra Hindia." },
                { waktu: "16:00 - 18:30", tempat: "Sunset Bukit Paralayang Watugupit", desc: "Menyaksikan matahari terbenam dari atas bukit." }
            ],
            2: [
                { waktu: "08:30 - 11:30", tempat: "Merapi Lava Tour Jeep", desc: "Petualangan seru offroad menyusuri sisa erupsi gunung." },
                { waktu: "12:30 - 14:00", tempat: "Makan Siang Kopi Klotok Pakem", desc: "Menyantap sayur lodeh dan pisang goreng legendaris di pedesaan." },
                { waktu: "16:00 - 19:00", tempat: "Nongkrong Malam di Titik Nol Kilometer", desc: "Menikmati suasana malam pusat kota Yogyakarta." }
            ],
            3: [
                { waktu: "09:00 - 11:30", tempat: "Hutan Pinus Mangunan", desc: "Menghirup udara sejuk di tengah barisan pohon pinus asri." },
                { waktu: "13:00 - 15:00", tempat: "Kebun Buah Mangunan", desc: "Spot pemandangan indah Sungai Oya dari atas awan." },
                { waktu: "19:00 - 21:00", tempat: "Ngopi Santai di Kopi Joss Tugu", desc: "Mencicipi kopi arang khas angkringan legendaris Jogja." }
            ],
            4: [
                { waktu: "08:30 - 11:00", teka: "", tempat: "Gua Pindul", desc: "Menyusuri sungai bawah tanah menggunakan ban pelampung (cave tubing)." },
                { waktu: "12:30 - 15:00", tempat: "Pantai Drini / Timang", desc: "Menikmati keindahan pasir putih dan jembatan gantung pantai selatan." },
                { waktu: "19:00 - 21:00", tempat: "Pusat Oleh-Oleh Bakpia Pathok", desc: "Memborong buah tangan khas untuk dibawa pulang." }
            ]
        },
        budaya: {
            1: [
                { waktu: "08:00 - 10:30", tempat: "Keraton Yogyakarta", desc: "Menjelajahi sejarah dan pusat kebudayaan Kesultanan Mataram." },
                { waktu: "11:00 - 13:00", tempat: "Taman Sari Water Castle", desc: "Menengok kompleks pemandian air kuno raja-raja." },
                { waktu: "15:30 - 17:30", tempat: "Candi Prambanan", desc: "Menyaksikan kemegahan candi Hindu terbesar." }
            ],
            2: [
                { waktu: "09:00 - 11:30", tempat: "Museum Sonobudoyo", desc: "Melihat koleksi artefak dan wayang kulit klasik Jawa." },
                { waktu: "13:00 - 15:30", tempat: "Pasar Beringharjo & Malioboro", desc: "Berburu kain batik tradisional dan kerajinan tangan lokal." },
                { waktu: "19:00 - 21:00", tempat: "Sendratari Ramayana Prambanan", desc: "Menonton pertunjukan seni tari kolosal malam hari." }
            ],
            3: [
                { waktu: "08:30 - 11:00", tempat: "Museum Benteng Vredeburg", desc: "Menelusuri diorama perjuangan kemerdekaan RI di nol kilometer." },
                { waktu: "13:00 - 15:00", tempat: "Kampung Wisata Tamansiswa", desc: "Menilik sejarah tempat lahirnya Taman Siswa Ki Hadjar Dewantara." },
                { waktu: "19:00 - 21:00", tempat: "Berswafoto di Ikon Tugu Jogja", desc: "Mengabadikan momen di tugu filosofis paling bersejarah." }
            ],
            4: [
                { waktu: "08:30 - 11:30", tempat: "Monumen Yogya Kembali (Monjali)", desc: "Mengenang sejarah kembalinya ibu kota RI ke Yogyakarta." },
                { waktu: "13:00 - 15:00", template: "", tempat: "Pusat Kerajinan Perak Kotagede", desc: "Melihat langsung proses pembuatan kerajinan perak tradisional." },
                { waktu: "19:00 - 21:00", tempat: "Malam Keakraban Alun-Alun Kidul", desc: "Menjajal tradisi Masangin (berjalan melewati dua pohon beringin)." }
            ]
        },
        kuliner: {
            1: [
                { waktu: "08:00 - 09:30", tempat: "Gudeg Kering Yu Djum Wijilan", desc: "Sarapan menu ikonik manis gurih khas Yogyakarta." },
                { waktu: "12:00 - 13:30", tempat: "Mangut Lele Mbah Marto Bantul", desc: "Menyantap mangut lele legendaris bercita rasa pedas gurih." },
                { waktu: "19:00 - 21:00", tempat: "Lesehan Malam Malioboro", desc: "Menikmati aneka olahan kuliner malam lesehan." }
            ],
            2: [
                { waktu: "07:30 - 09:00", tempat: "Soto Bathok Sambisari", desc: "Sarapan soto unik yang disajikan menggunakan batok kelapa." },
                { waktu: "12:00 - 13:30", tempat: "Sate Klatak Pak Bari Imogiri", desc: "Mencicipi sate kambing empuk bertusuk jeruji besi." },
                { waktu: "19:00 - 21:00", tempat: "Bakmi Jawa Pak Pele / Mpekik", desc: "Menikmati hangatnya bakmi jawa rebus berkaldu ayam kampung." }
            ],
            3: [
                { waktu: "07:00 - 09:00", tempat: "Jajanan Pasar Legendaris Pasar Kranggan", desc: "Mencicipi aneka kue tradisional subuh yang lezat." },
                { waktu: "12:00 - 14:00", tempat: "Oseng-Oseng Mercon Bu Narti", desc: "Tantangan kuliner pedas ekstrem bagi pecinta rasa super pedas." },
                { waktu: "19:00 - 21:00", tempat: "Es Dawet Mbah Hari", desc: "Menikmati kesegaran dawet tradisional di sudut kota." }
            ],
            4: [
                { waktu: "07:30 - 09:00", tempat: "Lupis Mbah Satinem", desc: "Mencicipi jajanan pasar legendaris langganan presiden." },
                { waktu: "12:00 - 14:00", tempat: "Ayam Goreng Bu Tini", desc: "Menikmati ayam goreng kremes gurih khas Jogja." },
                { waktu: "19:00 - 21:00", tempat: "Borong Oleh-Oleh Bakpia & Yangko", desc: "Menyiapkan buah tangan manis untuk keluarga di rumah." }
            ]
        }
    };

    // GENERATE HTML ITINERARY BERDASARKAN KATEGORI & DURASI
    let htmlOutput = "";
    const agendaPilihan = databaseMaster[fokus];

    for (let hari = 1; hari <= durasi; hari++) {
        const daftarKegiatan = agendaPilihan[hari] || [];

        let listAgendaHTML = "";
        daftarKegiatan.forEach(item => {
            listAgendaHTML += `
                <li>
                    <strong>Pukul ${item.waktu}</strong><br>
                    <em>${item.tempat}</em><br>
                    <small style="color: #666; display: block; margin-top: 3px;">${item.desc}</small>
                </li>
            `;
        });

        htmlOutput += `
            <div class="hari-box">
                <h4>Rencana Perjalanan Hari Ke-${hari}</h4>
                <ul>
                    ${listAgendaHTML}
                </ul>
            </div>
        `;
    }

    // KALKULASI BIAYA
    let biayaPerOrangPerHari = 0;
    let teksBudget = "";

    if (budget === "backpacker") {
        biayaPerOrangPerHari = 200000;
        teksBudget = "Backpacker / Hemat";
    } else if (budget === "standar") {
        biayaPerOrangPerHari = 500000;
        teksBudget = "Standar / Nyaman";
    } else {
        biayaPerOrangPerHari = 1000000;
        teksBudget = "Sultan / Mewah";
    }

    const totalEstimasi = biayaPerOrangPerHari * durasi * jumlahOrang;
    const formatRupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(totalEstimasi);

    htmlOutput += `
        <div class="budget-box">
            <p><strong>Jumlah Peserta:</strong> ${jumlahOrang} Orang</p>
            <p><strong>Kategori Budget:</strong> ${teksBudget}</p>
            <p><strong>Durasi Liburan:</strong> ${durasi} Hari</p>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.2); margin: 10px 0;">
            <p style="font-size: 18px; font-weight: bold;">Total Estimasi Biaya Keseluruhan: ${formatRupiah}</p>
        </div>
    `;

    // Tampilkan hasil ke layar
    detailRencana.innerHTML = htmlOutput;
    wadahHasil.style.display = "block";
    wadahHasil.scrollIntoView({ behavior: 'smooth' });
}