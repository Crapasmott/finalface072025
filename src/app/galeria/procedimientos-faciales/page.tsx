"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Eye, ArrowRight, X, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

// TU HEADER ORIGINAL COMPLETO
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems = [
    { label: 'INICIO', href: '/', hasDropdown: false },
    { 
      label: 'DR. PÉREZ', 
      href: '/',
      hasDropdown: true,
      subItems: [
        { label: 'CONOCE AL DR. PÉREZ', href: '/conoce-doctor' },
        { label: 'MIS TÉCNICAS', href: '/dr-perez/tecnicas' },
        { label: 'INSTALACIONES Y STAFF', href: '/instalaciones' }
      ]
    },
    { 
      label: 'PROCEDIMIENTOS', 
      href: '/',
      hasDropdown: true,
      subItems: [
        { 
          label: 'FACIALES',
          isCategory: true,
          items: [
            { label: 'RINOPLASTIA', href: '/procedimientos/rinoplastia' },
            { label: 'BLEFAROPLASTIA', href: '/procedimientos/blefaroplastia' },
            { label: 'MENTOPLASTIA', href: '/procedimientos/mentoplastia' }
          ]
        }
      ]
    },
    { label: 'GALERÍA', href: '/galeria', hasDropdown: false },
    { label: 'BLOG', href: '/blog', hasDropdown: false }
  ];

  const handleMouseEnter = (itemLabel) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-[#2c5aa0] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white">
              <h1 className="text-xl font-light tracking-wide text-white">
                Dr. Andrés Pérez Nieto
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href}
                  className="flex items-center text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-2 text-blue-200">+</span>
                  )}
                </a>
              </div>
            ))}
          </nav>

          <div className="lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// TU FOOTER ORIGINAL SIMPLIFICADO
