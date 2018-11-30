import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../components/theme';
import '../assets/scss/components/_card.scss';

const SimpleCard = props => {
  const { job, expandedDescription } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Card className="Card">
        <h4>{job.title}</h4>
        <p>
          {expandedDescription
            ? job.description
            : job.description
                .split(' ')
                .splice(0, 10)
                .join(' ')}
          ...
        </p>{' '}
        <Button color="primary" variant="text" className="Card__btn--secondary">
          Más info
        </Button>
        <Button
          color="primary"
          variant="contained"
          className="Card__btn--primary"
        >
          Abrir
        </Button>
      </Card>
    </MuiThemeProvider>
  );
};

export default SimpleCard;
