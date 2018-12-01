import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import Job from './Job';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as es from '../lib/es/';

import '../assets/scss/components/_card.scss';
import '../assets/scss/components/_modal.scss';
import '../assets/scss/pages/Jobs.scss';
import { Typography } from '@material-ui/core';

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
        >
          {open && jobs && jobs.length ? (
            <div className="Jobs">
              <Card className="modal-card">
                <Typography align="right">
                  <h4 className="job__date">
                    {this.getTime(jobs[jobIndex].created_at)}
                  </h4>
                </Typography>
                <h3 className="job__title">{jobs[jobIndex].title}</h3>
                <p className="job__description">{jobs[jobIndex].description}</p>
              </Card>
            </div>
          ) : null}
        </Modal>
      </section>
    );
  }
}
