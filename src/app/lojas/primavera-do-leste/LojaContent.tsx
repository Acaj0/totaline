"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Primavera do Leste",
  cidade: "Primavera do Leste",
  endereco: "Rua Guanabara N. 520 Centro, Primavera do Leste - MT",
  telefone: "(66) 3497-3540",
  telefoneHref: "+556634973540",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-11h50",
  whatsapp: "556593333739",
  coordenadas: { latitude: -15.551245499086598, longitude: -54.29683559154745 },
  imagens: ["/primavera1.jpeg", "/primavera2.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
