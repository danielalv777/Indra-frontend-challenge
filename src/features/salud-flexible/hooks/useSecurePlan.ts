// Hooks
import { useCallback, useState } from 'react';
import { useGetPlans } from '../services/useGetPlans';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../app/store/useUserStore';
import { useUserLoginStore } from '../../../app/store/useUserLoginStore';
import type { SecurePlan } from '../types/types';

export default function useSecurePlan() {
  const getPlansMutation = useGetPlans();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const userLogin = useUserLoginStore((state) => state.userLogin);

  const [currentView, setCurrentView] = useState('selectPlan');
  const [planSelected, setPlanSelected] = useState<SecurePlan>();
  const [isSelectedOption1, setSelectedOption1] = useState(false);
  const [isSelectedOption2, setSelectedOption2] = useState(false);
  const [plansArray, setPlansArray] = useState<SecurePlan[]>();

  const handleChangeCardOption = useCallback(
    (value: string) => {
      if (value === 'option1') {
        setSelectedOption1(!isSelectedOption1);
        setSelectedOption2(false);
        getPlansMutation.getPlans({
          option: 'option1',
          ageUser: user?.birthDay,
          setPlansArray: setPlansArray,
        });
      }
      if (value === 'option2') {
        setSelectedOption2(!isSelectedOption2);
        setSelectedOption1(false);
        getPlansMutation.getPlans({
          option: 'option2',
          setPlansArray: setPlansArray,
        });
      }
    },
    [isSelectedOption1, isSelectedOption2]
  );

  const handleSelectPlan = (plan: SecurePlan) => {
    setCurrentView('summarize');
    setPlanSelected(plan);
  };

  const handleBackPlan = () => {
    if (currentView === 'selectPlan') {
      navigate('/');
    } else {
      setCurrentView('selectPlan');
    }
  };

  return {
    user,
    userLogin,
    isSelectedOption1,
    isSelectedOption2,
    handleChangeCardOption,
    plansArray,
    currentView,
    handleSelectPlan,
    planSelected,
    handleBackPlan,
  };
}
