// src/services/user.service.ts
import { findAllUsers, findUserById, createUser, updateUser, deleteUser } from '../repository/user.repository';
import User, { UserCreationAttributes } from '../models/User';

// Mengambil semua pengguna
export const getAllUsers = async (): Promise<User[]> => {
  return await findAllUsers();
};

// Mengambil pengguna berdasarkan ID
export const getUserByIdService = async (id: number): Promise<User | null> => {
  return await findUserById(id);
};

// Membuat pengguna baru
export const createUserService = async (user: UserCreationAttributes): Promise<User> => {
  // Logika bisnis tambahan bisa ditambahkan di sini
  return await createUser(user);
};

// Memperbarui pengguna
export const updateUserService = async (id: number, user: Partial<User>): Promise<User | null> => {
  // Logika bisnis tambahan bisa ditambahkan di sini
  return await updateUser(id, user);
};

// Menghapus pengguna
export const deleteUserService = async (id: number): Promise<boolean> => {
  // Logika bisnis tambahan bisa ditambahkan di sini
  return await deleteUser(id);
};
