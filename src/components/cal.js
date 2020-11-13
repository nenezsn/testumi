import dynamic from 'umi/dynamic';

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const App = dynamic({
  loader: async function() {
    await delay(/* 1s */1000);
    return () => <div>I will render after 1s</div>;
  },
  loading:function(){
    return <div>正在加载请稍等。。。。</div>
  }
});
export default App
