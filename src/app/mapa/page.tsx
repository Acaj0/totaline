import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StoreMap from "@/components/store-map";

export default function Page() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 py-12 md:py-20 overflow-clip">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy">Nossas Lojas</h1>
          <p className="text-muted-foreground mt-3">
            Encontre a unidade Duzzi Totaline mais próxima de você em Mato Grosso.
          </p>
        </div>
        <StoreMap />
      </main>
      <Footer />
    </div>
  );
}
