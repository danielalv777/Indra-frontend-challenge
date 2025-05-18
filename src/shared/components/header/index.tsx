// Icons
import RimacLogo from '../../../assets/header/rimacLogo.svg';
import HeaderCall from '../../../assets/header/headerCall.svg';

// Styles
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <nav>
        <div>
          <img src={RimacLogo} alt="rimac-logo" />
        </div>
        <div className="container-call-info">
          <span className="span-header">¡Compra por este medio!</span>
          <img src={HeaderCall} alt="header-call" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
