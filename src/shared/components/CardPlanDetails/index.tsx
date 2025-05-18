import iconsCard from './iconsCardDetails';

// Styles
import './CardPlanDetails.scss';

interface CardPlanDetailsProps {
  iconCardName: string;
  costPlan: number;
  planDescription: Array<string>;
  selectPlan: () => void;
}

const CardPlanDetails: React.FC<CardPlanDetailsProps> = ({
  iconCardName,
  costPlan,
  planDescription,
  selectPlan,
}) => {
  return (
    <div className="cardDetail-control-container">
      {iconCardName === 'Plan en Casa y Clínica' ||
      iconCardName === 'Plan en Casa + Fitness' ? (
        <div className="green-square-card">
          <span className="span-green-square-card">Plan recomendado</span>
        </div>
      ) : null}

      <div className="container-cardDetail-header">
        <div className="container-detail-card-info">
          <span className="plan-name">{iconCardName}</span>
          <span className="plan-cost-title">COSTO DEL PLAN</span>
          <span className="plan-cost">$ {costPlan} al mes</span>
        </div>
        <img src={iconsCard[iconCardName]} alt="iconCardDetails" />
      </div>
      <div className="container-description-plan">
        {planDescription.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </div>
      <button className="btn-select-plan" onClick={selectPlan}>
        Seleccionar Plan
      </button>
    </div>
  );
};

export { CardPlanDetails };
