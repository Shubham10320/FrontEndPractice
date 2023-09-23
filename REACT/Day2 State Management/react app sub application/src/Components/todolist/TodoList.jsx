import { useState } from "react";
import Container from "../common/container/Container";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  const[todo, setTodo]=useState([]);


  const addTask=(value)=>{
    console.log(value)
    const obj={
      title:value,
      status:false
    }
    setTodo([...todo, obj])
  }

  const handleToggle=(idx)=>{
      console.log("idx", idx)
      const updatedData=todo.map((elem, index)=>{
        return idx===index ? {...elem, status:!elem.status} : elem;
      })
      setTodo(updatedData)
  }

  const handleDelete=(index)=>{
     const data=todo.filter((elem, idx)=>{
      return idx===index ? '' : elem
     })
     setTodo(data)
  }

  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Todo List</h1>
      {/* Add AddTodo component here */}
      <AddTodo addTask={addTask}/>
      <ul>
        {/* map all the todo's here with the help of TodoItem component */}
        {
          todo.map((elem, idx)=>{
            return <TodoItem key={idx} idx={idx} elem={elem} handleDelete={handleDelete} handleToggle={handleToggle} />
          })
        }
      </ul>
    </Container>
  );
}

export default TodoList;
