import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";

const stores = [
  { name: "Matriz", address: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT", phone: "(65) 3624-1990", href: "/lojas/matriz" },
  { name: "Porto", address: "Av. Mário Correa, 319, Porto - Cuiabá - MT", phone: "(65) 3623-3452", href: "/lojas/porto" },
  { name: "CPA", address: "R. Cocã, 27, CPA 4, 1° Etapa - Cuiabá - MT", phone: "(65) 3646-4969", href: "/lojas/cpa" },
  { name: "Coxipó", address: "BR-364, 1093 - Jardim Passaredo, Cuiabá - MT", phone: "(65) 3623-8260", href: "/lojas/coxipo" },
  { name: "Várzea Grande", address: "Av. Gov. Júlio Campos, 3033, Jd Gloria I. Várzea Grande", phone: "(65) 3029-2329", href: "/lojas/varzea-grande" },
  { name: "Sinop", address: "R. das Orquídeas 1045, Res. Sul - Sinop - MT", phone: "(66) 3532-2220", href: "/lojas/sinop" },
  { name: "Rondonópolis", address: "R. Barão do Rio Branco, 1941, Rondonópolis - MT", phone: "(66) 3423-7550", href: "/lojas/rondonopolis" },
  { name: "Primavera do Leste", address: "Rua Guanabara N. 520 Centro, Primavera do Leste - MT", phone: "(66) 3497-3540", href: "/lojas/primavera-do-leste" },
  { name: "Campo Verde", address: "Av. Sen Antônio Fobtana S/N Jardim C. verde, Campo Verde - MT", phone: "(66) 99982-2726", href: "/lojas/campo-verde" },
  { name: "Lucas do Rio Verde", address: "Av. Santa Catarina, 90e - Cidade Nova, Lucas do Rio Verde - MT", phone: "(65) 3212-3100", href: "/lojas/lucas-do-rio-verde" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="h-1 bg-brand-red" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-4">
            <p className="text-xl font-bold">Duzzi Totaline</p>
            <p className="text-sm text-white/60 leading-relaxed">
              A maior loja de climatização e refrigeração do Mato Grosso, com 10 unidades
              prontas para atender você.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:duzziclimatizacao@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4" /> duzziclimatizacao@gmail.com
              </a>
            </div>
            <div className="flex gap-3 pt-1">
              <a href="https://www.instagram.com/duzziclimatizacao/" aria-label="Instagram" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/DuzziClimatizacao/" aria-label="Facebook" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=556593333739" aria-label="WhatsApp" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="text-sm font-semibold text-white/50 uppercase tracking-wide">Institucional</p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/sobre" className="text-white/75 hover:text-white transition-colors">Sobre Nós</Link>
              <Link href="/parceiros" className="text-white/75 hover:text-white transition-colors">Parceiros</Link>
              <Link href="/mapa" className="text-white/75 hover:text-white transition-colors">Todas as lojas</Link>
            </nav>
          </div>

          <div className="md:col-span-6">
            <p className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3">Nossas lojas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {stores.map((store) => (
                <Link
                  key={store.name}
                  href={store.href}
                  className="group flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-white/40 group-hover:text-brand-red transition-colors" />
                  <span>
                    <span className="font-medium">{store.name}</span>
                    <span className="block text-xs text-white/45">{store.phone}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Duzzi Climatização. Todos os direitos reservados.</p>
          <a className="hover:text-white transition-colors" target="_blank" href="https://www.lumenweb.com.br/">
            Lumen Desenvolvimento Web
          </a>
        </div>
      </div>
    </footer>
  );
}
