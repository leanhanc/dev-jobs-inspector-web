import React from 'react';
import { Divider } from 'antd';

const TitleAndSubtitle = () => {
  return (
    <>
      <h2 className="About__title">
        Encontrá tu próximo trabajo en el mundo del desarrollo de software
      </h2>
      <Divider type="vertical" className="About__Divider" />
      <h2 className="About__subtitle">
        Como developers odiamos hacer tareas repetitivas. Entrar a distintos portales para buscar
        exactamente lo mismo es un ejemplo de ello. <br />
        Con <strong>Dev Job Inspector</strong> tenemos acceso a los avisos publicados en los sitios
        más importantes de Argentina en un sólo lugar.
      </h2>
    </>
  );
};

export default TitleAndSubtitle;
