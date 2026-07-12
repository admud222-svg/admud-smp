# Admud SMP Website

Full-stack Next.js App Router untuk landing page server Minecraft Bedrock, store rank/shards, lookup gamertag Xbox, checkout WhatsApp, dan ticket chat berbasis PostgreSQL.

## Menjalankan
1. Salin `.env.example` menjadi `.env`.
2. Isi `DATABASE_URL`, `AUTH_SECRET`, akun admin, nomor WhatsApp, dan opsional `OPENXBL_API_KEY`.
3. Jalankan `npm install`.
4. Jalankan `npx prisma db push` lalu `npm run db:seed`.
5. Jalankan `npm run dev`.

## Password admin
Buat hash bcrypt dengan:
`node -e "console.log(require('bcryptjs').hashSync('password-kamu',12))"`
Lalu masukkan hasilnya ke `ADMIN_PASSWORD_HASH`.

## Halaman
- `/` landing page
- `/store` rank & shards
- `/tickets` customer ticket
- `/admin` admin customer service

## Catatan keamanan
Akses admin dilindungi cookie HttpOnly dan validasi backend. Tidak ada cara aman untuk menyembunyikan kode frontend dari DevTools; rahasia wajib disimpan hanya di environment server. Proteksi copy/klik kanan hanya deterrent ringan.
