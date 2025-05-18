export const documentOptions = [
  { label: 'DNI', value: 'dni' },
  { label: 'RUC', value: 'ruc' },
];

export const defaultOption = { value: 'dni', label: 'DNI' };

export const FIELD_CURRENT_VIEW = 'currentView';

export const FIELD_USER_DOCUMENT_TYPE = 'userDocumentType';
export const FIELD_USER_DOCUMENT_NUMBER = 'userDocumentNumber';
export const FIELD_USER_PHONE_NUMBER = 'userPhoneNumber';
export const FIELD_PRIVACITY_POLITIC = 'privacityPolitic';
export const FIELD_COMMUNICATIONS_POLITIC = 'communicationsPolitic';

export const DEFAULT_VALUES = {
  [FIELD_USER_DOCUMENT_TYPE]: 'dni',
  [FIELD_USER_DOCUMENT_NUMBER]: '',
  [FIELD_USER_PHONE_NUMBER]: '',
  [FIELD_PRIVACITY_POLITIC]: false,
  [FIELD_COMMUNICATIONS_POLITIC]: false,
};
