import React from 'react';
import AdvertsItem from './AdvertsItem';
import { connect } from 'react-redux';

const AvertsList = props => {
  return (
    <section id="AdvertsList">
      {props.adverts.data.map(advert => {
        return <AdvertsItem advertItem={advert} key={advert._id} />;
      })}
    </section>
  );
};

const mapStateToProps = state => ({
  adverts: state.adverts
});

export default connect(mapStateToProps)(AvertsList);
