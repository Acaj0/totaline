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
import Mainmapporto from '@/components/mainmapporto';

const Mainmapmatriz = dynamic(() => import('@/components/mainmapmatriz'), { ssr: false })

export function LojaContent() {
  const loja = {
    nome: "Loja Porto",
    endereco: "Av. Mário Correa, 319, Porto - Cuiabá - MT",
    telefone: "(65) 3623-3452",
    horario: "Seg-Sex: 8h-18h | Sáb: 8h-13h",
    whatsapp: "556593333739",
    coordenadas: {
      latitude: -15.612262027309574,
      longitude: -56.103673033267015,
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
                    src="/port1.jpeg"
                    alt={`Fachada da ${loja.nome} - Imagem 1`}
                    width={400}
                    height={300}
                    className="w-full h-max-[400px] rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/port2.jpeg"
                    alt={`Interior da ${loja.nome} - Imagem 2`}
                    width={400}
                    height={300}
                    className="w-auto h-max-[400px] rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/port3.jpeg"
                    alt={`Interior da ${loja.nome} - Imagem 3`}
                    width={400}
                    height={300}
                    className="w-auto h-max-[400px] rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/port4.jpeg"
                    alt={`Interior da ${loja.nome} - Imagem 4`}
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
              <a href="tel:+6536233452" className="flex items-center">
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
              <Mainmapporto />
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

