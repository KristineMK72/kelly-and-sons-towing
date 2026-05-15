import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data: requests, error } = await supabase
    .from("tow_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-black p-6 text-white">
        <p className="text-red-400">Could not load tow requests.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold text-orange-500">
          Kelly Dispatch Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Incoming customer tow requests.
        </p>

        <div className="mt-8 grid gap-5">
          {requests?.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <p className="text-sm uppercase text-orange-400">
                    {req.status}
                  </p>

                  <h2 className="text-2xl font-bold">
                    {req.service_type}
                  </h2>

                  <p className="mt-2 text-zinc-300">
                    {req.customer_name || "No name provided"}
                  </p>

                  <p className="text-zinc-400">
                    Phone: {req.phone}
                  </p>

                  <p className="text-zinc-400">
                    Vehicle: {req.vehicle_info || "Not provided"}
                  </p>

                  <p className="text-zinc-400">
                    Address/Landmark: {req.address || "Not provided"}
                  </p>

                  <p className="mt-2 text-zinc-300">
                    {req.notes}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${req.phone}`}
                    className="rounded-xl bg-red-600 px-5 py-3 text-center font-bold"
                  >
                    Call Customer
                  </a>

                  {req.lat && req.lng && (
                    <a
                      href={`https://www.google.com/maps?q=${req.lat},${req.lng}`}
                      target="_blank"
                      className="rounded-xl bg-orange-500 px-5 py-3 text-center font-bold text-black"
                    >
                      Open GPS
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {requests?.length === 0 && (
            <p className="rounded-xl bg-zinc-900 p-6 text-zinc-400">
              No tow requests yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
