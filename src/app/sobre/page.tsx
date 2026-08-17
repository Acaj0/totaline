import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SobreContent } from "./SobreContent";

export const metadata: Metadata = {
  title: "Sobre Nós - Duzzi Totaline Climatização e Refrigeração",
  description:
    "Conheça a história da Duzzi Totaline: fundada em 2003, hoje é a maior loja de climatização e refrigeração do Mato Grosso, com 10 lojas e mais de 80 colaboradores.",
  openGraph: {
    title: "Sobre Nós - Duzzi Totaline Climatização e Refrigeração",
    description:
      "Conheça a história da Duzzi Totaline: fundada em 2003, hoje é a maior loja de climatização e refrigeração do Mato Grosso.",
  },
};

export default function SobrePage() {
  return (
    <div className="overflow-clip">
      <NavBar />
      <SobreContent />
      <Footer />
    </div>
  );
}
