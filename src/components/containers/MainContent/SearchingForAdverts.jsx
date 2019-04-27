import React from 'react';
import { Spin } from 'antd';

const SearchingForAdverts = props => {
  return (
    <div className="Spinner__Container" style={{ paddingTop: props.paddingTop }}>
      <Spin size="large" />
    </div>
  );
};

export default SearchingForAdverts;
