export default [
  // user router
  { path: '/login', component: './Login' },

  // business router
  {
    path: '/',
    component: '../layouts/baseLayout',
    routes: [
      // dashboard
      { path: '/', redirect: '/dataAnalysis' },
      {
        path: '/dataAnalysis',
        title: '数据分析',
        exact: true,
        component: './DataAnalysis',
      },
    ],
  },
];
