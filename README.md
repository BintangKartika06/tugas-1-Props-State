# Aplikasi Pemesanan Kafe Kucing

Tugas Pertemuan 4 – **Props & State** (React Native + Expo)

**Nama:** I Made Bintang Kartika Yasa
**NIM:** 240040054

## Deskripsi

Aplikasi sederhana untuk memesan menu di Kafe Kucing. Pengguna menekan tombol **"Tambah Pesanan"** pada setiap menu, lalu jumlah pesanan per item dan total pesanan bertambah. Jika total pesanan mencapai **5 item atau lebih**, muncul promo **Diskon 10%**.

Konsep yang digunakan:
- **Props** untuk mengirim data (nama, harga, total) dan callback function dari parent ke child.
- **State**, yaitu `qty` (state lokal di `MenuItem`) dan `totalPesanan` (di `App`, memakai lifting state up).
- **Conditional rendering** untuk menampilkan label promo.

## Struktur Folder

```
├── App.js                  # Parent: menyimpan totalPesanan & daftar menu
└── components/
    ├── MenuItem.js         # Child: kartu menu + state qty
    └── OrderSummary.js     # Child: total pesanan + label promo
```

## Persyaratan

- [Node.js](https://nodejs.org/) versi LTS
- Git
- Salah satu dari:
  - Aplikasi **Expo Go** di HP (Android/iOS)
  - **Android Studio** (emulator)
  - Browser (versi web)

##  Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/BintangKartika06/tugas-1-Props-State.git
   cd tugas-1-Props-State
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**
   ```bash
   npx expo start
   ```

4. **Pilih cara membuka aplikasi**
   - **HP:** scan QR code di terminal dengan aplikasi Expo Go (HP dan laptop harus memakai Wi-Fi yang sama).
   - **Emulator Android:** tekan `a` di terminal.
   - **Web:** tekan `w` di terminal.

> Jika versi web tidak berjalan, jalankan:
> ```bash
> npx expo install react-dom react-native-web @expo/metro-runtime
> ```

## Cara Menguji

1. Tekan **"Tambah Pesanan"** pada salah satu menu. Angka **"Dipesan"** pada kartu itu bertambah.
2. **"Total Item Dipesan"** di bagian atas juga ikut bertambah.
3. Tambahkan pesanan hingga total **5 atau lebih**, lalu label **"🎉 Selamat! Anda Mendapatkan Diskon 10%"** akan muncul.
