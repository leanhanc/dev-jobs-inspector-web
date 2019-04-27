import React from 'react';
import { connect } from 'react-redux';
import { onScrollToBottom } from '../../../../shared/actions/mainContentActions';
import ScrollToBottomListener from 'react-bottom-scroll-listener';
import AdvertsItem from './AdvertsItem';

const AvertsList = props => {
  return (
    <ScrollToBottomListener
      onBottom={props.hasMoreItems ? props.onScrollToBottom : () => {}}
      debounce={800}
    >
      <section id="AdvertsList">
        {props.adverts.map(advert => {
          return <AdvertsItem advertItem={advert} key={advert._id} />;
        })}
      </section>
    </ScrollToBottomListener>
  );
};

const mapStateToProps = state => ({
  adverts: state.data,
  hasMoreItems: state.hasMoreItems
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
