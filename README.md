# Freerdph GTPS Server

Ini adalah template **Growtopia Private Server (GTPS)** siap deploy di Railway.  
Server sudah mendukung **custom item** melalui file `items.js`.

## Struktur File
- `server.js` : kode server utama
- `items.js`  : daftar item default + custom
- `package.json` : dependency Node.js
- `Procfile` : perintah auto-run Railway
- `README.md` : dokumentasi proyek

## Cara Deploy ke Railway
1. Fork repository ini ke akun GitHub kamu.
2. Masuk ke [Railway](https://railway.app) → **New Project → Deploy from GitHub**.
3. Pilih repository ini.
4. Railway akan otomatis membaca `Procfile` dan menjalankan `server.js`.
5. Tunggu beberapa detik, server akan online.

## Cara Menambah Custom Item
1. Buka `items.js`.
2. Tambahkan object baru di array, contoh:
```js
{ id: 4, name: "SuperBlock", type: "block" }
