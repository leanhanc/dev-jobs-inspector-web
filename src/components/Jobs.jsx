import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import Job from './Job';

import { Typography } from '@material-ui/core/';

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as es from '../lib/es/';

import '../assets/scss/components/_card.scss';
import '../assets/scss/components/_modal.scss';
import '../assets/scss/pages/Jobs.scss';

export default class Jobs extends Component {
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
    const { jobs } = this.props;
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
        <Modal
          aria-labelledby="modal-job-details"
          aria-describedby="obtener-detalles-del-trabajo"
          open={open}
          onClose={this.handleClose}
          style={{ overflow: 'auto' }}
        >
          {open && jobs && jobs.length ? (
            <div className="Jobs">
              <Card className="modal-card">
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
                <p className="job__description">{jobs[jobIndex].description}</p>
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
              </Card>
            </div>
          ) : null}
        </Modal>
      </section>
    );
  }
}
