import React from 'react';
import Divider from './ui/Divider';
import '../assets/scss/pages/Landing.scss';

function Landing(props) {
  return (
    <main className="Landing">
      <h2 className="Landing__title">
        Encontrá tu próximo trabajo en el mundo del desarrollo de software
      </h2>
      <Divider />
      <h2 className="Landing__subtitle">
        Los desarrolladores odiamos hacer tareas repetitivas, como entrar a
        distintos portales para buscar exactamente lo mismo. <br />
        Con <span className="text-highlight">Dev Job Finder</span> tenemos
        acceso a los avisos publicados en los sitios más importantes de
        Argentina en un sólo lugar.
      </h2>
    </main>
  );
}

export default Landing;
