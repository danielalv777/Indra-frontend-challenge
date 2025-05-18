// Librarys
import * as yup from 'yup';

import {
  FIELD_USER_DOCUMENT_TYPE,
  FIELD_USER_DOCUMENT_NUMBER,
  FIELD_USER_PHONE_NUMBER,
  FIELD_PRIVACITY_POLITIC,
  FIELD_COMMUNICATIONS_POLITIC,
} from '../constants/constants';

const schema = yup.object().shape({
  [FIELD_USER_DOCUMENT_TYPE]: yup
    .string()
    .required('El tipo de documento es obligatorio'),
  [FIELD_USER_DOCUMENT_NUMBER]: yup
    .string()
    .required('El número de documento es obligatorio')
    .when('documentType', {
      is: 'dni',
      then: (schema) =>
        schema
          .matches(/^[0-9]+$/, 'El DNI solo debe contener dígitos')
          .max(8, 'El DNI debe tener 8 dígitos'),
    })
    .when('documentType', {
      is: 'ruc',
      then: (schema) =>
        schema
          .matches(/^[0-9]+$/, 'El RUC solo debe contener dígitos')
          .length(11, 'El RUC debe tener 11 dígitos'),
    }),
  [FIELD_USER_PHONE_NUMBER]: yup
    .string()
    .required('El número telefónico es obligatorio')
    .matches(
      /^[0-9]{9,10}$/,
      'El número telefónico debe tener 9 o 10 dígitos y solo contener números'
    )
    .min(9, 'El número telefónico debe tener al menos 9 dígitos')
    .max(10, 'El número telefónico no debe exceder los 10 dígitos'),
  [FIELD_PRIVACITY_POLITIC]: yup
    .boolean()
    .oneOf([true], 'Debes aceptar la Política de Privacidad')
    .required('Este campo es obligatorio'),
  [FIELD_COMMUNICATIONS_POLITIC]: yup
    .boolean()
    .oneOf([true], 'Debes aceptar la Política de Comunicaciones Comerciales')
    .required('Este campo es obligatorio'),
});
export default schema;
