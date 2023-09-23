import React,{useState} from "react";
import CoffeeCard from "../component/CoffeeCard";

const Coffee = () => {
  const[data, setData]=useState([]);

  const fetchData=async()=>{
    console.log("hii")
    try{
       let response=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`);
       let answer=await response.json();
       setData(answer)
       console.log(data)
    }catch(err){
      console.log(err)
    }
  }



  return (
    <div>
      {/* Create Button `Get Coffee` here */}
      <button onClick={fetchData}>Get Coffee</button>

      <div className="coffee_container">
        {/* Populate coffee data inside CoffeeCard.jsx */}
        {
          data.map((elem, idx)=>{
            return <CoffeeCard elem={elem}/>
          })
        }
      </div>
    </div>
  );
};

export default Coffee;
