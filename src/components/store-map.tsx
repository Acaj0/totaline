"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

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
    name: "Duzzi Totaline - Matriz",
    address: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT",
    phone: "(65) 3624-1990",
    city: "Cuiabá",
    coordinates: [-15.602493562480237, -56.07623541804967],
    image: "/matriz.png",
    url: "/lojas/matriz",
  },
  {
    id: "porto",
    name: "Duzzi Totaline - Porto",
    address: "Av. Mário Correa, 319, Porto - Cuiabá - MT",
    phone: "(65) 3623-3452",
    city: "Cuiabá",
    coordinates: [-15.611784341670454, -56.10214517015268],
    image: "/port1.jpeg",
    url: "/lojas/porto",
  },
  {
    id: "cpa",
    name: "Duzzi Totaline - CPA",
    address: "R. Cocã, 27, CPA 4, 1° Etapa - Cuiabá - MT",
    phone: "(65) 3646-4969",
    city: "Cuiabá",
    coordinates: [-15.561947123170008, -56.037965219342],
    image: "/cpa1.jpg",
    url: "/lojas/cpa",
  },
  {
    id: "vg",
    name: "Duzzi Totaline - Várzea Grande",
    address: "Av. Gov. Júlio Campos, 3033, Jd Gloria I. Várzea Grande",
    phone: "(65) 3029-2329",
    city: "Várzea Grande",
    coordinates: [-15.64809253992046, -56.14477646729278],
    image: "/vg1.jpg",
    url: "/lojas/varzea-grande",
  },
  {
    id: "rondonopolis",
    name: "Duzzi Totaline - Rondonópolis",
    address: "R. Barão do Rio Branco, 1941 - La Salle, Rondonópolis - MT",
    phone: "(66) 3423-7550",
    city: "Rondonópolis",
    coordinates: [-16.45984543735299, -54.637357167478825],
    image: "/rondonopolis1.jpg",
    url: "/lojas/rondonopolis",
  },
  {
    id: "Sinop",
    name: "Duzzi Totaline - Sinop",
    address: "R. das Orquídeas 1045, Res. Sul - Sinop - MT",
    phone: "(66) 3532-2220",
    city: "Sinop",
    coordinates: [-11.861699162848879, -55.50489303909351],
    image: "/sinop1.jpg",
    url: "/lojas/sinop",
  },
  {
    id: "Primavera do Leste",
    name: "Duzzi Totaline - Primavera do Leste",
    address: "Rua Guanabara N. 520 Centro, Primavera do Leste - MT",
    phone: "(66) 3497-3540",
    city: "Primavera do Leste",
    coordinates: [-15.551246145090623, -54.29683156823416],
    image: "/primavera1.jpeg",
    url: "/lojas/primavera-do-leste",
  },
  {
    id: "Campo Verde",
    name: "Duzzi Totaline - Campo Verde",
    address: "Av. Sen Antônio Fobtana S/N Jardim C. verde, Campo Verde - MT",
    phone: "(66) 99982-2726",
    city: "Campo Verde",
    coordinates: [-15.548837399999986, -55.16331222883544],
    image: "/campoverde1.jpeg",
    url: "/lojas/campo-verde",
  },
  {
    id: "coxipo",
    name: "Duzzi Totaline - Coxipó",
    address: "BR-364, 1093 - Jardim Passaredo, Cuiabá - MT",
    phone: "(65) 3623-8260",
    city: "Cuiabá",
    coordinates: [-15.645255613335618, -56.010008415339954],
    image: "/campoverde1.jpeg",
    url: "/lojas/coxipo",
  },
  {
    id: "lucas",
    name: "Duzzi Totaline - Lucas do Rio Verde",
    address: "Av. Santa Catarina, 90e - Cidade Nova, Lucas do Rio Verde - MT",
    phone: "(65) 3212-3100",
    city: "Lucas do Rio Verde",
    coordinates: [-13.072017482372758, -55.91279189287434],
    image: "/lucas1.jpg",
    url: "/lojas/lucas-do-rio-verde",
  },
];

const ClientMap = dynamic(() => import("./client-map"), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function StoreMap() {
  const [activeStore, setActiveStore] = useState<Store>(stores[0]);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 z-10">
      <div className="hidden lg:block lg:w-2/3 h-[740px]">
        <ClientMap
          stores={stores}
          activeStore={activeStore}
          setActiveStore={setActiveStore}
        />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4 h-[440px] lg:h-[740px]">
        {/* Store list */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 min-h-0 flex flex-col">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-4 pt-4 pb-2">
            Escolha uma loja
          </p>
          <div className="overflow-y-auto no-scrollbar divide-y divide-border/60 flex-1">
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => setActiveStore(store)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                  activeStore.id === store.id
                    ? "bg-brand-navy/5"
                    : "hover:bg-secondary/60"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full shrink-0 ${
                    activeStore.id === store.id ? "bg-brand-red" : "bg-border"
                  }`}
                />
                <span className="min-w-0">
                  <span
                    className={`block text-sm truncate ${
                      activeStore.id === store.id
                        ? "font-semibold text-brand-navy"
                        : "font-medium text-foreground/80"
                    }`}
                  >
                    {store.name.replace("Duzzi Totaline - ", "")}
                  </span>
                  <span className="block text-xs text-muted-foreground truncate">{store.city}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active store card — whole card links straight to the store page */}
        <Link
          href={activeStore.url}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden block shrink-0"
        >
          <div className="relative">
            <img
              src={activeStore.image}
              alt={activeStore.name}
              className="w-full h-36 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-2 left-4 right-4 text-white font-semibold text-sm">
              {activeStore.name}
            </p>
          </div>
          <div className="p-4">
            <p className="flex items-start gap-2 text-xs text-muted-foreground mb-3">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              {activeStore.address}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
              Ver loja completa <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
