import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as es from '../lib/es/';

import '../assets/scss/components/_card.scss';

const SimpleCard = props => {
  const { job, openModal, index } = props;

  function getTime(time) {
    return distanceInWordsToNow(new Date(time), { locale: es });
  }

  return (
    <Card className="Card">
      <h4 className="job__date">
        <Typography align="right" color="secondary">
          {getTime(job.created_at)}
        </Typography>
      </h4>
      <h3 className="job__title">{job.title}</h3>
      <h4 className="job__location">
        <Typography align="left" color="secondary">
          {job.location}
        </Typography>
      </h4>

      <p className="job__description">
        {job.description
          .split(' ')
          .splice(0, 10)
          .join(' ')}
        ...
      </p>
      <Button
        color="primary"
        variant="text"
        className="Card__btn--secondary"
        onClick={() => {
          openModal(index);
        }}
      >
        VER DETALLE
      </Button>
      <Button
        color="primary"
        variant="contained"
        className="Card__btn--primary"
        href={job.url}
        target="_blank"
      >
        Abrir
      </Button>
    </Card>
  );
};

export default SimpleCard;
