import React, { Component } from 'react';
import { connect } from 'dva'
class Count extends Component {
  add=()=>{
    this.props.dispatch({
      type:'tool/add'
    })
  }
  sub=()=>{
    this.props.dispatch({
      type:'tool/sub'
    })
  }
  componentDidMount(){
    console.log('g_app._store',window.g_app._store.getState())
    window.g_app._store.dispatch({
      type:'tool/add'
    })
  }
  render() {
    return (
      <div>
          <h4>{this.props.tool.count}</h4>
          <button onClick={this.add}>加</button>
          <button onClick={this.sub}>减</button>
      </div>
    );
  }
}
const mapStateToProps=function(state){
  return {
    tool:state.tool
  }
}
export default connect(mapStateToProps)(Count);
