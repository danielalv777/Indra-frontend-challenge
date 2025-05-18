// Hooks
import useSecurePlan from '../hooks/useSecurePlan';

// Components
import { HeaderSecurePlan } from '../components/header';
import { CardOption } from '../../../shared/components/CardOption';
import { CardPlanDetails } from '../../../shared/components/CardPlanDetails';
import { CarouselCardsCustom } from '../components/CarouselCardsCustom';
import { ResumePlan } from './resumePlan';

// Styles
import '../styles/SecurePlan.scss';
import type { SecurePlan } from '../types/types';

const SecurePlans = () => {
  const {
    user,
    userLogin,
    handleChangeCardOption,
    isSelectedOption1,
    isSelectedOption2,
    plansArray,
    currentView,
    handleSelectPlan,
    planSelected,
    handleBackPlan,
  } = useSecurePlan();

  return (
    <div className="main-container-secure-plans">
      <HeaderSecurePlan
        currentStep={currentView}
        handleBackHome={handleBackPlan}
      />
      {currentView === 'selectPlan' && (
        <div className="container-body-secure">
          <div className="container-span-user">
            <span className="span-user-title">
              {user?.name} ¿Para quién deseas cotizar?
            </span>
            <span className="span-user-description">
              Selecciona la opción que se ajuste más a tus necesidades.
            </span>
          </div>

          <div className="container-card-options">
            <CardOption
              onChange={() => handleChangeCardOption('option1')}
              isSelected={isSelectedOption1}
              iconCard={1}
              iconTitleInfo="Para mi"
              iconDescriptionInfo="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            />

            <CardOption
              containerCardOption="card-option-specified"
              onChange={() => handleChangeCardOption('option2')}
              isSelected={isSelectedOption2}
              iconCard={2}
              iconTitleInfo="Para alguien más"
              iconDescriptionInfo="Realiza una cotización para uno de tus familiares o cualquier persona."
            />
          </div>

          {plansArray && plansArray?.length > 0 ? (
            <div className="containers-plans-details-desktop">
              {plansArray.length > 2 ? (
                <CarouselCardsCustom
                  arrayOptions={plansArray ?? []}
                  isFully={true}
                  handleSelectPlan={handleSelectPlan}
                />
              ) : (
                plansArray.map((plan: SecurePlan, index: number) => (
                  <CardPlanDetails
                    key={index}
                    iconCardName={plan.name}
                    costPlan={plan.price}
                    planDescription={plan.description}
                    selectPlan={() => handleSelectPlan(plan)}
                  />
                ))
              )}
            </div>
          ) : null}

          <div className="containers-plans-details-mobile">
            <CarouselCardsCustom
              arrayOptions={plansArray ?? []}
              handleSelectPlan={handleSelectPlan}
            />
          </div>
        </div>
      )}
      {currentView === 'summarize' && (
        <div className="container-body-secure">
          <ResumePlan
            userName={user?.name}
            userLastName={user?.lastName}
            userLogin={userLogin}
            planSelected={planSelected}
          />
        </div>
      )}
    </div>
  );
};

export { SecurePlans };
