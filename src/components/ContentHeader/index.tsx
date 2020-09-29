import React, { FC } from 'react';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';

import styles from './index.less';

interface TabNameProps {
  tabName: any;
}

export const ContentHeader: FC<any> = ({ tabName }: TabNameProps) => {
  // const { tabName } = TabNameProps;
  return (
    // <PageHeaderWrapper>
    <div className={styles.contentHeader}>
      <div className={styles.tabName}>{tabName}</div>
    </div>
    // </PageHeaderWrapper>
  );
};
