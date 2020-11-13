export default {
  state: {
    appName: 'testumi'
  },

  reducers: {
    //统一格式更新state
    updateState(state, action) {
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        ...action.payload
      }
    }

  },

  effects: {

  },

  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
}
