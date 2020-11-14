import { connect } from 'dva'
import { Button } from 'antd'
 function Index(props){
   console.log('222',process.env)
   console.log('222',process.env.TEST)
return <Button>首页</Button>
}
export default connect(({app})=>({app}))(Index)
