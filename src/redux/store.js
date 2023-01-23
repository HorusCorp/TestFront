
import {rootReducer} from './rootReducer';
import {legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

let store = createStore(rootReducer, composeWithDevTools())

export {store}