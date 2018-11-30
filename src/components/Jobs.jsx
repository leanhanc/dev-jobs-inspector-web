import React, { Component } from 'react';
import Job from './Job';

export default class Jobs extends Component {
  state = {
    expandedDescription: false
  };
  render() {
    const { jobs } = this.props;
    const { expandedDescription } = this.state;

    return (
      <section id="Jobs">
        {jobs === null ? (
          <h4>No se encontraron resultados</h4>
        ) : jobs && jobs.length ? (
          jobs.map(job => {
            return (
              <Job
                job={job}
                key={job.url}
                expandendDescription={expandedDescription}
              />
            );
          })
        ) : null}
      </section>
    );
  }
}
