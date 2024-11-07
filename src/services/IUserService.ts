// src/services/IUserService.ts
import User from '../models/User';
import { UserCreationAttributes } from '../models/User';

export interface IUserService {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
  createUser(user: UserCreationAttributes): Promise<User>;
  updateUser(id: number, user: Partial<User>): Promise<User | null>;
  deleteUser(id: number): Promise<boolean>;
}
