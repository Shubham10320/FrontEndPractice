//Complete the reducer function logic inside the curly braces {}

import { CHANGE_THEME } from "./actionTypes";

// the theme initstate shouldbe light
const initState={
    theme:'light'
}
const themeReducer = (state=initState, {type, payload}) => {
    switch(type){
        case CHANGE_THEME:
            return {...state, theme:payload}
        default :
        return state;
    }
};

export { themeReducer };
