import React from 'react';
import '../../styles/Header.css';
import Autocomplete from '../presentational/Autocomplete';
import logo from '../../assets/img/logo.png';
import searchIcon from '../../assets/img/search-icon.svg';

const Header = () => {
  return (
    <section id="Header">
      <img src={logo} alt="Dev Job Inspector Logo" className="Header__logo" />
      <div>
        <img src={searchIcon} className="Header__Autocomplete-Icon" />
        <Autocomplete className={'Header__Autocomplete'} />
      </div>
    </section>
  );
};

export default Header;
