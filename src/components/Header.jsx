import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import SearchBar from 'material-ui-search-bar';

import '../assets/scss/pages/Home.scss';

export default function Header(props) {
  const { searchString, handleChange, handleSubmit } = props;

  return (
    <header>
      <section id="Search">
        <FormControl className="form">
          <SearchBar
            placeholder="Buscar..."
            onChange={handleChange}
            onRequestSearch={handleSubmit}
            value={searchString}
          />
        </FormControl>
      </section>
    </header>
  );
}
