import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useIntl, connect, history } from 'umi';
import React from 'react';
import SelectLang from '@/components/SelectLang';
import logo from '../assets/logo.png';
import styles from './UserLayout.less';
import mainLogo from '../assets/main-logo.jpg'

const UserLayout = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <div className={styles.userContainer}>
      <div className={styles.userHeader}>
        <img src={mainLogo} className={styles.mainLogo} onClick={history.push('/')}></img>
      </div>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          {children}
        </div>
      </div>
      <div className={styles.userFooter}>
        <div className={styles.footerMsg}>郑州城市大脑·xxxxxxx平台      主办：郑州市大数据管理局      承建：数字郑州科技有限公司</div>
        <div className={styles.license}>Copyright&copy;2020 xxxxxxxxx小组办公室</div>
      </div>
    </div>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);