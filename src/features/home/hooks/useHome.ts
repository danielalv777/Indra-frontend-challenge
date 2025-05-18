/* eslint-disable @typescript-eslint/no-explicit-any */
// Libraries
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

// Hooks
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthLogin } from '../services/useAuthLogin';
import { useUserLoginStore } from '../../../app/store/useUserLoginStore';
// Constants
import {
  DEFAULT_VALUES,
  FIELD_USER_DOCUMENT_NUMBER,
  FIELD_USER_DOCUMENT_TYPE,
  FIELD_USER_PHONE_NUMBER,
} from '../constants/constants';
import schema from '../utils/schema';

export default function useHome() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const authLoginMutation = useAuthLogin();
  const setUserLogin = useUserLoginStore((state) => state.setUserLogin);

  const {
    watch,
    control,
    register,
    setValue,
    trigger,
    reset,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });

  const handleManageUser = () => {
    navigate('/planes');
    clearErrors();
    reset();
  };

  const submit = () => {
    const user = {
      dni: watch(FIELD_USER_DOCUMENT_NUMBER),
      phone: watch(FIELD_USER_PHONE_NUMBER),
    };
    setUserLogin(user);
    authLoginMutation.getUser({
      handleManageUser: handleManageUser,
    });
  };

  const handleChangeCheck = (value: any, field: any) => {
    setValue(field, value);
    trigger(field);
  };

  const handleChangeDocumentType = (type: any) => {
    setValue(FIELD_USER_DOCUMENT_TYPE, type.value);
  };

  return {
    formRef: formRef,
    watch: watch,
    control: control,
    errors: errors,
    register: register,
    handleSubmit: handleSubmit,
    submit: submit,
    handleChangeDocumentType: handleChangeDocumentType,
    isLoading: authLoginMutation.isLoadingLogin,
    handleChangeCheck: handleChangeCheck,
  };
}
