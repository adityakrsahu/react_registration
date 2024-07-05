import React from 'react'
import '../assets/styles/index.css';
import { NavLink } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className="login">
      <img className="login__bg" src="https://raw.githubusercontent.com/bedimcode/animated-login-form/1b0a04c9d3f47258bd1da07550571c23fadd1327/assets/img/login-bg.png" alt="" />
        <form action="" className="login__form">
           <h1 className="login__title">Login</h1>

           <div className="login__inputs">
              <div className="login__box">
                
                 <input type="email" placeholder="Email ID"   name='email' required  className="login__input"/>
                 <FaUser className='icon' />
              </div>

              <div className="login__box">
                  
                 <input type="password" placeholder="Password"  required name='pass' className="login__input"/>
                 <FaLock className='icon' />
              </div>
           </div>

           <div className="login__check">
              <div className="login__check-box">
                 <input type="checkbox" className="login__check-input" id="user-check"/>
                 <label for="user-check" className="login__check-label">Remember me</label>
              </div>

              <NavLink  to="/" className="login__forgot">Forgot Password?</NavLink>
           </div>

           <button type="submit" className="login__button">Login</button>

           <div className="login__register">
              Don't have an account? <NavLink to='/registration'>Register</NavLink>
           </div>
        </form>
     </div> 
      
    </>
  )
}

export default Login;
