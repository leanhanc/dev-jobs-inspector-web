import React from 'react';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';

import '../assets/scss/components/_card.scss';

const SimpleCard = props => {
  const { job, expandedDescription } = props;
  return (
    <Card className="Card">
      <h3>{job.title}</h3>
      <h4>{job.publisher}</h4>
      {expandedDescription
        ? job.description
        : job.description
            .split(' ')
            .splice(0, 10)
            .join(' ')}
      ...
      <h4>{job.site}</h4>
    </Card>
  );
};

export default SimpleCard;
