import React, { useState, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi'
import styles from './index.less';
import { Table, Form, Input, Button, Popconfirm } from 'antd';
import Item from 'antd/lib/list/Item';

const HomeCenter = props => {

  const { dispatch } = props;

  return (
    <PageHeaderWrapper>
      <div className={styles.content}>

        HomeCenter

      </div>
    </PageHeaderWrapper>
  );
}

export default HomeCenter;
