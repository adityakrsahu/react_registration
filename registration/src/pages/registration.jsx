import React from 'react';
import '../assets/styles/index.css'
import { NavLink } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

function Registration() {
  return (
    <>
    <div className="login">
        <img className="login__bg" src="https://raw.githubusercontent.com/bedimcode/animated-login-form/1b0a04c9d3f47258bd1da07550571c23fadd1327/assets/img/login-bg.png" alt="" />
        <div  className="login__form1">
           <h1 className="login__title1">Registration</h1>

           <div className="login__inputs">
              <div className="login__box">
                <input type="text" placeholder="Name" required className="login__input"/>
                <FaUser className='icon' />
              </div>
              <div className="login__box">
                <input type="tex" placeholder="Mobile" required className="login__input"/>
                <IoMdCall className='icon' />
              </div>

              <div className="login__box">
                <input type="email" placeholder="Email ID"   required className="login__input"/>
                <i className="ri-mail-fill"></i>
              </div>

              <div className="login__box">
                 <input type="password" placeholder="Password"  required className="login__input"/>
                 <FaLock className='icon' />
              </div>
           </div>

           <div className="login__check">
              <div className="login__check-box">
                 <input type="checkbox" className="login__check-input" id="user-check"/>
                 <label for="user-check" className="login__check-label">Remember me</label>
              </div>
           </div>
           <button type="submit"  className="login__button">Register</button>
           <div className="login__register">
             Don't have an login? <NavLink to='/'>Login Page</NavLink>

            </div>
        </div>
        
     </div> 
    
    </>
  )
}

export default Registration;