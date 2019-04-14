import React from 'react';
import { connect } from 'react-redux';
import ConnectionError from './ConnectionError';
import About from './About';
import './MainContent.css';

const MainContent = props => {
  if (props.failedToGetAdverts) {
    return <ConnectionError />;
  } else {
    return (
      <main id="Content">
        <About />
      </main>
    );
  }
};

const mapStateToProps = state => ({
  loading: state.loading,
  failedToGetAdverts: state.failedToGetAdverts
});

export default connect(mapStateToProps)(MainContent);
