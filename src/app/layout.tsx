import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { type Metadata } from "next";
import Navbar from "./_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aula de T3",
  description: "Exemplo de utilização do T3 para um site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
              <Navbar/>
              {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
