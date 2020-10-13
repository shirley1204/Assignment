import {combineReducers} from 'redux'
import authReducer from './Authentication/AuthReducer'
import dropReducer from './Dropdown/DropdownReducer'


export default combineReducers({
    auth:authReducer,
    drop:dropReducer,
    
})