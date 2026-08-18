"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Lucas do Rio Verde",
  cidade: "Lucas do Rio Verde",
  endereco: "Av. Santa Catarina, 90e - Cidade Nova, Lucas do Rio Verde - MT",
  telefone: "(65) 3212-3100",
  telefoneHref: "+556532123100",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
  whatsapp: "556593333739",
  coordenadas: { latitude: -13.072007031557895, longitude: -55.912824079379305 },
  imagens: ["/lucas1.jpg", "/lucas2.jpg", "/lucas3.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
