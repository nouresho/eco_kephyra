"use client";

import { useState } from "react";

const services = [
  {
    title: "A Cleaner Way to Explore",

    text:
      "Our goal is to offer you a cleaner and more sustainable way to move around and enjoy the region. No Fuel. No Smoke. No Pollution.",

    image: "/images/cleaner-way.jpg",

    bg: "bg-[#B9DCEF]",
    textColor: "text-[#49372D]",
    smallColor: "text-[#526B61]",
  },

  {
    title: "Ride in Style",

    text:
      "Classic Italian-inspired design combining elegance, comfort and practicality. Storage bag, phone holder, USB charging port and a stylish helmet.",

    image: "/images/ride-style.jpg",

    bg: "bg-[#DCE4C8]",
    textColor: "text-[#49372D]",
    smallColor: "text-[#66705C]",
  },

  {
    title: "Excellent Service",

    text:
      "We're available 24/7 to respond to your messages, answer your questions and assist you throughout your entire scooter experience.",

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
      return "z-30 translate-x-0 scale-100 rotate-0";
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
    <section className="vintage-section overflow-hidden bg-[#F5F1E8] px-4 pb-28 pt-24 md:px-12 md:pb-36">

      {/* ================= TITLE ================= */}

      <div className="mx-auto mb-14 max-w-6xl md:mb-20">

        <div className="mb-5 flex items-center gap-4">
          <span className="h-[2px] w-12 bg-[#6F7F73]" />

          <p className="vintage-label text-[#6F7F73]">
            electric freedom · since 2026
          </p>
        </div>

        <h2 className="vintage-title retro-shadow text-[58px] text-[#49372D] sm:text-[74px] md:text-[105px]">
          WHY
          <br />
          CHOOSE US
        </h2>

        <div className="mt-8 flex max-w-xl items-start gap-4 border-l-2 border-[#49372D] pl-5">
          <p className="text-sm font-medium leading-7 text-[#766D65] md:text-base">
            A cleaner, easier and more memorable way to explore.
            Built for slow roads, sunny days and good stories.
          </p>
        </div>
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
                rounded-[26px]
                border-2
                border-[#49372D]
                shadow-[8px_8px_0_#49372D]
                transition-all
                duration-700
                ease-out

                ${service.bg}
                ${getPosition(index, active)}
              `}
            >
              <div className="flex h-full flex-col p-6">

                {/* number */}

                <div className="flex items-center justify-between">
                  <p
                    className={`vintage-label ${service.smallColor}`}
                  >
                    0{index + 1}
                  </p>

                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${service.smallColor}`}
                  >
                    EKO KIVARA
                  </span>
                </div>

                {/* title */}

                <h3
                  className={`
                    vintage-title
                    mt-6
                    text-[38px]
                    leading-[0.92]
                    ${service.textColor}
                  `}
                >
                  {service.title}
                </h3>

                {/* text */}

                <p
                  className={`
                    mt-5
                    text-[13px]
                    font-medium
                    leading-6
                    ${service.smallColor}
                  `}
                >
                  {service.text}
                </p>

                {/* image */}

                <div className="mt-6 flex-1 overflow-hidden rounded-[18px] border-2 border-[#49372D]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`
                      vintage-image
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700

                      ${
                        isActive
                          ? "scale-100"
                          : "scale-105"
                      }
                    `}
                  />
                </div>

                {/* bottom */}

                <div
                  className={`
                    mt-5
                    flex
                    items-center
                    justify-between
                    border-t
                    border-current
                    pt-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    ${service.smallColor}
                  `}
                >
                  <span>More than a ride</span>

                  <span className="text-lg">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          );
        })}

        {/* LEFT */}

        <button
          onClick={previous}
          className="
            absolute
            left-0
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-2
            border-[#49372D]
            bg-[#F5F1E8]
            text-xl
            font-bold
            text-[#49372D]
            shadow-[4px_4px_0_#49372D]
            transition
            hover:translate-x-[2px]
            hover:translate-y-[2px]
            hover:shadow-[2px_2px_0_#49372D]
          "
          aria-label="Previous"
        >
          ←
        </button>

        {/* RIGHT */}

        <button
          onClick={next}
          className="
            absolute
            right-0
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-2
            border-[#49372D]
            bg-[#F5F1E8]
            text-xl
            font-bold
            text-[#49372D]
            shadow-[4px_4px_0_#49372D]
            transition
            hover:translate-x-[2px]
            hover:translate-y-[2px]
            hover:shadow-[2px_2px_0_#49372D]
          "
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
                  rounded-[24px]
                  border-2
                  border-[#49372D]
                  shadow-[5px_5px_0_#49372D]
                  transition-all
                  duration-500
                  ease-out

                  ${service.bg}
                  ${getPosition(index, active, true)}
                `}
              >
                <div className="flex h-full flex-col p-5">

                  <div className="flex justify-between">
                    <p
                      className={`vintage-label ${service.smallColor}`}
                    >
                      0{index + 1}
                    </p>
                  </div>

                  <h3
                    className={`
                      vintage-title
                      mt-5
                      text-[27px]
                      leading-[0.92]
                      ${service.textColor}
                    `}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`
                      mt-4
                      text-[11px]
                      font-medium
                      leading-[1.55]
                      ${service.smallColor}
                    `}
                  >
                    {service.text}
                  </p>

                  <div className="mt-5 flex-1 overflow-hidden rounded-[16px] border-2 border-[#49372D]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`
                        vintage-image
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500

                        ${
                          isActive
                            ? "scale-100"
                            : "scale-105"
                        }
                      `}
                    />
                  </div>

                  <div
                    className={`
                      mt-4
                      flex
                      items-center
                      justify-between
                      border-t
                      border-current
                      pt-3
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      ${service.smallColor}
                    `}
                  >
                    <span>EKO KIVARA</span>
                    <span>↗</span>
                  </div>

                </div>
              </article>
            );
          })}

          <button
            onClick={previous}
            className="absolute left-0 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#49372D] bg-[#F5F1E8] font-bold text-[#49372D] shadow-[3px_3px_0_#49372D]"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-0 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#49372D] bg-[#F5F1E8] font-bold text-[#49372D] shadow-[3px_3px_0_#49372D]"
          >
            →
          </button>

        </div>

        {/* DOTS */}

        <div className="mt-5 flex items-center justify-center gap-2">

          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                h-2.5
                rounded-full
                border
                border-[#49372D]
                transition-all
                duration-300

                ${
                  active === index
                    ? "w-8 bg-[#6F7F73]"
                    : "w-2.5 bg-[#F5F1E8]"
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