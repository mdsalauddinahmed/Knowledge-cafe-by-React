import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/sideCart/SideCart';

function App() {
  

  return (
    <> 
    <Header></Header>
    <div className='container d-flex justify-content-between'>
     <div className="home_container">
        <Home></Home>
      </div>
      <div className="side_cart col-md-4 card">
         <SideCart></SideCart>
      </div>
     </div>
  
   
   </>
  )
}

export default App
