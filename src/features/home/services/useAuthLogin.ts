// hooks/useAuthToken.js
import { useMutation } from '@tanstack/react-query';
import { authLogin } from './authLogin';
import { useUserStore } from '../../../app/store/useUserStore';
import type { User } from '../../salud-flexible/types/types';

const INIT_LOGIN = 'initLogin';

interface VariablesProps {
  handleManageUser: (data: User) => void;
}

export const useAuthLogin = () => {
  const setUser = useUserStore((state) => state.setUser);

  const handleSuccess = async (data: User, variables: VariablesProps) => {
    const { handleManageUser } = variables;
    setUser(data);
    handleManageUser?.(data);
  };

  const {
    mutate: getUserAuth,
    isPending,
    isError,
    error,
  } = useMutation({
    onSuccess: handleSuccess,
    mutationKey: [INIT_LOGIN],
    mutationFn: authLogin,
  });

  return {
    isLoadingLogin: isPending,
    isErrorLogin: isError,
    errorLogin: error,
    getUser: getUserAuth,
  };
};
