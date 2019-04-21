import React from 'react';

const AdvertsItem = props => {
  const { createdAt, description, location, publisher, site, title, url } = props.advertItem;

  return <div className="AdvertsItem__Container">{description}</div>;
};

export default AdvertsItem;
