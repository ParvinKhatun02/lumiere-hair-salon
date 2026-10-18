import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './component/Booking';
import About from './pages/About';
import Gallery from './pages/Gallery';
import OurTeam from './pages/OurTeam';

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-[#FFF4E8]'>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/our-team' element={<OurTeam/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
