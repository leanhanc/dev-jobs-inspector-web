import React from 'react';
import { Icon, Select } from 'antd';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default props => (
  <Select
    onChange={handleChange}
    defaultActiveFirstOption={false}
    suffixIcon={
      <Icon type="environment" style={{ color: '#4a4a4a', position: 'relative', left: '2px' }} />
    }
    className={props.className}
    placeholder="Argentina"
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
