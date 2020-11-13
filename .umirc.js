
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/container',
      routes: [
        { path: '/', component: '../pages/index',Routes:['./src/routes/auth.js'] },
        { path: '/info', component: '../pages/info' },
        { path: '/tool', component: '../pages/tool/count' },
        { path: '/lazy', component: '../pages/lazy/index' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        dynamicImport:{ webpackChunkName: true } //model按需加载
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: '@/components/loading.js',
      }, //component按需加载
      title: 'myapp',
      dll: false,

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
}
