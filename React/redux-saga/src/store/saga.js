import { put, takeEvery, all, delay, call, apply } from 'redux-saga/effects'
import * as types from './action-types'


function* asyncAdd() {
  console.log('asyncAdd ---------- ')
  // # 异步方案一
  yield delay(1000)
  // # 异步方案二
  // yield call(delay, 2000)
  // # 异步方案三
  // yield apply({name:'zhangsan'}, delay, 3000)

  yield put({type:types.ADD})
}

// 这就是我们的watch saga 负责监听异步加1的动作
function* watchAdd() {
  // 我们要监听每一次派发ASYNC_ADD的动作  yield产出的意思 就是生产出一个effect对象(一个普通对象)发给saga中间件 saga中间件会去监听所有的ASYNC_ADD动作 当这个动作被派发的时候 就会执行asyncAdd这个worker saga
  // takeEvery 不会阻塞当前saga执行
  yield takeEvery(types.ASYNC_ADD, asyncAdd)
}
function* hello() {
  console.log('hello saga')
}

export default function* rootSaga() {
  console.log('开始启动rootSaga')
  yield all([watchAdd(), hello()]) // 如果项目中有多个watcher saga都要启动
  console.log('rootSaga启动结束')
}
