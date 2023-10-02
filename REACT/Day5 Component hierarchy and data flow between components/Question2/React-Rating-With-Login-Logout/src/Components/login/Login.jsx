import {useState} from 'react';

const Login = ({setState}) => {
  const[info, setInfo]=useState({});

  const handleUser=(e)=>{
    e.preventDefault();
    if(info.username==='admin' && info.password==='1234'){
      setState(true);
    }else{
      alert('Invalid Details!!!!')
    }
  }

  return (
    <div>
      <form onSubmit={handleUser}>
        <input type="text" placeholder="username" name="username" onChange={(e)=>setInfo({...info, [e.target.name] : e.target.value})} />
        <input type="text" placeholder="password" name="password" onChange={(e)=>setInfo({...info, [e.target.name] : e.target.value})} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
