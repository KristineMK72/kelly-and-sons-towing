export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-extrabold text-orange-500">
          Kelly & Sons Towing
        </a>

        <nav className="flex items-center gap-4">
          <a
            href="tel:2188393993"
            className="rounded-xl bg-red-600 px-4 py-2 font-bold"
          >
            Call Now
          </a>

          <a
            href="/request-service"
            className="rounded-xl bg-orange-500 px-4 py-2 font-bold text-black"
          >
            Request Service
          </a>
        </nav>
      </div>
    </header>
  );
}
