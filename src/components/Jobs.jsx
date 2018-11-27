import React from 'react';
import Job from './Job';

export default props => {
  return props.jobs.map(job => {
    return <Job job={job} />;
  });
};
