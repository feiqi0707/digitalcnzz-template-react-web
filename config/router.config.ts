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
        icon: 'barChart',
        name: '数据分析',
        path: '/dataAnalysis',
        title: 'DataAnalysis',
        exact: true,
        component: './DataAnalysis',
      },
    ],
  },
];
