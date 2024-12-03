"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import ClientMap2 from "./client-map2";

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
    id: "matriz",
    name: "Duzzi Refrigeração - Matriz",
    address: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT",
    phone: "(65) 3624-1990",
    city: "Cuiabá",
    coordinates: [-15.602493562480237, -56.07623541804967],
    image: "/matriz.png",
    url: "/lojas/matriz",
  },
];

const ClientMap = dynamic(() => import("./client-map"), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function Mainmapmatriz() {
  const [activeStore, setActiveStore] = useState<Store>(stores[0]);

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
