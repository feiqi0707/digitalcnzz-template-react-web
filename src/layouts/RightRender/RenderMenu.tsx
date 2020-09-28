import React, { FC } from 'react';

import { Menu } from 'antd';
import { ProfileOutlined, LogoutOutlined } from '@ant-design/icons';

interface PageProps {
  onMenuClick: any;
}

const RenderMenu: FC<PageProps> = ({ onMenuClick }) => {
  const onClick = (e: any) => {
    const { key } = e;
    onMenuClick && onMenuClick(key);
  };

  return (
    <Menu defaultSelectedKeys={['2']} onClick={(e) => onClick(e)}>
      <Menu.Item key="2">
        <ProfileOutlined />
        个人信息
      </Menu.Item>
      <Menu.Item key="1">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );
};
export default RenderMenu;
