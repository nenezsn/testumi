import React, { Component } from 'react';
import { connect } from 'dva'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
function Count(props) {
  const add = () => {
    window.g_app._store.dispatch({
      type: 'tool/add'
    })
  }
  const sub = () => {
    props.dispatch({
      type: 'tool/sub'
    })
  }
const dispatch = useDispatch()
  const mul = () => {
    dispatch({
      type: 'tool/mul'
    })
  }

  return <div>
    <h4>{props.tool.count}</h4>
    <button onClick={add}>加</button>
    <button onClick={sub}>减</button>
    <button onClick={mul}>乘</button>
  </div>
}
const mapStateToProps = function (state) {
  return {
    tool: state.tool
  }
}
export default connect(mapStateToProps)(Count);
