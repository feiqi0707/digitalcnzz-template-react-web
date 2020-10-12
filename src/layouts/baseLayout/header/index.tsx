import React from 'react';
import UserSetting from './userSetting';
import logo from '@/assets/logo.png';
import styles from './index.less';

export default function() {
  return (
    <>
      <div>
        <img src={logo} alt="" className={styles.logo} />
        xxxxx平台管理系统
      </div>
      <UserSetting />
    </>
  );
}
