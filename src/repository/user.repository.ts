// src/repositories/user.repository.ts
import User, { UserCreationAttributes } from '../models/User';

// Mengambil semua pengguna
export const findAllUsers = async (): Promise<User[]> => {
  return await User.findAll();
};

// Mengambil pengguna berdasarkan ID
export const findUserById = async (id: number): Promise<User | null> => {
  return await User.findByPk(id);
};

// Membuat pengguna baru
export const createUser = async (user: UserCreationAttributes): Promise<User> => {
  return await User.create(user);
};

// Memperbarui pengguna
export const updateUser = async (id: number, user: Partial<User>): Promise<User | null> => {
  const existingUser = await User.findByPk(id);
  if (!existingUser) {
    return null;
  }
  await existingUser.update(user);
  return existingUser;
};

// Menghapus pengguna
export const deleteUser = async (id: number): Promise<boolean> => {
  const user = await User.findByPk(id);
  if (!user) {
    return false;
  }
  await user.destroy();
  return true;
};
