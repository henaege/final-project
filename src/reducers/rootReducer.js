import {combineReducers} from 'redux'
import RegisterReducer from './RegisterReducer'

const rootReducer = combineReducers({
    // Inside here, we pass each reducer as a key-value pair. Each key will be available as a piece of state later
    registerReducer: RegisterReducer

})

export default rootReducer