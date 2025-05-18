import { useEffect, useState } from 'react';

// Components
import { CardPlanDetails } from '../../../../shared/components/CardPlanDetails';

// Icons
import LeftArrow from '../../../../assets/Planes/cardDetails/left-arrow-circle.svg';
import RigthtArrow from '../../../../assets/Planes/cardDetails/rigth-arrow-circle.svg';

// Styles
import './CarouselCardsCustom.scss';
import type { CarouselCardsCustomProps } from './types';
import type { SecurePlan } from '../../types/types';
import { classnames } from '../../../../shared/utils/classnames';

const CarouselCardsCustom: React.FC<CarouselCardsCustomProps> = ({
  arrayOptions,
  isFully,
  handleSelectPlan,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArray, setCurrentArray] = useState<SecurePlan[]>();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === arrayOptions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arrayOptions.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setCurrentArray(arrayOptions);
    setCurrentIndex(0);
  }, [arrayOptions.length]);

  return (
    <div
      className={classnames([
        'container-control-carousel',
        isFully ? 'FullCarousel' : '',
      ])}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(${-currentIndex * 90}%)` }}
      >
        {currentArray &&
          currentArray.map((plan, index) => (
            <CardPlanDetails
              key={index}
              iconCardName={plan.name}
              costPlan={plan.price}
              planDescription={plan.description}
              selectPlan={() => handleSelectPlan(plan)}
            />
          ))}
      </div>
      {!isFully
        ? currentArray &&
          currentArray.length > 0 && (
            <div className="container-buttons-next-previous">
              <button className="carousel-button left" onClick={prevSlide}>
                <img src={LeftArrow} alt="left-arrow-carousel" />
              </button>
              <span className="span-carousel-pages">
                {currentIndex + 1 + ' / ' + arrayOptions.length}
              </span>
              <button className="carousel-button right" onClick={nextSlide}>
                <img src={RigthtArrow} alt="rigth-arrow-carousel" />
              </button>
            </div>
          )
        : null}
    </div>
  );
};

export { CarouselCardsCustom };
