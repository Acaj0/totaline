"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Rondonópolis",
  cidade: "Rondonópolis",
  endereco: "R. Barão do Rio Branco, 1941 - La Salle, Rondonópolis - MT",
  telefone: "(66) 3423-7550",
  telefoneHref: "+556634237550",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-11h50",
  whatsapp: "556593333739",
  coordenadas: { latitude: -16.45973225664186, longitude: -54.637496642339464 },
  imagens: ["/rondonopolis1.png", "/rondonopolis2.png"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
