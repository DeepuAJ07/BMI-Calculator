import React, { useEffect, useState } from 'react'
import '../Hero/Calculator.css'
import Headar from '../Headar'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom'

function Calculator() {
 
  const[Weight,setWeight]=useState('')
  const[Height,setHeight]=useState('')
  const[BMI,setBMI]=useState('')
  const[color,setcolor]=useState('grey')
  const[msg,setmsg]=useState('')
  const[UserData,setData]=useState([])
  const[show,setshow]=useState(true)
 const Navigate=useNavigate()
let C_id=localStorage.getItem("customerid")

const handleClick=(data)=>{
  console.log(data);
}


  const subfn=(e)=>{
e.preventDefault()
let result={
  Weight:Weight,Height:Height,BMI:(Weight / Math.pow( (Height/100), 2 )).toFixed(1),Date:new Date()
}
axios.post(`http://localhost:4500/Calculate/${C_id}`,result).then((Data)=>{

  console.log(Data);

  if(Data.data._message==='Calculator validation failed'){
    Navigate('/Login')
    alert('Login to Continue')
  }
  else{
    setBMI(Data.data.Data.BMI);
    if(Data.data.Data.BMI<=20){
      setcolor('yellow')
      setmsg('LOW')
    }
    else if(Data.data.Data.BMI>20&&Data.data.Data.BMI<=30){
      setcolor('green')
      setmsg('NORMAL')
    }
    else{
      setcolor('red')
      setmsg('HIGH')
    }
  }

//
  if(Data.data.Data.BMI<=20){
    setcolor('yellow')
    setmsg('LOW')
  }
  else if(Data.data.Data.BMI>20&&Data.data.Data.BMI<=30){
    setcolor('green')
    setmsg('NORMAL')
  }
  else{
    setcolor('red')
    setmsg('HIGH')
  }
  

}).catch((Error)=>{
  console.log(Error);
})
  }
  const Clickfn=()=>{
    console.log(C_id);
    axios.post(`http://localhost:4500/userData/${C_id}`).then((userData)=>{
    
  console.log(userData);
    setData(userData.data.Data);
 setshow(!show)
     
    }).catch((Err)=>{
      console.log(Err);
    })
  }





  return (

    <>
   <Headar/>
    <div className='Calculate'>
        <form onSubmit={subfn}>
            <input type='number'name='Height'placeholder='Enter your Height in cm'onChange={(e)=>{setHeight(e.target.value)}}></input>
            <input type='number'name='Weight'placeholder='Enter your Weight in kg'onChange={(e)=>{setWeight(e.target.value)}}></input>
            <button className='BMI'  type='submit'>Calculate BMI</button>
        <div style={{backgroundColor:color}}>
          <p>BMI : {BMI}</p>
          <p>{msg}</p>
        </div>
  
        </form>



       
    </div>
    <div className='userdata'>
      {show? <button  onClick={Clickfn}>Hide Details </button>: <button  onClick={Clickfn}>Show Details </button>} 
        </div>
    <div>
      {show? UserData.map((e)=>{
        return(
         <table className='data'>
<tr>
  <th>Name</th>
  <th>Age</th>
  <th>Email</th>
  <th>Weight</th>
  <th>Height</th>
  <th>BMI</th>
  <th>Date and Time</th>
  </tr>
  <tr>
  <td>{e.C_id.Name}</td>
            <td>{e.C_id.Age}</td>
            <td>{e.C_id.Email}</td>
            <td>{e.Weight}</td>
            <td>{e.Height}</td>
            <td>{e.BMI}</td>
            <td>{e.Date}</td>
  </tr>



         </table>

         
        )
      }):null}

    </div>

   </>
  )
}

export default Calculator
