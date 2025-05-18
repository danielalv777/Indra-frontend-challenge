export interface UserLogin {
  dni: string;
  phone: string;
}

export interface User {
  birthDay: string;
  lastName: string;
  name: string;
}

interface planSelected {
  name: string;
  price: number;
}

export interface ResumePlanProps {
  userName?: string;
  userLastName?: string;
  userLogin?: UserLogin | null;
  planSelected?: planSelected;
}

export interface HeaderSecurePlanProps {
  handleBackHome: () => void;
  currentStep: string;
}

export interface SecurePlan {
  name: string;
  price: number;
  description: Array<string>;
  age: number;
}

export interface VariablesMutation {
  option: string;
  ageUser?: string;
  setPlansArray: (result: SecurePlan[]) => void;
}
