import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {getProductReducer} from './reducer/ProductReducer'

const reducer: any = combineReducers({
    getProductReducer: getProductReducer,
})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;

