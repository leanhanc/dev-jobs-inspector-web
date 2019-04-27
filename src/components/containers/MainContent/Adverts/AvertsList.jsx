import React from 'react';
import { connect } from 'react-redux';
import { onScrollToBottom } from '../../../../shared/actions/mainContentActions';
import ScrollToBottomListener from 'react-bottom-scroll-listener';
import AdvertsItem from './AdvertsItem';
import SearchingForAdverts from '../SearchingForAdverts';

const AvertsList = props => {
  return (
    <>
      <ScrollToBottomListener
        onBottom={props.hasMoreItems ? props.onScrollToBottom : () => {}}
        debounce={500}
      >
        <section id="AdvertsList">
          {props.adverts.map(advert => {
            return <AdvertsItem advertItem={advert} key={advert._id} />;
          })}
        </section>
      </ScrollToBottomListener>
      {props.loading ? <SearchingForAdverts paddingTop="0" /> : null}
    </>
  );
};

const mapStateToProps = state => ({
  adverts: state.data,
  hasMoreItems: state.hasMoreItems,
  loading: state.loading
});

const mapDispatchToProps = dispatch => {
  return {
    onScrollToBottom: () => dispatch(onScrollToBottom())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvertsList);
