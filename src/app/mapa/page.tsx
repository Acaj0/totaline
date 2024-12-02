import NavBar from "@/components/NavBar";
import StoreMap from "@/components/store-map";

export default function Page() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto py-12 overflow-clip">
        <h1 className="text-3xl font-bold text-center mb-20">Nossas Lojas</h1>
        <StoreMap />
      </main>
    </div>
  );
}
