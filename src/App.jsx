import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Question from './components/Questions/Question';
 

function App() {
   
    return (
    <> 
    <Header></Header>
    <Home></Home>
    <Question></Question>
    <ToastContainer></ToastContainer>
      
   
   </>
  )
}

export default App
