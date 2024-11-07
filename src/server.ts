// src/server.ts
import app from './app';
import sequelize from './config/database';
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Koneksi ke database berhasil.');
    await sequelize.sync({ alter: true }); // Gunakan { force: true } untuk drop dan buat ulang tabel

    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Tidak dapat terhubung ke database:', error);
    process.exit(1);
  }
};

startServer();
