"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ChevronRight, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { InteractiveButtons } from "@/components/InteractiveButtons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StoreLocationMap from "@/components/StoreLocationMap";

export interface LojaData {
  nome: string;
  cidade: string;
  endereco: string;
  telefone: string;
  telefoneHref: string;
  horario: string;
  whatsapp: string;
  coordenadas: { latitude: number; longitude: number };
  imagens: string[];
}

export function LojaPageContent({ loja }: { loja: LojaData }) {
  const [nomeForm, setNomeForm] = useState("");
  const [mensagemForm, setMensagemForm] = useState("");

  const wazeUrl = `https://www.waze.com/ul?ll=${loja.coordenadas.latitude},${loja.coordenadas.longitude}&navigate=yes`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${loja.coordenadas.latitude},${loja.coordenadas.longitude}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${loja.whatsapp}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nomeForm || "—"}. ${mensagemForm || "Gostaria de mais informações sobre a loja " + loja.nome + "."}`;
    const url = `https://api.whatsapp.com/send?phone=${loja.whatsapp}&text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-secondary/40">
      {/* Header */}
      <div className="bg-brand-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-4 py-10 md:py-14 relative">
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/90">{loja.nome}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {loja.nome}
          </h1>
          <p className="text-white/70 mt-2 text-lg">{loja.cidade} - MT</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Gallery + info */}
          <Card className="lg:col-span-3 overflow-hidden shadow-sm border-border/60">
            <Carousel className="w-full">
              <CarouselContent>
                {loja.imagens.map((src, i) => (
                  <CarouselItem key={src}>
                    <div className="relative aspect-[4/3] md:aspect-[16/10] w-full bg-muted">
                      <Image
                        src={src}
                        alt={`${loja.nome} - foto ${i + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-brand-navy/10 text-brand-navy p-2 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Endereço</p>
                    <p className="text-sm font-medium">{loja.endereco}</p>
                  </div>
                </div>
                <a href={`tel:${loja.telefoneHref}`} className="flex items-start gap-3 group text-right">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Telefone</p>
                    <p className="text-sm font-medium group-hover:text-brand-red transition-colors">{loja.telefone}</p>
                  </div>
                  <span className="rounded-full bg-brand-navy/10 text-brand-navy p-2 shrink-0">
                    <Phone className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="lg:col-span-2 overflow-hidden shadow-sm border-border/60 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Como chegar</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <div className="w-full h-[260px] rounded-2xl overflow-hidden">
                <StoreLocationMap
                  name={loja.nome}
                  coordinates={[loja.coordenadas.latitude, loja.coordenadas.longitude]}
                />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-brand-navy/10 text-brand-navy p-2 shrink-0">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Horário de funcionamento</p>
                  <p className="font-medium">{loja.horario}</p>
                </div>
              </div>
              <InteractiveButtons
                wazeUrl={wazeUrl}
                googleMapsUrl={googleMapsUrl}
                whatsappUrl={whatsappUrl}
              />
            </CardContent>
          </Card>
        </div>

        {/* Contact form */}
        <Card className="mt-6 shadow-sm border-border/60 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <CardContent className="p-6 md:p-8">
              <CardTitle className="text-xl mb-1">Fale com a {loja.nome}</CardTitle>
              <p className="text-sm text-muted-foreground mb-6">
                Preencha os dados abaixo e continue a conversa direto no WhatsApp.
              </p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    value={nomeForm}
                    onChange={(e) => setNomeForm(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Como podemos ajudar?"
                    value={mensagemForm}
                    onChange={(e) => setMensagemForm(e.target.value)}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white">
                  <Send className="h-4 w-4" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
            <div className="hidden md:flex relative bg-gradient-to-br from-brand-navy-light to-brand-navy items-center justify-center overflow-hidden">
              <div className="relative flex items-center justify-center p-8">
                <p className="text-white text-xl font-semibold text-center leading-relaxed">
                  Atendimento rápido e especializado em climatização e refrigeração.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
