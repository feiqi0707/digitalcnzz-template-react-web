import { Alert, Tabs, Form, Input, Button } from '@/pages/HomeCenter/node_modules/antd';
import { MobileOutlined } from '@/pages/HomeCenter/AppManage/components/AppAdd/node_modules/@ant-design/icons';
import React, { useState } from 'react';
import { connect, Dispatch } from '@/pages/HomeCenter/node_modules/umi';
import { StateType } from '@/models/login';
import { LoginParamsType } from '@/services/login';
import styles from './style.less';
import qrCodeImg from '@/assets/qrcode.png';
import { classNames } from 'classnames';
const { TabPane } = Tabs;

const Login = (props) => {
  const [type, setType] = useState('qrcode');

  const handleSubmit = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };

  const callback = (key) => {
    console.log(key);
  };

  const onFinish = () => { };

  return (
    <div className={styles.main}>
      <div className={styles.welcomeMsg}>欢迎登录</div>
      <div className={styles.loginContent}>
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          centered={true}
          tabBarGutter={70}
          className={styles.tabContent}
        >
          <TabPane className={styles.scanQrCodeTab} tab="扫码登录" key="1">
            <div className={styles.qrCode}>
              <img src={qrCodeImg} className={styles.qrCodeImg}></img>
              <div className={styles.qrCodeTips}>请使用郑好办或郑政钉扫码登录</div>
              <div className={styles.qrCodeType}>
                <div className="zhb">郑好办</div>
                <div className="zzd">郑政钉</div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="手机号登录" key="2">
            <Form
              name="mobileLogin"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item name="phoneNumber" rules={[{ required: true, message: '请输入手机号' }]}>
                <Input
                  prefix={<MobileOutlined className="site-form-item-icon" />}
                  placeholder="请输入手机号"
                />
              </Form.Item>
              <Form.Item name="smsCode" rules={[{ required: true, message: '请输入验证码' }]}>
                <div className={styles.smsCode}>
                  <Input className={styles.inputSmsCode} placeholder="验证码" />
                  <Button
                    type="primary"
                    htmlType="submit"
                    styles={{}}
                    className={styles.getSmsCode}
                  >
                    获取验证码
                  </Button>
                </div>
              </Form.Item>
              <Form.Item name="submitLogin">
                <Button type="primary" htmlType="submit" className={styles.submitLogin}>
                  获取验证码
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
