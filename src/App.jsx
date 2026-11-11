import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './component/Booking';
import About from './pages/About';
import Gallery from './pages/Gallery';
import OurTeam from './pages/OurTeam';
import Footer from './component/Footer';

function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

         <section id="booking">
          <Booking />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="ourteam">
          <OurTeam/>
        </section>

        <section id="footer">
          <Footer/>
        </section>

      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
