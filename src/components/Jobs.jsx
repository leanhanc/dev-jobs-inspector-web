import React, { Component, Fragment } from 'react';
import NoResultsFound from './NoResultsFound';
import Job from './Job';
import JobDetailed from './JobDetailed';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as es from '../lib/es/';

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

  respectLineBreaks = str => {
    return str.split('\n').map((item, key) => {
      return (
        <Fragment key={key}>
          {item}
          <br />
        </Fragment>
      );
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
    const { getTime, handleClose, handleOpen, respectLineBreaks } = this;

    return (
      <section className="Jobs">
        {jobs === null ? (
          <NoResultsFound />
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
          <JobDetailed
            jobs={jobs}
            fullScreen={fullScreen}
            open={open}
            jobIndex={jobIndex}
            getTime={getTime}
            handleOpen={handleOpen}
            handleClose={handleClose}
            respectLineBreaks={respectLineBreaks}
          />
        ) : null}
      </section>
    );
  }
}
export default Jobs;
