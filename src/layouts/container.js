import React from 'react';
import withRouter from 'umi/withRouter';
import Link from 'umi/link'
import router from 'umi/router'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from './container.less'


class Container extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  onPush=()=>{
    router.push({
      pathname:'/',
      query:{
        name:'wangbing'
      }
    })
  }
  render() {
    return <div className={styles.container}>
      <div className={styles.nav}>
        <Link to='/'>首页</Link>
        <Link to='/info'>信息</Link>
        <a onClick={this.onPush}>学校</a>
      </div>
      <div className={styles.content}>
        {this.props.children}
      </div>
    </div>
  }
}
export default withRouter(Container)
