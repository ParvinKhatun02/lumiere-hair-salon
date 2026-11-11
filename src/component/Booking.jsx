
import React, { useState } from "react";
import booking from "../assets/booking2.png";
import Calendar from "./Calendar";

const Booking = () => {
  const [appointmentDate, setAppointmentDate] = useState(null);

  return (
    <section className="flex w-full flex-col items-center gap-8 bg-[#F1E7DD] px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">

      {/* Left Side - Booking Information */}
      <div className="flex w-full flex-col gap-3 sm:max-w-xl lg:w-[30%] lg:max-w-none lg:shrink-0 lg:px-2 xl:px-6">

        <h2 className='font-["Cormorant_Garamond"] text-4xl font-bold text-[#35251f] sm:text-5xl'>
          Booking
        </h2>

        <p className="text-xs leading-5 text-black sm:text-sm">
          Ready for a transformative experience? Book Your appointment now at
          LUMIERE and let us craft a style that defines you.
        </p>

        <div className="flex h-40 w-full items-end justify-center overflow-hidden rounded-xl bg-pink-200 sm:h-52 lg:h-56">
          <img
            src={booking}
            alt="LUMIÈRE salon booking"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Right Side - Calendar and Form */}
      <div className="flex w-full min-w-0 flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-start md:justify-center lg:flex-1 lg:gap-6 xl:gap-10">

        {/* Calendar */}
        <div className="w-full min-w-0 md:flex-1 md:max-w-[380px]">
          <Calendar onDateSelect={setAppointmentDate} />
        </div>

        {/* Booking Form */}
        <div className="w-full min-w-0 sm:max-w-[380px] md:w-[45%] md:shrink-0 lg:w-[280px] lg:max-w-[280px]">

          <form className="w-full space-y-2 rounded-xl border border-[#7F2D1D] bg-[#F3E2D9] p-4 sm:p-6">

            <h2 className="text-center font-['Cormorant_Garamond'] text-2xl font-bold text-[#35251f]">
              We will call you
            </h2>

            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border-0 border-b border-[#a66a57] bg-transparent px-1 py-2 font-['Cormorant_Garamond'] text-sm text-[#35251f] outline-none placeholder:text-[#9b7b70] focus:border-b-2 focus:border-[#7F2D1D]"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full border-0 border-b border-[#a66a57] bg-transparent px-1 py-2 font-['Cormorant_Garamond'] text-sm text-[#35251f] outline-none placeholder:text-[#9b7b70] focus:border-b-2 focus:border-[#7F2D1D]"
              />
            </div>

            {/* Service */}
            <div>
              <select
                name="service"
                defaultValue=""
                required
                className="w-full border-0 border-b border-[#a66a57] bg-transparent px-1 py-2 font-['Cormorant_Garamond'] text-sm text-[#35251f] outline-none focus:border-b-2 focus:border-[#7F2D1D]"
              >
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="haircut">Haircut & Styling</option>
                <option value="coloring">Hair Coloring</option>
                <option value="treatment">Hair Treatment</option>
                <option value="spa">Hair Spa</option>
                <option value="bridal">Bridal Styling</option>
              </select>
            </div>

            {/* Time */}
            <div>
              <select
                name="time"
                defaultValue=""
                required
                className="w-full border-0 border-b border-[#a66a57] bg-transparent px-1 py-2 font-['Cormorant_Garamond'] text-sm text-[#35251f] outline-none focus:border-b-2 focus:border-[#7F2D1D]"
              >
                <option value="" disabled>
                  Choose a time
                </option>
                <option value="10:00">10:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>

            {/* Selected Date */}
            {appointmentDate && (
              <p className="text-center font-['Cormorant_Garamond'] text-sm text-[#7F2D1D]">
                Selected Date: {new Date(appointmentDate).toLocaleDateString()}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#7F2D1D] px-2 py-2 font-['Cormorant_Garamond'] text-base tracking-wide text-white transition-colors duration-300 hover:bg-[#5e2015]"
            >
              Book Appointment
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
