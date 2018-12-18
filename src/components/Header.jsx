import React from 'react';
import Button from '@material-ui/core/Button';

import { provinces } from '../helpers';

import '../assets/scss/pages/Home.scss';
import '../assets/scss/pages/Header.scss';

export default function Header(props) {
  const {
    searchString,
    handleLocationFilterChange,
    handleSearchStringChange,
    handleSubmit
  } = props;

  return (
    <header className="Header">
      <section id="Search">
        <form className="Form" id="Form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Área, lenguaje o framework"
            className="Form__Input Search"
            value={searchString}
            onChange={handleSearchStringChange}
          />
          <select
            className="Form__Input Select"
            form="Form"
            onChange={handleLocationFilterChange}
          >
            {Object.keys(provinces).map(province => {
              return (
                <option
                  value={provinces[province].value}
                  key={provinces[province].value}
                  onChange={handleLocationFilterChange}
                >
                  {provinces[province].name}
                </option>
              );
            })}
          </select>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Buscar
          </Button>
        </form>
      </section>
    </header>
  );
}
