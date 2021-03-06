// ref: https://umijs.org/config/
const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin')
const DiyPlugin = require('./plugins/index.js');
export default {
  treeShaking: true,
  context: {
    mode: 'local'
  },
  hash:true,
  routes: [
    {
      path: '',
      component: '../layouts/container',
      routes: [
        {
          path: '/', component: '../pages/index',
          title: '首页',
          Routes: ['./src/pages/auth.js']
        },
        { path: '/info/:age', component: '../pages/info/info' },
        { path: '/tool', component: '../pages/count/count' },
        { path: '/lazy', component: '../pages/lazy/index' },
        { path: '*', component: '../pages/404' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 2//取决于routes的层级
      }, //component按需加载
      title: {
        defaultTitle: 'test-umi'
      },
      dll: {
        exclude: [],
        include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch', 'antd/es', 'react', 'react-dom'] //感觉写不写都一样啊
      },
      locale: {
        default: 'zh-CN',
        antd: true
      },
      // headScripts:[
      //   {src:'<%= PUBLIC_PATH %>a.js'}
      // ],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    ['./log']
  ],
  extraBabelPlugins: [
    // ["transform-remove-console", { "exclude": [ "error", "warn", "info"] }]
  ],
  proxy: {
    "/test": {
      "target": "https://tapi.seentao.com",
      "changeOrigin": true,
      "pathRewrite": { "^/test": "" }
    }
  },
  "theme": {
    "@primary-color": "#1DA57A"
  },
  "define": {
    "process.env.TEST": 1,
  },
  "externals": {
    "react": "window.React",
    "react-dom": "window.ReactDOM",
    "jquery": "window.jQuery"
  },
  alias: {
    '@utils': path.resolve('./src/util'),
    '@components': path.resolve('./src/components'),
    '@pages': path.resolve('./src/pages'),
    '@util': path.resolve('./src/util'),
  },
  cssLoaderOptions: {
    localIdentName: '[local]'  //import './demo.css' 用于直接引入 但会存在变量污染问题
  },
  chainWebpack: (config) => {
    // console.log('webpack Config', config.toConfig())
    // config.plugin('friendly-errors-webpack-plugin').use(
    //   new FriendlyErrorsWebpackPlugin()
    // )
    // config.plugin('compression-webpack-plugin').use(
    //   new CompressionPlugin({
    //     // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
    //     algorithm: 'gzip', // 指定生成gzip格式
    //     test: new RegExp('\\.(' + ['js','css'].join('|') + ')$'), // 匹配哪些格式文件需要压缩
    //     threshold: 10240, //对超过10k的数据进行压缩
    //     minRatio: 0.6 // 压缩比例，值为0 ~ 1
    //   })
    // )
    config.module.rules.store.delete('eslint')//禁用eslint
    // 自定义loader
    // config.module.rule('replace-loader')
    //   .test(/wangbing\.js/)
    //   .include
    //   .add([path.resolve('src')])
    //   .end()
    //   .use(path.resolve('loaders/const'))
    //   .loader(path.resolve('loaders/const'));
    // 自定义plugin
    // config.plugin(path.resolve('plugins/index')).use(new DiyPlugin())

    // 无配置的情况下，默认都会打到一个vendors里面，不管引用了多少次

    // 此情况下，会生成一个verdors~(引用过的chunk).async.js 按需加载
    //config.optimization.splitChunks({})

  }
  // "theme": "./theme-config.js"
  // history: 'hash',
  // outputPath:'./this',
}
