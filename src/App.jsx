import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-[#FFF4E8]'>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
