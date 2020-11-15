
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/container',
      routes: [
        { path: '/', component: '../pages/index',Routes:['./src/routes/auth.js'] },
        { path: '/info/:age', component: '../pages/info' },
        { path: '/tool', component: '../pages/tool/count' },
        { path: '/lazy', component: '../pages/lazy/index' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva:true,
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
      }, //component按需加载
      title: 'myapp',
      dll: false,
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
  extraBabelPlugins:[
    // ["transform-remove-console", { "exclude": [ "error", "warn", "info"] }]
  ],

  proxy:{
    "/test": {
      "target": "https://tapi.seentao.com",
      "changeOrigin": true,
      "pathRewrite": { "^/test" : "" }
    }
  },
  "theme": {
    "@primary-color": "#1DA57A"
  },
  "define": {
    "process.env.TEST": 1,
  },
  // "theme": "./theme-config.js"
  // history: 'hash',
  // outputPath:'./this',
}
