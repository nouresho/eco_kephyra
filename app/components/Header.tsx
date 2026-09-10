import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-[100] flex h-[90px] w-full items-center border-b-2 border-[#49372D] bg-[#F3EFE7] px-5 md:h-[100px] md:px-12">

      {/* LEFT */}
      <nav className="hidden flex-1 items-center gap-8 md:flex">
        <a
          href="/"
          className="vintage-label text-[#49372D] transition-opacity hover:opacity-50"
        >
          Home
        </a>

        <a
          href="/scooters"
          className="vintage-label text-[#49372D] transition-opacity hover:opacity-50"
        >
          Scooters
        </a>
      </nav>

      {/* LOGO */}
      <a
        href="/"
        className="absolute left-1/2 -translate-x-1/2"
      >
        <Image
          src="/images/logo.png"
          alt="EKO KIVARA"
          width={230}
          height={90}
          priority
          className="h-[58px] w-auto object-contain md:h-[72px]"
        />
      </a>

      {/* RIGHT */}
      <div className="ml-auto flex flex-1 items-center justify-end gap-7">

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/about"
            className="vintage-label text-[#49372D] transition-opacity hover:opacity-50"
          >
            About
          </a>

          <a
            href="/faq"
            className="vintage-label text-[#49372D] transition-opacity hover:opacity-50"
          >
            FAQ
          </a>
        </nav>

        <a
          href="/reservation"
          className="retro-button bg-[#DCE4C8] px-5 py-2.5 text-xs text-[#49372D] md:px-6"
        >
          Book Ride
        </a>
      </div>
    </header>
  );
}