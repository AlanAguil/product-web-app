import axiosInstance from '@/api/config/axios.instance';
import type { User } from '../types/entity/user.entity';
import * as userAdapter from '../types/user.adapter';

export const UserService = {

  getProfile: async (): Promise<User> => {
    const { data } = await axiosInstance.get('/users/profile');
    return userAdapter.toDomain(data);
  },

  register: async (user: User): Promise<User> => {
    const payload = userAdapter.toCreateDto(user);
    const { data } = await axiosInstance.post('/users', payload);
    return userAdapter.toDomain(data);
  },

  updateProfile: async (changes: Partial<User>): Promise<User> => {
    const payload = userAdapter.toUpdateDto(changes);
    const { data } = await axiosInstance.put('/users/profile', payload);
    return userAdapter.toDomain(data);
  }
};