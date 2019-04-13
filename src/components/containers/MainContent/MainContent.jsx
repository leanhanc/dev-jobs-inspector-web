import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { Animated } from 'react-animated-css';

import './MainContent.css';

const About = props => {
  if (props.failedToGetAdverts) {
    return (
      <main id="Content">
        <Animated
          animateOnMount={true}
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="Content__Error-Alert">
            <Alert
              message="😢 No se pudieron obtener los avisos. Por favor, intentá más tarde 😢"
              type="error"
            />
          </div>
        </Animated>
      </main>
    );
  } else {
    return <main id="Content" />;
  }
};

const mapStateToProps = state => ({
  loading: state.loading,
  failedToGetAdverts: state.failedToGetAdverts
});

export default connect(mapStateToProps)(About);
