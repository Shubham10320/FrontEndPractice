import React from "react";

const CoffeeCard = (props) => {
  const {title, description, ingredients, image, id, price}=props.elem

  return <div>
    <div>
      <img src={image} alt={title} />
    </div>
    <div>
      <h2 className="title">{title}</h2>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <ul className="ingredient">
        {
          ingredients?.map((elem, idx)=>{
            return <li>{elem}</li>
          })
        }
      </ul>
    </div>
  </div>;
};

export default CoffeeCard;
