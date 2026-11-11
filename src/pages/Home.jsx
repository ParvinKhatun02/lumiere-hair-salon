import React from "react";
import hero_image from "../assets/hero_image.png";
import { Scissors, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="relative min-h-[calc(100svh-56px)] w-full overflow-hidden bg-[#f8f3ef] lg:min-h-screen">
      {/* Desktop model image */}
      <div className="absolute inset-0 z-0 -translate-y-8 hidden lg:block pointer-events-none">
        <img
          src={hero_image}
          alt="Red-haired hair salon model"
          className="absolute right-[-15%] bottom-6 h-full w-[80%] object-contain object-right-bottom"
        />
      </div>

      {/* Mobile model image */}
      <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
        <img
          src={hero_image}
          alt="Red-haired hair salon model"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100svh-56px)] w-full  flex-col justify-center px-4 py-6 sm:px-8 sm:py-5 bg-black/20 backdrop-blur-[2px] rounded-r-2xl lg:min-h-screen lg:w-[60%] lg:justify-center lg:px-0 lg:py-16 lg:pl-16 lg:bg-transparent lg:backdrop-blur-none lg:rounded-none  xl:pl-24">
        {/* Tagline */}
        <p className="home-animate home-delay-1 mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5DCC5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-sm lg:text-[#A63D24] lg:drop-shadow-none">
          BEAUTY . CARE . CONFIDENCE
        </p>

        {/* Heading */}
        <h1 className="home-animate home-delay-2 flex max-w-xl flex-col font-serif text-5xl leading-[1.1] text-[#F5DCC5] drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)] sm:text-6xl lg:text-7xl lg:text-[#2A211E] lg:drop-shadow-none xl:text-8xl">
          Get Hair Style
          <span className="home-animate home-delay-3 italic text-[#F5DCC5] lg:text-[#A63D24]">
            You Deserve
          </span>
        </h1>

        {/* Description */}
        <p className="home-animate home-delay-4 mt-2 max-w-sm text-base leading-7 text-[#F5DCC5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] sm:text-lg lg:text-[#75645c] lg:drop-shadow-none">
          Experience premium hair care, expert styling and personalized
          treatments designed to bring out the best in you.
        </p>

        {/* Buttons */}
        <div className="home-animate home-delay-5 mt-5 flex flex-wrap items-center gap-4">
          <a
            href="#booking"
            className="flex items-center gap-2 rounded-3xl bg-[#A63D24] px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#7F2D1D]"
          >
            Book Your Appointment
            <ArrowRight size={18} strokeWidth={1.3} />
          </a>

          <a
            href="#services"
            className="rounded-3xl border border-[#F5DCC5] px-4 py-3 text-sm font-medium text-[#F5DCC5] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition duration-300 hover:border-[#E8C5A9] lg:border-[#A63D24] lg:text-[#7F2D1D] lg:drop-shadow-none"
          >
            Explore services
          </a>
        </div>

        {/* Salon features */}
        <div className="home-animate home-delay-6 mt-6 flex flex-wrap items-center gap-x-5 gap-y-5 sm:mt-8 lg:mt-14">
          <div className="flex items-center gap-1">
            <div className="flex h-11 w-8 items-center justify-center text-[#F5DCC5] lg:text-[#A63D24]">
              <Scissors size={25} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5DCC5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] lg:text-[#35251f] lg:drop-shadow-none">
                Expert Stylists
              </p>
              <p className="text-[10px] text-[#F5DCC5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] lg:text-[#75645c] lg:drop-shadow-none">
                Trained & Experienced
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex h-11 w-8 items-center justify-center text-[#F5DCC5] lg:text-[#A63D24]">
              <Sparkles size={25} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5DCC5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] lg:text-[#35251f] lg:drop-shadow-none">
                Premium Products
              </p>
              <p className="text-[10px] text-[#F5DCC5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] lg:text-[#75645c] lg:drop-shadow-none">
                Safe & Nourishing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex h-11 w-8 items-center justify-center text-[#F5DCC5] lg:text-[#A63D24]">
              <Heart size={25} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5DCC5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] lg:text-[#35251f] lg:drop-shadow-none">
                Happy Clients
              </p>
              <p className="text-[10px] text-[#F5DCC5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] lg:text-[#75645c] lg:drop-shadow-none">
                Thousands of Smiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
