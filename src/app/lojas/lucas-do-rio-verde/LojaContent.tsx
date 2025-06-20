"use client"

import React from 'react';
import Image from "next/image";
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveButtons } from "@/components/InteractiveButtons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import dynamic from 'next/dynamic'
import Mainmaplucas from '@/components/mainmaplucas';

const Mainmapmatriz = dynamic(() => import('@/components/mainmapmatriz'), { ssr: false })

export function LojaContent() {
  const loja = {
    nome: "Loja Lucas do Rio Verde",
    endereco: "Av. Santa Catarina, 90e - Cidade Nova, Lucas do Rio Verde - MT",
    telefone: "(65) 3212-3100",
    horario: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
    whatsapp: "556593333739",
    coordenadas: {
      latitude: -13.072007031557895, 
      longitude: -55.912824079379305,
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
                    src="/lucas1.jpg"
                    alt={`Fachada da ${loja.nome} - Imagem 1`}
                    width={400}
                    height={300}
                    className="w-auto h-max-[400px] rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/lucas2.jpg"
                    alt={`Interior da ${loja.nome} - Imagem 2`}
                    width={400}
                    height={300}
                    className="w-auto h-max-[400px] rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/lucas3.jpg"
                    alt={`Produtos da ${loja.nome} - Imagem 3`}
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
              <a href="tel:+6532123100" className="flex items-center">
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
              <Mainmaplucas/>
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

