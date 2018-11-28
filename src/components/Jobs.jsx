import React from 'react';
import Job from './Job';

export default props => {
  const { jobs } = props;
  return (
    <section id="Jobs">
      {jobs.map(job => {
        return <Job job={job} />;
      })}
    </section>
  );
};
