export default function Footer() {
  return (
    <footer className="border-t-2 border-[#F3EFE7]/30 bg-[#49372D] px-6 py-12 text-[#F3EFE7] md:px-12">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">

        <div>

          <p className="font-display text-3xl uppercase tracking-[-0.04em]">
            EKO KIVARA
          </p>

          <p className="mt-3 max-w-xs text-sm leading-6 text-[#DCE4C8]">
            Electric freedom with a classic soul.
          </p>

        </div>

        <div className="flex gap-12">

          <div>
            <p className="vintage-label text-[#B9DCEF]">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="/">Home</a>
              <a href="/scooters">Scooters</a>
              <a href="/about">About</a>
            </div>
          </div>

          <div>
            <p className="vintage-label text-[#DCE4C8]">
              Help
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="/faq">FAQ</a>
              <a href="/reservation">Reservation</a>
            </div>
          </div>

        </div>

      </div>

      <div className="mx-auto mt-12 flex max-w-7xl justify-between border-t border-[#F3EFE7]/20 pt-5 text-[10px] uppercase tracking-[0.15em] text-[#DCCFC4]">

        <span>
          © {new Date().getFullYear()} EKO KIVARA
        </span>

        <span>
          Ride clean · Ride free
        </span>

      </div>

    </footer>
  );
}