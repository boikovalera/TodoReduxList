import { combineReducers } from 'redux';
import filter from './filter/reducer'
import todos from './todos/reducer'
import form from './form/reducer'

export default combineReducers({
    filter,
    todos,
    form
})