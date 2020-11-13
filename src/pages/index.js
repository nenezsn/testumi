import { connect } from 'dva'
 function Index(props){
return <div>首页{process.env.TEST}</div>
}
export default connect(({app})=>({app}))(Index)
