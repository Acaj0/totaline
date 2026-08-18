"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const parceiros = [
  { src: "/total.jpg", alt: "Totaline" },
  { src: "/midea-logo.png", alt: "Midea" },
  { src: "/gree.png", alt: "Gree" },
  { src: "/elgin.png", alt: "Elgin" },
  { src: "/fuji.png", alt: "Fujitsu" },
  { src: "/1.png", alt: "Danfoss" },
  { src: "/2.png", alt: "Springer Carrier" },
  { src: "/5.png", alt: "Full Gauge" },
  { src: "/6.png", alt: "Suryha" },
  { src: "/7.png", alt: "Embraco" },
  { src: "/8.png", alt: "Electrolux" },
  { src: "/9.png", alt: "Braskoki" },
  { src: "/copeland.png", alt: "Copeland" },
  { src: "/12.png", alt: "Whirlpool" },
  { src: "/13.png", alt: "Vulkan" },
  { src: "/agetherm.png", alt: "Age Therm" },
  { src: "/alado.png", alt: "Alado" },
  { src: "/amatools.png", alt: "Amatools" },
  { src: "/aquabios.png", alt: "Aquabios" },
  { src: "/black_decker.png", alt: "Black & Decker" },
  { src: "/bosch.png", alt: "Bosch" },
  { src: "/brastemp.png", alt: "Brastemp" },
  { src: "/consul.png", alt: "Consul" },
  { src: "/controlbox.png", alt: "Controlbox" },
  { src: "/cp.png", alt: "CP Placas" },
  { src: "/day brasil.png", alt: "Day Brasil" },
  { src: "/elco.png", alt: "Elco" },
  { src: "/emicol.png", alt: "Emicol" },
  { src: "/eos.png", alt: "EOS" },
  { src: "/extruflex.png", alt: "Extruflex" },
  { src: "/famabras.png", alt: "Famabras" },
  { src: "/foxlux.png", alt: "Foxlux" },
  { src: "/hulter.png", alt: "Hulter" },
  { src: "/indusat.png", alt: "Indusat" },
  { src: "/jrc.png", alt: "JRC Diamantados" },
  { src: "/k11.png", alt: "K11" },
  { src: "/mastercool.png", alt: "Mastercool" },
  { src: "/migrare.png", alt: "Migrare" },
  { src: "/minipa.png", alt: "Minipa" },
  { src: "/mor.png", alt: "MOR" },
  { src: "/quimital.png", alt: "Quimital" },
  { src: "/tectape.png", alt: "Tectape" },
  { src: "/tecumseh.png", alt: "Tecumseh" },
  { src: "/testo.png", alt: "Testo do Brasil" },
  { src: "/trineva.png", alt: "Trineva" },
  { src: "/uni.png", alt: "Uni Refrigeração" },
  { src: "/vathisa.png", alt: "Vathisa" },
];

export function ParceirosContent() {
  return (
    <div>
      <div className="bg-brand-navy py-16 md:py-20 text-center">
        <p className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-3">
          Parceiros
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Marcas que confiam na Duzzi Totaline
        </h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto px-4">
          Revenda oficial das principais marcas de climatização, refrigeração e peças do mercado.
        </p>
      </div>

      <div className="container mx-auto px-4 py-14 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {parceiros.map((p) => (
            <motion.div
              key={p.src}
              variants={fadeIn}
              className="group relative aspect-square bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-5 flex items-center justify-center"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-contain p-6 group-hover:scale-105 transition-transform"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