const Footer = () => {
  return (
    <footer className="bg-[#2c5aa0] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Dr. Andrés Pérez Nieto
              </h3>
              <p className="text-blue-200">Cirujano Plástico Especialista</p>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-6 text-center lg:text-left">
                CONTÁCTANOS:
              </h3>
              
              <div className="flex space-x-3 justify-center lg:justify-start mb-8">
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                  <Phone size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                  <Facebook size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                  <Instagram size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                  <Mail size={18} className="text-white" />
                </a>
              </div>

              <div className="space-y-2 text-center lg:text-left">
                <div className="text-white font-medium">(+57) 601 629 9551</div>
                <div className="text-white font-medium">(+57) 316 495 3755</div>
                <div className="text-white font-medium">info@drandrespereznieto.com</div>
                <div className="text-white font-medium">Calle 119 # 7 – 14 Bogotá, Colombia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/30 my-8"></div>

        <div className="text-center">
          <p className="text-white/90 text-sm">
            Copyright 2025 Andrés Pérez Nieto | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const GaleriaGridPage = () => {
  // 18 casos para llenar 3 columnas x 6 filas
  const allCases = [
    {
      id: 1,
      procedure: "Rinoplastia",
      age: "28 años",
      description: "Refinamiento nasal que logra armonía facial perfecta manteniendo la naturalidad.",
      routePath: "/procedimientos/rinoplastia"
    },
    {
      id: 2,
      procedure: "Blefaroplastia",
      age: "45 años",
      description: "Rejuvenecimiento de párpados que elimina las bolsas y exceso de piel.",
      routePath: "/procedimientos/blefaroplastia"
    },
    {
      id: 3,
      procedure: "Lifting Facial",
      age: "52 años",
      description: "Rejuvenecimiento facial integral que reposiciona tejidos y elimina la flacidez.",
      routePath: "/procedimientos/lifting-facial-hamaca"
    },
    {
      id: 4,
      procedure: "Bichectomía",
      age: "32 años",
      description: "Reducción de las bolsas de Bichat para acentuar los pómulos.",
      routePath: "/procedimientos/bichectomia"
    },
    {
      id: 5,
      procedure: "Mentoplastia",
      age: "35 años",
      description: "Aumento de mentón que mejora el perfil facial.",
      routePath: "/procedimientos/mentoplastia"
    },
    {
      id: 6,
      procedure: "Otoplastia",
      age: "29 años",
      description: "Corrección de orejas prominentes.",
      routePath: "/procedimientos/otoplastia"
    },
    {
      id: 7,
      procedure: "Rinoplastia Ultrasónica",
      age: "31 años",
      description: "Técnica avanzada de rinoplastia que preserva los tejidos blandos.",
      routePath: "/procedimientos/rinoplastia"
    },
    {
      id: 8,
      procedure: "Blefaroplastia Superior",
      age: "38 años",
      description: "Corrección específica de párpados superiores.",
      routePath: "/procedimientos/blefaroplastia"
    },
    {
      id: 9,
      procedure: "Mini Lifting",
      age: "42 años",
      description: "Lifting facial mínimamente invasivo con técnica SMAS.",
      routePath: "/procedimientos/lifting-facial-hamaca"
    },
    {
      id: 10,
      procedure: "Lipofiling Facial",
      age: "40 años",
      description: "Relleno con grasa propia para restaurar volumen facial.",
      routePath: "/procedimientos/lipofilling-celulas-madre"
    },
    {
      id: 11,
      procedure: "Rinomentoplastia",
      age: "27 años",
      description: "Combinación de rinoplastia y mentoplastia para armonía facial.",
      routePath: "/procedimientos/rinoplastia"
    },
    {
      id: 12,
      procedure: "Blefaroplastia 360°",
      age: "48 años",
      description: "Tratamiento completo de párpados superiores e inferiores.",
      routePath: "/procedimientos/blefaroplastia"
    },
    {
      id: 13,
      procedure: "Rinoplastia Étnica",
      age: "26 años",
      description: "Rinoplastia especializada respetando características étnicas.",
      routePath: "/procedimientos/rinoplastia"
    },
    {
      id: 14,
      procedure: "Lifting de Cuello",
      age: "55 años",
      description: "Rejuvenecimiento específico del área cervical.",
      routePath: "/procedimientos/lifting-facial-hamaca"
    },
    {
      id: 15,
      procedure: "Bichectomía Parcial",
      age: "29 años",
      description: "Técnica conservadora de bichectomía para definición facial sutil.",
      routePath: "/procedimientos/bichectomia"
    },
    {
      id: 16,
      procedure: "Rinoplastia Secundaria",
      age: "33 años",
      description: "Corrección y refinamiento de rinoplastia previa.",
      routePath: "/procedimientos/rinoplastia"
    },
    {
      id: 17,
      procedure: "Genioplastia",
      age: "37 años",
      description: "Cirugía ósea de mentón para corrección de prognatismo.",
      routePath: "/procedimientos/mentoplastia"
    },
    {
      id: 18,
      procedure: "Lifting Temporal",
      age: "44 años",
      description: "Rejuvenecimiento específico de la región temporal.",
      routePath: "/procedimientos/lifting-facial-hamaca"
    }
  ];

  // Función para navegar a la página del procedimiento
  const navigateToProcedureprocedure = (routePath) => {
    window.location.href = routePath;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-[#2c5aa0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Galería de Casos</h1>
          <p className="text-xl text-blue-200 mb-2">Transformaciones Reales • Resultados Excepcionales</p>
          <p className="text-blue-300">{allCases.length} casos de éxito documentados</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid Container - 3 columnas x 6 filas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCases.map((caso) => (
              <div 
                key={caso.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                onClick={() => navigateToProcedureprocedure(caso.routePath)}
              >
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2">
                    {/* Before Image */}
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <span className="text-red-600 font-bold text-lg">A</span>
                          </div>
                          <span className="text-red-700 text-sm font-medium">ANTES</span>
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        ANTES
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <span className="text-green-600 font-bold text-lg">D</span>
                          </div>
                          <span className="text-green-700 text-sm font-medium">DESPUÉS</span>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-semibold">Ver Procedimiento</span>
                    </div>
                  </div>
                </div>

                {/* Case Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                      {caso.procedure}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      #{caso.id}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">
                      👤 {caso.age}
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {caso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 bg-[#2c5aa0] rounded-2xl p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">{allCases.length}</div>
                <div className="text-blue-200">Casos Documentados</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Satisfacción</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GaleriaGridPage;