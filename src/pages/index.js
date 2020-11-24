import index from '@utils/index'
import Child from '@components/child'
function Index(props) {
return <div>
    <h3>首页</h3>
    <Child/>
    {props.children}</div>
}
export default Index
