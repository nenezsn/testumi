// ref: https://umijs.org/config/
const path = require('path')
export default {
  treeShaking: true,
  context:{
    mode:'local'
  },
  routes: [
    {
      path: '',
      component: '../layouts/container',
      routes: [
        {
          path: '/', component: '../pages/index',
          title:'首页',
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
        immer:true
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 2//取决于routes的层级
      }, //component按需加载
      title:{
        defaultTitle:'test-umi'
      },
      dll: false,
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
  alias:{
    '@utils':path.resolve('./src/util'),
    '@components':path.resolve('./src/components'),
    '@pages':path.resolve('./src/pages'),
    '@util':path.resolve('./src/util'),
  },
  chainWebpack: (config) => {
    // config.plugin('friendly-errors-webpack-plugin').use(
    //   new FriendlyErrorsWebpackPlugin()
    // )
    config.module.rules.store.delete('eslint')//禁用eslint

    // 无配置的情况下，默认都会打到一个vendors里面，不管引用了多少次

    // 此情况下，会生成一个verdors~(引用过的chunk).async.js 按需加载
    //config.optimization.splitChunks({})

  }
  // "theme": "./theme-config.js"
  // history: 'hash',
  // outputPath:'./this',
}
