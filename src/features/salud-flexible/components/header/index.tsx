// Components
import { CircleNumber } from '../../../../shared/components/CircleNumber';

// Icons
import LinerHeader from '../../../../assets/Planes/header/line.svg';
import IconBack from '../../../../assets/Planes/header/Icon-button-back.svg';
import IconBackMobile from '../../../../assets/Planes/header/back-mobile.svg';

// Utils
import { classnames } from '../../../../shared/utils/classnames';

// Styles
import '../../styles/SecurePlan.scss';
import type { HeaderSecurePlanProps } from '../../types/types';

const HeaderSecurePlan: React.FC<HeaderSecurePlanProps> = ({
  handleBackHome,
  currentStep,
}) => {
  return (
    <div className="main-container-header-secure">
      <div className="container-header-secure-desktop">
        <div className="container-steps-header">
          <div className="first-step-header-secure">
            <CircleNumber
              numberDisplay="1"
              containerCircleNumber={
                currentStep === 'selectPlan' ? 'SelecteCircle' : null
              }
              spanCircleNumber={
                currentStep === 'selectPlan' ? 'SelecteCircleSpan' : null
              }
            />
            <span
              className={classnames([
                'span-header-secure',
                currentStep === 'selectPlan' ? 'Selected' : null,
              ])}
            >
              Planes y coberturas
            </span>
          </div>
          <div className="container-img-liner">
            <img src={LinerHeader} alt="headerImgLiner" />
          </div>
          <div className="first-step-header-secure">
            <CircleNumber
              numberDisplay="2"
              containerCircleNumber={
                currentStep === 'summarize' ? 'SelecteCircle' : null
              }
              spanCircleNumber={
                currentStep === 'summarize' ? 'SelecteCircleSpan' : null
              }
            />
            <span
              className={classnames([
                'span-header-secure',
                currentStep === 'summarize' ? 'Selected' : null,
              ])}
            >
              Resumen
            </span>
          </div>
        </div>
        <div className="container-button-back">
          <button
            className="button-back-header-secure"
            onClick={handleBackHome}
          >
            <img src={IconBack} alt="iconBackHeader" />
            <span className="span-back-header-secure">Volver</span>
          </button>
        </div>
      </div>
      <div className="container-header-secure-mobile">
        <button className="button-back-header-secure" onClick={handleBackHome}>
          <img src={IconBackMobile} alt="iconBackHeader" />
        </button>
        <div className="container-steps-mobile">
          <span className="steps-number-mobile">
            {currentStep === 'selectPlan' ? 'PASO 1 DE 2' : 'PASO 2 DE 2'}
          </span>
          <progress value={currentStep === 'selectPlan' ? 0.1 : 1} />
        </div>
      </div>
    </div>
  );
};

export { HeaderSecurePlan };
