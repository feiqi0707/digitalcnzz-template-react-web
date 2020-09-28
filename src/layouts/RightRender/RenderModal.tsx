import React, { FC } from 'react';

import { Modal } from 'antd';

interface PageProps {
  visible: boolean;
  onOk: any;
  onCancel: any;
}

const RenderModal: FC<PageProps> = ({ visible, onOk, onCancel }) => {
  console.log(visible);

  return (
    <div>
      <Modal
        title="Modal"
        visible={visible}
        onOk={() => onOk && onOk()}
        onCancel={() => onCancel && onCancel()}
        okText="确认"
        cancelText="取消"
      ></Modal>
    </div>
  );
};
export default RenderModal;
