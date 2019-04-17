import React from 'react';
import { connect } from 'react-redux';
import ConnectionError from './ConnectionError';
import About from './About/About';
import './MainContent.css';
import Features from './Features/Features';
import SearchingForAdverts from './SearchingForAdverts';
import AdvertsFeedbackAndFilter from './Adverts/AdvertsFeedbackAndFilter';

const MainContent = props => {
  return props.failedToGetAdverts ? (
    <ConnectionError />
  ) : (
    <main id="Content">
      {props.loading ? (
        <SearchingForAdverts />
      ) : props.advertsFetched === true ? (
        <>
          <AdvertsFeedbackAndFilter />
        </>
      ) : (
        <>
          <About />
          <Features />
        </>
      )}
    </main>
  );
};

const mapStateToProps = state => ({
  advertsFetched: state.advertsFetched,
  failedToGetAdverts: state.failedToGetAdverts,
  loading: state.loading
});

export default connect(mapStateToProps)(MainContent);
