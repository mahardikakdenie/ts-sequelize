# User API

API ini menyediakan berbagai endpoint untuk mengelola data pengguna. Setiap endpoint dapat diakses melalui URL dasar `/api/users`.

## Daftar Endpoint

### 1. **GET** `/api/users`

- **Deskripsi**: Mengambil semua pengguna yang ada di database.
- **Method**: `GET`
- **Request Parameters**: Tidak ada.
- **Response**:
  - **200 OK**: Mengembalikan array dari semua pengguna.
  - **500 Internal Server Error**: Jika ada kesalahan di server.

#### Contoh Curl
```bash
curl -X GET http://localhost:3000/api/users
