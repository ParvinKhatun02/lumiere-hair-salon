import React from 'react'
import ServiceData from '../data/ServiceData'

const Services = () => {
  return (
    <section className="min-h-screen w-full px-6 py-16 md:px-10">
    <div className="mx-10 flex flex-col gap-10 items-start justify-center md:flex-row md:gap-45">
      <div className="md:w-1/3 md:shrink-0 ">
        <h2 className='text-[#7F2D1D] mb-5 text-3xl'>Our Services</h2>
        <p className='font-["Cormorant_Garamond"]  text-4xl mb-3 text-[#35251f]'>A Little Luxury for Your Hair</p>
        <p className='line-clamp-2 text-[#6f5b52]'>Beyond haircuts, discover a comprhensive range of services,
        from coloring to extensions.</p>
      </div>
      <div className='flex min-w-0 flex-1 flex-wrap items-start gap-6'> 
        {ServiceData.map((service)=>(
            <article key={service.id} className="min-w-0 rounded-xl ">
              <h2 className='font-["Cormorant_Garamond"] text-2xl text-[#35251f]'>{service.title}</h2>
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-40 w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105 "
                />
              </div>
            </article>
        ))}
      
      </div>
      </div>
    </section>
  )
}

export default Services
