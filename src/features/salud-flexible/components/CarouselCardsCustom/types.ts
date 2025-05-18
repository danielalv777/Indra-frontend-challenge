import type { SecurePlan } from '../../types/types';

export interface CarouselCardsCustomProps {
  arrayOptions: Array<SecurePlan>;
  isFully?: boolean;
  handleSelectPlan: (selectedValue: SecurePlan) => void;
}
