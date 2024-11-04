"use client";

import { Fale } from "@/components/Fale";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      name: "Ar Condicionado",
      icon: (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,8H2a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V10A2,2,0,0,0,30,8ZM4,23V21H24v2H4Zm27-1a1,1,0,0,1-1,1H25V20H3v3H2a1,1,0,0,1-1-1V10A1,1,0,0,1,2,9H30a1,1,0,0,1,1,1V22Z" />
          <rect height="1" width="26" x="3" y="11" />
          <rect height="1" width="26" x="3" y="14" />
          <rect height="1" width="26" x="3" y="17" />
          <circle cx="28" cy="21" r="1" />
        </svg>
      ),
    },
    {
      name: "Peças de Refrigeração",
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32,31c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S33.654,31,32,31z M32,35c-0.551,0-1-0.449-1-1s0.449-1,1-1   s1,0.449,1,1S32.551,35,32,35z" />
          <path d="M32,13c-11.58,0-21,9.42-21,21s9.42,21,21,21s21-9.42,21-21S43.58,13,32,13z M47.96,44.271   c-6.59,2.784-9.642-1.415-11.631-4.781c0.433-0.342,0.824-0.734,1.166-1.168c1.824,1.024,4.376,2.283,7.153,2.283   c1.893,0,3.888-0.592,5.825-2.237C49.97,40.496,49.114,42.485,47.96,44.271z M32,39c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5   S34.757,39,32,39z M26.51,38.329c0.342,0.433,0.734,0.824,1.168,1.166c-1.722,3.067-4.105,8.2-0.049,12.977   c-2.127-0.503-4.115-1.359-5.9-2.512C18.945,43.37,23.144,40.318,26.51,38.329z M16.039,23.729   c6.592-2.781,9.642,1.416,11.631,4.781c-0.433,0.342-0.824,0.734-1.166,1.168c-3.067-1.722-8.2-4.105-12.977-0.049   C14.031,27.502,14.887,25.514,16.039,23.729z M37.49,29.671c-0.342-0.433-0.734-0.824-1.168-1.166   c1.722-3.067,4.105-8.2,0.049-12.977c2.127,0.503,4.115,1.359,5.9,2.512C45.055,24.63,40.856,27.682,37.49,29.671z M50.953,34.919   c-4.314,5.7-9.052,3.592-12.456,1.672c0.202-0.506,0.344-1.04,0.424-1.596c3.521-0.042,9.165-0.546,11.269-6.463   C50.712,30.265,51,32.099,51,34C51,34.31,50.968,34.613,50.953,34.919z M48.876,25.308c-0.882,7.105-6.046,7.648-9.956,7.688   c-0.08-0.555-0.222-1.09-0.426-1.595c3.022-1.794,7.643-5.044,6.531-11.196C46.578,21.672,47.885,23.392,48.876,25.308z    M32.919,15.047c5.699,4.313,3.592,9.052,1.672,12.456c-0.506-0.202-1.04-0.344-1.596-0.424c-0.042-3.521-0.546-9.165-6.463-11.269   C28.265,15.288,30.099,15,32,15C32.31,15,32.612,15.032,32.919,15.047z M23.308,17.124c7.105,0.882,7.648,6.046,7.688,9.956   c-0.555,0.08-1.09,0.222-1.595,0.426c-1.794-3.022-5.043-7.645-11.196-6.531C19.672,19.421,21.393,18.115,23.308,17.124z    M13.047,33.081c4.314-5.7,9.052-3.591,12.456-1.672c-0.202,0.506-0.344,1.04-0.424,1.596c-3.521,0.042-9.165,0.546-11.269,6.463   C13.288,37.735,13,35.901,13,34C13,33.69,13.032,33.387,13.047,33.081z M15.124,42.692c0.882-7.105,6.046-7.648,9.956-7.688   c0.08,0.555,0.222,1.09,0.426,1.595c-3.022,1.794-7.643,5.044-6.531,11.196C17.422,46.328,16.115,44.608,15.124,42.692z    M31.081,52.953c-5.699-4.313-3.592-9.052-1.672-12.456c0.506,0.202,1.04,0.344,1.596,0.424c0.042,3.521,0.546,9.165,6.463,11.269   C35.735,52.712,33.901,53,32,53C31.69,53,31.388,52.968,31.081,52.953z M40.692,50.876c-7.105-0.882-7.648-6.046-7.688-9.956   c0.555-0.08,1.09-0.223,1.596-0.426c1.608,2.709,4.38,6.704,9.37,6.704c0.58,0,1.199-0.073,1.841-0.19   C44.34,48.569,42.614,49.881,40.692,50.876z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-clip">
      <NavBar />
      <div
        className="bg-no-repeat bg-fit"
        style={{ backgroundImage: "url(/fundo.png)" }}
      >
        <main className="container mx-auto px-4 py-12 ">
          {/* Hero section */}

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center md:text-left text-white">
                  Soluções em Climatização
                </h1>
                <p className="text-xl text-gray-300 mb-8 text-center md:text-left">
                  A maior loja de refrigeração do estado!
                </p>
                <div className="md:w-[490px]">
                <Fale /></div>
              </div>
              <div className="aspect-video outline bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url(/hor.gif)" }}
                ></div>
              </div>
            </div>
          </section>

          {/* Reseller logos section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Revenda Oficial das maiores do mercado
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { src: "/fuji.png", alt: "Fuji Logo" },
                { src: "/elgin.png", alt: "Elgin Logo" },
                { src: "/gree.png", alt: "Gree Logo" },
                { src: "/midea-logo.png", alt: "Midea Logo" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Products section with updated SVG icons and WhatsApp links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Nossos Produtos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <a
                  key={index}
                  href="https://api.whatsapp.com/send?phone=556593333739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4">
                        {product.icon}
                      </div>
                      <h2 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-600">
                        Oferecemos uma ampla gama de{" "}
                        {product.name.toLowerCase()} para atender às suas
                        necessidades de climatização.
                      </p>
                    </CardContent>
                  </Card>
                  {hoveredCard === index && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black text-white rounded shadow-lg flex items-center">
                      <MessageCircle className="mr-2" size={20} />
                      <span>Fale conosco no WhatsApp</span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </section>

          {/* About Us section */}
          <section className="mb-16" id="2">
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre Nós</h2>
            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="text-justify">
                  Fundada em 14 de outubro de 2003 por Claudio Zafalon e seu
                  filho Claudio Zafalon Filho, a Duzzi Climatização nasceu para
                  atender uma necessidade crescente de soluções térmicas e de
                  climatização no mercado. Com o passar dos anos, a empresa se
                  consolidou como uma referência no setor, oferecendo uma ampla
                  gama de produtos e serviços.
                </p>
                <p className="text-justify mt-2">
                  Especializamos-nos na venda de ar condicionado e materiais
                  para sua instalação, além de peças para máquinas de lavar,
                  climatizadores a base d'água, câmaras frias, peças e materiais
                  para manutenção de geladeiras e freezers, e diversas
                  ferramentas. Trabalhamos com marcas renomadas como Age Therm,
                  Alado, Amatools, Aquabios, Black & Decker, Bosch, Braskoki,
                  Brastemp, Consul, Controlbox, Copeland, CP Placas, Danfoss,
                  Day Brasil, Electrolux, Elgin, Elitech, Embraco, Emicol, EOS,
                  Extruflex, Famabras, Foxlux, Fujitsu, Full Gauge, Gree,
                  Hulter, Indusat, JRC Diamantados, K11, Leco do Brasil,
                  Mastercool, Midea, Migrare, Minipa, MOR, Performance Ind.,
                  Quimital, Springer Carrier, Suryha, Tecumseh, Tectape, Testo
                  do Brasil, Trineva, Uni Refrigeração, Vathisa e Vulkan.
                </p>
                <p className="text-justify mt-2">
                  Contamos com mais de 80 funcionários dedicados, e somos uma
                  empresa familiar que valoriza profundamente o atendimento ao
                  cliente. Nossos vendedores possuem amplo conhecimento técnico,
                  garantindo um atendimento ágil e sem complicações. Nos
                  orgulhamos de oferecer preços competitivos e um serviço
                  especializado e humanizado.
                </p>
                <p className="text-justify mt-2">
                  A Duzzi Climatização já foi reconhecida pela Midea Carrier
                  como exemplo de parceiro da marca, evidenciando nosso
                  compromisso com a qualidade e a excelência. Atendemos
                  principalmente técnicos de refrigeração, mas também oferecemos
                  nossas soluções para a população em geral. Começamos com uma
                  pequena loja e hoje temos 10 pontos de venda espalhados pelo
                  Mato Grosso, com a tendência de crescer cada vez mais.
                </p>
                <p className="text-justify mt-2">
                  Nosso objetivo é continuar expandindo, sempre buscando
                  aprimorar nosso atendimento e oferecer as melhores soluções
                  para nossos clientes. Venha nos conhecer e descubra por que a
                  Duzzi Climatização é a escolha certa para suas necessidades de
                  climatização e refrigeração.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`/foto${num === 1 ? "" : num}.jpeg`}
                      alt={`Sobre Nós Imagem ${num}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
