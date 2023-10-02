import { useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { useState } from "react";
import CountriesCard from "./CountriesRow";
import Pagination from "./Pagination";

function Countries() {

const[data, setData]=useState([]);
const[load, setLoad]=useState(true);
const[page, setPage]=useState(1);
const[totalPages, setTotalPages]=useState(0)

let fetchData=(page)=>{
  setLoad(true);
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)  //page=2&limit=5&orderBy=desc
  .then((res)=>res.json())
  .then((ans)=>{
    setData(ans.data) 
    setLoad(false)
    setTotalPages(ans.totalPages)
  }).catch((err)=>console.log(err))
}


  useEffect(()=>{
    fetchData(page)
  }, [page])

  let onChange=(p)=>{
     setPage(p)
  }

  if(load){
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container">
          {/* Show the CountriesRow here  */}
           {
            data.map((elem, idx)=>{
              return <CountriesCard key={idx} {...elem}/>
            })
           }
        </tbody>
      </table>
      <div>
        {/* Pagination */}
        <Pagination current={page} onChange={onChange} total={totalPages} />
      </div>
    </div>
  );
}

export default Countries;