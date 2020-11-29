// ref: https://umijs.org/config/
const path = require('path')
export default {
  treeShaking: true,
  routes: [
    {path:'/',component:'./CaseDevelopmentHome'},
    {path:'/enterpriseCaseList',component:'./enterpriseCaseList'},
    {path:'/HelpCenter',component:'./HelpCenter'},
    {path:'/EnterpriseCaseList',component:'./enterpriseCaseList'},
    {path:'/Developing',component:'./developing'},
    {path:'/PersonnelFiles',component:'./developing'},
    {path:'/ProductFile',component:'./developing'},
    {path:'/SupplierFile',component:'./developing'},
    {path:'/CustomerFile',component:'./developing'},
    {path:'/BankAccountFile',component:'./developing'},
    {path:'/RulesRegulations',component:'./developing'},
    {path:'/enterpriseInfo',component:'./enterpriseInfo'},
    {path:'/erpInformation',component:'./erpInformation'},
    {path:'/CaseDevelopment',component:'./CaseDevelopment'},
    {path:'/organization',component:'./organization'},
    {path:'/TaskList',component:'./taskList'},
    {path:'/AccountingSubjects',component:'./accountingSubjects'},
    {path:'/assessedBill',component:'./document'},
    {path:'/documentAnswerSet',component:'./documentAnswerSet'},
    {path:'/rejectOptionConfig',component:'./rejectOptionConfig'},
    {path:'/PBUDocumentAnswerSet',component:'./pBUDocumentAnswerSet'},
    {path:'/mPDFViewer',component:'./mPDFViewer'},
    {path:'/PBUDocumentDataInit',component:'./pBUDocumentDataInit'},
    {path:'/PBUDocumentU8Init',component:'../components/PBUDocumentDataInit/PBUDocumentU8Init'},
    {path:'/Weights',component:'./Weights'},
    {path:'/Preview',component:'./Preview'},
    {path:'/DataView',component:'./CourseLearning'},
    {path:'/ResourcePreset',component:'./ResourcePreset'},
    {path:'/TaskConfig',component:'./taskConfig'},
    {path:'/NotFound',component:'./NotFound'}
    ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 2
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
  proxy: {
    "/test": {
      "target": "https://tapi.seentao.com",
      "changeOrigin": true,
      "pathRewrite": { "^/test": "" }
    }
  },
  alias:{
    '@utils':path.resolve('./src/util'),
    '@components':path.resolve('./src/components'),
    '@pages':path.resolve('./src/pages'),
    '@util':path.resolve('./src/util'),
  },
  chainWebpack: (config) => {
    config.module.rules.store.delete('eslint')//禁用eslint
  }

}
