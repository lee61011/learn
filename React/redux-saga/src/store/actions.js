import * as types from './action-types'

export default {
  add() {
    return { type: types.ADD }
  },
  thunkAdd() {
    return function(dispatch, getState) {
      setTimeout(() => {
        dispatch({type: types.ADD})
      }, 1000)
    }
  },
  sagaAdd() {
    return {type: types.ASYNC_ADD}
  }
}
