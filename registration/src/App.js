import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./pages/registration";
import Login from "./pages/login";
import Billing from "./pages/billing";

function App() {
  return ( 
    <div>
       <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/billing" element={<Billing/>} />
        </Routes>
       
       </BrowserRouter> 
      
    </div> 
  );
}

export default App;
