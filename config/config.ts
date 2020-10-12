import { defineConfig } from 'umi';
import { resolve } from 'path';
const env = process.env.NODE_ENV;
const { API_ENV } = process.env;
// console.log('env', env);
import routes from './router.config';
import proxy from './proxy';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

let configParams: any = {
  title: 'xxxxx平台管理系统',
  hash: true,
  history: { type: 'hash' },
  publicPath: env === 'development' ? '/' : './',
  // favicon: '/public/favicon.png',
  define: {
    API_ENV,
  },
  dva: {
    hmr: true,
    immer: true, // 是否启用 immer 以方便修改 reducer
    skipModelValidate: false, // 是否跳过 model 验证
    extraModels: [], // 配置额外到 dva model
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  antd: {
    dark: false, // 开启暗色主题
    compact: false, // 开启紧凑主题
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  routes,
  // 是否启用按需加载
  // dynamicImport: {},
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {
  //   name: 'AngsiDesign Pro',
  //   // logo 在这里配置不生效，要在app.tsx配置
  //   // theme: 'pro', // 指定 Layout 主题, tech 仅在蚂蚁内部框架 Bigfish 中生效
  //   // locale: true,
  // },
  headScripts: [`console.log("页面加载");`],
  proxy: proxy.dev,
  targets: {
    // { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 }
    // ie: 11,
    chrome: 49,
    firefox: 64,
    safari: 10,
    edge: 13,
    ios: 10,
  },
  dynamicImport: {
    loading: '@/Loading', // 全局loading组件
  },
  ignoreMomentLocale: true,
  manifest: {
    basePath: './', // 给所有文件路径加前缀
  },
  postcssLoader: {},
  theme: {
    '@primary-color': '#1DA57A',
  },
};

const chainWebpackDev = (config: any) => {
  /** dayjs替换momentjs */
  config.plugin('AntdDayjsWebpackPlugin').use(AntdDayjsWebpackPlugin);
  config.module
    .rule('stylus')
    .test(/\.styl$/)
    .use('style-loader!css-loader!stylus-loader')
    .loader('style-loader!css-loader!stylus-loader');
  return config;
};

const chainWebpackPro = (config: any) => {
  /** 打包优化 */
  config.merge({
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 3,
        automaticNameDelimiter: '.',
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test(testConfit: any) {
              return /[\\/]node_modules[\\/]/.test(testConfit.resource);
            },
            priority: 10,
          },
          icons: {
            name: 'icons',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@ant-design)[\\/]/,
          },
          commons: {
            name: 'commons',
            chunks: 'async',
            minChunks: 2,
            minSize: 0,
          },
        },
      },
    },
  });
  return { ...chainWebpackDev(config), ...config };
};

if (env === 'production') {
  configParams = {
    ...configParams,
    // chunks: ['vendors', 'umi'],
    chainWebpack: (config: any) => chainWebpackPro(config),
  };
}

let config = defineConfig(configParams);
export default config;
