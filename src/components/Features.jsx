import React from 'react';
import Card from '@material-ui/core/Card';

import '../assets/scss/pages/Features.scss';

export default function Features() {
  return (
    <section>
      <div className="Features__Container">
        <Card className="Card">
          <div className="Features__Group">
            <i className="fa fa-search Card__Icon" />
            <h3 className="Features__Title">MÚLTIPLES FUENTES</h3>
          </div>
          <p className="Features__Feature">
            Buscás al mismo tiempo en trabajos publicados en Computrabajo,
            Zonajobs y Bumeran. Próximamente se irán agregando más fuentes.
          </p>
        </Card>
        <Card className="Card">
          <div className="Features__Group">
            <i className="fa fa-code-branch Card__Icon" />
            <h3 className="Features__Title">OPEN SOURCE</h3>
          </div>
          <p className="Features__Feature">
            Podés chequear el{' '}
            <a
              href="https://github.com/leo10099/dev-job-finder"
              className="Features__Feature-Link"
            >
              repositorio
            </a>{' '}
            en GitHub y colaborar con el proyecto. <br />
            Si preferís obtener los datos directamente o armar tu propio
            cliente, podés acceder a la{' '}
            <a
              href="https://github.com/leo10099/dev-job-finder-api"
              className="Features__Feature-Link"
            >
              API
            </a>{' '}
            pública.
          </p>
        </Card>
        <Card className="Card">
          <div className="Features__Group">
            <i className="fa fa-bolt Card__Icon" />
            <h3 className="Features__Title">OPTIMIZADO</h3>
          </div>
          <p className="Features__Feature">
            Los portales de trabajo suelen ser lentos. <br /> Gracias al poder
            de{' '}
            <a href="https://reactjs.org/" className="Features__Feature-Link">
              React
            </a>
            , en <strong>Dev Job Finder</strong> pasás el menor tiempo posible
            buscando para poder concentrarte en enviar CVs.
          </p>
        </Card>
      </div>
    </section>
  );
}
