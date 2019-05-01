import React from 'react';
import { Icon, Modal, Button } from 'antd';
import './Adverts.css';

// TODO -->Don't allow searches if search input is null

const AdvertsDetailedModal = props => {
  const { advertItem } = props;

  return (
    <div>
      <Modal visible={props.show} onCancel={props.toggle} footer={null}>
        <div className="AdvertsItem__Modal-Container">
          <span
            className="AdvertsItem__Card-Timestamp"
            style={{ position: 'relative', left: '-2rem', paddingTop: '2rem' }}
          >
            {props.timeSince(advertItem.createdAt)}
          </span>
          <h3 className="AdvertsItem__Card-Title">{advertItem.title}</h3>
          <h4 className="AdvertsItem__Card-Location">{advertItem.location}</h4>
          <p className="AdvertsItem__Card-Description">
            {props.respectLineBreaks(advertItem.description)}
          </p>
          <div className="AdvertsItem__Modal-Extra_Info">
            <span>
              <Icon type="global" style={{ paddingRight: '4px' }} />
              {advertItem.site}
            </span>
            <span>
              <Icon type="user" style={{ paddingRight: '4px' }} />
              {advertItem.publisher}
            </span>
          </div>
          <div className="AdvertsItem__Modal-Buttons">
            <Button
              type="primary"
              href={advertItem.url}
              target="__blank"
              className="AdvertsItem__Modal-Button"
              style={{ color: 'whitesmoke' }}
            >
              ABRIR
            </Button>
            <Button
              onClick={props.toggle}
              className="AdvertsItem__Modal-Button"
              type="ghost"
              style={{ color: '#3D329E', borderColor: '#3D329E' }}
            >
              CERRAR
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdvertsDetailedModal;
