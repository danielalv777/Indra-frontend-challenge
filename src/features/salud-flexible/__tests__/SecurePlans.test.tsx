/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/securePlan/pages/SecurePlans.test.tsx
import { render, screen } from '@testing-library/react';
import { SecurePlans } from '../pages/securePlans';

// Mock del hook
jest.mock('../hooks/useSecurePlan', () => () => ({
  user: { name: 'Juan', lastName: 'Pérez' },
  userLogin: { documentNumber: '12345678', phoneNumber: '987654321' },
  handleChangeCardOption: jest.fn(),
  isSelectedOption1: true,
  isSelectedOption2: false,
  plansArray: [
    { name: 'Plan Básico', price: 100, description: 'Cobertura básica' },
    { name: 'Plan Premium', price: 200, description: 'Cobertura completa' },
  ],
  currentView: 'selectPlan',
  handleSelectPlan: jest.fn(),
  planSelected: {
    name: 'Plan Básico',
    price: 100,
    description: 'Cobertura básica',
  },
  handleBackPlan: jest.fn(),
}));

jest.mock('../../../shared/components/CardOption', () => ({
  CardOption: () => <div>Para mi</div>,
}));

jest.mock('../../../shared/components/CardPlanDetails', () => ({
  CardPlanDetails: ({ iconCardName }: any) => <div>{iconCardName}</div>,
}));

jest.mock('../components/CarouselCardsCustom', () => ({
  CarouselCardsCustom: () => <div>CarouselCardsMock</div>,
}));

jest.mock('../components/header', () => ({
  HeaderSecurePlan: () => <header>HeaderSecurePlanMock</header>,
}));

jest.mock('../pages/resumePlan', () => ({
  ResumePlan: () => <div>ResumePlanMock</div>,
}));

describe('SecurePlans Component', () => {
  it('debe renderizar el título con el nombre del usuario', () => {
    render(<SecurePlans />);
    expect(
      screen.getByText('Juan ¿Para quién deseas cotizar?')
    ).toBeInTheDocument();
  });

  it('debe renderizar las opciones de plan', () => {
    render(<SecurePlans />);
    const opciones = screen.getAllByText('Para mi');
    expect(opciones.length).toBeGreaterThan(0);
  });

  it('debe renderizar los detalles de los planes cuando hay planes', () => {
    render(<SecurePlans />);
    expect(screen.getByText('Plan Básico')).toBeInTheDocument();
    expect(screen.getByText('Plan Premium')).toBeInTheDocument();
  });

  it('debe renderizar el resumen del plan cuando currentView es "summarize"', () => {
    jest.mock('../hooks/useSecurePlan', () => () => ({
      user: { name: 'Juan', lastName: 'Pérez' },
      userLogin: { documentNumber: '12345678', phoneNumber: '987654321' },
      handleChangeCardOption: jest.fn(),
      isSelectedOption1: true,
      isSelectedOption2: false,
      plansArray: [],
      currentView: 'summarize',
      handleSelectPlan: jest.fn(),
      planSelected: {
        name: 'Plan Básico',
        price: 100,
        description: 'Cobertura básica',
      },
      handleBackPlan: jest.fn(),
    }));

    render(<SecurePlans />);
    expect(screen.getByText('Plan Básico')).toBeInTheDocument();
  });
});
