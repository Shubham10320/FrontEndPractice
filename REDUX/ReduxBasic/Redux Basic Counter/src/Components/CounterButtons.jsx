import React from "react";
import {useDispatch} from 'react-redux'
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";

const CounterButtons = () => {
  const dispatch=useDispatch(); //to access the reducer;
  //reducer function is a pure function which is use to store the data in redux store;

  const incCounterValue=()=>{
       dispatch(handleAddActionObj())
  }
  const decCounterValue=()=>{
      // dispatch(handleReduceActionObj())
      store.dispatch(handleReduceActionObj())
  }

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={incCounterValue}>ADD</button>
      <button data-testid="reduceButton" onClick={decCounterValue}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;



//Redux Provide reducer and dispatch,
//component gives data to dispatch in a form of obj which is known as action obj,
// action obj take 2 parameter called type and payload
//dispatch function call to reducer function 
// and reducer is a function which is use to store data in redux store which is internally an obj



// component ---------------------->dispatch-------------------->reducer--------------------->store
//                  (action obj)

