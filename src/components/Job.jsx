import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const SimpleCard = props => {
  const { job } = props;
  return (
    <Card className="Card">
      <CardContent>
        <h2 className="Jobs__title">{job.title}</h2>
        <p className="Jobs__paragraph">{job.description}</p>
        <h3 className="Jobs__publishment">
          {job.site} || {job.publisher}
        </h3>
      </CardContent>
      <CardActions>
        <Button size="small">Expandir</Button>
        <Button size="small">Ver Aviso</Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
