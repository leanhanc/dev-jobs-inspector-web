import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Typography } from '@material-ui/core/';
import '../assets/scss/components/_dialog.scss';

import withMobileDialog from '@material-ui/core/withMobileDialog';

function JobDetailed(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullScreen={props.fullScreen}
    >
      <div className="Jobs dialog">
        <DialogContent>
          <h4 className="job__date">
            <Typography align="right" color="secondary">
              {props.getTime(props.jobs[props.jobIndex].created_at)}
            </Typography>
          </h4>
          <h3 className="job__title">{props.jobs[props.jobIndex].title}</h3>
          <h4 className="job__location">
            <Typography align="left" color="secondary">
              {props.jobs[props.jobIndex].location}{' '}
            </Typography>
          </h4>
          <DialogContentText
            className="job__description"
            id="alert-dialog-description"
          >
            {props.respectLineBreaks(props.jobs[props.jobIndex].description)}
          </DialogContentText>
          <div className="Jobs__extra-info">
            <h4 className="job__site">
              <i className="fas fa-globe-americas" />
              <span>{props.jobs[props.jobIndex].site}</span>
            </h4>
            <h4 className="job__publisher">
              <i className="fas fa-user-tie" />
              <span>{props.jobs[props.jobIndex].publisher}</span>
            </h4>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.handleClose}
            color="secondary"
            variant="text"
            className="close"
          >
            <span>CERRAR</span>
          </Button>
          <Button
            onClick={props.handleClose}
            variant="contained"
            color="primary"
            className="open"
            href={props.jobs[props.jobIndex].url}
            target="_blank"
          >
            ABRIR
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
export default withMobileDialog()(JobDetailed);
