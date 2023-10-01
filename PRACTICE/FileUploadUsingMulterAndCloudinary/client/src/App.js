import { useState } from "react";


function App() {
  const[img, setImg]=useState();
  const[url, setUrl]=useState('');

  const handleImg=(e)=>{
      console.log(e.target.files[0]);
      setImg(e.target.files[0]);
  }
  const uploadImage=(e)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append('Image', img);

    fetch(`http://localhost:8080/upload`, {
      method:"POST",
      body:formData
    })
    .then((res)=>res.json())
    .then((ans)=>setUrl(ans.url))
    .catch((err)=>console.log(err))
  }


  return (
    <div className="App">
       <form onSubmit={uploadImage} encType="multipart-data">
           <input type="file" onChange={handleImg} />
           <input type="submit" value='submit' />
       </form>
       
       <img src={url}/>
    </div>
  );
}

export default App;
