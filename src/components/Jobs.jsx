import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Job from './Job';

import { Typography } from '@material-ui/core/';

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as es from '../lib/es/';

import '../assets/scss/components/_dialog.scss';
import '../assets/scss/components/_card.scss';
import '../assets/scss/pages/Jobs.scss';

class Jobs extends Component {
  state = {
    open: false,
    showDetailsOfJob: null
  };

  handleOpen = index => {
    this.setState({ showDetailsOfJob: index }, () => {
      this.setState({ open: true });
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getTime = time => {
    return distanceInWordsToNow(new Date(time), { locale: es });
  };

  render() {
    const { jobs, fullScreen } = this.props;
    const { open, showDetailsOfJob: jobIndex } = this.state;

    return (
      <section className="Jobs">
        {jobs === null ? (
          <h4>No se encontraron resultados</h4>
        ) : jobs && jobs.length ? (
          jobs.map((job, index) => {
            return (
              <Job
                job={job}
                index={index}
                key={job.id}
                openModal={this.handleOpen}
              />
            );
          })
        ) : null}
        {open && jobs && jobs.length ? (
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullScreen={fullScreen}
          >
            <div className="Jobs dialog">
              <DialogContent>
                <h4 className="job__date">
                  <Typography align="right" color="secondary">
                    {this.getTime(jobs[jobIndex].created_at)}
                  </Typography>
                </h4>
                <h3 className="job__title">{jobs[jobIndex].title}</h3>
                <h4 className="job__location">
                  <Typography align="left" color="secondary">
                    {jobs[jobIndex].location}{' '}
                  </Typography>
                </h4>
                <DialogContentText
                  className="job__description"
                  id="alert-dialog-description"
                >
                  {jobs[jobIndex].description}
                </DialogContentText>
                <div className="Jobs__extra-info">
                  <h4 className="job__site">
                    <i className="fas fa-globe-americas" />
                    <span>{jobs[jobIndex].site}</span>
                  </h4>
                  <h4 className="job__publisher">
                    <i className="fas fa-user-tie" />
                    <span>{jobs[jobIndex].publisher}</span>
                  </h4>
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={this.handleClose}
                  color="secondary"
                  variant="text"
                  className="close"
                >
                  <span>CERRAR</span>
                </Button>
                <Button
                  onClick={this.handleClose}
                  variant="contained"
                  color="primary"
                  className="open"
                  href={jobs[jobIndex].url}
                  target="_blank"
                >
                  ABRIR
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        ) : null}
      </section>
    );
  }
}
export default withMobileDialog()(Jobs);
