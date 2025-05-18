// hooks/useAuthToken.js
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getPlans } from './getPlans';
import type { SecurePlan, VariablesMutation } from '../types/types';
import { getAgeFromBirthdate } from '../../../shared/utils/getAgeFromBirthdate';

const GET_PLANS = 'getPlans';

export const useGetPlans = () => {
  const handleSuccess = useCallback(
    async (data: SecurePlan[], variables: VariablesMutation) => {
      const { option, ageUser, setPlansArray } = variables;
      if (option === 'option1' && ageUser) {
        const currentAge = getAgeFromBirthdate(ageUser);
        const result = data.filter((item) => item.age <= currentAge);
        setPlansArray(result);
      } else {
        const result = data;
        setPlansArray(result);
      }
    },
    []
  );

  const {
    mutate: geUserPlans,
    isPending,
    isError,
    error,
  } = useMutation({
    onSuccess: handleSuccess,
    mutationKey: [GET_PLANS],
    mutationFn: getPlans,
  });

  return {
    isLoadingPlans: isPending,
    isErrorGetPlans: isError,
    errorGetPlans: error,
    getPlans: geUserPlans,
  };
};
