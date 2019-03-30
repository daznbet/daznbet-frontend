import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import modules from './modules'

const composedEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducers = combineReducers(modules)
const enhancers = composedEhancers(applyMiddleware(thunk))
const store = createStore(reducers, enhancers)

export default store
