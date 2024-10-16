import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Roboto_Flex } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Duzzi Climatização",
  keywords:
    "climatização residencial, instalação de ar-condicionado, manutenção de ar-condicionado, serviços de refrigeração, ar-condicionado split, refrigeração comercial, Cuiabá, limpeza de ar-condicionado, Duzzi Climatização, climatização eficiente, instalação de ar-condicionado em Cuiabá, assistência técnica de ar-condicionado, refrigeração de ambientes, ar-condicionado inverter, climatização industrial",
  description:
    "Duzzi Climatização, A Maior loja de climatização e refrigeração do estado de Mato Grosso!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/duzzi.jpeg" />
      </head>
      <body className={roboto.className}>
        <header></header>
        {children}
      </body>
    </html>
  );
}
