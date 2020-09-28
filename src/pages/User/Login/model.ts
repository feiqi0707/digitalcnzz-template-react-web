import { message } from 'antd';
import { history, Effect, ImmerReducer, Subscription } from 'umi';
// import { login } from '@/services/user';

// import { Md5 } from 'ts-md5/dist/md5';
import qs from 'qs';

export interface LoginState {
  token: string;
  [key: string]: any;
}

export interface LoginType {
  namespace: 'login';
  state: LoginState;
  effects: {
    login: Effect;
  };
  reducers: {
    // save: Reducer<LoginState>;
    // 启用 immer 之后
    // getList: ImmerReducer<LoginState>;
    getToken: ImmerReducer<LoginState>;
  };
  subscriptions: { setup: Subscription };
}

const Login: LoginType = {
  namespace: 'login',
  state: {
    code: '',
    token: '',
  },
  effects: {
    *login({ payload }, { call, put }: { call: any; put: any }): any {
      try {
        // const res = yield call(login, {
        //   username: payload.username,
        //   password: Md5.hashStr(payload.password),
        // });
        const res = {
          username: 'zhangsan',
          password: '123425456t',
          token: 'qr2tgergeh5g',
        };
        // 已经多拦截了一层
        if (res) {
          sessionStorage.setItem('userInfo', JSON.stringify(res));
          message.success('登录成功');
          if (payload.remember) {
            localStorage.setItem('userInfo', qs.stringify(payload));
          } else {
            localStorage.removeItem('userInfo');
          }

          yield put({
            type: 'getToken',
            payload: res.token,
          });
          history.push('/');
        }
        return res;
      } catch (error) {}
    },
  },
  reducers: {
    getToken(state: any, action: any) {
      state.token = action.token;
    },
  },
  subscriptions: {
    setup({ dispatch, history }: { dispatch: any; history: any }) {
      return history.listen(({ pathname }: { pathname: any }) => {});
    },
  },
};

export default Login;
