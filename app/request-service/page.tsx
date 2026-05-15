"use client";

import { useState } from "react";

export default function RequestServicePage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [locationError, setLocationError] = useState("");

  function shareLocation() {
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Location sharing is not supported on this device.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setLocationError(
          "Location permission was denied. You can still type your address or nearest landmark."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
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
          Send Kelly & Sons your location, vehicle details, and what kind of help
          you need.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <button
            type="button"
            onClick={shareLocation}
            className="w-full rounded-2xl bg-orange-500 px-6 py-5 text-xl font-bold text-black"
          >
            SHARE MY LOCATION
          </button>

          {location && (
            <div className="mt-4 rounded-xl border border-green-700 bg-green-950 p-4 text-green-200">
              Location captured.
              <br />
              Lat: {location.lat}
              <br />
              Lng: {location.lng}
              <br />
              <a
                className="mt-2 block underline"
                href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                target="_blank"
              >
                Open location in Google Maps
              </a>
            </div>
          )}

          {locationError && (
            <div className="mt-4 rounded-xl border border-red-700 bg-red-950 p-4 text-red-200">
              {locationError}
            </div>
          )}

          <div className="mt-6 grid gap-4">
            <input className="rounded-xl bg-black p-4" placeholder="Your name" />
            <input className="rounded-xl bg-black p-4" placeholder="Phone number" />
            <input className="rounded-xl bg-black p-4" placeholder="Vehicle info" />
            <input
              className="rounded-xl bg-black p-4"
              placeholder="Address or nearest landmark"
            />

            <select className="rounded-xl bg-black p-4">
              <option>Tow</option>
              <option>Lockout</option>
              <option>Jump start</option>
              <option>Winch out</option>
              <option>Recovery</option>
            </select>

            <textarea
              className="rounded-xl bg-black p-4"
              placeholder="Notes / landmark / issue"
            />

            <button className="rounded-2xl bg-red-600 px-6 py-5 text-xl font-bold">
              SEND REQUEST
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
