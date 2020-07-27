import routesConfig from './routes.config';
import webpackConfig from './webpack.config';
import proxyConfig from './proxy.config';

const ossPluginOpt = {
  ossConfig: {
    region: 'oss-cn-north-2-gov-1',
    bucket: 'digitalzz',
    secure: true,
  },
  configName: '.alioss',
  enabled: true,
  cdnPrefix: 'https://cdn.digitalcnzz.com/',
  uploadPath: '/digitalcnzz/pretest/digitalcnzz-xxx-web',
  exclude: '',
  ignoreHtml: false,
};

/**
 * 项目配置
 * @see https://umijs.org/zh/guide/config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6
 * @see https://umijs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
 */
export default Object.assign({
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      title: {
        defaultTitle: 'digitalcnzz-xxx-web',
        separator: '-'
      },
      dva: {
        immer: true
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading.tsx'
      }
    }],
    ['umi-plugin-alioss', ossPluginOpt]
  ]
}, routesConfig, webpackConfig, proxyConfig);