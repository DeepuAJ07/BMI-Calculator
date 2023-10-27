import React from 'react'
import '../Header/Headar.css'
import { Link } from 'react-router-dom'
function Header() {
    const Logout=()=>{
        window.localStorage.clear()
    }
  return (
  <header className='Logout'>
    <div>
        <span className='logo'>BMI Calculator</span>
    </div>
    <div>
        <ul>
       
           <li>
            <Link to='/Signup'onClick={Logout}>Logout</Link>
           </li>
           
        </ul>
    </div>
  </header>
  )
}

export default Header