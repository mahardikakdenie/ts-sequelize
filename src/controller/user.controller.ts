// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import {
  getAllUsers,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
} from '../services/user.service';
import { UserCreationAttributes } from '../models/User';
import { validationResult } from 'express-validator';

// Mendapatkan semua pengguna
export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json(users);
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
export const createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    // Periksa hasil validasi
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { name, email } = req.body;
    const newUser: UserCreationAttributes = { name, email };
    const createdUser = await createUserService(newUser);
    res.status(201).json(createdUser);
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
