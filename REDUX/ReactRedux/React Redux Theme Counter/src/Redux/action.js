//DO NOT change the function names

import { ADD, REDUCE, CHANGE_THEME } from "./actionTypes";

const handleAdd = () => {
    return {type: ADD, payload: 1}
};

const handleReduce = () => {
    return {type: REDUCE, payload: 1}
};


const handleTheme = (val) => {
    return {type: CHANGE_THEME, payload:val}
};

export { handleAdd, handleReduce, handleTheme };
