export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-orange-500 tracking-tight">
          Kelly & Sons Towing
        </h1>

        <p className="mt-6 text-2xl text-zinc-300">
          24/7 Emergency Towing & Recovery
        </p>

        <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
          Fast roadside assistance, towing, lockouts, jump starts,
          winch-outs, recovery, and emergency services throughout
          the Brainerd Lakes area.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2188393993"
            className="bg-red-600 hover:bg-red-500 transition px-8 py-5 rounded-2xl text-2xl font-bold shadow-lg"
          >
            CALL NOW
          </a>

          <a
            href="/request-service"
            className="bg-orange-500 hover:bg-orange-400 transition px-8 py-5 rounded-2xl text-2xl font-bold text-black shadow-lg"
          >
            REQUEST SERVICE
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-xl font-bold text-orange-400">
              Emergency Towing
            </h2>

            <p className="mt-2 text-zinc-400">
              Fast 24/7 towing and roadside assistance.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-xl font-bold text-orange-400">
              Lockouts & Jump Starts
            </h2>

            <p className="mt-2 text-zinc-400">
              Quick response roadside service when you need it most.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-xl font-bold text-orange-400">
              Recovery Services
            </h2>

            <p className="mt-2 text-zinc-400">
              Winch-outs, ditch recovery, and accident recovery.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
