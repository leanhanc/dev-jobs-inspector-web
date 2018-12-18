import React from 'react';

import '../assets/scss/pages/Home.scss';
import '../assets/scss/pages/Header.scss';
import Button from '@material-ui/core/Button';

export default function Header(props) {
  const { searchString, handleChange, handleSubmit } = props;

  return (
    <header className="Header">
      <section id="Search">
        <form className="Form" id="Form">
          <input
            type="text"
            placeholder="Área, lenguaje o framework"
            className="Form__Input Search"
          />
          <select className="Form__Input Select" form="Form">
            <option value="Capital Federal">Ciudad de Buenos Aires</option>
            <option>Buenos Aires</option>
          </select>
          <Button variant="contained" color="primary">
            Buscar
          </Button>
        </form>
      </section>
    </header>
  );
}
