import { useState } from "react";

// import module.css here;
const Product = ({name,index,price,quantity,id,handleQty}) => {
  let[qty, setQty]=useState(quantity);

  const incQuantity=()=>{
      setQty(qty+1)
      handleQty(index, 1)
  }
  const decQuantity=()=>{
      handleQty(index, -1)
      setQty(qty-1)
  }

  return (
    <>
      <div data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={incQuantity}>+</button>
        <h2 data-testid="product-quantity">{qty}</h2>
        <button data-testid="quantity-decrement" onClick={decQuantity} disabled={qty===0}>-</button>
      </div>
    </>
  );
};
export default Product;
