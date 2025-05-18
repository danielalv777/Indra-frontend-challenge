import { create } from 'zustand';
import type { UserLogin } from '../../features/salud-flexible/types/types';

type UserLoginStore = {
  userLogin: UserLogin | null;
  setUserLogin: (userLogin: UserLogin) => void;
  clearUserLogin: () => void;
};

export const useUserLoginStore = create<UserLoginStore>((set) => ({
  userLogin: null,
  setUserLogin: (userLogin) => set({ userLogin }),
  clearUserLogin: () => set({ userLogin: null }),
}));
