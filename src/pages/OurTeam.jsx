import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const memeber1 = "/images/stylist-1.jpg";
const memeber2 = "/images/stylist-2.jpg";
const memeber3 = "/images/stylist-3.jpg";
const memeber4 = "/images/stylist-4.jpg";
const teamMembers = [
  {
    id: 1,
    name: "Olivia Smith",
    role: "Hairdresser",
    image: memeber1,
  },
  {
    id: 2,
    name: "Amelia Brown",
    role: "Hairdresser",
    image: memeber2,
  },
  {
    id: 3,
    name: "Emily Walker",
    role: "Senior Stylist",
    image: memeber3,
  },
  {
    id: 4,
    name: "Sophia Wilson",
    role: "Hair Specialist",
    image: memeber4,
  },
];

const OurTeam = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "next" ? 280 : -280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full overflow-hidden bg-[#F8F3EF] px-6 py-10 sm:px-10 lg:px-16 lg:py-10">

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.8fr] lg:gap-14">

        {/* Left Content */}
        <div className="flex h-full flex-col justify-between gap-10">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#A63D24]">
              MEET OUR EXPERTS
            </p>

            <h2 className="mb-4 font-serif text-4xl text-[#35251F] sm:text-5xl">
              Our Team
            </h2>

            <p className="max-w-xs text-sm leading-6 text-[#75645C]">
              Entrust your locks to our team of skilled and creative
              stylists. Passionate about making you look and feel
              your absolute best.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <Link
              to="/contact"
              className="rounded-full bg-[#A63D24] px-6 py-3 text-xs font-medium text-[#FFF4E8] transition duration-300 hover:bg-[#7F2D1D]"
            >
              Join the Team
            </Link>

            <button
              onClick={() => scroll("prev")}
              aria-label="Previous team members"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#35251F] text-[#FFF4E8] transition hover:bg-[#7F2D1D]"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              onClick={() => scroll("next")}
              aria-label="Next team members"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A68B7D] text-[#35251F] transition hover:bg-[#35251F] hover:text-[#FFF4E8]"
            >
              <ArrowRight size={17} />
            </button>

          </div>
        </div>

        {/* Right - Team Slider */}
        <div
          ref={sliderRef}
          className="flex min-w-0 gap-5 overflow-x-auto scroll-smooth pb-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >

          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="w-[220px] flex-shrink-0 snap-start sm:w-[245px]"
            >

              {/* Team Image */}
              <div className="mb-4 h-[260px] overflow-hidden rounded-2xl bg-[#E8DDD3] sm:h-[280px]">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />

              </div>

              {/* Team Details */}
              <h3 className="font-serif text-xl text-[#35251F]">
                {member.name}
              </h3>

              <p className="mt-1 text-xs text-[#75645C]">
                {member.role}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurTeam;

