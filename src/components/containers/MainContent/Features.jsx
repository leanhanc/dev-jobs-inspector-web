import React from 'react';
import { Card, Icon } from 'antd';
import './About.css';
import featuresListContent from './Features';

const Features = () => {
  return (
    <section id="About__Features">
      {featuresListContent.map(feature => {
        return (
          <Card className="About__Features-Card">
            <div className="About__Features-CardContent">
              <Icon type={feature.icon} className="About__Features-CardIcon" />
              <h3 className="About__Features-CardTitle">{feature.title.toUpperCase()}</h3>
              <p className="About__Features-CardText">{feature.description}</p>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default Features;
