import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./pages/registration";
import Login from "./pages/login";
function App() {
  return ( 
    <div>
       <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
       
       </BrowserRouter> 
      
    </div> 
  );
}

export default App;
