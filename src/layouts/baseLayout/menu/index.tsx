import React, { FC, useState } from 'react';
import { Link, connect, useLocation, Loading } from 'umi';
import { Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { GlobalModelState } from '@/models/connect';
import { queryKeysByPath } from '@/utils/utils';
import {
  BarChartOutlined,
  TeamOutlined,
  PayCircleOutlined,
  RadarChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu, Item } = Menu;

export interface BasicLayoutProps {
  global: GlobalModelState;
  loading: boolean;
}

const MenuContent: FC<BasicLayoutProps> = ({ global }) => {
  const { menusData } = global;
  const location = useLocation();
  const rootSubmenuKeys = [
    'PaymentManage',
    'StudentManage',
    'DataStatistics',
    'SystemManage',
  ];
  const [openKeys, setOpenKeys] = useState([]);

  function onOpenChange(tempOpenKeys: any) {
    const latestOpenKey = tempOpenKeys.find(
      key => openKeys.indexOf(key) === -1,
    );
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(tempOpenKeys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }

  function renderMenu(data: any = []) {
    const rows = Array.isArray(data) ? data : [];
    return rows.map(row => {
      if (row === undefined) return false;
      const { title, icon, link = '', key, children, ...restState } = row;
      if (children && children.length > 0) {
        const subMenu = renderMenu(children);
        return (
          <SubMenu
            key={key}
            title={<span>{title}</span>}
            icon={
              icon === 'barChart' ? (
                <BarChartOutlined />
              ) : icon === 'team' ? (
                <TeamOutlined />
              ) : icon === 'payCircle' ? (
                <PayCircleOutlined />
              ) : icon === 'radarChart' ? (
                <RadarChartOutlined />
              ) : icon === 'setting' ? (
                <SettingOutlined />
              ) : (
                ''
              )
            }
          >
            {subMenu}
          </SubMenu>
        );
      }
      return (
        <Item key={key} title={title}>
          <Link to={{ pathname: link, state: { ...restState, key } }}>
            {icon === 'barChart' ? <BarChartOutlined /> : ''}
            <span>{title}</span>
          </Link>
        </Item>
      );
    });
  }

  const { openKey, selectKey } = queryKeysByPath(location.pathname);

  return (
    <Menu
      defaultSelectedKeys={['DataAnalysis']}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      theme="light"
      className="progressbar"
    >
      {renderMenu(menusData)}
    </Menu>
  );
};

export default connect(
  ({ global, loading }: { global: GlobalModelState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(MenuContent);
