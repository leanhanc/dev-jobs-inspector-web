import React from 'react';
import { connect } from 'react-redux';

const AvertsList = () => {
  return <section id="AdvertsList">TEST</section>;
};

const mapStateToProps = state => ({
  advertsList: state.adverts
});

export default connect(mapStateToProps)(AvertsList);
