import React from 'react';
import { connect } from 'react-redux';
import ConnectionError from './ConnectionError';

import './MainContent.css';

const About = props => {
  if (props.failedToGetAdverts) {
    return <ConnectionError />;
  } else {
    return <main id="Content" />;
  }
};

const mapStateToProps = state => ({
  loading: state.loading,
  failedToGetAdverts: state.failedToGetAdverts
});

export default connect(mapStateToProps)(About);
