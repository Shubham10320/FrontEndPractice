import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {
	const dispatch=useDispatch()
	const selector=useSelector((employee)=>employee.employeeData)
	useEffect(()=>{
		dispatch(fetchEmployeeData())
	},[])

	console.log(selector)

	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont" style={{display:'grid', gridTemplateColumns:"repeat(4, 1fr)",justifyContent:"space-between", width:"80%", margin:"auto"}}>
				{/* Map the below div against yoru employee data */}
				{
					selector && selector.map((elem, idx)=>{
						return  <div className="employee" style={{ width: "250px" }}>
						<img className="image" src={elem.image} alt="img" width="70%" />
						<div className="name">{elem.name}</div>
						<div className="gender"> {elem.gender}</div>
						<div className="department"> {elem.department}</div>
					</div>
					})
				}
			</div>
		</div>
	);
}
