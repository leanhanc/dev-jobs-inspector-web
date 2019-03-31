import React from 'react';
import About from './About';
import Features from './Features';

import '../assets/scss/pages/About.scss';

function Landing(props) {
  return (
    <main className="Landing">
      <section className="About">
        <About />
      </section>
      <Features />
    </main>
  );
}

export default Landing;
