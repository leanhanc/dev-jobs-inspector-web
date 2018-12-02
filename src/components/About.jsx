import React from 'react';
import Divider from './ui/Divider';

export default function About() {
  return (
    <React.Fragment>
      <h2 className="About__title">
        Encontrá tu próximo trabajo en el mundo del desarrollo de software
      </h2>
      <Divider />
      <h2 className="About__subtitle">
        Los desarrolladores odiamos hacer tareas repetitivas como entrar a
        distintos portales para buscar exactamente lo mismo. <br />
        Con <strong>Dev Job Finder</strong> tenemos acceso a los avisos
        publicados en los sitios más importantes de Argentina en un sólo lugar.
      </h2>
    </React.Fragment>
  );
}
