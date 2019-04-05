import React from 'react';
import HeaderSearch from './HeaderSearch';
import './Header.css';
import logo from 'assets/img/logo.png';
import { autocompleteSuggestions } from '../../../constants/';

const searchHandler = e => {
  e.preventDefault();
};
const Header = () => {
  return (
    <section id="Header">
      <img src={logo} alt="Dev Job Inspector Logo" className="Header__logo" />
      <form className="Header__Form-Controlls" onSubmit={searchHandler}>
        <HeaderSearch
          className="Header__Form-Controll"
          suggestions={autocompleteSuggestions}
          placeholder="Área, Lenguaje o Framework"
          onClick={searchHandler}
        />
      </form>
    </section>
  );
};

export default Header;
