import {legacy_createStore as createStore} from 'redux'
import { reducer } from './reducer';

//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
const store = createStore(reducer)

export { store };
