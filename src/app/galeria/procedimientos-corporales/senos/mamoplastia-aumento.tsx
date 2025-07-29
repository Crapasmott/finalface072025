"use client";

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Header Component
const Header = () => {
  return (
    <header className="bg-[#2c5aa0] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white">
              <Image
                src="/images/firma-2.png"
                alt="Dr. Andrés Pérez Nieto"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              INICIO
            </Link>
            <Link href="/dr-perez" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              DR. PÉREZ +
            </Link>
            <Link href="/procedimientos" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              PROCEDIMIENTOS +
            </Link>
            <Link href="/galeria" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              GALERÍA +
            </Link>
            <Link href="/pacientes-extranjeros" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              PACIENTES EXTRANJEROS +
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              BLOG
            </Link>
            <Link href="/recursos" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              RECURSOS +
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#2c5aa0] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/logo-footer.png"
              alt="Dr. Andrés Pérez Nieto"
              width={200}
              height={100}
              className="h-24 w-auto"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">CONTÁCTANOS:</h3>
            <div className="space-y-2">
              <p>(+57) 601 629 9551</p>
              <p>(+57) 316 495 3755</p>
              <p>info@drandrespereznieto.com</p>
              <p>Calle 119 # 7 – 14 Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function ProcedimientosCorporalesPage() {
  const router = useRouter();

  // Datos de casos exactamente como la imagen 1
  const casosData = [
    {
      id: 1,
      procedimiento: "Rinoplastia",
      numero: "#1",
      edad: "28 años",
      descripcion: "Refinamiento nasal que logra armonía facial perfecta manteniendo la naturalidad.",
      href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-1"
    },
    {
      id: 2,
      procedimiento: "Blefaroplastia", 
      numero: "#2",
      edad: "45 años",
      descripcion: "Rejuvenecimiento de párpados que elimina las bolsas y exceso de piel.",
      href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-1"
    },
    {
      id: 3,
      procedimiento: "Lifting Facial Hamaca",
      numero: "#3", 
      edad: "52 años",
      descripcion: "Rejuvenecimiento facial integral que reposiciona tejidos y elimina la flacidez.",
      href: "/galeria/procedimientos-corporales/facial/lifting-facial-hamaca/caso-1"
    },
    {
      id: 4,
      procedimiento: "Mamoplastia de Aumento",
      numero: "#4",
      edad: "29 años",
      descripcion: "Aumento mamario con implantes de silicona para mejorar volumen y forma.",
      href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-1"
    },
    {
      id: 5,
      procedimiento: "Abdominoplastia HD",
      numero: "#5",
      edad: "35 años",
      descripcion: "Eliminación de exceso de piel y grasa abdominal con definición muscular.",
      href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-1"
    },
    {
      id: 6,
      procedimiento: "Liposucción 360°",
      numero: "#6",
      edad: "31 años",
      descripcion: "Contorno corporal completo eliminando grasa localizada en múltiples áreas.",
      href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-1"
    }
  ];

  const goBack = () => {
    router.push('/galeria');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section Azul */}
      <div className="bg-[#2c5aa0] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-light mb-4">
            Transformaciones Reales • Resultados Excepcionales
          </h1>
          <p className="text-xl opacity-90">
            18 casos de éxito documentados
          </p>
        </div>
      </div>

      {/* Navegación */}
      <div className="bg-gray-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-gray-800 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a Galería
          </button>
          
          <select className="bg-gray-800 text-white px-4 py-2 rounded text-sm">
            <option>Procedimientos Corporales</option>
            <option>Procedimientos Faciales</option>
            <option>Testimonios</option>
          </select>
        </div>
      </div>

      {/* Grid de Casos como Imagen 1 */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casosData.map((caso) => (
            <Link
              key={caso.id}
              href={caso.href}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Sección ANTES/DESPUÉS arriba como badges */}
              <div className="grid grid-cols-2 gap-2 p-3">
                <div className="flex items-center space-x-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ANTES
                  </span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    DESPUÉS
                  </span>
                </div>
              </div>
              
              {/* Imagen Antes/Después */}
              <div className="relative h-48">
                <div className="grid grid-cols-2 h-full">
                  {/* ANTES - Rosa */}
                  <div className="relative bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <span className="text-red-500 font-bold text-lg">A</span>
                      </div>
                      <span className="text-red-600 font-medium text-sm">ANTES</span>
                    </div>
                  </div>
                  
                  {/* DESPUÉS - Verde */}
                  <div className="relative bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <span className="text-green-500 font-bold text-lg">D</span>
                      </div>
                      <span className="text-green-600 font-medium text-sm">DESPUÉS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Información del Caso */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    {caso.procedimiento}
                  </h3>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-bold">
                    {caso.numero}
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-purple-600 font-medium">{caso.edad}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {caso.descripcion}
                </p>
                
                <div className="flex items-center justify-end">
                  <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Segunda fila de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Casos adicionales siguiendo el mismo patrón */}
          {[
            {
              id: 7,
              procedimiento: "Mentoplastia",
              numero: "#7",
              edad: "33 años",
              descripcion: "Armonización facial mediante aumento o reducción del mentón.",
              href: "/galeria/procedimientos-corporales/facial/mentoplastia/caso-1"
            },
            {
              id: 8,
              procedimiento: "Otoplastia",
              numero: "#8",
              edad: "27 años", 
              descripcion: "Corrección de orejas prominentes para mejorar la armonía facial.",
              href: "/galeria/procedimientos-corporales/facial/otoplastia/caso-1"
            },
            {
              id: 9,
              procedimiento: "Bichectomía",
              numero: "#9",
              edad: "25 años",
              descripcion: "Eliminación de grasa bucal para definir mejor los contornos faciales.",
              href: "/galeria/procedimientos-corporales/facial/bichectomia/caso-1"
            }
          ].map((caso) => (
            <Link
              key={caso.id}
              href={caso.href}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Sección ANTES/DESPUÉS arriba como badges */}
              <div className="grid grid-cols-2 gap-2 p-3">
                <div className="flex items-center space-x-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ANTES
                  </span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    DESPUÉS
                  </span>
                </div>
              </div>
              
              {/* Imagen Antes/Después */}
              <div className="relative h-48">
                <div className="grid grid-cols-2 h-full">
                  {/* ANTES - Rosa */}
                  <div className="relative bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <span className="text-red-500 font-bold text-lg">A</span>
                      </div>
                      <span className="text-red-600 font-medium text-sm">ANTES</span>
                    </div>
                  </div>
                  
                  {/* DESPUÉS - Verde */}
                  <div className="relative bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <span className="text-green-500 font-bold text-lg">D</span>
                      </div>
                      <span className="text-green-600 font-medium text-sm">DESPUÉS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Información del Caso */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    {caso.procedimiento}
                  </h3>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-bold">
                    {caso.numero}
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-purple-600 font-medium">{caso.edad}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {caso.descripcion}
                </p>
                
                <div className="flex items-center justify-end">
                  <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}