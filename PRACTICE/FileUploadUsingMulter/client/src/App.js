import { useEffect, useState } from "react";


function App() {
 const[image, setImage]=useState();


  const handleImageData=(e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  const submitImage=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('Image', image);
    console.log('formData', formData)
    try{
      let result= await fetch(`http://localhost:8080/upload`,{
        method:"POST",
        body:formData
      })
      let ans=await result.json();
      console.log(ans);
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="App">
      <form onSubmit={submitImage} encType="multipart/form-data">
         <input type="file" onChange={handleImageData}/>
         <input type="submit" value='submit'/>
         <img src={require}/>
      </form>
    </div>
  );
}

export default App;
