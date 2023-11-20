import {legacy_createStore as createStore, combineReducers} from 'redux'
import { counterReducer } from './counterReducer'
import { themeReducer } from './themeReducer'

const combine=combineReducers({counterReducer, themeReducer});
const store=createStore(combine);
console.log("store",store);


export default store;
