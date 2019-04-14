import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Card, Icon } from 'antd';
import featuresListContent from './FeaturesText';
import './About.css';

const Features = () => {
  return (
    <section id="About__Features">
      {featuresListContent.map(feature => {
        return (
          <Card className="About__Features-Card">
            <div className="About__Features-CardContent">
              <Icon type={feature.icon} className="About__Features-CardIcon" />
              <h3 className="About__Features-CardTitle">{feature.title.toUpperCase()}</h3>
              <p className="About__Features-CardText">{ReactHtmlParser(feature.description)}</p>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default Features;
