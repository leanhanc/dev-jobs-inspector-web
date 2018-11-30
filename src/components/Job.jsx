import React from 'react';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';

import '../assets/scss/components/_card.scss';

const SimpleCard = props => {
  const { job } = props;
  return <Card className="Card"> {job.description}</Card>;
};

export default SimpleCard;
