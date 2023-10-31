import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";

const CounterValue = () => {
  const [state, setState]=useState(0);

  // const counter =  useSelector((store)=>store.counter);
     const counter=store.getState().counter
     const forceUpdate=()=>{
         setState((pre)=>pre+1);
     }
     store.subscribe(forceUpdate)

  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
