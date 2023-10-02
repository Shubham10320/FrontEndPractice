import React from "react";
import {useState} from 'react';
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";


const Comment = (props) => {
  const{data}=props;
  const[title, setTitle]=useState(data.title);
  const[color, setColor]=useState(data.color);
  const[flag, setFlag]=useState(true);
  const handleFlag=()=>{
    setFlag(false);
  }

  return flag ?  ( 
    
    <div className="ratingcard">
      {/* Add title in h1 tag and StarRating component */}
      <h1 style={{color:color}}>{title}</h1>
      <StarRating data={data} setTitle={setTitle} setColor={setColor}/>
      <br />
      <FaTrash data-icon="trash"  onClick={handleFlag}/>
    </div>
  ) : '';
};
export default Comment;
