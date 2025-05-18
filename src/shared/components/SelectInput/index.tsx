import React, { useState } from 'react';
import Select from 'react-select';
import { InputText } from '../InputText';
import { classnames } from '../../utils/classnames';
import type { StylesConfig } from 'react-select';

// Styles
import './SelectInput.scss';
import type { SelectInputProps } from './types';

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      border: 'none',
    },
    height: '40px',
    width: '100%',
  }),
  input: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '4px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const SelectInput: React.FC<SelectInputProps> = ({
  autoFocus,
  selectClassName,
  isDisabled,
  isMulti, // allow users select multiple options
  isSearchable,
  onChange,
  options,
  placeholder,
  noOptionsMessage, // Text to display when there are no options
  value, // Control the current value
  defaultValue,
  inputValue,
  menuIsOpen, // control whether the menu is open
  onFocus,
  onBlur,
  customInput,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (selectedOption: string) => {
    if (onChange) {
      onChange(selectedOption);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="selectInput-control-container">
        <Select
          autoFocus={autoFocus}
          className={classnames([
            selectClassName,
            'select-container',
            error ? 'errorSelect' : null,
          ])}
          styles={customStyles}
          isDisabled={isDisabled}
          isMulti={isMulti}
          isSearchable={isSearchable}
          onChange={handleChange}
          options={options}
          placeholder={placeholder}
          noOptionsMessage={noOptionsMessage}
          value={value}
          defaultValue={defaultValue}
          inputValue={inputValue}
          menuIsOpen={isOpen || menuIsOpen}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <InputText
          textLabel="Nro. de documento"
          containerClassName={classnames([
            'container-input-document',
            error ? 'errorInput' : null,
          ])}
          customInput={customInput}
        />
      </div>
      {error && <span className="error-message-selectInput">* {error}</span>}
    </>
  );
};

export { SelectInput };
