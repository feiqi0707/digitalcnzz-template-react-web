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
            redirect: '/dashboard',
          },
          {
            name: 'dashboard',
            icon: 'appstore',
            path: '/dashboard',
            component: './Dashboard',
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
];
