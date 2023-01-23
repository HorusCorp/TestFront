import {buyReducer, BUY_KEY} from './BuyRedux/buy.reducer'
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    [BUY_KEY] : buyReducer
})

export {rootReducer}