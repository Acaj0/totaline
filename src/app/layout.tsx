import type { Metadata } from "next";
import {
  Montserrat,
  Roboto,
  Roboto_Condensed,
  Roboto_Flex,
} from "next/font/google";
import "./globals.css";

const roboto = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duzzi Totaline Climatização e Refrigeração",
  keywords:
    "climatização residencial, instalação de ar-condicionado, manutenção de ar-condicionado, serviços de refrigeração, ar-condicionado split, refrigeração comercial, Cuiabá, limpeza de ar-condicionado, Duzzi Climatização, climatização eficiente, instalação de ar-condicionado em Cuiabá, assistência técnica de ar-condicionado, refrigeração de ambientes, ar-condicionado inverter, climatização industrial",
  description:
    "Duzzi  Totaline Climatização e Refrigeração, A Maior loja de climatização e refrigeração do estado de Mato Grosso!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N8K89F2P');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/duzzi.jpeg" />
      </head>
      <body className={roboto.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8K89F2P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <header></header>
        {children}
      </body>
    </html>
  );
}
