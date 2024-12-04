"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  city: string;
  coordinates: [number, number];
  image: string;
  url: string;
}

const stores: Store[] = [
  {
    id: "cpa",
    name: "Duzzi Refrigeração - VG",
    address: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT",
    phone: "(65) 3624-1990",
    city: "Cuiabá",
    coordinates: [-15.646894118826797, -56.1407424260908],
    image: "/porto.png",
    url: "/lojas/varzea-grande",
  },
];

const ClientMap2 = dynamic(() => import("./client-map2"), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function Mainmapvg() {
  const [activeStore, setActiveStore] = useState<Store>(stores[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[400px] lg:h-[415px] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <p>Carregando mapa...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-4">
      <div className="w-full h-[400px] lg:h-[415px]">
        <ClientMap2
          stores={stores}
          activeStore={activeStore}
          setActiveStore={setActiveStore}
        />
      </div>
    </div>
  );
}
