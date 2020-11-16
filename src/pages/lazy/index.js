import React from 'react';
import dynamic from 'umi/dynamic';
const App = dynamic({
  loader: async function () {
    return () => <div>I will render after 1s</div>;
  },
  loading: function () {
    return <div>正在加载请稍等。。。。</div>
  }
});
class Index extends React.Component {
  state = {
    flag: false
  }
  getLazyModule = () => {
    import(/* webpackChunkName:"util" */'../../util/index').then(data => {
      data.default(1, 2)
    })
  }
  render() {
    return <div>
      <button onClick={this.getLazyModule}>按需加载模块</button>
      <button onClick={() => this.setState({ flag: !this.state.flag })}>加载</button>
      {<App />}
    </div>
  }
}

export default Index
