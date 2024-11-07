// src/routes/user.routes.ts
import { Router } from 'express';
import {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from '../controller/user.controller';
import { body } from 'express-validator';

const router = Router();

// Rute untuk mendapatkan semua pengguna
router.get('/', getAllUsersController);

// Rute untuk mendapatkan pengguna berdasarkan ID
router.get('/:id', getUserByIdController);

// Rute untuk membuat pengguna baru dengan validasi
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Nama diperlukan'),
    body('email').isEmail().withMessage('Email tidak valid'),
  ],
  createUserController
);

// Rute untuk memperbarui pengguna dengan validasi
router.put(
  '/:id',
  [
    body('name').optional().notEmpty().withMessage('Nama tidak boleh kosong'),
    body('email').optional().isEmail().withMessage('Email tidak valid'),
  ],
  updateUserController
);

// Rute untuk menghapus pengguna
router.delete('/:id', deleteUserController);

export default router;
