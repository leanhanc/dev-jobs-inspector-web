import React from 'react';
import { connect } from 'react-redux';
import ConnectionError from './ConnectionError';
import About from './About';
import './MainContent.css';
import Features from './Features';

const MainContent = props => {
  if (props.failedToGetAdverts) {
    return <ConnectionError />;
  } else {
    return (
      <main id="Content">
        <About />
        <Features />
      </main>
    );
  }
};

const mapStateToProps = state => ({
  loading: state.loading,
  failedToGetAdverts: state.failedToGetAdverts
});

export default connect(mapStateToProps)(MainContent);
