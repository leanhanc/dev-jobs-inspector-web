import React from 'react';
import HeaderSearch from './HeaderSearch';
import HeaderSelect from './HeaderSelect';

import { connect } from 'react-redux';
import { onSearchTermInputChange } from '../../../shared/actions/headerActions';

import './Header.css';
import logo from 'assets/img/logo.png';

import { Button } from 'antd';
import { autocompleteSuggestions, selectOptions } from '../../../constants/';

const searchHandler = e => {
  e.preventDefault();
};

const Header = props => {
  return (
    <section id="Header">
      <img src={logo} alt="Dev Job Inspector Logo" className="Header__logo" />
      <form className="Header__Form-Controlls" onSubmit={searchHandler}>
        <div className="Header__Form-Inputs">
          <HeaderSearch
            className="Header__Form-Controll"
            suggestions={autocompleteSuggestions}
            placeholder="Área, Lenguaje o Framework"
            searchHandler={searchHandler}
            onSearchTermInputChange={props.onSearchTermInputChange}
          />
          <HeaderSelect className="Header__Form-Controll" selectOptions={selectOptions} />
        </div>
        <Button type="primary" icon="search" size="large" className="Header__CallToAction">
          BUSCAR
        </Button>
      </form>
    </section>
  );
};

const mapStateToProps = ({ searchFor }) => ({ searchFor });

const mapDispatchToProps = dispatch => ({
  onSearchTermInputChange: event => dispatch(onSearchTermInputChange(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
