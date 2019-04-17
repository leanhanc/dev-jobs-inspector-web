import React from 'react';
import { Select } from 'antd';
import './Adverts.css';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const AdvertsFeedbackAndFilter = () => {
  return (
    <section id="FeedbackAndFilter">
      <div className="FeedbackContainer">
        <span className="FeedbackContainer__small" />
        Se encontraron 🕵️‍
        <span className="FeedbackContainer__large">130</span>
        <span className="FeedbackContainer__small">avisos</span>
      </div>

      <div className="FilterContainer">
        <Select
          showSearch
          placeholder="Filtrar por fecha de publicación"
          optionFilterProp="children"
          onChange={handleChange}
        >
          <Option value="1">Hoy</Option>
          <Option value="2">Ayer</Option>
          <Option value="7">Últimos 7 días</Option>
          <Option value="15">Últimos 15 días</Option>
          <Option value="30">Último mes</Option>
        </Select>
      </div>
    </section>
  );
};

export default AdvertsFeedbackAndFilter;
