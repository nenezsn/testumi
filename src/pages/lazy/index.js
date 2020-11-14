import Cal from '../../components/cal'
export default function(){
  function getLazyModule(){
    import(/* webpackChunkName:"util" */'../../util/index').then(data=>{
      data.default(1,2)
    })
  }
  return <div>
    <button onClick={getLazyModule}>按需加载模块</button>
    <Cal/>
  </div>
}
