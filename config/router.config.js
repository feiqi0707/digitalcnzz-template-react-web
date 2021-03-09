export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/payMethods',
          },
          {
            name: 'home',
            icon: 'appstore',
            path: '/home',
            component: './HomeCenter',
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
];
