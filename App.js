
import { useState } from 'react';
import './App.css';
import '../src/BMICalculator/Components/Header/Headar'
import Header from './BMICalculator/Components/Header/Header';
import Calculator from './BMICalculator/Components/Header/Hero/Calculator';
import Home from './BMICalculator/Components/Header/Home';
import Login from './BMICalculator/Components/Header/Login';
import Signup from './BMICalculator/Components/Header/Signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

const[status,setstatus]=useState(false)

  return (
    <BrowserRouter>
    <div className="App">
 <Home value={status}/>
 
 <Routes>
  <Route path='/'element={<Calculator/>}/>
 <Route path='/CalculateBMI'element={<Calculator/>}/>
  <Route path='/CalculateBMI/:Cus_id'element={<Calculator/>}/>
  <Route path='/Login'element={<Login/>}/>
  <Route path='/Signup'element={<Signup/>}/>
 </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
