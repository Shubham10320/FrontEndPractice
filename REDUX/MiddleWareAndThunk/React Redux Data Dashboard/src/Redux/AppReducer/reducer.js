import * as types from "./actionType";
import {COFFEEDATA, RESTAURANTDATA, EMPLOYEEDATA} from './actionType'
const initialState = {
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, {type, payload}) => {
  
  switch(type){
    case COFFEEDATA:
      return {...state, coffeeData:payload}

    case RESTAURANTDATA:
      return {...state, restaurantData:payload}

    case EMPLOYEEDATA:
      return {...state, employeeData:payload}

    default :
    return state;
  }
};

export { reducer };
