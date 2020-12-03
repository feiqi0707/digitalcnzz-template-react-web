// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import pageRoutes from './router.config';
import proxy from './proxy';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

const API_ENV = process.env.NODE_ENV;

let config = {
  hash: true,
  antd: {},
  base: '/',
  history: { type: 'hash' },
  publicPath: API_ENV === 'development' ? '/' : './',
  favicon: '/public/favicon.png',
  dva: {
    hmr: true,
    immer: true,
    skipModelValidate: false,
    extraModels: [],
  },
  esbuild: {},

  define: {
    API_ENV,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  headScripts: [`console.log("页面加载");`],
  targets: {
    ie: 11,
  },
  routes: pageRoutes,
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[API_ENV || 'development'],
  manifest: {
    basePath: '/',
  },
};

const chainWebpackDev = (config) => {
  config.plugin('AntdDayjsWebpackPlugin').use(AntdDayjsWebpackPlugin);
  config.module
    .rule('stylus')
    .test(/\.styl$/)
    .use('style-loader!css-loader!stylus-loader')
    .loader('style-loader!css-loader!stylus-loader');
  return config;
};

const chainWebpackPro = (config) => {
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
            test (testConfit) {
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

if (API_ENV === 'production') {
  config = {
    ...config,
    chunks: ['umi'],
    chainWebpack: (config) => chainWebpackPro(config),
  };
}

export default defineConfig(config);
