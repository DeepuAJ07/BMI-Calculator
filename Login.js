import React, { useState } from 'react'
import '../Header/Login.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
const [login,setlogin]=useState({Email:"",Password:""})
const Navigate = useNavigate()
const Changefn=(data)=>{
setlogin({
  ...login,[data.target.name]:data.target.value
})
}
  const subfn = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4500/Login',login).then((Data)=>{
    
     if(Data.data.msg==='Login Sucessful'){
      localStorage.setItem("customerid", Data.data.Data._id);
      console.log(Data.data.Data._id);
      alert(Data.data.msg);
      Navigate('/CalculateBMI')
     }else if(Data.data.msg==='Data not Exists'){
      alert('Sign up to Continue')
      Navigate('/Signup')
     }
     else{
      alert('Incorrect Password')
     }
    }).catch((Error)=>{
      console.log(Error,'Error');
    })
  }
  return (
    <div className='Login'>
        <form onSubmit={subfn}>
            <input type='email'name='Email' placeholder='Enter your Email ID' required onChange={Changefn}></input><br></br>
            <input type='password'name='Password'placeholder='Enter the Password'required onChange={Changefn}></input><br></br>
            <button type='submit'>Submit</button>
            <Link to='/Signup'>Sign Up</Link>
        </form>
    </div>
  )
}

export default Login