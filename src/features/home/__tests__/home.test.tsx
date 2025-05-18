/* eslint-disable @typescript-eslint/no-explicit-any */
// Home.test.tsx
import { render, screen } from '@testing-library/react';
import { Home } from '../pages/home';

// Mocks
jest.mock('../hooks/useHome', () => () => ({
  formRef: { current: null },
  errors: {},
  register: () => jest.fn(),
  handleSubmit: (cb: any) => (e: any) => cb(e),
  submit: jest.fn(),
  handleChangeDocumentType: jest.fn(),
  isLoading: false,
  handleChangeCheck: jest.fn(),
}));

// Home.test.tsx o en un archivo __mocks__/ (opcional)
jest.mock('../../../shared/components/InputText', () => ({
  InputText: () => <input data-testid="mock-input-text" />,
}));

jest.mock('../../../shared/components/SelectInput', () => ({
  SelectInput: () => <select data-testid="mock-select-input" />,
}));

jest.mock('../../../shared/components/CheckBoxCustom', () => ({
  CheckBoxCustom: () => <input type="checkbox" data-testid="mock-checkbox" />,
}));

jest.mock('../../../shared/components/footer', () => ({
  Footer: () => <footer data-testid="mock-footer" />,
}));

describe('Home Page', () => {
  it('debería renderizar correctamente', () => {
    render(<Home />);
    expect(screen.getByText('Seguro Salud Flexible')).toBeInTheDocument();
    expect(screen.getByText('Creado para ti y tu familia')).toBeInTheDocument();
    expect(screen.getByText('Cotiza aquí')).toBeInTheDocument();
  });
});
