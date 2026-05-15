import ServicesGrid from "@/components/ServicesGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-orange-500 md:text-7xl">
          Kelly & Sons Towing
        </h1>

        <p className="mt-6 text-2xl text-zinc-300">
          24/7 Emergency Towing & Recovery
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Fast roadside assistance, towing, lockouts, jump starts,
          recovery, and emergency towing throughout the Brainerd Lakes area.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:2188393993"
            className="rounded-2xl bg-red-600 px-8 py-5 text-2xl font-bold shadow-lg transition hover:bg-red-500"
          >
            CALL NOW
          </a>

          <a
            href="/request-service"
            className="rounded-2xl bg-orange-500 px-8 py-5 text-2xl font-bold text-black shadow-lg transition hover:bg-orange-400"
          >
            REQUEST SERVICE
          </a>
        </div>

        <ServicesGrid />
      </section>
    </main>
  );
}
