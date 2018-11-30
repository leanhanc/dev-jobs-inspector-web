import React, { Component } from 'react';
import Job from './Job';

export default class Jobs extends Component {
  state = {
    expandendDescription: false
  };
  render() {
    const { jobs } = this.props;

    return (
      <section id="Jobs">
        {jobs.map(job => {
          return <Job job={job} />;
        })}
      </section>
    );
  }
}
