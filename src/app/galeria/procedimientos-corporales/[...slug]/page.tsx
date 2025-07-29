"use client";

import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

interface ImagePair {
  before: string;
  after: string;
  view: string;
}

interface ProcedureCase {
  id: number;
  title: string;
  age: string;
  description: string;
  images: ImagePair[];
}

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

export default function CasoIndividualPage() {
  const router = useRouter();
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Obtener información del caso basado en la URL
  const getCaseData = () => {
    const slug = params.slug as string[];
    if (!slug || slug.length === 0) return null;

    // Mapeo de casos según la URL
    const casesMap: { [key: string]: ProcedureCase } = {
      'facial/rinoplastia/caso-1': {
        id: 1,
        title: "Rinoplastia Ultrasónica",
        age: "28 años",
        description: "Refinamiento nasal que logra armonía facial perfecta manteniendo la naturalidad.",
        images: [
          { before: "/images/rinoplastia/caso1/frontal-antes.jpg", after: "/images/rinoplastia/caso1/frontal-despues.jpg", view: "Vista Frontal" },
          { before: "/images/rinoplastia/caso1/perfil-antes.jpg", after: "/images/rinoplastia/caso1/perfil-despues.jpg", view: "Vista Perfil" },
          { before: "/images/rinoplastia/caso1/tres-cuartos-antes.jpg", after: "/images/rinoplastia/caso1/tres-cuartos-despues.jpg", view: "Vista 3/4" },
          { before: "/images/rinoplastia/caso1/basal-antes.jpg", after: "/images/rinoplastia/caso1/basal-despues.jpg", view: "Vista Basal" }
        ]
      },
      'facial/blefaroplastia/caso-1': {
        id: 2,
        title: "Blefaroplastia",
        age: "45 años",
        description: "Rejuvenecimiento de párpados que elimina las bolsas y exceso de piel.",
        images: [
          { before: "/images/blefaroplastia/caso1/frontal-antes.jpg", after: "/images/blefaroplastia/caso1/frontal-despues.jpg", view: "Vista Frontal" },
          { before: "/images/blefaroplastia/caso1/perfil-antes.jpg", after: "/images/blefaroplastia/caso1/perfil-despues.jpg", view: "Vista Perfil" },
          { before: "/images/blefaroplastia/caso1/detalle-antes.jpg", after: "/images/blefaroplastia/caso1/detalle-despues.jpg", view: "Vista Detalle" }
        ]
      },
      'facial/lifting-facial-hamaca/caso-1': {
        id: 3,
        title: "Lifting Facial Hamaca",
        age: "52 años",
        description: "Rejuvenecimiento facial integral que reposiciona tejidos y elimina la flacidez.",
        images: [
          { before: "/images/lifting/caso1/frontal-antes.jpg", after: "/images/lifting/caso1/frontal-despues.jpg", view: "Vista Frontal" },
          { before: "/images/lifting/caso1/perfil-antes.jpg", after: "/images/lifting/caso1/perfil-despues.jpg", view: "Vista Perfil" },
          { before: "/images/lifting/caso1/tres-cuartos-antes.jpg", after: "/images/lifting/caso1/tres-cuartos-despues.jpg", view: "Vista 3/4" }
        ]
      },
      'senos/mamoplastia-aumento/caso-1': {
        id: 4,
        title: "Mamoplastia de Aumento",
        age: "29 años",
        description: "Aumento mamario con implantes de silicona para mejorar volumen y forma.",
        images: [
          { before: "/images/mamoplastia/caso1/frontal-antes.jpg", after: "/images/mamoplastia/caso1/frontal-despues.jpg", view: "Vista Frontal" },
          { before: "/images/mamoplastia/caso1/perfil-antes.jpg", after: "/images/mamoplastia/caso1/perfil-despues.jpg", view: "Vista Perfil" },
          { before: "/images/mamoplastia/caso1/tres-cuartos-antes.jpg", after: "/images/mamoplastia/caso1/tres-cuartos-despues.jpg", view: "Vista 3/4" }
        ]
      },
      'corporal/abdominoplastia-hd/caso-1': {
        id: 5,
        title: "Abdominoplastia HD",
        age: "35 años",
        description: "Eliminación de exceso de piel y grasa abdominal con definición muscular.",
        images: [
          { before: "/images/abdominoplastia/caso1/frontal-antes.jpg", after: "/images/abdominoplastia/caso1/frontal-despues.jpg", view: "Vista Frontal" },
          { before: "/images/abdominoplastia/caso1/perfil-antes.jpg", after: "/images/abdominoplastia/caso1/perfil-despues.jpg", view: "Vista Perfil" },
          { before: "/images/abdominoplastia/caso1/detalle-antes.jpg", after: "/images/abdominoplastia/caso1/detalle-despues.jpg", view: "Vista Detalle" }
        ]
      },
      'corporal/liposuccion/caso-1': {
        id: 6,
        title: "Liposucción 360°",
        age: "31 años",
        description: "Contorno corporal completo eliminando grasa localizada en múltiples áreas.",
        images: [
          { before: "/images/liposuccion/caso1/frontal-antes.jpg", after: "/images/liposuccion/caso1/frontal-despues.jpg", view: "Vista Frontal" },
          { before: "/images/liposuccion/caso1/perfil-antes.jpg", after: "/images/liposuccion/caso1/perfil-despues.jpg", view: "Vista Perfil" },
          { before: "/images/liposuccion/caso1/posterior-antes.jpg", after: "/images/liposuccion/caso1/posterior-despues.jpg", view: "Vista Posterior" }
        ]
      }
    };

    const caseKey = slug.join('/');
    return casesMap[caseKey] || casesMap['facial/rinoplastia/caso-1']; // Default
  };

  const currentCase = getCaseData();
  if (!currentCase) return null;

  // Casos relacionados dinámicos según el procedimiento
  const getCasosRelacionados = () => {
    const slug = params.slug as string[];
    if (!slug) return [];

    // Si es mamoplastia, mostrar 8 casos de mamoplastia
    if (slug.includes('mamoplastia-aumento')) {
      return [
        { id: 1, title: "Mamoplastia de Aumento", age: "28 años", selected: currentCase.id === 4, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-1" },
        { id: 2, title: "Aumento Moderado", age: "31 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-2" },
        { id: 3, title: "Aumento Voluminoso", age: "26 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-3" },
        { id: 4, title: "Implantes Redondos", age: "29 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-4" },
        { id: 5, title: "Aumento Bilateral", age: "33 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-5" },
        { id: 6, title: "Aumento Postparto", age: "35 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-6" },
        { id: 7, title: "Corrección Asimetría", age: "30 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-7" },
        { id: 8, title: "Aumento de Revisión", age: "38 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-8" }
      ];
    }
    
    // Si es rinoplastia, mostrar casos de rinoplastia
    if (slug.includes('rinoplastia')) {
      return [
        { id: 1, title: "Rinoplastia Ultrasónica", age: "28 años", selected: currentCase.id === 1, href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-1" },
        { id: 2, title: "Rinoplastia Étnica", age: "31 años", selected: false, href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-2" },
        { id: 3, title: "Rinoplastia de Reducción", age: "26 años", selected: false, href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-3" },
        { id: 4, title: "Rinoplastia Secundaria", age: "33 años", selected: false, href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-4" },
        { id: 5, title: "Rinoplastia de Aumento", age: "29 años", selected: false, href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-5" },
        { id: 6, title: "Rinoplastia Masculina", age: "35 años", selected: false, href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-6" }
      ];
    }

    // Si es blefaroplastia, mostrar casos de blefaroplastia
    if (slug.includes('blefaroplastia')) {
      return [
        { id: 1, title: "Blefaroplastia Superior", age: "45 años", selected: currentCase.id === 2, href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-1" },
        { id: 2, title: "Blefaroplastia Inferior", age: "50 años", selected: false, href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-2" },
        { id: 3, title: "Blefaroplastia 360°", age: "48 años", selected: false, href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-3" },
        { id: 4, title: "Blefaroplastia Juvenil", age: "35 años", selected: false, href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-4" },
        { id: 5, title: "Blefaroplastia Masculina", age: "42 años", selected: false, href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-5" },
        { id: 6, title: "Blefaroplastia de Revisión", age: "55 años", selected: false, href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-6" }
      ];
    }

    // Si es abdominoplastia, mostrar casos de abdominoplastia
    if (slug.includes('abdominoplastia')) {
      return [
        { id: 1, title: "Abdominoplastia HD", age: "35 años", selected: currentCase.id === 5, href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-1" },
        { id: 2, title: "Mini Abdominoplastia", age: "28 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-2" },
        { id: 3, title: "Abdominoplastia Post-parto", age: "32 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-3" },
        { id: 4, title: "Abdominoplastia Extendida", age: "42 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-4" },
        { id: 5, title: "Abdominoplastia Masculina", age: "41 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-5" },
        { id: 6, title: "Abdominoplastia Post-bariátrica", age: "45 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-6" }
      ];
    }

    // Si es liposucción, mostrar casos de liposucción
    if (slug.includes('liposuccion')) {
      return [
        { id: 1, title: "Liposucción 360°", age: "31 años", selected: currentCase.id === 6, href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-1" },
        { id: 2, title: "Liposucción Abdominal", age: "33 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-2" },
        { id: 3, title: "Liposucción de Flancos", age: "36 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-3" },
        { id: 4, title: "Liposucción HD", age: "27 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-4" },
        { id: 5, title: "Liposucción VASER", age: "31 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-5" },
        { id: 6, title: "Liposucción con Transferencia", age: "28 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-6" }
      ];
    }

    // Default - casos mixtos
    return [
      { id: 1, title: "Rinoplastia Ultrasónica", age: "28 años", selected: false, href: "/galeria/procedimientos-corporales/facial/rinoplastia/caso-1" },
      { id: 2, title: "Blefaroplastia", age: "45 años", selected: false, href: "/galeria/procedimientos-corporales/facial/blefaroplastia/caso-1" },
      { id: 3, title: "Mamoplastia de Aumento", age: "29 años", selected: false, href: "/galeria/procedimientos-corporales/senos/mamoplastia-aumento/caso-1" },
      { id: 4, title: "Abdominoplastia HD", age: "35 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/abdominoplastia-hd/caso-1" },
      { id: 5, title: "Liposucción 360°", age: "31 años", selected: false, href: "/galeria/procedimientos-corporales/corporal/liposuccion/caso-1" },
      { id: 6, title: "Lifting Facial", age: "52 años", selected: false, href: "/galeria/procedimientos-corporales/facial/lifting-facial-hamaca/caso-1" }
    ];
  };

  const casosRelacionados = getCasosRelacionados();

  const currentImagePair = currentCase.images[selectedImage];

  const goBack = () => {
    router.push('/galeria/procedimientos-corporales');
  };

  const handleImageSelect = (imageIndex: number) => {
    setSelectedImage(imageIndex);
  };

  // Funciones para el slider
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= casosRelacionados.length - 6 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, casosRelacionados.length - 6) : prev - 1
    );
  };

  const handleCaseClick = (href: string) => {
    router.push(href);
  };

  const handleCaseSelect = (caseId: number) => {
    // Encontrar el caso seleccionado y actualizar
    const selectedCase = casosRelacionados.find(caso => caso.id === caseId);
    if (selectedCase) {
      router.push(selectedCase.href);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Navegación superior */}
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
            <option>Rinoplastia</option>
            <option>Blefaroplastia</option>
            <option>Lifting Facial</option>
            <option>Mamoplastia</option>
            <option>Abdominoplastia</option>
            <option>Liposucción</option>
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Layout principal como la imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Imagen principal - 3 columnas */}
          <div className="lg:col-span-3">
            <div className="rounded-lg overflow-hidden border">
              <div className="grid grid-cols-2">
                {/* ANTES - Azul */}
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-blue-600 font-bold text-lg">ANTES</span>
                      </div>
                      <span className="text-blue-800 font-medium text-lg">{currentImagePair.view}</span>
                      <p className="text-blue-700 text-sm mt-2">Caso #{currentCase.id}</p>
                    </div>
                  </div>
                </div>
                
                {/* DESPUÉS - Verde */}
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-green-600 font-bold text-lg">DESPUÉS</span>
                      </div>
                      <span className="text-green-800 font-medium text-lg">{currentImagePair.view}</span>
                      <p className="text-green-700 text-sm mt-2">Resultado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información del procedimiento */}
            <div className="mt-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">{currentCase.title}</h1>
              <p className="text-xl text-gray-600 mb-3">{currentCase.age}</p>
              <p className="text-gray-700 text-lg mb-3">{currentCase.description}</p>
              <p className="text-sm text-gray-500 italic">Los resultados individuales pueden variar.</p>
            </div>
          </div>

          {/* Panel lateral "Otras Vistas" - 1 columna */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Otras Vistas</h3>
            <div className="space-y-4">
              {currentCase.images.map((imagePair, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(index)}
                  className={`w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 border-2 ${
                    selectedImage === index 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-full h-16 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">A</span>
                    </div>
                    <div className="w-full h-16 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-sm font-bold">D</span>
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">{imagePair.view}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navegación entre casos */}
        <div className="flex justify-between items-center mb-8">
          <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
            Anterior
          </button>
          <div className="text-sm text-gray-600">
            Caso 1 de 17
          </div>
          <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
            Siguiente
          </button>
        </div>

        {/* Sección "Ver Otros Pacientes" con Slider */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Ver Otros Pacientes</h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100/6)}%)`,
                width: `${(casosRelacionados.length / 6) * 100}%`
              }}
            >
              {casosRelacionados.map((caso, index) => (
                <div 
                  key={caso.id}
                  className="w-1/6 flex-shrink-0 px-2"
                >
                  <div 
                    className={`cursor-pointer transition-all duration-200 ${
                      caso.selected ? 'transform scale-105' : 'hover:scale-102'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCaseSelect(caso.id);
                    }}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border-2 ${
                      caso.selected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
                    }`}>
                      <div className="grid grid-cols-2">
                        <div className="w-full h-16 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 text-xs font-bold">ANTES</span>
                        </div>
                        <div className="w-full h-16 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                          <span className="text-green-600 text-xs font-bold">DESPUÉS</span>
                        </div>
                      </div>
                      <div className="p-2 text-center">
                        <div className="text-xs font-medium text-gray-700 mb-1">{caso.title}</div>
                        <div className="text-xs text-gray-500">{caso.age}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}