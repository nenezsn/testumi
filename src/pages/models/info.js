import request from '../../util/request'

export default {
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
    *getApp({ payload }, { call, put, select }) {
      const data = yield call(request,'school/schoolAnalysis.province.get',{name:1})
      console.log('data', data)
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  }
}
