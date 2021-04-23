import { combineReducers } from 'redux'
import userReducer from './userReducer'
import chatReducer from './chatReducer'
const reducers = combineReducers({
    userReducer,
    chatReducer
})
export default reducers