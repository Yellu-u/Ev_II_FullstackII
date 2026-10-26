import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- AGREGAS ESTA LÍNEA
import "./globals.css"; // <-- Esta ya venía en el proyecto

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}