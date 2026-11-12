import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SiInstagram,
  SiFacebook,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: SiInstagram, url: "https://instagram.com/" },
    { name: "Facebook", icon: SiFacebook, url: "https://facebook.com/" },
    { name: "X", icon: SiX, url: "https://x.com/" },
    { name: "YouTube", icon: SiYoutube, url: "https://youtube.com/" },
  ];

  return (
    <footer className="w-full bg-[#35251F] px-6 py-7 text-[#FFF4E8] sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.9fr] lg:gap-12">
        {/* Column 1 - Location */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl">Find Our Salon</h3>

          <div className="relative flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#493A34]">
            <div className="absolute inset-0 opacity-30">
              <svg
                viewBox="0 0 400 220"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M-20 40 L420 180 M20 -20 L180 240 M250 -20 L100 240 M300 0 L420 100"
                  stroke="#D8C5B8"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M-20 150 L420 50 M120 -20 L350 240"
                  stroke="#D8C5B8"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative flex flex-col items-center gap-1">
              <MapPin size={30} className="text-[#D9A18A]" strokeWidth={1.5} />
              <p className="text-sm font-medium">Visit LUMIÈRE</p>
            </div>
          </div>

          <p className="text-xs leading-5 text-[#D8C5B8]">
            Visit us and experience personalized hair care and expert styling.
          </p>
        </div>

        {/* Column 2 - Contact */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="mb-3 font-serif text-xl">Contact Us</h3>

            <div className="space-y-2 text-sm text-[#D8C5B8]">
              <p>+91 XXXXX XXXXX</p>
              <p>info@lumiere.com</p>
              <p>carrer@lumiere.com</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl">Visit Us</h3>

            <p className="mb-1 text-sm text-[#D8C5B8]">LUMIÈRE Hair Salon</p>

            <p className="text-sm leading-5 text-[#D8C5B8]">
              Kolkata, West Bengal, India
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-[#D8C5B8] transition-all duration-300 hover:-translate-y-1 hover:text-[#D9A18A]"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 - Brand & Newsletter */}
        <div className="flex flex-col gap-6">
          <div>
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.15em] text-[#FFF4E8]"
            >
              LUMIÈRE
            </Link>

            <a
              href="#booking"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] px-4 py-2 text-xs font-medium text-[#35251F] transition hover:bg-[#D9A18A]"
            >
              Book Your Consultation
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-3 font-serif text-lg">
              Subscribe to our newsletter
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center rounded-full border border-[#75645C] bg-[#493A34] p-1"
            >
              <input
                type="email"
                required
                placeholder="Your Email..."
                aria-label="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs text-[#FFF4E8] outline-none placeholder:text-[#B9A69A]"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A63D24] text-white transition hover:bg-[#7F2D1D]"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-2 max-w-7xl border-t border-[#75645C]/40 pt-2 text-center">
        <p className="text-xs text-[#B9A69A]">
          © {new Date().getFullYear()} LUMIÈRE Hair Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
