import { useState } from "react";


function App() {
  const[img, setImg]=useState();
  const[url, setUrl]=useState('');
  const[data, setData]=useState({});

  const handleImg=async(e)=>{
    setImg(e.target.files[0]);
    const formData = new FormData(); //instead of formData we can use FileReader
    formData.append("Image", img);  
    try{
      const result= await fetch(`http://localhost:8080/upload`,{
        method:"POST",
        body:formData
      })
      const ans=await result.json()
      console.log(ans)
      setData({...data, [e.target.name]:ans.url})
    }catch(err){
      console.log(err)
    } 
  }





  const uploadImage=async(e)=>{
    e.preventDefault();
    console.log('data', data)
    try{
      const result= await fetch(`http://localhost:8080/addDetail`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          'Content-Type': "application/json"
        }
      })
      const ans=await result.json()
      console.log(ans)
    }catch(err){
      console.log(err)
    } 
  }


  const handleData=(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }


  return (
    <div className="App">
       <form onSubmit={uploadImage} encType="multipart-data">
           
           <input type="file" name="imgurl" onChange={(e)=>handleImg(e)} />
           <input type="text" onChange={(e)=>handleData(e)}  name="price" placeholder="enter price" />
           <input type="text" onChange={(e)=>handleData(e)} name="description" placeholder="enter description"/>
           <input type="text" onChange={(e)=>handleData(e)} name="name" placeholder="enter name" />
           <input type="submit" value='submit' />
       </form>
       
       <img src={url}/>
    </div>
  );
}

export default App;




// const TransformFileData = (file) => {
//   const reader = new FileReader();

//   if (file) {
//     reader.readAsDataURL(file);   
//     reader.onloadend = () => {
//       setProductImg(reader.result);
//     };
//   } else {
//     setProductImg("");
//   }
// };