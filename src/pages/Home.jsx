import React from "react";
import hero_image from "../assets/hero_image.png";
import { Scissors, Sparkles, Heart, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f8f3ef]">
      {/* Large model image — no cropping, no gradient */}
      <div className="absolute inset-0 z-0 -translate-y-8 hidden lg:block pointer-events-none">
        <img
          src={hero_image}
          alt="Red-haired hair salon model"
          className="absolute right-[-15%] bottom-6 h-full w-[80%] object-contain object-right-bottom"
        />
      </div>

      {/* Left content — same background as the page */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-center -translate-y-6 px-1 py-16 sm:px-10 lg:w-[60%] lg:pl-16 xl:pl-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#A63D24] sm:text-sm">
          BEAUTY . CARE . CONFIDENCE
        </p>

        <h1 className="flex flex-col max-w-xl font-serif text-5xl leading-[1.1] text-[#2A211E] sm:text-6xl lg:text-7xl xl:text-8xl">
          Your Hair,
          <span className="italic text-[#A63D24]">Our Passion</span>
        </h1>

        <p className="mt-2 max-w-sm text-base leading-7 text-[#75645c] sm:text-lg">
          Experience premium hair care, expert styling and personalized
          treatments designed to bring out the best in you.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button className="bg-[#A63D24] flex gap-2 px-4 py-3 text-sm rounded-3xl font-medium text-white transition duration-300 hover:bg-[#7F2D1D]">
            Book Your Appointment 
            <span><ArrowRight size={18} strokeWidth={1.3}/></span>
             </button>

          <button className="border border-[#35251f]/30 px-4 py-3 text-sm font-medium rounded-3xl text-[#35251f] transition duration-300 hover:border-[#a66a57] hover:text-[#a66a57]">
            Explore services
          </button>
        </div>

        {/* Salon features */}
        <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-5">
          {/* Expert Stylists */}
          <div className="flex items-center gap-1">
            <div className="flex h-11 w-8 items-center justify-center  text-[#A63D24]">
              <Scissors size={25} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#35251f]">
                Expert Stylists
              </p>
              <p className="text-[10px] text-[#75645c]">Trained & Experienced</p>
            </div>
          </div>

          {/* Premium Products */}
          <div className="flex items-center gap-1">
            <div className="flex h-11 w-8 items-center justify-center  text-[#A63D24]">
              <Sparkles size={25} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#35251f]">
                Premium Products
              </p>
              <p className="text-[10px] text-[#75645c]">Safe & Nourising</p>
            </div>
          </div>

          {/* Happy Clients */}
          <div className="flex items-center gap-1">
            <div className="flex h-11 w-8 items-center justify-center  text-[#A63D24]">
              <Heart size={25} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#35251f]">
                Happy Clients
              </p>
              <p className="text-[10px] text-[#75645c]">Thousands of Smiles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="relative z-0 h-[65vh] w-full lg:hidden">
        <img
          src={hero_image}
          alt="Red-haired hair salon model"
          className="h-full w-full object-contain object-bottom"
        />
      </div>
    </section>
  );
};

export default Home;
