
import React from "react";
import ServiceData from "../data/ServiceData";

const Services = () => {
  return (
    <section className="w-full bg-[#F1E7DD] px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 md:gap-10 lg:flex-row lg:gap-12">

        {/* Section Heading */}
        <div className="w-full lg:w-[30%] lg:shrink-0">
          <h2 className="mb-3 text-2xl text-[#7F2D1D] sm:mb-5 sm:text-3xl">
            Our Services
          </h2>

          <p className='mb-3 font-["Cormorant_Garamond"] text-3xl text-[#35251f] sm:text-4xl'>
            A Little Luxury for Your Hair
          </p>

          <p className="max-w-md text-sm leading-6 text-[#6f5b52] sm:text-base">
            Beyond haircuts, discover a comprehensive range of services,
            from coloring to extensions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:flex-1 lg:grid-cols-2 xl:grid-cols-3">

          {ServiceData.map((service) => (
            <article
              key={service.id}
              className="min-w-0 overflow-hidden rounded-xl bg-[#FFF9F3]"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-48 w-full rounded-lg object-cover transition-transform duration-500 hover:scale-105 sm:h-52 lg:h-44 xl:h-48"
                />
              </div>

              <div className="p-3 sm:p-4">
                <h2 className='font-["Cormorant_Garamond"] text-xl text-[#35251f] sm:text-2xl'>
                  {service.title}
                </h2>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;

