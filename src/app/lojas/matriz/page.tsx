import React from 'react';
import Image from "next/image";
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveButtons } from "@/components/InteractiveButtons";
import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic'

const Mainmapmatriz = dynamic(() => import('@/components/mainmapmatriz'), { ssr: false })

export const metadata: Metadata = {
  title: "Duzzi Climatização e Refrigeração - Matriz",
  description:
    "Localizada em Cuiabá, a loja matriz da Duzzi Climatização é o centro de soluções em ar-condicionado e refrigeração. Oferece produtos, serviços especializados e suporte técnico para toda a região.",
  openGraph: {
    title: "Duzzi Climatização e Refrigeração - Matriz",
    description:
      "Localizada em Cuiabá, a loja matriz da Duzzi Climatização é o centro de soluções em ar-condicionado e refrigeração. Oferece produtos, serviços especializados e suporte técnico para toda a região.",
  },
};

export default function LojaPage() {
  const loja = {
    nome: "Loja Matriz",
    endereco: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT",
    telefone: "(65) 3624-1990",
    horario: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
    whatsapp: "5511123456789",
    coordenadas: {
      latitude: -15.602493562480237,
      longitude: -56.07623541804967,
    },
  };

  const wazeUrl = `https://www.waze.com/ul?ll=${loja.coordenadas.latitude},${loja.coordenadas.longitude}&navigate=yes`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${loja.coordenadas.latitude},${loja.coordenadas.longitude}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${loja.whatsapp}`;

  return (
    <div className="overflow-clip">
      <NavBar />
      <div className="container mx-auto px-4 py-8 mb-16">
        <h1 className="text-3xl font-bold mb-6 text-center">{loja.nome}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Nossa Loja</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/matriz.png"
                alt={`Fachada da ${loja.nome}`}
                width={400}
                height={300}
                className="w-full rounded-lg mb-4"
              />
              <div className="space-y-2">
                <p className="flex items-center">
                  <MapPin className="mr-2" /> {loja.endereco}
                </p>
                <a href="tel:+1239271-9367" className="flex items-center">
                  <Phone className="mr-2" /> {loja.telefone}
                </a>
                <p className="flex items-center">
                  <Clock className="mr-2" /> {loja.horario}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[400px] lg:h-[415px] relative mb-4">
                <Mainmapmatriz />
              </div>
              <InteractiveButtons
                wazeUrl={wazeUrl}
                googleMapsUrl={googleMapsUrl}
                whatsappUrl={whatsappUrl}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

