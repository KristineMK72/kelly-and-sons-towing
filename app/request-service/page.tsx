export default function RequestServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <section className="mx-auto max-w-2xl">
        <a href="/" className="text-orange-400">
          ← Back home
        </a>

        <h1 className="mt-6 text-4xl font-extrabold text-orange-500">
          Request Towing Service
        </h1>

        <p className="mt-3 text-zinc-300">
          Send Kelly & Sons your location, vehicle details, and what kind of help you need.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <button className="w-full rounded-2xl bg-orange-500 px-6 py-5 text-xl font-bold text-black">
            SHARE MY LOCATION
          </button>

          <div className="mt-6 grid gap-4">
            <input className="rounded-xl bg-black p-4" placeholder="Your name" />
            <input className="rounded-xl bg-black p-4" placeholder="Phone number" />
            <input className="rounded-xl bg-black p-4" placeholder="Vehicle info" />

            <select className="rounded-xl bg-black p-4">
              <option>Tow</option>
              <option>Lockout</option>
              <option>Jump start</option>
              <option>Winch out</option>
              <option>Recovery</option>
            </select>

            <textarea className="rounded-xl bg-black p-4" placeholder="Notes / landmark / issue" />

            <button className="rounded-2xl bg-red-600 px-6 py-5 text-xl font-bold">
              SEND REQUEST
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
