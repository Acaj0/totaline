"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Users, MapPinned, Award } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { icon: Building2, label: "Fundada em", value: "2003" },
  { icon: MapPinned, label: "Pontos de venda", value: "10" },
  { icon: Users, label: "Colaboradores", value: "150+" },
  { icon: Award, label: "Reconhecida por", value: "Midea Carrier" },
];

const marcas = [
  "Age Therm", "Alado", "Amatools", "Aquabios", "Black & Decker", "Bosch",
  "Braskoki", "Brastemp", "Consul", "Controlbox", "Copeland", "CP Placas",
  "Danfoss", "Day Brasil", "Electrolux", "Elgin", "Elitech", "Embraco",
  "Emicol", "EOS", "Extruflex", "Famabras", "Foxlux", "Fujitsu", "Full Gauge",
  "Gree", "Hulter", "Indusat", "JRC Diamantados", "K11", "Leco do Brasil",
  "Mastercool", "Midea", "Migrare", "Minipa", "MOR", "Performance Ind.",
  "Quimital", "Springer Carrier", "Suryha", "Tecumseh", "Tectape",
  "Testo do Brasil", "Trineva", "Uni Refrigeração", "Vathisa", "Vulkan",
];

export function SobreContent() {
  return (
    <div>
      {/* Header */}
      <div className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/foto.jpeg"
            alt="Equipe Duzzi Totaline"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Nossa história
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl mx-auto"
          >
            Mais de 20 anos climatizando o Mato Grosso
          </motion.h1>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 md:-mt-14 relative"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-lg border border-border/60 p-5 md:p-6 text-center"
            >
              <s.icon className="h-6 w-6 text-brand-red mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <motion.p variants={fadeIn} className="text-lg text-foreground font-medium">
              Fundada em 14 de outubro de 2003 por Claudio Zafalon e seu filho Claudio Zafalon
              Filho, a Duzzi Climatização nasceu para atender uma necessidade crescente de
              soluções térmicas e de climatização no mercado.
            </motion.p>
            <motion.p variants={fadeIn}>
              Com o passar dos anos, a empresa se consolidou como uma referência no setor,
              oferecendo uma ampla gama de produtos e serviços. Especializamo-nos na venda de
              ar condicionado e materiais para sua instalação, além de peças para máquinas de
              lavar, climatizadores a base d&apos;água, câmaras frias, peças e materiais para
              manutenção de geladeiras e freezers, e diversas ferramentas.
            </motion.p>
            <motion.p variants={fadeIn}>
              Contamos com mais de 150 colaboradores dedicados, e somos uma empresa familiar que
              valoriza profundamente o atendimento ao cliente. Nossos vendedores possuem amplo
              conhecimento técnico, garantindo um atendimento ágil e sem complicações. Nos
              orgulhamos de oferecer preços competitivos e um serviço especializado e humanizado.
            </motion.p>
            <motion.p variants={fadeIn}>
              A Duzzi Climatização já foi reconhecida pela Midea Carrier como exemplo de parceiro
              da marca, evidenciando nosso compromisso com a qualidade e a excelência. Atendemos
              principalmente técnicos de refrigeração, mas também oferecemos nossas soluções para
              a população em geral. Começamos com uma pequena loja e hoje temos 10 pontos de venda
              espalhados pelo Mato Grosso, com a tendência de crescer cada vez mais.
            </motion.p>
            <motion.p variants={fadeIn}>
              Nosso objetivo é continuar expandindo, sempre buscando aprimorar nosso atendimento e
              oferecer as melhores soluções para nossos clientes. Venha nos conhecer e descubra
              por que a Duzzi Climatização é a escolha certa para suas necessidades de
              climatização e refrigeração.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={fadeIn} className="col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
              <Image src="/foto2.jpeg" alt="Loja Duzzi Totaline" fill className="object-cover" />
            </motion.div>
            <motion.div variants={fadeIn} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image src="/foto3.jpeg" alt="Equipe Duzzi Totaline" fill className="object-cover" />
            </motion.div>
            <motion.div variants={fadeIn} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image src="/foto.jpeg" alt="Produtos Duzzi Totaline" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Brands */}
      <div className="bg-secondary/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Marcas com quem trabalhamos</h2>
            <p className="text-muted-foreground mt-2">
              Representamos e revendemos as marcas mais renomadas do setor de climatização e refrigeração.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {marcas.map((m) => (
              <span
                key={m}
                className="px-3.5 py-1.5 rounded-full bg-white border border-border/70 text-sm text-foreground/80 shadow-sm"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
          Conheça nossas lojas
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Temos 10 unidades espalhadas por Mato Grosso, prontas para atender você.
        </p>
        <Link
          href="/mapa"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Ver lojas no mapa
        </Link>
      </div>
    </div>
  );
}
