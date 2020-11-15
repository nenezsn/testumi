import { connect } from 'dva'
import { Button } from 'antd'
import $ from 'jquery'
function Index(props) {
  function changeColor() {
    $('#test').css({ color: 'red' })
  }
  return <Button onClick={() => changeColor} id='test'>首页</Button>
}
export default connect(({ app }) => ({ app }))(Index)
