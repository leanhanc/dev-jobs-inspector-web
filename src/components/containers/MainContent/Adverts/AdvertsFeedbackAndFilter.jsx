import React from 'react';
import { Icon, Select } from 'antd';
import { Animated } from 'react-animated-css';
import { onAdvertsDateFilterInputChange } from '../../../../shared/actions/mainContentActions';
import './Adverts.css';

const Option = Select.Option;

function handleChange(number) {
  console.log(number);
  onAdvertsDateFilterInputChange(number);
}

const AdvertsFeedbackAndFilter = () => {
  return (
    <section id="FeedbackAndFilter">
      <div className="FeedbackContainer">
        <span className="FeedbackContainer__small">Se encontraron</span>
        <Animated
          isVisible={true}
          animationIn="fadeInUp"
          animationOut="fadeOutUp"
          animateOnMount={true}
          animationInDuration={300}
        >
          <span className="FeedbackContainer__large">{Math.floor(Math.random() * 200)}</span>
        </Animated>

        <span className="FeedbackContainer__small">avisos</span>
      </div>

      <div className="FilterContainer">
        <span>
          <Icon type="calendar" />
          &nbsp; Fecha de Publicación
        </span>
        <Select
          placeholder="Hoy"
          onChange={handleChange}
          className="FilterContainer__FilterOptions"
          optionFilterProp="children"
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
