/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  development: {
    '/mam': {
      // target: 'http://localhost:8001', // 本地服务
      target: 'http://172.17.15.230:8085', // 测试
      // target: 'http://192.168.150.17:8085',
      changeOrigin: true,
      // pathRewrite: {
      //   '/api': '',
      // },
    },
  },
  test: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
