"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Campo Verde",
  cidade: "Campo Verde",
  endereco: "Av. Sen Antônio Fobtana S/N Jardim C. verde, Campo Verde - MT",
  telefone: "(66) 99982-2726",
  telefoneHref: "+5566999822726",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-11h50",
  whatsapp: "556593333739",
  coordenadas: { latitude: -15.548713365738903, longitude: -55.162593396861375 },
  imagens: ["/campoverde1.jpeg", "/campoverde2.jpeg", "/campoverde3.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
