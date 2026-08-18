import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ParceirosContent } from "./ParceirosContent";

export const metadata: Metadata = {
  title: "Nossos Parceiros - Duzzi Totaline Climatização e Refrigeração",
  description:
    "Conheça as marcas parceiras da Duzzi Totaline: Totaline, Midea, Gree, Elgin, Fujitsu, Danfoss, Springer Carrier, Bosch e muito mais.",
  openGraph: {
    title: "Nossos Parceiros - Duzzi Totaline Climatização e Refrigeração",
    description:
      "Conheça as marcas parceiras da Duzzi Totaline em climatização e refrigeração.",
  },
};

export default function ParceirosPage() {
  return (
    <div className="overflow-clip">
      <NavBar />
      <ParceirosContent />
      <Footer />
    </div>
  );
}
