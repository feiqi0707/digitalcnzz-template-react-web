import { Tooltip, Tag, Menu } from '@/pages/HomeCenter/node_modules/antd';
import { QuestionCircleOutlined, Layout } from '@/pages/HomeCenter/AppManage/components/AppAdd/node_modules/@ant-design/icons';
import React, { useState } from 'react';
import { connect, FormattedMessage } from '@/pages/HomeCenter/node_modules/umi';
// import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import HeaderDropdown from '../HeaderDropdown';
import SelectLang from '../SelectLang';
import styles from './index.less';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = props => {

  const {
    currentUser,
    onMenuClick,
    theme,
    layout
  } = props;
  // const noticeData = this.getNoticeData();
  // const unreadMsg = this.getUnreadData(noticeData);
  let className = styles.right;
  if (theme === 'dark') {
    className = `${styles.right}  ${styles.dark}`;
  }
  let name = localStorage.getItem('defaultMerchantName');
  if (name != null) {
    name = name.toString()
  }

  return (
    <div className={className}>

      {/* <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]} // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      <Tooltip title="使用文档">
        <a
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip> */}
      {
        // <Avatar />
      }
      {
        // REACT_APP_ENV && (
        //   <span>
        //     <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        //   </span>
        // )
      }

      {/* <SelectLang className={styles.action} /> */}
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
