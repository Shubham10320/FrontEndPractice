import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData, fetchRestaurantData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
	const dispatch=useDispatch()
	const selector=useSelector((store)=>store.restaurantData)
	useEffect(()=>{
		dispatch(fetchRestaurantData())
	},[])
	console.log(selector)
	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont">
				{/* Map the below div against your restaurant Data */}
				{
					selector && selector.map((elem, idx)=>{
						return <div className="restaurant_item">
						<img className="image" src={elem.image} alt="img" width="70%" />
						<div className="name">{elem.name} </div>
						<div className="type">{elem.type} </div>
						<div className="rating"> {elem.rating}</div>
						<div className="number_of_votes">{elem.number_of_votes} </div>
					</div>
					})
				}
			</div>
		</div>
	);
}
