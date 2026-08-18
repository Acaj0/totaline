"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Sinop",
  cidade: "Sinop",
  endereco: "R. das Orquídeas 1045, Res. Sul - Sinop - MT",
  telefone: "(66) 3532-2220",
  telefoneHref: "+556635322220",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
  whatsapp: "556593333739",
  coordenadas: { latitude: -11.86173853686664, longitude: -55.504884992466934 },
  imagens: ["/sinop1.jpg", "/sinop2.jpg", "/sinop3.jpg", "/sinop4.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
