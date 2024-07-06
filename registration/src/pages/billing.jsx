import React from 'react';
import { NavLink } from 'react-router-dom';

function Billing() {
  return (
    <>
        <div>
            <NavLink to='/'>HOME/</NavLink>
            <NavLink to='/'>CHECKOUT</NavLink>   
        </div>
        <h1>Billing deta</h1>     
    </>
  )
}

export default Billing;
