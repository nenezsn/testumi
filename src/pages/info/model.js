import request from '@util/request'

export default {
  namespace:'info',
  state: {
    schools:[]
  },
  reducers: {
    updateState(state,action){
      return {
        ...state,
        ...action.pyload
      }
    }
  },
  effects: {
    *getApp({ payload }, { call, put, select,fork }) {/*fork不阻塞*/
      const data = yield call(request,'school/schoolAnalysis.province.get',{name:1})
      console.log('data', data)
      return 123
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  }
}
