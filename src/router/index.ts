import Demo from './Demo';

const router: any[] = [
  {
    path: '/',
    title: '首页',
    icon: 'desktop',
    name: '首页', // 如果添加了name属性，会在路由表出现对应的路由item
    // redirect: "/index",
    exact: true, // 表示是否严格匹配，即 location 是否和 path 完全对应上
    component: '@/pages/Index',
  },
  {
    path: '/404',
    title: '页面丢失',
    exact: true,
    component: '@/pages/Page404', // () => import(/* webpackChunkName: "about" */ "../views/404.vue")
  },
  {
    path: '/user/login',
    // name: '登录页',
    title: '登录页',
    icon: 'user',
    layout: {
      hideNav: true, // 是否当前路由隐藏导航头，默认不隐藏
      hideMenu: true, // 是否当前路由隐藏左侧菜单，默认不隐藏
    },
    exact: true, // 表示是否严格匹配，即 location 是否和 path 完全对应上
    component: '@/pages/User/Login',
  },
  {
    path: '/user/profile',
    title: '个人信息',
    component: '@/pages/User/Profile',
  },
];

if (process.env.NODE_ENV === 'development') {
  router.push(Demo);
}

export default router;
