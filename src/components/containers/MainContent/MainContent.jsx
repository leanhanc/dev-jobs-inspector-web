import React from 'react';
import { connect } from 'react-redux';
import ConnectionError from './ConnectionError';
import About from './About/About';
import './MainContent.css';
import Features from './Features/Features';
import SearchingForAdverts from './SearchingForAdverts';
import AdvertsFeedbackAndFilter from './Adverts/AdvertsFeedbackAndFilter';
import AdvertsList from './Adverts/AvertsList';

const MainContent = props => {
  return props.failedToGetAdverts ? (
    <ConnectionError />
  ) : (
    <main id="Content">
      {props.loading && props.pageNumber === 1 ? (
        <SearchingForAdverts paddingTop="10rem" />
      ) : props.advertsFetched === true ? (
        <>
          <AdvertsFeedbackAndFilter />
          {props.totalItems > 0 ? <AdvertsList /> : null}
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
  adverts: state.data,
  totalItems: state.totalItems,
  advertsFetched: state.advertsFetched,
  failedToGetAdverts: state.failedToGetAdverts,
  loading: state.loading,
  pageNumber: state.pageNumber
});

export default connect(mapStateToProps)(MainContent);
