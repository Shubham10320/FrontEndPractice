import { useState } from "react";

const Option = ({option, correctOptionIndex, setScore}) => {
  
  const [right, setRight]=useState(false);
  const[selected, setSelected]=useState(false)

  const checkRightAnswer=(idx)=>{
    setSelected(true);
    if(idx===correctOptionIndex){
      setScore((score)=>score+1)
    }
  }
  

  return <div data-testid="option" style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"15px"}}>
    {
      option?.map((elem, idx)=>{  
        return selected ? <button disabled={true} onClick={()=>checkRightAnswer(idx)} className={idx===correctOptionIndex ? 'bgGreen' : "bgRed"}>{elem}</button> : <button onClick={()=>checkRightAnswer(idx)}>{elem}</button>
      })
    }
  </div>;
};

export default Option;
