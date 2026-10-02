"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Matriz",
  cidade: "Cuiabá",
  endereco: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT",
  telefone: "(65) 3624-1990",
  telefoneHref: "+556536241990",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-11h50",
  whatsapp: "556593333739",
  coordenadas: { latitude: -15.602493562480237, longitude: -56.07623541804967 },
  imagens: ["/matriz1.png", "/matriz2.jpeg", "/matriz3.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
