import React, { useState } from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import HeaderContent from './header';
import MenuContent from './menu';
import styles from './index.less';

const { Header, Content, Sider } = Layout;

export default (props: any) => {
  const [sider, setSider] = useState(false);
  function toggleSider(e) {
    setSider(!sider);
    // console.log(e, sider);
  }

  return (
    <Layout className={styles.container}>
      <Header className={styles.contentHeader}>
        <HeaderContent />
      </Header>
      <Layout style={{ padding: 0 }}>
        <Button
          type="primary"
          onClick={toggleSider}
          className={styles.foldToggleBtn}
        >
          {React.createElement(sider ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Sider className={styles.sider} collapsed={sider}>
          <MenuContent />
          {/* <div onClick={toggleSider} className={styles.foldToggleBtn}></div> */}
        </Sider>
        <Content className={styles.content}>{props.children}</Content>
      </Layout>
      {/* <Footer className={styles.footerContent}>页脚</Footer> */}
    </Layout>
  );
};
