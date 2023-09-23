import { useState } from "react";
import Option from "./Option";

const QuestionCard = (props) => {
  const {id, correctOptionIndex, options, question}=props.elem;
  const setScore=props.setScore;
  // console.log(score, setScore)

  const [textContent, setTextContent]=useState('Show Ans');
  const changeTextContent=()=>{
    if(textContent==='Show Ans'){
      setTextContent('Hide Ans');
    }else{
      setTextContent('Show Ans')
    }
  }

  const someStyle={
    border:"2px solid black",
    padding:"25px",
    textAlign:'center',
    margin:"auto",
    width:"40%",
    marginBottom:"15px"
  }

  return (
    <div className="question-card" style={someStyle} >
      {/* add question here */}
      <h3>{question}</h3>

      <div className="options">
        <Option key={id} option={options} setScore={setScore} correctOptionIndex={correctOptionIndex}/>
      </div>

      <div className="show-ans">
        <button onClick={changeTextContent} style={{background:"blue",marginTop:"10px", padding:"10px", color:"white", border:"none"}}>{textContent}</button>
        {
          textContent==='Hide Ans' ? <p>{options[correctOptionIndex]}</p> : null
        }
      </div>
    </div>
  );
};

export default QuestionCard;
