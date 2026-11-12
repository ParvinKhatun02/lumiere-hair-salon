
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
        {/* Service Cards */}
<div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1  lg:flex-1 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-3">

 {ServiceData.map((service) => (
  <article
    key={service.id}
    className="min-w-0 overflow-hidden rounded-xl bg-[#FFF9F3]"
  >
    <div className="h-48 overflow-hidden sm:h-56 lg:h-45 xl:h-36">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="h-full w-full rounded-lg object-cover  transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-3 sm:p-4 xl:p-2">
      <h2 className='font-["Cormorant_Garamond"] text-xl text-[#35251f] sm:text-2xl xl:text-xl'>
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

