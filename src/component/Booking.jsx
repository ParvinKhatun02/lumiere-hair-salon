import React, { useState } from "react";
import booking from "../assets/booking2.png";
import Calendar from "./Calendar";

const Booking = () => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  return (
    <section className="w-full flex items-center gap-10 bg-[#FFF4E8] py-20 px-6 md:px-10">
      <div className="w-1/3 px-10 flex flex-col gap-3">
        <h2 className='text-5xl text-[#35251f] font-bold font-["Cormorant_Garamond"]'>
          Booking
        </h2>
        <p className="text-black text-xs line-clamp-3">
          Ready for a transformative experience? Book Your appointment now at
          LUMIERE and let us craft a style that defines you.
        </p>
        <div className="flex justify-center items-end w-full h-43 rounded-xl bg-pink-200 ">
          <img src={booking} className="w-full h-full object-contain " />
        </div>
      </div>
      <div className="w-2/3 flex gap-10">
        <div>
          <Calendar onDateSelect={setAppointmentDate} />
        </div>
        <div className="w-full max-w-[280px] ">
          <form className="w-full space-y-2 rounded-xl border border-[#7F2D1D] bg-[#F3E2D9] p-2 md:p-6">
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

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#7F2D1D] mt-2 px-2 py-2 font-['Cormorant_Garamond'] text-md tracking-wide text-white transition-colors duration-300 hover:bg-[#5e2015]"
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
