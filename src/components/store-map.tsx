"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  {
    id: "porto",
    name: "Duzzi Refrigeração - Porto",
    address: "Av. Mário Correa, 319, Porto - Cuiabá - MT",
    phone: "(65) 3623-3452",
    city: "Cuiabá",
    coordinates: [-15.611784341670454, -56.10214517015268],
    image: "/porto.png",
    url: "/lojas/porto",
  },
  {
    id: "cpa",
    name: "Duzzi Totaline Refrigeração - CPA",
    address: "R. Cocã, 27, CPA 4, 1° Etapa - Cuiabá - MT",
    phone: "(65) 3646-4969",
    city: "Cuiabá",
    coordinates: [-15.561947123170008, -56.037965219342],
    image: "/cpa1.jpg",
    url: "/lojas/cpa",
  },
  {
    id: "vg",
    name: "Duzzi Totaline Refrigeração - Várzea Grande",
    address: "Av. Gov. Júlio Campos, 3033, Jd Gloria I. Várzea Grande",
    phone: "(65) 3029-2329",
    city: "Várzea Grande",
    coordinates: [-15.64809253992046, -56.14477646729278],
    image: "/vg1.jpg",
    url: "/lojas/varzea-grande",
  },
];

const ClientMap = dynamic(() => import("./client-map"), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function StoreMap() {
  const [activeStore, setActiveStore] = useState<Store>(stores[0]);

  return (
    <div className="flex flex-col lg:flex-row w-full  gap-4">
      <div className="w-full lg:w-2/3 h-[400px] lg:h-[600px]">
        <ClientMap
          stores={stores}
          activeStore={activeStore}
          setActiveStore={setActiveStore}
        />
      </div>
      <div className="w-full lg:w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>{activeStore.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={activeStore.image}
              alt={activeStore.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-sm text-gray-600 mb-2">{activeStore.address}</p>
            <p className="text-sm font-semibold">{activeStore.phone}</p>
            <a
              href={activeStore.url}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Ver detalhes
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
