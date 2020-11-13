export default {
  state: {
    count: 1
  },

  reducers: {
    add(state,action){
      return Object.assign({},state,{count:state.count+1})
    },
    sub(state,action){
      return Object.assign({},state,{count:state.count-1})
    }
  },

  effects: {

  },

  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
}
