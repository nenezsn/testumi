import withRouter from 'umi/withRouter'
import { fetch,connect } from 'dva'

function requestFetch(url, params = {}) {
  function querystring(body) {
    return Object.keys(params).map(item => {
      return `${item}=${params[item]}`
    }).join('&')
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring(params)
  }).then(res => res.json())
    .then(data => {
      return data
    })
}


function Info ({ location, history, match,info,dispatch }) {
  console.log('info', match.params.age,info)
  // MOCK
  function getinfo() {
    requestFetch('/api/get.info', { page: 1 }).then(data => {
      console.log('data', data)
    })
  }
  // 代理后端接口
  function getSchool() {
    requestFetch('/test/school/schoolAnalysis.province.get').then(data => {
      console.log('data', data)
    })
  }
    // model请求接口
    function getSchool2() {
      dispatch({
        type:'info/getApp'
      })
    }
  return <div>
    <button onClick={getinfo}>info</button>
    <button onClick={getSchool}>school</button>
    <button onClick={getSchool2}>school2</button>
  </div>
}

export default withRouter(connect(({info})=>({info}))(Info))
