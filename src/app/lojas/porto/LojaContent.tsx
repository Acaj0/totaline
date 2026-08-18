"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Porto",
  cidade: "Cuiabá",
  endereco: "Av. Mário Correa, 319, Porto - Cuiabá - MT",
  telefone: "(65) 3623-3452",
  telefoneHref: "+556536233452",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
  whatsapp: "556593333739",
  coordenadas: { latitude: -15.612262027309574, longitude: -56.103673033267015 },
  imagens: ["/port1.jpeg", "/port2.jpeg", "/port3.jpeg", "/port4.jpeg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
