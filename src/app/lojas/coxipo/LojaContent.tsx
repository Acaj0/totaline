"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Coxipó",
  cidade: "Cuiabá",
  endereco: "BR-364, 1093 - Jardim Passaredo, Cuiabá - MT",
  telefone: "(65) 3623-8260",
  telefoneHref: "+556536238260",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-11h50",
  whatsapp: "556593333739",
  coordenadas: { latitude: -15.645203956674331, longitude: -56.00997622883499 },
  imagens: ["/cpa1.jpg", "/cpa2.jpg", "/cpa3.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
