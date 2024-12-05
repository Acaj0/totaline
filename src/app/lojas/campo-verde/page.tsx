import React from "react";
import { LojaContent } from "./LojaContent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duzzi Climatização e Refrigeração - Campo Verde",
  description:
    "Localizada em Cuiabá, a loja Campo Verde da Duzzi Climatização é o centro de soluções em ar-condicionado e refrigeração. Oferece produtos, serviços especializados e suporte técnico para toda a região.",
  openGraph: {
    title: "Duzzi Climatização e Refrigeração - Campo Verde",
    description:
      "Localizada em Cuiabá, a loja Campo Verde da Duzzi Climatização é o centro de soluções em ar-condicionado e refrigeração. Oferece produtos, serviços especializados e suporte técnico para toda a região.",
  },
};

export default function LojaPage() {
  return (
    <div className="overflow-clip">
      <NavBar />
      <LojaContent />
      <Footer />
    </div>
  );
}
