import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/whatsappbutton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Duzzi Totaline Climatização e Refrigeração",
  keywords:
    "climatização residencial, instalação de ar-condicionado, manutenção de ar-condicionado, serviços de refrigeração, ar-condicionado split, refrigeração comercial, Cuiabá, limpeza de ar-condicionado, Duzzi Climatização, climatização eficiente, instalação de ar-condicionado em Cuiabá, assistência técnica de ar-condicionado, refrigeração de ambientes, ar-condicionado inverter, climatização industrial",
  description:
    "Duzzi  Totaline Climatização e Refrigeração, A Maior loja de climatização e refrigeração do estado de Mato Grosso!",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        {/* Google Analytics 4 Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4JWHNM3F7M"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4JWHNM3F7M');
            `,
          }}
        />
      </head>
      <body className={`${jakarta.variable} ${montserrat.variable} font-sans`}>
        <WhatsAppButton />
        <header></header>
        {children}
      </body>
    </html>
  );
}
