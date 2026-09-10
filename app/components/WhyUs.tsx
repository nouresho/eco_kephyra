"use client";

import { useState } from "react";

const services = [
  {
    title: "A Cleaner Way to Explore",
    text: "Our goal is to offer you a cleaner and more sustainable way to move around and enjoy the region. No Fuel. No Smoke. No Pollution.",
    image: "/images/cleaner-way.jpg",
    bg: "bg-[#B9DCEF]",
    textColor: "text-[#26352F]",
    smallColor: "text-[#526B61]",
  },
  {
    title: "Ride in Style",
    text: "Classic Italian-inspired design combining elegance, comfort and practicality. Storage bag, phone holder, USB charging port and a stylish helmet.",
    image: "/images/ride-style.jpg",
    bg: "bg-[#DCE4C8]",
    textColor: "text-[#33402F]",
    smallColor: "text-[#66705C]",
  },
  {
    title: "Excellent Service",
    text: "We're available 24/7 to respond to your messages, answer your questions and assist you throughout your entire scooter experience.",
    image: "/images/service.jpg",
    bg: "bg-[#6B4935]",
    textColor: "text-[#FFF8EC]",
    smallColor: "text-[#EADAC8]",
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(1);

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const getPosition = (
    index: number,
    activeIndex: number,
    mobile = false
  ) => {
    const total = services.length;

    const previousIndex =
      activeIndex === 0 ? total - 1 : activeIndex - 1;

    if (index === activeIndex) {
      return mobile
        ? "z-30 translate-x-0 scale-100 rotate-0"
        : "z-30 translate-x-0 scale-100 rotate-0";
    }

    if (index === previousIndex) {
      return mobile
        ? "z-10 -translate-x-[38%] scale-[0.82] -rotate-[3deg]"
        : "z-10 -translate-x-[72%] scale-[0.86] -rotate-[2deg]";
    }

    return mobile
      ? "z-10 translate-x-[38%] scale-[0.82] rotate-[3deg]"
      : "z-10 translate-x-[72%] scale-[0.86] rotate-[2deg]";
  };

  return (
    <section className="overflow-hidden bg-[#F5F1E8] px-4 py-20 md:px-12 md:py-24">

      {/* TITLE */}
      <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
        

        <h2 className="font-display text-5xl italic leading-none text-[#49372D] md:text-7xl">
          Why Choose Us
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#766D65] md:text-base md:leading-7">
          A cleaner, easier and more memorable way to explore.
        </p>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative mx-auto hidden h-[640px] max-w-6xl items-center justify-center md:flex">

        {services.map((service, index) => {
          const isActive = index === active;

          return (
            <article
              key={service.title}
              onMouseEnter={() => setActive(index)}
              className={`
                absolute
                h-[570px]
                w-[390px]
                cursor-pointer
                overflow-hidden
                rounded-[34px]
                shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                transition-all
                duration-700
                ease-out
                ${service.bg}
                ${getPosition(index, active)}
              `}
            >
              <div className="flex h-full flex-col p-6">

                <p
                  className={`text-xs tracking-[0.3em] ${service.smallColor}`}
                >
                  0{index + 1}
                </p>

                <h3
                  className={`
                    mt-5
                    font-display
                    text-4xl
                    leading-[1.05]
                    ${service.textColor}
                  `}
                >
                  {service.title}
                </h3>

                <p
                  className={`
                    mt-5
                    text-sm
                    leading-6
                    ${service.smallColor}
                  `}
                >
                  {service.text}
                </p>

                <div className="mt-6 flex-1 overflow-hidden rounded-[24px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ${isActive ? "scale-100" : "scale-105"}
                    `}
                  />
                </div>

                <div
                  className={`
                    mt-5
                    flex
                    items-center
                    justify-between
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    ${service.smallColor}
                  `}
                >
                  <span>More than a ride</span>
                  <span>→</span>
                </div>
              </div>
            </article>
          );
        })}

        <button
          onClick={previous}
          className="absolute left-0 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#49372D] shadow-lg transition duration-300 hover:scale-110"
          aria-label="Previous"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-0 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#49372D] shadow-lg transition duration-300 hover:scale-110"
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        <div className="relative mx-auto flex h-[530px] max-w-[390px] items-center justify-center">

          {services.map((service, index) => {
            const isActive = index === active;

            return (
              <article
                key={service.title}
                onClick={() => setActive(index)}
                className={`
                  absolute
                  h-[475px]
                  w-[275px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[28px]
                  shadow-[0_20px_45px_rgba(0,0,0,0.16)]
                  transition-all
                  duration-500
                  ease-out
                  ${service.bg}
                  ${getPosition(index, active, true)}
                `}
              >
                <div className="flex h-full flex-col p-5">

                  <p
                    className={`
                      text-[10px]
                      tracking-[0.3em]
                      ${service.smallColor}
                    `}
                  >
                    0{index + 1}
                  </p>

                  <h3
                    className={`
                      mt-4
                      font-display
                      text-[28px]
                      leading-[1.05]
                      ${service.textColor}
                    `}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`
                      mt-4
                      text-[11px]
                      leading-[1.55]
                      ${service.smallColor}
                    `}
                  >
                    {service.text}
                  </p>

                  <div className="mt-5 flex-1 overflow-hidden rounded-[20px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        ${isActive ? "scale-100" : "scale-105"}
                      `}
                    />
                  </div>

                  <div
                    className={`
                      mt-4
                      flex
                      items-center
                      justify-between
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      ${service.smallColor}
                    `}
                  >
                    <span>EKO KIVARA</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            );
          })}

          <button
            onClick={previous}
            className="absolute left-0 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#49372D] shadow-lg"
            aria-label="Previous"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-0 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#49372D] shadow-lg"
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  active === index
                    ? "w-7 bg-[#6F7D65]"
                    : "w-2.5 bg-[#C9C1B7]"
                }
              `}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}