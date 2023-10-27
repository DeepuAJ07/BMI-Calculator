import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function Signup() {

  const[user,setuser]=useState({Name:"",Age:"",Email:"",Password:"",ConfirmPassword:""})
const Navigate = useNavigate()
  const Changefn=(data)=>{
    console.log(data.target);
    setuser({...user,[data.target.name]:data.target.value})

  }

  const subfn=(e)=>{
e.preventDefault()
console.log(user.Password);
console.log(user.ConfirmPassword);
if(user.Password===user.ConfirmPassword){
  axios.post('http://localhost:4500/Register',user).then((Data)=>{
    console.log(Data);
    alert('Sign Up Sucessful')
  Navigate('/Login')
  }).catch((Error)=>{
    console.log(Error,'Error');
  })
}else{
  alert('Password/Confirm Mismatch')
}

  }
  return (
    <div className='Signup'>
<form onSubmit={subfn}>
    <input type='text'name='Name' placeholder='Enter your Name'onChange={Changefn}></input>
    <input type='number'name='Age'placeholder='Enter your Age'onChange={Changefn}></input>
    <input type='email'name='Email'placeholder='Enter your Email'onChange={Changefn}></input>
    <input type='password'name='Password'placeholder='Enter the Password'onChange={Changefn}></input>
    <input type='password'name='ConfirmPassword'placeholder='Confirm Password'onChange={Changefn}></input>
    <button type='submit'>Sign Up</button>
    <Link to='/Login'>Already a User</Link>
</form>
    </div>
  )
}

export default Signup