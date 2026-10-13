import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './component/Booking';

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-[#FFF4E8]'>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/booking' element={<Booking/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
