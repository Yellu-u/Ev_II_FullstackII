import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { CarritoProvider } from "./context/CarritoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proper Chile",
  description: "Tienda online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* 3. ENVOLVEMOS LOS HIJOS CON EL PROVIDER */}
        <CarritoProvider>
            {children}
        </CarritoProvider>
      </body>
    </html>
  );
}