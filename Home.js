import React from 'react'
import Header from './Header'
import Headar from './Headar'

function Home(props) {
  if(props.value){
    return <Headar/>
  }
  else{
    return <Header/>
  }
    
  
}

export default Home