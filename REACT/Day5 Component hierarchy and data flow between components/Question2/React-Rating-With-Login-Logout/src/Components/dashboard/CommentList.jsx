import React from "react";
import Comment from "./Comment";


const CommentList = (props) => {
  const{data}=props

  return (
    <>
    {/* Add you comments with the help of Comment component using map */}
     {
      data?.map((elem, idx)=>{
        return <Comment key={idx} data={elem}/>
      })
     }
    </>
  );
};
export default CommentList;
