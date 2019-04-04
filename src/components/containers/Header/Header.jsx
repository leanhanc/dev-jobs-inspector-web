import React from 'react';
import './Header.css';
import logo from 'assets/img/logo.png';

const Header = () => {
  return (
    <section id="Header">
      <img src={logo} alt="Dev Job Inspector Logo" className="Header__logo" />
    </section>
  );
};

export default Header;
