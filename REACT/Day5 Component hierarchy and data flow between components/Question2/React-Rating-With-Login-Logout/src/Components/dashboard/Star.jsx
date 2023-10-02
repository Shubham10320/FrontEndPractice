import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({color, clicked}) => {
  return <FaStar data-icon="star" onClick={clicked} style={{color:color}}/>;
};
export default Star;
