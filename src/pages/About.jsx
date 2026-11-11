
import React from "react";
import {
  Users,
  MessageCircle,
  TrendingUp,
  Crown,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    text: "Our team of highly skilled and experienced stylists is dedicated to staying on the cutting edge of industry trends. Trust us to transform your vision into a stunning reality.",
  },
  {
    icon: MessageCircle,
    text: "Your unique style is our priority. Enjoy personalized consultations with our stylists, ensuring a haircut that complements your features, lifestyle, and fashion preferences.",
  },
  {
    icon: TrendingUp,
    text: "We're not just following trends; we're setting them. Step into the latest fashion with our trendsetting styles that keep you ahead of the curve.",
  },
  {
    icon: Crown,
    text: "We believe in using only the best. Our premium hair care and styling products ensure not only a flawless finish but also the long-term health of your hair.",
  },
];

const AboutUs = () => {
  return (
    <section className="w-full bg-[#F8F3EF] px-4 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-2xl bg-[#35251F] px-7 py-12 sm:px-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12 lg:px-16 lg:py-16">

        {/* Left Content */}
        <div className="flex h-full flex-col justify-between gap-12">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A18A]">
              ABOUT LUMIÈRE
            </p>

            <h2 className="mb-5 font-serif text-3xl text-[#FFF4E8] sm:text-4xl">
              Why Choose Us
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#D8C5B8]">
              We believe that beautiful hair is more than just a style.
              It's about confidence, care, and expressing your unique
              personality.
            </p>
          </div>

          {/* Statistics */}
          <div className="flex items-center gap-7 sm:gap-10">
            <div>
              <h3 className="font-serif text-4xl text-[#FFF4E8] sm:text-5xl">
                30k
              </h3>
              <p className="mt-1 text-xs text-[#D8C5B8]">
                Satisfied Clients
              </p>
            </div>

            <div className="h-14 w-px bg-[#A68B7D]" />

            <div>
              <h3 className="font-serif text-4xl text-[#FFF4E8] sm:text-5xl">
                15
              </h3>
              <p className="mt-1 text-xs text-[#D8C5B8]">
                Salons Around the City
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={index}
                className="flex min-h-[145px] items-center gap-5 rounded-2xl bg-[#49332C] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#554037] sm:p-6"
              >
                <div className="shrink-0 text-[#D9A18A]">
                  <Icon size={38} strokeWidth={1.4} />
                </div>

                <p className="text-xs leading-[1.7] text-[#E8D9CF] sm:text-[13px]">
                  {reason.text}
                </p>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default AboutUs;

