import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

const data = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    quantity: 1,
  },
  {
    id: 2,
    name: "Chips",
    price: 10,
    quantity: 1,
  },
];

function App() {
  const[items, setItems]=useState(data);
  
  const totalPrice=items.reduce((acc, elem)=>{
    return acc+elem.price;
  },0)
  let[total, setTotal]=useState(totalPrice);

  
  const handleQty=(idx, q)=>{
    let obj=items[idx]
    console.log(obj);
    let ans=q===1 ? true : false;
    if(ans){
      setTotal(total=total+obj.price)
    }else{
      setTotal(total=total-obj.price)
    }
  }


  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {
          data?.map((elem, idx)=>{
            return <Product index={idx} {...elem} handleQty={handleQty}/>
          })
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {/* The total price should be in this syntax `Total :123` */}
        Total :{total}
      </h1>
    </div>
  );
}

export default App;
