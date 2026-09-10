import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#F3EFE7]">
        <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center gap-12 px-6 py-10 md:px-12">

          {/* Texte desktop */}
          <div className="hidden flex-1 md:block">
            <h1 className="max-w-xl font-display text-5xl italic leading-tight text-[#4A3428] lg:text-7xl">
              Electric Scooter For Rental
            </h1>

            <p className="mt-6 max-w-lg text-lg text-[#6F7F73]">
              No fuel, no smoke, ride in harmony.
            </p>

            <a
              href="/reservation"
              className="mt-8 inline-block rounded-full bg-[#6F7F73] px-8 py-3.5 font-medium text-white"
            >
              Réserver maintenant
            </a>
          </div>

          {/* Video */}
          <div className="relative mx-auto h-[80vh] w-full overflow-hidden md:mx-0 md:w-[380px] md:rounded-[32px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-poster.jpg"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
            </video>

            {/* Texte mobile */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center md:hidden">
              <h1 className="font-display text-5xl italic leading-tight text-white">
                Electric Scooter For Rental
              </h1>

              <p className="mt-5 text-lg text-white/90">
                No fuel, no smoke, ride in harmony.
              </p>

              <a
                href="/reservation"
                className="mt-8 rounded-full bg-white px-7 py-3 font-medium text-[#4A3428]"
              >
                Réserver maintenant
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <WhyUs />
    </>
  );
}