import Star from "./Star";
import {useState} from 'react';

const StarRating = ({data, setTitle, setColor}) => {
  const arr=[1, 2, 3, 4, 5];
  const[rating, setRating]=useState(data.rating);
  const updateRating=(idx)=>{
       setRating(idx);
       if(idx===1){
         setTitle('Very Poor')
         setColor('red')
       }else if(idx===2){
        setTitle('Poor')
        setColor('yellow')
       }else if(idx===3){
        setTitle('good')
        setColor('orange')
       }else if(idx===4){
        setTitle('Very Good')
        setColor('lightgreen')
       }else if(idx===5){
        setTitle('Excellent')
        setColor('green')
       }
  }

  return (
    <>
      {/* Add stars here with the help of Star component */}
      {
        arr?.map((elem, idx) => <Star clicked={()=>updateRating(idx+1)} color={idx<rating ? 'yellow' : 'gray'}/>)
      }
      
      {/* add p tag here in this format {selectedStars} of {totalStars} like 1 of 5*/}
      <p>{rating} of {arr.length}</p>
    </>
  );
};
export default StarRating;
