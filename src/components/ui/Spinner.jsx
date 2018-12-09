import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import '../../assets/scss/components/_spinners.scss';

export default function Spinner(props) {
  const { loading } = props;
  return (
    <div className="spinner-container">
      <ClipLoader sizeUnit="px" size={50} color="{#5643fa}" loading={loading} />
    </div>
  );
}
