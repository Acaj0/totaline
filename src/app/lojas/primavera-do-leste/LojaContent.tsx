"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveButtons } from "@/components/InteractiveButtons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dynamic from "next/dynamic";
import Mainmapporto from "@/components/mainmapporto";
import Mainmaprondonopolis from "@/components/mainmaprondonopolis";
import Mainmapprimavera from "@/components/mainmapprimave";

const Mainmapmatriz = dynamic(() => import("@/components/mainmapmatriz"), {
  ssr: false,
});

export function LojaContent() {
  const loja = {
    nome: "Loja Primavera do Leste",
    endereco: "Rua Guanabara N. 520 Centro, Primavera do Leste - MT",
    telefone: "(66) 3423-7550",
    horario: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
    whatsapp: "556593333739",
    coordenadas: {
      latitude: -15.551245499086598,
      longitude: -54.29683559154745,
    },
  };

  const wazeUrl = `https://www.waze.com/ul?ll=${loja.coordenadas.latitude},${loja.coordenadas.longitude}&navigate=yes`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${loja.coordenadas.latitude},${loja.coordenadas.longitude}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${loja.whatsapp}`;

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-center">{loja.nome}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Nossa Loja</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full mb-4">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/primavera1.jpeg"
                    alt={`Fachada da ${loja.nome} - Imagem 1`}
                    width={400}
                    height={300}
                    className="w-full h-max-[400px] rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/primavera2.jpg"
                    alt={`Interior da ${loja.nome} - Imagem 2`}
                    width={400}
                    height={300}
                    className="w-auto h-max-[400px] rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2" /> {loja.endereco}
              </p>
              <a href="tel:+6634237550" className="flex items-center">
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
              <Mainmapprimavera />
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
  );
}
