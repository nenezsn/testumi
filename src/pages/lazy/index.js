import React from 'react';
import dynamic from 'umi/dynamic';
const App = dynamic({
  loader: ()=>import(/* webpackChunkName:"util" */'@components/child'),
  // loader: ()=>new Promise(resolve=>setTimeout(() => {
  //   resolve()
  // }, 3000)).then(data=>import(/* webpackChunkName:"util" */'@components/child')),
  loading: function () {
    return <div>正在加载请稍等。。。。</div>
  }
});

function Index() {
  const [flag, setflag] = React.useState(false)
  const getLazyModule = () => {
    import(/* webpackChunkName:"util" */'@utils/index').then(data => {
      data.default(1, 2)
    })
  }
  const getLazyCom = () => {
    setflag(!flag)
  }
  return <div>
    <button onClick={getLazyModule}>按需加载模块</button>
    <button onClick={getLazyCom}>按需加载组件</button>
    {flag && <App />}
  </div>
}

export default Index
