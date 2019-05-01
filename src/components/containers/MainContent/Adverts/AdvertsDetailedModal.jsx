import React from 'react';
import { Modal, Button } from 'antd';

const AdvertsDetailedModal = props => {
  return (
    <div>
      <Modal visible={props.show} onCancel={props.toggle} footer={null}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Button onClick={props.toggle}>CERRAR</Button>
      </Modal>
    </div>
  );
};

export default AdvertsDetailedModal;
