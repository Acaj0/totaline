"use client";

import { LojaPageContent, LojaData } from "@/components/LojaPageContent";

const loja: LojaData = {
  nome: "Loja Várzea Grande",
  cidade: "Várzea Grande",
  endereco: "Av. Gov. Júlio Campos, 3033, Jd Gloria I. Várzea Grande",
  telefone: "(65) 3029-2329",
  telefoneHref: "+556530292329",
  horario: "Seg-Sex: 8h-18h | Sáb: 8h-11h50",
  whatsapp: "556593333739",
  coordenadas: { latitude: -15.641687103280395, longitude: -56.12417710325987 },
  imagens: ["/vg1.jpg", "/vg2.jpg"],
};

export function LojaContent() {
  return <LojaPageContent loja={loja} />;
}
