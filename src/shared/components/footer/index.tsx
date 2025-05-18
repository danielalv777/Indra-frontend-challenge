// import React from 'react';

// Icons
import RimacLogo from '../../../assets/footer/rimacLogoWhite.svg';
import RimacLogoMobile from '../../../assets/footer/rimacLogoWhiteMobile.svg';

// Styles
import './Footer.scss';

const Footer = () => {
  return (
    <div className="main-container-footer">
      <img src={RimacLogo} alt="rimac-logo-footer" className="icon-footer" />
      <img
        src={RimacLogoMobile}
        alt="rimac-logo-mobile-footer"
        className="icon-footer-mobile"
      />
      <span className="span-footer">© 2024 RIMAC Seguros y Reaseguros.</span>
    </div>
  );
};

export { Footer };
