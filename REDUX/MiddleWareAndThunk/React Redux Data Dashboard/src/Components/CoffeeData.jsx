import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoffeeData } from '../Redux/AppReducer/action'

export default function CoffeeData() {
   const dispatch=useDispatch()
   const selector=useSelector((coffee)=>coffee.coffeeData)

   useEffect(()=>{
      dispatch(fetchCoffeeData())
   },[])

  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont"  style={{display:'grid', gridTemplateColumns:"repeat(4, 1fr)", width:"80%", margin:"auto"}} >
        {/* map the below div against your coffee data */}
        {
          selector && selector.map((elem, idx)=>{
             return  <div className = "coffee-item" key={idx}>
             <img src={elem.image} className = "image" alt = "img" width="80%" height="80%"/>
             <div className = "title">{elem.title} </div>
             <div className = "price">{elem.price} </div>
           </div>
          })
        }
    </div>
   </div>
  )
}


