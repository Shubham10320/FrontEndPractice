import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/action";


// get all the todos from the redux store, and map them inside this component
const TodoList = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[])


  return (
    <div data-testid='todo-list-wrapper'>

      {/* map all the "individual/single" todo inside this div. */}
      <div data-testid="single-todo" >

      </div>


    </div>
  );
};

export default TodoList;
