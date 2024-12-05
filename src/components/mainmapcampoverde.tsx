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
    name: "Duzzi Totaline Refrigeração - Campo Verde",
    address: "Av. Sen Antônio Fobtana S/N Jardim C. verde, Campo Verde - MT",
    phone: "(66) 99982-2726",
    city: "Cuiabá",
    coordinates: [-15.548796055254591, -55.16335514417717],
    image: "/campoverde1.jpeg",
    url: "/lojas/campoverde",
  },
];

const ClientMap2 = dynamic(() => import("./client-map2"), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function Mainmapcampoverde() {
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
