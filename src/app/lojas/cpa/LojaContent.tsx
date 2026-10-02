"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja CPA",
  cidade: "Cuiabá",
  endereco: "R. Cocã, 27, CPA 4, 1° Etapa - Cuiabá - MT",
  telefone: "(65) 3646-4969",
  telefoneHref: "+556536464969",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-11h50",
  whatsapp: "556593333739",
  coordenadas: { latitude: -15.561874774468315, longitude: -56.03834072858218 },
  imagens: ["/cpa1.jpg", "/cpa2.jpg", "/cpa3.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
