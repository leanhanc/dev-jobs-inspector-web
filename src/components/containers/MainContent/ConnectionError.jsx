import React from 'react';
import { Alert } from 'antd';
import { Animated } from 'react-animated-css';

export default () => {
  return (
    <main id="Content">
      <Animated animateOnMount={true} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="Content__Error-Alert">
          <Alert
            message="😢 No se pudieron obtener los avisos. Por favor, intentá más tarde"
            type="error"
          />
        </div>
      </Animated>
    </main>
  );
};
