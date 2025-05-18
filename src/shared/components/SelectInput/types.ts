/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SelectInputProps {
  selectRef?: React.RefObject<HTMLSelectElement>;
  autoFocus?: boolean;
  selectClassName?: string;
  isDisabled?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange?: (selectedValue: any) => void; // El tipo exacto dependerá del valor que se pase en 'onChange'
  options: Array<Record<string, any>>; // Si tus opciones son objetos, puedes usar Record<string, any>
  placeholder?: string;
  noOptionsMessage?: (obj: { inputValue: string }) => React.ReactNode;
  value?: any; // Aquí también puedes ser más específico si conoces el tipo exacto
  defaultValue?: Record<string, any>; // Tipo para el valor por defecto si es un objeto
  inputValue?: string;
  menuIsOpen?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  customInput?: Record<string, any>; // Si customInput es un objeto genérico
  error?: string;
  style?: React.CSSProperties; // Para estilos en línea
  containerClassName?: string;
  loaderClassName?: string;
  disabled?: boolean;
  isLoading?: boolean;
  textLabel?: string;
}
