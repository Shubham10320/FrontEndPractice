//Complete the reducer function logic inside the curly braces {}

import { ADD, REDUCE } from "./actionTypes";

const initObj={
    counter:10
};

const reducer = (state=initObj, action) => {
    const{type, payload}=action;
    switch(type){

        case ADD :
            return {...state, counter:state.counter+payload};
            
        case REDUCE:
            return {...state, counter:state.counter-payload};
            
        default :
           return state;
    }
};

export { reducer };
