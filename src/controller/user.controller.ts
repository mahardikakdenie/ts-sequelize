// src/controllers/user.controller.ts
import { Request, RequestHandler, response, Response } from 'express';
import { body, validationResult } from 'express-validator';
import {
  getAllUsers,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
} from '../services/user.service';
import { UserCreationAttributes } from '../models/User';
import Json, { successResponse } from 'helper-transformer';

// Mendapatkan semua pengguna
export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json({
      meta: {
        status: 200,
        message: 'success'
      },
      data: users,
    });
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pengguna.' });
  }
};

// Mendapatkan pengguna berdasarkan ID
export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await getUserByIdService(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pengguna.' });
  }
};

// Membuat pengguna baru
export const createUserController: RequestHandler = async (req: Request, res: Response) => {
  // Definisikan validasi
  await Promise.all([
    body('name').notEmpty().withMessage('Nama diperlukan').run(req),
    body('email').isEmail().withMessage('Email tidak valid').run(req),
  ]);

  // Periksa hasil validasi
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // Ambil data dari body
  const { name, email } = req.body;

  try {
    // Panggil service untuk membuat pengguna baru
    const newUser = await createUserService({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Gagal membuat pengguna.' });
  }
};
// Memperbarui pengguna
export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    // Periksa hasil validasi
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const id = parseInt(req.params.id, 10);
    const { name, email } = req.body;
    const updatedUser = await updateUserService(id, { name, email });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Gagal memperbarui pengguna.' });
  }
};

// Menghapus pengguna
export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const isDeleted = await deleteUserService(id);
    if (isDeleted) {
      res.json({ message: 'Pengguna berhasil dihapus.' });
    } else {
      res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Gagal menghapus pengguna.' });
  }
};
