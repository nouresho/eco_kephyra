import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-50 flex h-24 w-full items-center justify-between bg-[#E9E2D7] px-6 md:px-12">
      <nav className="hidden flex-1 items-center gap-8 font-body text-brown-dark md:flex">
        <a href="/" className="transition-opacity hover:opacity-60">Accueil</a>
        <a href="/scooters" className="transition-opacity hover:opacity-60">Scooters</a>
      </nav>

      <a href="/" className="absolute left-1/2 -translate-x-1/2">
        <Image
          src="/images/logo.png"
          alt="Eco Kephyra"
          width={260}
          height={110}
          className="h-16 w-auto object-contain md:h-20"
          priority
        />
      </a>

      <div className="ml-auto flex flex-1 items-center justify-end gap-8">
        <nav className="hidden items-center gap-8 font-body text-brown-dark md:flex">
          <a href="/about" className="transition-opacity hover:opacity-60">About Us</a>
          <a href="/faq" className="transition-opacity hover:opacity-60">FAQ</a>
        </nav>
        <a href="/reservation" className="rounded-full bg-sage px-5 py-2.5 font-body text-sm font-medium text-brown-dark transition-colors hover:bg-cream-green">
          Réserver
        </a>
      </div>
    </header>
  );
}
