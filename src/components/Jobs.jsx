import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Job from './Job';

export default class Jobs extends Component {
  state = {
    modalOpen: false
  };
  render() {
    const { jobs } = this.props;
    const { modalOpen } = this.state;

    return (
      <section id="Jobs">
        {jobs === null ? (
          <h4>No se encontraron resultados</h4>
        ) : jobs && jobs.length ? (
          jobs.map(job => {
            return <Job job={job} key={job.url} />;
          })
        ) : null}
        <Modal open={modalOpen} />
      </section>
    );
  }
}
