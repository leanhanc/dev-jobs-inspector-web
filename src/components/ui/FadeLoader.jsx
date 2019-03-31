import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import '../../assets/scss/components/_spinners.scss';

export default function Spinner(props) {
  const { loading, height } = props;
  return (
    <div className="pt-2" style={{ height }}>
      <ClipLoader sizeUnit="px" size={25} color="#5643fa" loading={loading} />
    </div>
  );
}
