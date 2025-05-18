// src/features/securePlan/pages/ResumePlan.test.tsx
import { render, screen } from '@testing-library/react';
import { ResumePlan } from '../pages/resumePlan';

describe('ResumePlan', () => {
  const mockProps = {
    userName: 'Juan',
    userLastName: 'Pérez',
    userLogin: {
      dni: '12345678',
      phone: '987654321',
    },
    planSelected: {
      name: 'Plan Premium',
      price: 150,
      description: 'Cobertura completa',
    },
  };

  it('debe renderizar el resumen del seguro con los datos del usuario y plan', () => {
    render(<ResumePlan {...mockProps} />);

    // Título general
    expect(screen.getByText('Resumen del seguro')).toBeInTheDocument();

    // Nombre completo
    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();

    // Datos de pago
    expect(screen.getByText('DNI: 12345678')).toBeInTheDocument();
    expect(screen.getByText('Celular: 987654321')).toBeInTheDocument();

    // Plan seleccionado
    expect(screen.getByText('Plan Premium')).toBeInTheDocument();
    expect(screen.getByText('$150 al mes')).toBeInTheDocument();
  });
});
