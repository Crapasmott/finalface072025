import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingContactButton from "../components/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Médica - Dr. [Tu Nombre]",
  description: "Atención médica profesional con los mejores especialistas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Botón flotante de contacto */}
        <FloatingContactButton
          phoneNumber="+521234567890"                    // 👈 CAMBIA POR TU NÚMERO REAL
          whatsappNumber="+521234567890"                 // 👈 CAMBIA POR TU WHATSAPP REAL
          customImage="/images/doctor.jpg"               // 👈 CAMBIA POR TU IMAGEN
          position="bottom-right"                        // o "bottom-left"
          appointmentMessage="Hola! Me gustaría solicitar una cita médica. ¿Cuáles son los horarios disponibles esta semana?"
        />
      </body>
    </html>
  );
}