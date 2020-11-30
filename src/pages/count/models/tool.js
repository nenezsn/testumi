export default {
  namespace:'tool',
  state: {
    count: 2
  },

  reducers: {
    add(state,action){
      return Object.assign({},state,{count:state.count+1})
    },
    sub(state,action){
      return Object.assign({},state,{count:state.count-1})
    },
    mul(state){
      state.count *=2
    }
  },

  effects: {

  },

  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
}
