// Utils
import { classnames } from '../../utils/classnames';

// Styles
import './CircleNumber.scss';

interface CircleNumberProps {
  containerCircleNumber: string | null;
  spanCircleNumber: string | null;
  numberDisplay: string;
}

const CircleNumber: React.FC<CircleNumberProps> = ({
  containerCircleNumber,
  spanCircleNumber,
  numberDisplay,
}) => {
  return (
    <div
      className={classnames([
        'main-container-circleNumber',
        containerCircleNumber,
      ])}
    >
      <span className={classnames(['span-circleNumber', spanCircleNumber])}>
        {numberDisplay}
      </span>
    </div>
  );
};

export { CircleNumber };
