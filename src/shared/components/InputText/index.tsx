import { classnames } from '../../utils/classnames';
import './InputText.scss';
import type { InputTextProps } from './types';

export const DEFAULT_TYPE = 'text';

const InputText: React.FC<InputTextProps> = ({
  type = DEFAULT_TYPE,
  textLabel,
  value,
  style,
  className,
  autoFocus,
  placeholder,
  containerStyle,
  containerClassName,
  customInput = {},
  disabled,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  error,
  pattern,
  maxLength,
}) => {
  const numberInputOnWheelPreventChange = (
    e: React.WheelEvent<HTMLInputElement>
  ) => {
    if (e.currentTarget.type === 'number') {
      e.currentTarget.blur();
      e.stopPropagation();
    }
  };

  return (
    <>
      <div
        style={containerStyle}
        className={classnames([
          containerClassName,
          'input-control-container',
          disabled ? 'Disbaled' : null,
          error ? 'error-inputText' : null,
        ])}
      >
        {typeof textLabel === 'string' && textLabel.length > 0 && (
          <span className="span-title-input">{textLabel}</span>
        )}

        <input
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...customInput}
          type={type}
          style={style}
          readOnly={readOnly}
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder}
          pattern={pattern}
          maxLength={maxLength}
          onClick={(e) => e.stopPropagation()}
          autoComplete="new-password"
          onWheel={numberInputOnWheelPreventChange}
          className={classnames([
            className,
            'input-control',
            error ? 'input-has-error' : null,
          ])}
        />
      </div>

      {error && <span className="span-error-input-message">* {error}</span>}
    </>
  );
};

export { InputText };
