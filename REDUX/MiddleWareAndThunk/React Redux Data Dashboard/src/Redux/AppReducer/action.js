import axios from "axios"
import { COFFEEDATA, EMPLOYEEDATA, RESTAURANTDATA } from "./actionType"

export const fetchCoffeeData=()=>{
    return (dispatch, getState)=>{
       axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
       .then((res)=>{
            dispatch({type:COFFEEDATA, payload:res.data.data})
        })
        .catch((err)=>console.log(err))
    }    
}


export const fetchRestaurantData=()=>{
    return (dispatch, getState)=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
        .then((res)=>{
            console.log(res)
             dispatch({type:RESTAURANTDATA, payload:res.data.data})
         })
         .catch((err)=>console.log(err))
     }  
}

export const fetchEmployeeData=()=>{
    return (dispatch, getState)=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
        .then((res)=>{
             dispatch({type:EMPLOYEEDATA, payload:res.data.data})
         })
         .catch((err)=>console.log(err))
     }  
}