import React from "react";
import  { useEffect, useRef } from "react";

const images = [
  { src: "/gallery/hair1.jpg", alt: "Hair styling", size: "row-span-2" },

  {
    src: "/gallery/hair3.jpg",
    alt: "Glossy hair close-up",
    size: "row-span-2",
  },

  { src: "/gallery/hair5.jpg", alt: "Beautiful hair model", size: "" },
  { src: "/gallery/hair4.jpg", alt: "Salon products", size: "" },
  { src: "/gallery/hair6.jpg", alt: "Hair care treatment", size: "" },
  { src: "/gallery/hair7.jpg", alt: "Professional hair styling", size: "" },
];

const Gallery = () => {

  
const galleryRef = useRef(null);

useEffect(() => {
  const items = galleryRef.current?.querySelectorAll(".gallery-reveal");

  if (!items) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 3) * 150}ms`;
    observer.observe(item);
  });

  return () => observer.disconnect();
}, []);

  return (
    <main className="bg-[#FFF4E8] px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Gallery heading */}
        <div className="mb-5 text-center">
          <p className="font-serif text-2xl italic text-[#A66A57]">Our Work</p>

          <h1 className="mt-1 font-serif text-3xl text-[#35251f] sm:text-5xl">
            LUMIÈRE Gallery
          </h1>

          <p className="mx-auto mt-1 max-w-lg text-sm text-[#75645c]">
            A collection of beautiful styles, glowing color and moments of
            self-care.
          </p>
        </div>

        {/* Image grid */}
       
<div ref={galleryRef} className="grid h-[65h] grid-cols-2 gap-3 sm:grid-cols-4">
  {images.map((image, index) => (
    <div
      key={index}
      className={`gallery-reveal ${
        index % 2 === 0 ? "from-left" : "from-right"
      } h-48 overflow-hidden sm:h-56 ${
        index === 0 || index === 3
          ? "sm:col-span-1 sm:row-span-2 sm:h-[460px]"
          : ""
      }`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  ))}
</div>

      </div>
    </main>
  );
};

export default Gallery;
