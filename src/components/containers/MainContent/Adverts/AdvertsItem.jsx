import React, { Fragment } from 'react';
import { Button, Card } from 'antd';
import HtmlParser from 'react-html-parser';
import './Adverts.css';

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

const AdvertsItem = props => {
  const { createdAt, description, location, title, url } = props.advertItem;

  return (
    <div className="AdvertsItem__Container">
      <Card className="AdvertsItem__Card">
        <span className="AdvertsItem__Card-Timestamp">{createdAt}</span>
        <h4 className="AdvertsItem__Card-Description">{title}</h4>
        <span className="AdvertsItem__Card-Location">{location}</span>
        <p className="AdvertsItem__Card-Description">
          {respectLineBreaks(shortenDescription(description, 15))}
        </p>
        <Button type="ghost" block={true} className="AdvertsItem__Card-SeeDetails">
          VER DETALLE
        </Button>
        <Button type="primary" block={true} className="AdvertsItem__Card-Open">
          ABRIR
        </Button>
      </Card>
    </div>
  );
};

export default AdvertsItem;
