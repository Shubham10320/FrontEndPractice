import { NavLink } from "react-router-dom"

function Navbar() {
    return(
        <div className = "navbar" style={{display:'flex', justifyContent:"space-around", padding:"10px", backgroundColor:"black"}}>
           <NavLink to="/coffee-data" style={{textDecoration:"none", color:"white"}}>CoffeeData</NavLink> 
           <NavLink to="/restaurant-data" style={{textDecoration:"none", color:"white"}}>RestaurantData</NavLink> 
           <NavLink to="/employee-data" style={{textDecoration:"none", color:"white"}}>EmployeeData</NavLink> 
        </div>
    )
}

export { Navbar }