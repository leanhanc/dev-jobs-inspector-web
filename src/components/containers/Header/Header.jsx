import React from 'react';
import HeaderSearch from './HeaderSearch';
import HeaderSelect from './HeaderSelect';

import { connect } from 'react-redux';
import {
  onSearchTermInputChange,
  onSearchButtonPressed,
  onSelectLocationInputChange
} from '../../../shared/actions/headerActions';

import './Header.css';
import logo from '../../../assets/img/logo.png';

import { Button } from 'antd';
import { autocompleteSuggestions, selectOptions } from '../../../constants/';

const searchHandler = e => {
  e.preventDefault();
};

const Header = props => {
  const { onSelectLocationInputChange, onSearchTermInputChange, onSearchButtonPressed } = props;

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
            onSearchTermInputChange={onSearchTermInputChange}
          />
          <HeaderSelect
            className="Header__Form-Controll"
            selectOptions={selectOptions}
            onSelectLocationInputChange={text => onSelectLocationInputChange(text)}
          />
        </div>
        <Button
          type="primary"
          icon="search"
          size="large"
          loading={props.loading}
          className="Header__CallToAction"
          onClick={() =>
            props.searchFor
              ? props.onSearchButtonPressed(props.searchFor, props.locationFilter, props.dateFilter)
              : null
          }
        >
          BUSCAR
        </Button>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchTermInputChange: text => dispatch(onSearchTermInputChange(text)),
    onSelectLocationInputChange: text => dispatch(onSelectLocationInputChange(text)),
    onSearchButtonPressed: searchFor => dispatch(onSearchButtonPressed(searchFor))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    searchFor: state.searchFor,
    dateFilter: state.dateFilter,
    locationFilter: state.locationFilter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
