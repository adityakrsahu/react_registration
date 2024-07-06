import '../assets/styles/index.css'
import { NavLink } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';

function Registration() {

  const [register_input, SetRegisterInput] = useState({})


  const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        SetRegisterInput(values=>({...values,[name]:value}));
    }

  const handleSubmit=()=>{
    let url="http://127.0.0.1:8000/CustomerList/";

        axios.post(url,register_input).then((response)=>{
            alert("data added successfully")
        })
  }

  return (
    <>
    <div className="login">
        
        <div  className="login__form1">
           <h1 className="login__title1">Registration</h1>

           <div className="login__inputs">
              <div className="login__box">
                <input type="text" placeholder="Name" name='name' onChange={handleInput} required className="login__input"/>
                <FaUser className='icon' />
              </div>
              <div className="login__box">
                <input type="tex" placeholder="Mobile" name='mobile' onChange={handleInput} required className="login__input"/>
                <IoMdCall className='icon' />
              </div>

              <div className="login__box">
                <input type="email" placeholder="Email ID" name='email' onChange={handleInput}   required className="login__input"/>
                <i className="ri-mail-fill"></i>
              </div>

              <div className="login__box">
                 <input type="password" placeholder="Password" name='password' onChange={handleInput}  required className="login__input"/>
                 <FaLock className='icon' />
              </div>
           </div>

           <div className="login__check">
              <div className="login__check-box">
                 <input type="checkbox" required className="login__check-input" id="user-check"/>
                 <label for="user-check" className="login__check-label">Remember me</label>
              </div>
           </div>
           <button type="submit" onClick={handleSubmit}  className="login__button">Register</button>
           <div className="login__register">
             Don't have an login? <NavLink to='/'>Login Page</NavLink>

            </div>
        </div>
        
     </div> 
    
    </>
  )
}

export default Registration;