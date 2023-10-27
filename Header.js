import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
 const[auth,setauth]=useState(false)


  return (
  <header>
    <div>
        <span className='logo'>BMI Calculator</span>
    </div>
    <div>
  <ul>
 
 <li>
                <Link to='/CalculateBMI'>Calculate BMI</Link>
            </li>
            <li>
           <Link to='/Login'>Login</Link>
       </li>

            <li>
                <Link to='Signup'>Sign Up</Link>
            </li></ul>
       
    </div>
  </header>
  )
}

export default Header