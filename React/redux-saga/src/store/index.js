import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
