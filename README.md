# 🕌 Al-Hikmah: Platform Edukasi Islam Gen-Z

> **"Paham Islam Dalam 5 Menit. Sat-set, Valid, dan Penuh Hikmah."**

Al-Hikmah adalah platform pembelajaran web modern yang dirancang khusus untuk **Generasi Z**. Kami mengubah materi sejarah dan wawasan Islam yang biasanya tebal dan berat menjadi konten *bite-sized* (ringkas), interaktif, dan relevan dengan kehidupan masa kini, tanpa mengurangi esensi dan adab terhadap ilmu.

---

## 📖 Pendahuluan

Di era informasi yang serba cepat, perhatian (attention span) menjadi mata uang yang mahal. Metode pembelajaran konvensional seringkali gagal menjangkau generasi muda yang terbiasa dengan konten instan.

**Al-Hikmah** hadir sebagai jembatan. Kami memadukan **teknologi web modern** (React & Animations) dengan **konten Islami yang terverifikasi**, disajikan dengan bahasa yang "membumi" namun tetap syar'i.

---

## 🚀 Mengapa Al-Hikmah Dibuat? (Latar Belakang)

1.  **Masalah:** Banyak generasi muda menganggap Sejarah Islam itu membosankan, kuno, dan hanya berisi hafalan tahun/nama.
2.  **Kebutuhan:** Gen-Z menginginkan informasi yang *to-the-point*, visual yang estetik, dan pengalaman pengguna (UX) yang mulus seperti media sosial.
3.  **Solusi:** Platform ini menyajikan ilmu seperti *storytelling* modern. Kita tidak hanya bicara masa lalu, tapi mengaitkannya dengan teknologi masa depan (AI, Coding, Robotika).

---

## 🎯 Tujuan Platform

1.  **Edukasi yang Menyenangkan:** Menghapus stigma bahwa belajar agama itu kaku dan membosankan.
2.  **Membangun Peradaban:** Bukan sekadar bernostalgia dengan kejayaan masa lalu ("Dulu kita hebat"), tapi memicu semangat untuk berkarya di masa kini.
3.  **Validasi Ilmu:** Menyediakan sumber rujukan yang jelas di tengah banjirnya informasi hoax.
4.  **Adab & Akhlak:** Menanamkan nilai bahwa setinggi apapun ilmu (Sains/Teknologi), harus dilandasi dengan Iman dan Adab.

---

## 💎 Fitur Unggulan

### 1. 📱 Stepper Reading Experience (Mode Baca Slide)
Tidak ada lagi *scrolling* panjang yang melelahkan. Materi disajikan per-slide (Section) dengan animasi transisi yang halus.
* **Fokus:** Satu ide per tampilan.
* **Progress Bar:** Indikator visual seberapa jauh materi yang sudah dibaca.
* **Navigasi:** Tombol "Lanjut" dan "Sebelumnya" yang intuitif.

### 2. 🧠 Kuis Interaktif & Evaluasi
Setiap bab diakhiri dengan kuis untuk menguji pemahaman.
* **Feedback Langsung:** Penjelasan otomatis muncul setelah menjawab (benar/salah).
* **Syarat Lulus:** Pengguna harus mencapai skor tertentu untuk melanjutkan ke tahap sertifikasi.

### 3. 🏆 Sertifikat Digital Otomatis
Bentuk *reward* (gamifikasi) untuk memotivasi pengguna.
* Setelah lulus kuis, pengguna menginput nama.
* Sistem men-generate sertifikat eksklusif dengan nama pengguna, judul materi, dan tanggal.
* Desain responsif siap di-*screenshot* untuk dibagikan ke media sosial (Instagram Story/WhatsApp Status).

### 4. 📚 Konten Terstruktur (Modular JSON)
Seluruh materi disimpan dalam format JSON yang rapi, memungkinkan:
* **Rich Text:** Mendukung format **Tebal**, *Miring*, List, dan Quote.
* **Multimedia:** Integrasi gambar ilustrasi dengan posisi dinamis (kiri/kanan teks).
* **Referensi:** Daftar pustaka/sumber kitab di akhir materi untuk validitas.

### 5. 🔍 Filter Kategori (Pustaka Ilmu)
Pengguna dapat memilah materi berdasarkan topik minat:
* Sejarah
* Adab
* Sains
* Dan lain-lain.

---

## 🎨 Gaya Bahasa & Pendekatan Konten

Kami menggunakan pendekatan **"Gen-Z tapi Beradab"**:

* **Relatable:** Menggunakan analogi modern.
    * *Contoh:* Menyebut Bayt al-Hikmah sebagai "Silicon Valley-nya Baghdad".
    * *Contoh:* Menyebut Al-Khawarizmi sebagai "Bapak Koding/Algoritma".
* **Sopan & Syar'i:**
    * Tidak menggunakan kata ganti kasar (lo/gue).
    * Menghindari istilah yang berpotensi syirik (misal: mengganti "Semesta mendukung" dengan "Atas izin Allah").
    * Menggunakan istilah penghormatan (Rahimahullah, Radhiyallahu 'anhu).
* **Visual:** Layout bersih (Clean Cream Theme), tipografi modern (Serif + Sans Serif), dan tidak kaku (grid kotak-kotak dihindari pada landing page agar lebih mengalir).

---

## 🛠️ Teknologi (Tech Stack)

Project ini dibangun dengan *stack* modern untuk performa maksimal:

* **Core:** [React](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) (Untuk transisi slide, fade effect, dan interaksi button).
* **Icons:** [Lucide React](https://lucide.dev/).
* **Data Management:** JSON Based Content (Tanpa database backend, sangat cepat dan mudah di-deploy).

---

## 📂 Struktur Proyek

```text
src/
├── components/
│   ├── features/       # Komponen Logika Utama (Reader, Quiz, Certificate)
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Komponen Visual (FadeContent, MagnetButton)
├── data/
│   ├── json/           # File materi per bab (chapter-1.json, dll)
│   └── chapters.js     # Aggregator data
├── pages/              # Halaman Utama (LandingPage, ChapterList)
└── lib/                # Utilities (Tailwind merge, formatting)
