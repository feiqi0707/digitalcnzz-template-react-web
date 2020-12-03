import { Button, Result } from '@/pages/HomeCenter/node_modules/antd';
import React from 'react';
import { history } from '@/pages/HomeCenter/node_modules/umi';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
