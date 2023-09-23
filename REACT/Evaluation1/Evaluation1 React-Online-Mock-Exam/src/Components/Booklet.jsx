import { useState } from "react";
import QuestionCard from "./QuestionCard";

const Booklet = () => {

  const [questions, setQuestions]=useState([]);
  const [score, setScore]=useState(0);
  const [load, setLoad]=useState(false);

  const fetchData=async()=>{
     const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`);
     const ans=await res.json();
     setQuestions(ans.data)
     setLoad(true);
  }

  const examEnded=()=>{
    setLoad(false);
    setScore(0);
  }

  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
      {
        load ? <div className="questions-container">
                {/* Append score and question card components here */}
                <h3>Score: {score}</h3>
                <button onClick={examEnded}>End Exam</button>
                {
                  questions?.map((elem, idx)=>{
                    return <QuestionCard key={idx} elem={elem} setScore={setScore}/>
                  })
                }
              </div> 
              : <div className="welcome-div">
                <h1>To begin the exam, click on the 'Start Exam' button below</h1>
                <button onClick={fetchData}>Start Exam</button>
              </div>
      }
    </div>
  );
};

export default Booklet;
