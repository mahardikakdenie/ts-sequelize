// src/routes/user.routes.ts
import { Router } from 'express';
import {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from '../controller/user.controller';

const router = Router();

// Route untuk mendapatkan semua pengguna
router.get('/', getAllUsersController);

// Route untuk mendapatkan pengguna berdasarkan ID
router.get('/:id', getUserByIdController);

// Route untuk membuat pengguna baru (validasi di dalam controller)
router.post('/', createUserController);

// Route untuk memperbarui pengguna
router.put('/:id', updateUserController);

// Route untuk menghapus pengguna
router.delete('/:id', deleteUserController);

export default router;
