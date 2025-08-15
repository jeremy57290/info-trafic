
"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function Home() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [6.1844, 49.1193], // Metz approx
      zoom: 8,
    });
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }));
    return () => map.remove();
  }, []);

  return (
    <main className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Info Trafic Lorraine & Frontières</h1>
        <p className="text-sm text-gray-600">
          Carte de base (MapLibre). API à venir pour incidents & trafic en temps réel.
        </p>
      </header>
      <div ref={mapRef} className="w-full h-[70vh] rounded-xl border" />
      <section className="mt-4 grid gap-2 md:grid-cols-2">
        <a href="http://localhost:4000/v1/health" className="underline">API Health</a>
        <a href="https://demotiles.maplibre.org/" className="underline" target="_blank">Style MapLibre</a>
      </section>
    </main>
  );
}
