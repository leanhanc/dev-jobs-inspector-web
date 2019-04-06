import React from 'react';
import { Icon, Select } from 'antd';

const Option = Select.Option;

export default props => (
  <Select
    defaultActiveFirstOption={false}
    suffixIcon={
      <Icon type="environment" style={{ color: '#4a4a4a', position: 'relative', left: '2px' }} />
    }
    className={props.className}
    placeholder="Argentina"
    onChange={props.onSelectLocationInputChange}
  >
    {props.selectOptions
      ? props.selectOptions.map(option => (
          <Option key={option.value} value={option.value}>
            {option.name}
          </Option>
        ))
      : null}
  </Select>
);
