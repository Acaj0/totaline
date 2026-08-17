"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ClientMap2 = dynamic(() => import("./client-map2"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted animate-pulse rounded-2xl flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Carregando mapa...</p>
    </div>
  ),
});

interface StoreLocationMapProps {
  name: string;
  coordinates: [number, number];
}

export default function StoreLocationMap({ name, coordinates }: StoreLocationMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-muted animate-pulse rounded-2xl flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Carregando mapa...</p>
      </div>
    );
  }

  return <ClientMap2 name={name} coordinates={coordinates} />;
}
