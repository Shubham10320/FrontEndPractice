import { useState } from 'react';
import Button from '../common/button/Button';
import inputTodo from './AddTodo.module.css'

function AddTodo({addTask}) {
  const[task, setTask]=useState('')

  return (
    <div>
      {/* Add a input tag here and a button to "ADD" with the help of `Button` component */}
      <input placeholder="Add a new todo" className={inputTodo.input} onChange={(e)=>setTask(e.target.value)}/>
      <Button text="ADD" click={()=>addTask(task)}/>
    </div>
  );
}

export default AddTodo;
