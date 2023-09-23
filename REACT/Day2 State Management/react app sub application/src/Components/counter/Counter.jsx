import { useState } from "react";
import Container from "../common/container/Container";
import Button from "../common/button/Button";

function Counter() {

  const[count, setCount]=useState(0);
  const incVal=()=>{
    setCount(count+1);
  }
  const decVal=()=>{
    setCount(count-1);
  }
  const resetVal=()=>{
    setCount(0);
  }
  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Count : {count}</h1>
      <div>
        {/* Add 3 buttons for INC, DEC, RESET using Button component */}
        <Button text="INC" click={incVal} disable={count>=10}/>
        <Button text="DEC" click={decVal}  disable={count==0}/>
        <Button text="RESET" click={resetVal} disable={count==0}/>
      </div>
    </Container>
  );
}

export default Counter;
