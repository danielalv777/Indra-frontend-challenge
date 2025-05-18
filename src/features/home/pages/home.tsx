// import React from 'react';

// Hooks
import useHome from '../hooks/useHome';

// Components
import { InputText } from '../../../shared/components/InputText';
import { SelectInput } from '../../../shared/components/SelectInput';
import { CheckBoxCustom } from '../../../shared/components/CheckBoxCustom';
import { Footer } from '../../../shared/components/footer';

// Images
import blurPurpleLeft from '../../../assets/body/blur-asset-purple.svg';
import blurSkyBlueRigth from '../../../assets/body/blur-asset-skyBlue.svg';
import blurPurpleMobileLeft from '../../../assets/body/mobile/blur-asset-mobile-purple.svg'; // mobile
import blurSkyBluelMobileRigth from '../../../assets/body/mobile/blur-asset-mobile-skyBlue.svg'; // mobile
import homeInitialPhoto from '../../../assets/home/home-initial-photo.svg';

// Constants
import {
  documentOptions,
  defaultOption,
  FIELD_USER_PHONE_NUMBER,
  FIELD_USER_DOCUMENT_NUMBER,
  FIELD_PRIVACITY_POLITIC,
  FIELD_COMMUNICATIONS_POLITIC,
} from '../constants/constants';

// Styles
import '../styles/Home.scss';

const Home = () => {
  const {
    formRef,
    errors,
    register,
    handleSubmit,
    submit,
    handleChangeDocumentType,
    isLoading,
    handleChangeCheck,
  } = useHome();

  return (
    <>
      <div className="home">
        <div className="home-container">
          <img
            src={homeInitialPhoto}
            alt="home-initial-photo"
            className="home-initial-photo"
          />
          <div className="container-secondary-title">
            <div className="green-square-secure">
              <span className="span-green-square">Seguro Salud Flexible</span>
            </div>
            <span className="span-secondary-title">
              Creado para ti y tu familia
            </span>
          </div>

          <div className="container-inputs-login">
            <span className="span-info-inputs">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </span>
            <form
              // noValidate
              ref={formRef}
              onSubmit={handleSubmit(submit)}
              className="form-control-container"
            >
              <SelectInput
                options={documentOptions}
                defaultValue={defaultOption}
                onChange={(value) => handleChangeDocumentType(value)}
                customInput={register(FIELD_USER_DOCUMENT_NUMBER)}
                error={errors[FIELD_USER_DOCUMENT_NUMBER]?.message}
              />

              <InputText
                textLabel="Celular"
                containerClassName="input-phone-login"
                customInput={register(FIELD_USER_PHONE_NUMBER)}
                error={errors[FIELD_USER_PHONE_NUMBER]?.message}
              />

              <CheckBoxCustom
                textLabel="Acepto la Política de Privacidad"
                containerCheckboxClassName="checkbox-home"
                onChange={(value) =>
                  handleChangeCheck(value, FIELD_PRIVACITY_POLITIC)
                }
                error={errors[FIELD_PRIVACITY_POLITIC]?.message}
              />

              <CheckBoxCustom
                textLabel="Acepto la Política Comunicaciones Comerciales"
                containerCheckboxClassName="checkbox-home-phone"
                onChange={(value) =>
                  handleChangeCheck(value, FIELD_COMMUNICATIONS_POLITIC)
                }
                error={errors[FIELD_COMMUNICATIONS_POLITIC]?.message}
              />

              <div className="container-terms-home">
                <a href="#" className="a-terms-home">
                  Aplican Términos y Condiciones.
                </a>
              </div>
              <button type="submit" className="button-form-submit">
                {isLoading ? '... Cargando' : 'Cotiza aquí'}
              </button>
            </form>
          </div>
        </div>

        <img
          src={blurPurpleLeft}
          alt="blurPurple"
          className="left-blur-purple"
        />
        <img
          src={blurSkyBlueRigth}
          alt="blurSkyBlue"
          className="rigth-blur-skyBlue"
        />
        <img
          src={blurPurpleMobileLeft}
          alt="blurPurpleMobile"
          className="left-blur-purple-mobile"
        />
        <img
          src={blurSkyBluelMobileRigth}
          alt="blurSkyBlueMobile"
          className="rigth-blur-skyBlue-mobile"
        />
      </div>
      <Footer />
    </>
  );
};

export { Home };
