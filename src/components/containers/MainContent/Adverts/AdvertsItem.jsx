import React, { Component, Fragment } from 'react';
import AdvertsDetailedModal from './AdvertsDetailedModal';
import * as es from '../../../../lib/es';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import HtmlParser from 'react-html-parser';
import { Button, Card } from 'antd';

import './Adverts.css';

function timeSince(time) {
  return distanceInWordsToNow(new Date(time), { locale: es });
}

const shortenDescription = (string, characterLimit) => {
  return (
    string
      .split(' ')
      .splice(0, characterLimit)
      .join(' ') + '...'
  );
};

const respectLineBreaks = str => {
  return str.split('\n').map((item, key) => {
    return (
      <Fragment key={key}>
        {HtmlParser(item)}
        <br />
      </Fragment>
    );
  });
};

class AdvertsItem extends Component {
  state = {
    showAdvertDetailsModal: false
  };

  toggleModalVisibility = () => {
    this.setState({
      showAdvertDetailsModal: this.state.showAdvertDetailsModal ? false : true
    });
  };

  render() {
    const { createdAt, description, location, title, url } = this.props.advertItem;
    const { showAdvertDetailsModal } = this.state;

    return (
      <div className="AdvertsItem__Container">
        <Card className="AdvertsItem__Card">
          <span className="AdvertsItem__Card-Timestamp">{timeSince(createdAt)}</span>
          <h4 className="AdvertsItem__Card-Title">{title}</h4>
          <span className="AdvertsItem__Card-Location">{location}</span>
          <p className="AdvertsItem__Card-Description">{shortenDescription(description, 15)}</p>
          <Button
            type="ghost"
            block={true}
            className="AdvertsItem__Card-SeeDetails"
            onClick={this.toggleModalVisibility}
          >
            VER DETALLE
          </Button>
          <AdvertsDetailedModal
            show={showAdvertDetailsModal}
            toggle={this.toggleModalVisibility}
            advertItem={this.props.advertItem}
            timeSince={timeSince}
            respectLineBreaks={respectLineBreaks}
          />
          <Button
            type="primary"
            block={true}
            className="AdvertsItem__Card-Open"
            onClick={() => window.open(url)}
          >
            ABRIR
          </Button>
        </Card>
      </div>
    );
  }
}

export default AdvertsItem;
