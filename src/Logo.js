import React from 'react';
import gifLogo from './public/logogif.gif';
import './Logo.css';

function Logo() {
  return (
    <div className="Logo">
      <img src={gifLogo} alt="logo" />
    </div>
  );
}

export default Logo;
