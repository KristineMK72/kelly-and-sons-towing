"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RequestServicePage() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [serviceType, setServiceType] = useState("Tow");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function shareLocation() {
    if (!navigator.geolocation) {
      setMessage("Location sharing is not supported on this device.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        setMessage("Location captured successfully.");
      },
      () => {
        setMessage("Unable to retrieve location.");
      }
    );
  }

  async function submitRequest() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("tow_requests").insert({
      customer_name: customerName,
      phone,
      vehicle_info: vehicleInfo,
      service_type: serviceType,
      address,
      notes,
      lat: location?.lat ?? null,
      lng: location?.lng ?? null,
    });

    if (error) {
      console.error(error);
      setMessage("Failed to send request.");
      setLoading(false);
      return;
    }

    setMessage("Tow request sent successfully.");

    setCustomerName("");
    setPhone("");
    setVehicleInfo("");
    setServiceType("Tow");
    setAddress("");
    setNotes("");
    setLocation(null);

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <section className="mx-auto max-w-2xl">
        <a href="/" className="text-orange-400">
          ← Back home
        </a>

        <h1 className="mt-6 text-4xl font-extrabold text-orange-500">
          Request Towing Service
        </h1>

        <p className="mt-3 text-zinc-300">
          Send Kelly & Sons your location and roadside assistance request.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <button
            onClick={shareLocation}
            className="w-full rounded-2xl bg-orange-500 px-6 py-5 text-xl font-bold text-black"
          >
            SHARE MY LOCATION
          </button>

          {location && (
            <div className="mt-4 rounded-xl bg-green-900 p-4 text-green-200">
              GPS location captured successfully.
            </div>
          )}

          <div className="mt-6 grid gap-4">
            <input
              className="rounded-xl bg-black p-4"
              placeholder="Your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />

            <input
              className="rounded-xl bg-black p-4"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              className="rounded-xl bg-black p-4"
              placeholder="Vehicle info"
              value={vehicleInfo}
              onChange={(e) => setVehicleInfo(e.target.value)}
            />

            <input
              className="rounded-xl bg-black p-4"
              placeholder="Address or nearest landmark"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <select
              className="rounded-xl bg-black p-4"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option>Tow</option>
              <option>Lockout</option>
              <option>Jump Start</option>
              <option>Winch Out</option>
              <option>Recovery</option>
            </select>

            <textarea
              className="rounded-xl bg-black p-4"
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button
              onClick={submitRequest}
              disabled={loading}
              className="rounded-2xl bg-red-600 px-6 py-5 text-xl font-bold"
            >
              {loading ? "SENDING..." : "SEND REQUEST"}
            </button>

            {message && (
              <div className="rounded-xl bg-zinc-800 p-4 text-zinc-200">
                {message}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
