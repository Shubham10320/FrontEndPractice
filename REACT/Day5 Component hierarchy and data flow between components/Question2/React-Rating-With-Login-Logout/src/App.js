import { useState } from "react";
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/login/Login";


const App = () => {
  const[state, setState]=useState(false);

  
  return (
    <div className="App">
      {/* Either Dashboard or Login component should be visible at a time */}
      {
        state ? <Dashboard setState={setState}/> : <Login setState={setState}/>
      }
    </div>
  );
};

export default App;
