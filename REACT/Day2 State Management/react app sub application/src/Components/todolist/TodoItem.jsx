import Button from '../common/button/Button';
import todoItem from './TodoItem.module.css'
function TodoItem({key,idx, elem, handleDelete, handleToggle}) {
  return (
    <div data-testid="todo-item" className={todoItem.wrapper}>
      {/* Add the p tag, and required elements */}
       <p>{elem.title} - {elem.status ? 'Completed' : 'Not Completed'}</p>
      <div>
        {/* add the required buttons here using Button component */}
        <Button text="TOGGLE" click={()=>handleToggle(idx)}/>
        <Button text="DELETE" click={()=>handleDelete(idx)}/>
      </div>
    </div>
  );
}

export default TodoItem;
