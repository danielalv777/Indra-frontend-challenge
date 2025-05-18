export interface InputTextProps {
  type?: string;
  style?: React.CSSProperties;
  textLabel?: string;
  className?: string;
  customInput?: React.InputHTMLAttributes<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  pattern?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  error?: string;
}
