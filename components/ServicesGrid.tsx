const services = [
  "Emergency Towing",
  "Lockouts",
  "Jump Starts",
  "Winch Outs",
  "Recovery",
  "Fuel Delivery",
];

export default function ServicesGrid() {
  return (
    <section className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
      {services.map((service) => (
        <div
          key={service}
          className="rounded-2xl border border-zinc-800 bg-black/60 p-6 backdrop-blur"
        >
          <h3 className="text-2xl font-bold text-orange-400">
            {service}
          </h3>

          <p className="mt-3 text-zinc-400">
            Fast and reliable roadside assistance from Kelly & Sons.
          </p>
        </div>
      ))}
    </section>
  );
}
