"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

// Interfaces de TypeScript
interface MenuItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  hasSubmenu?: boolean;
  subItems?: SubItem[];
}

interface SubItem {
  label: string;
  href?: string;
  isCategory?: boolean;
  isSubcategory?: boolean;
  items?: SubSubItem[];
}

interface SubSubItem {
  label: string;
  href: string;
  items?: SubSubItem[];
}

interface ImagePair {
  before: string;
  after: string;
  view: string;
}

interface MamoplastiaCase {
  id: number;
  title: string;
  age: string;
  description: string;
  images: ImagePair[];
}

// HEADER PROFESIONAL COMPLETO
const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems: MenuItem[] = [
    { 
      label: 'INICIO', 
      href: '/',
      hasDropdown: false 
    },
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
            { label: 'ELEVACIÓN COLA DE CEJAS', href: '/procedimientos/elevacion-cola-cejas' },
            { label: 'BLEFAROPLASTIA', href: '/procedimientos/blefaroplastia' },
            { label: 'LIFTING HAMACA DE MEJILLAS Y CUELLO', href: '/procedimientos/lifting-facial-hamaca' },
            { label: 'LIPOFILLING CON CÉLULAS MADRE', href: '/procedimientos/lipofilling-celulas-madre' },
            { label: 'LIP LIFT ELEVACIÓN DEL LABIO', href: '/procedimientos/lip-lift' },
            { label: 'RINOPLASTIA', href: '/procedimientos/rinoplastia' },
            { label: 'MENTOPLASTIA', href: '/procedimientos/mentoplastia' },
            { label: 'OTOPLASTIA', href: '/procedimientos/otoplastia' },
            { label: 'BICHECTOMÍA', href: '/procedimientos/bichectomia' }
          ]
        },
        {
          label: 'CORPORALES',
          isCategory: true,
          items: [
            { 
              label: 'SENOS',
              isSubcategory: true,
              items: [
                { label: 'MAMOPLASTIA DE AUMENTO', href: '/procedimientos/mamoplastia-aumento' },
                { label: 'MAMOPLASTIA DE REDUCCIÓN', href: '/procedimientos/mamoplastia-reduccion' },
                { label: 'PEXIA - ELEVACIÓN MAMARIA', href: '/procedimientos/pexia' }
              ]
            },
            { 
              label: 'CORPORAL',
              isSubcategory: true,
              items: [
                { label: 'ABDOMINOPLASTIA HD', href: '/procedimientos/abdominoplastia' },
                { label: 'LIPOSUCCIÓN', href: '/procedimientos/liposuccion' }
              ]
            }
          ]
        },
        {
          label: 'NO QUIRÚRGICOS',
          isCategory: true,
          items: [
            { label: 'BOTOX', href: '/procedimientos/botox' },
            { label: 'ÁCIDO HIALURÓNICO', href: '/procedimientos/acido-hialuronico' }
          ]
        }
      ]
    },
    { 
      label: 'GALERÍA', 
      href: '/galeria',
      hasDropdown: true,
      subItems: [
        { label: 'FOTOS PRE Y POST', href: '/galeria/antes-despues' },
        { label: 'TESTIMONIOS', href: '/galeria/testimonios' }
      ]
    },
    { 
      label: 'PACIENTES EXTRANJEROS', 
      href: '/pacientes-extranjeros',
      hasDropdown: true,
      subItems: [
        { label: 'CITA VIRTUAL', href: '/pacientes-extranjeros/cita-virtual' },
        { label: 'HOSPEDAJE', href: '/pacientes-extranjeros/hospedaje' },
        { label: 'TURISMO', href: '/pacientes-extranjeros/turismo' }
      ]
    },
    { 
      label: 'BLOG', 
      href: '/blog',
      hasDropdown: false 
    },
    { 
      label: 'RECURSOS', 
      href: '/recursos',
      hasDropdown: true,
      subItems: [
        { label: 'TU PASO A PASO', href: '/recursos/paso-a-paso' },
        { label: 'GUÍAS PRE Y POSTOPERATORIAS', href: '/recursos/guias' }
      ]
    }
  ];

  const handleMouseEnter = (itemLabel: string): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemLabel);
  };

  const handleMouseLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const handleDropdownEnter = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
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
              <Image
                src="/images/firma-2.png"
                alt="Dr. Andrés Pérez Nieto"
                width={200}
                height={128}
                className="h-32 w-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextElementSibling as HTMLElement;
                  if (nextSibling) nextSibling.style.display = 'block';
                }}
                priority
              />
              
              <div className="hidden">
                <h1 className="text-xl font-light tracking-wide text-white">
                  Dr. Andrés Pérez Nieto
                </h1>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href={item.href}
                  className="flex items-center text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-2 text-blue-200">+</span>
                  )}
                </a>

                {item.hasDropdown && openDropdown === item.label && isMounted && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 py-4 z-50 animate-fadeIn"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.label === 'PROCEDIMIENTOS' ? (
                      <div className="w-[900px] grid grid-cols-3 gap-6 px-6">
                        {item.subItems?.map((category, catIndex) => (
                          <div key={catIndex} className="space-y-3">
                            <div className="flex items-center space-x-2 pb-3 border-b border-gray-100">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h3 className="font-bold text-blue-700 text-sm uppercase tracking-wide">
                                {category.label}
                              </h3>
                            </div>
                            
                            <div className="space-y-1">
                              {'items' in category && Array.isArray(category.items) && category.items.map((subItem, subIndex) => (
                                <div key={subIndex}>
                                  {subItem.isSubcategory ? (
                                    <div className="mb-4">
                                      <div className="flex items-center space-x-2 mb-2 px-3 py-2 bg-blue-50 rounded-lg">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                        <span className="text-sm font-bold text-blue-800 uppercase">{subItem.label}</span>
                                      </div>
                                      
                                      <div className="space-y-1 ml-3">
                                        {subItem.items?.map((subSubItem, subSubIndex) => (
                                          <a 
                                            key={subSubIndex}
                                            href={subSubItem.href} 
                                            className="group flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-1"
                                            onClick={() => setOpenDropdown(null)}
                                          >
                                            <div className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                                            <span className="text-xs font-medium">{subSubItem.label}</span>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  ) : (
                                    <a 
                                      key={subIndex}
                                      href={subItem.href} 
                                      className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-1"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                                      <span className="text-sm font-medium">{subItem.label}</span>
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-72 px-4">
                        <div className="space-y-1">
                          {item.subItems?.map((subItem, subIndex) => (
                            'href' in subItem && subItem.href ? (
                              <a 
                                key={subIndex}
                                href={subItem.href} 
                                className="group flex items-center space-x-3 px-4 py-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-2 hover:shadow-md"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-200">
                                    <svg className="w-4 h-4 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold block">{subItem.label}</span>
                                  <span className="text-xs text-gray-500 group-hover:text-blue-500">Explorar más detalles</span>
                                </div>
                              </a>
                            ) : null
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

// FOOTER PROFESIONAL COMPLETO
const Footer: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems: MenuItem[] = [
    { 
      label: 'INICIO', 
      href: '/' 
    },
    { 
      label: 'DR. PÉREZ', 
      href: '/dr-perez', 
      hasSubmenu: true,
      subItems: [
        { label: 'CONOCE AL DR. PÉREZ', href: '/conoce-doctor' },
        { label: 'MIS TÉCNICAS', href: '/dr-perez/tecnicas' },
        { label: 'INSTALACIONES Y STAFF', href: '/instalaciones' }
      ]
    },
    { 
      label: 'PROCEDIMIENTOS', 
      href: '/procedimientos', 
      hasSubmenu: true,
      subItems: [
        { 
          label: 'FACIALES',
          isCategory: true,
          items: [
            { label: 'ELEVACIÓN COLA DE CEJAS', href: '/procedimientos/elevacion-cola-cejas' },
            { label: 'BLEFAROPLASTIA', href: '/procedimientos/blefaroplastia' },
            { label: 'LIFTING HAMACA DE MEJILLAS Y CUELLO', href: '/procedimientos/lifting-hamaca' },
            { label: 'LIPOFILLING CON CÉLULAS MADRE', href: '/procedimientos/lipofilling' },
            { label: 'LIP LIFT ELEVACIÓN DEL LABIO', href: '/procedimientos/lip-lift' },
            { label: 'RINOPLASTIA', href: '/procedimientos/rinoplastia' },
            { label: 'MENTOPLASTIA', href: '/procedimientos/mentoplastia' },
            { label: 'OTOPLASTIA', href: '/procedimientos/otoplastia' },
            { label: 'BICHECTOMÍA', href: '/procedimientos/bichectomia' }
          ]
        },
        {
          label: 'CORPORALES',
          isCategory: true,
          items: [
            { 
              label: 'SENOS',
              isSubcategory: true,
              items: [
                { label: 'MAMOPLASTIA DE AUMENTO', href: '/procedimientos/mamoplastia-aumento' },
                { label: 'MAMOPLASTIA DE REDUCCIÓN', href: '/procedimientos/mamoplastia-reduccion' },
                { label: 'PEXIA - ELEVACIÓN MAMARIA', href: '/procedimientos/pexia' }
              ]
            },
            { 
              label: 'CORPORAL',
              isSubcategory: true,
              items: [
                { label: 'ABDOMINOPLASTIA HD', href: '/procedimientos/abdominoplastia' },
                { label: 'LIPOSUCCIÓN', href: '/procedimientos/liposuccion' }
              ]
            }
          ]
        },
        {
          label: 'NO QUIRÚRGICOS',
          isCategory: true,
          items: [
            { label: 'BOTOX', href: '/procedimientos/botox' },
            { label: 'ÁCIDO HIALURÓNICO', href: '/procedimientos/acido-hialuronico' }
          ]
        }
      ]
    },
    { 
      label: 'GALERÍA', 
      href: '/galeria', 
      hasSubmenu: true,
      subItems: [
        { label: 'FOTOS PRE Y POST', href: '/galeria/antes-despues' },
        { label: 'TESTIMONIOS', href: '/galeria/testimonios' }
      ]
    },
    { 
      label: 'PACIENTES EXTRANJEROS', 
      href: '/pacientes-extranjeros', 
      hasSubmenu: true,
      subItems: [
        { label: 'CITA VIRTUAL', href: '/pacientes-extranjeros/cita-virtual' },
        { label: 'HOSPEDAJE', href: '/pacientes-extranjeros/hospedaje' },
        { label: 'TURISMO', href: '/pacientes-extranjeros/turismo' }
      ]
    },
    { 
      label: 'BLOG', 
      href: '/blog' 
    },
    { 
      label: 'RECURSOS', 
      href: '/recursos', 
      hasSubmenu: true,
      subItems: [
        { label: 'TU PASO A PASO', href: '/recursos/paso-a-paso' },
        { label: 'GUÍAS PRE Y POSTOPERATORIAS', href: '/recursos/guias' }
      ]
    }
  ];

  const handleMouseEnter = (itemLabel: string): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenSubmenu(itemLabel);
  };

  const handleMouseLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 300);
  };

  const handleDropdownEnter = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <footer className="bg-[#2c5aa0] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          
          {/* Menú de navegación horizontal */}
          <div className="col-span-1">
            <nav className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-12">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => item.hasSubmenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center">
                    <a 
                      href={item.href}
                      className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm uppercase tracking-wide py-3 px-2"
                    >
                      {item.label}
                    </a>
                    {item.hasSubmenu && (
                      <span className="ml-2 text-blue-200">+</span>
                    )}
                  </div>

                  {/* Dropdown Menu simplificado para el footer */}
                  {item.hasSubmenu && openSubmenu === item.label && (
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white shadow-2xl rounded-xl border border-gray-100 py-4 z-50 animate-fadeIn"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="w-72 px-4">
                        <div className="space-y-1">
                          {item.subItems?.map((subItem, subIndex) => (
                            'href' in subItem && subItem.href ? (
                              <a 
                                key={subIndex}
                                href={subItem.href} 
                                className="group flex items-center space-x-3 px-4 py-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-2 hover:shadow-md"
                                onClick={() => setOpenSubmenu(null)}
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-200">
                                    <svg className="w-4 h-4 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold block">{subItem.label}</span>
                                  <span className="text-xs text-gray-500 group-hover:text-blue-500">Explorar más detalles</span>
                                </div>
                              </a>
                            ) : null
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Grid de 2 columnas para logo y contacto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Logo y firma del doctor */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center space-x-8">
                  <div>
                    <img
                      src="/images/logo-footer.png"
                      alt="Dr. Andrés Pérez Nieto - Logo"
                      className="h-32 sm:h-40 lg:h-48 xl:h-56 w-auto"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    
                    <div className="hidden">
                      <svg width="140" height="80" viewBox="0 0 140 80" className="text-white">
                        <path 
                          d="M10 50 Q15 30 25 45 Q30 60 40 40 Q45 25 55 50 Q60 65 70 45 Q75 30 85 55 Q90 70 100 50 Q105 35 115 60 Q120 75 130 55" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          className="opacity-90"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold mb-6 text-center lg:text-left">
                  CONTÁCTANOS:
                </h3>
                
                <div className="flex space-x-3 justify-center lg:justify-start mb-8">
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300" title="WhatsApp">
                    <Phone size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300" title="Instagram">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300" title="Facebook">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300" title="Email">
                    <Mail size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300" title="YouTube">
                    <Youtube size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300" title="Ubicación">
                    <MapPin size={18} className="text-white" />
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
        </div>

        <div className="w-full h-px bg-white/30 my-8"></div>

        <div className="text-center">
          <p className="text-white/90 text-sm">
            Copyright 2025 Andrés Pérez Nieto | Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </footer>
  );
};

// COMPONENTE PRINCIPAL DE MAMOPLASTIA DE REDUCCIÓN
const MamoplastiaReduccionPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Datos de los 6 casos de Mamoplastia de Reducción
  const mamoplastiaCases: MamoplastiaCase[] = [
    {
      id: 1,
      title: "Mamoplastia de Reducción Severa",
      age: "35 años",
      description: "Reducción mamaria para aliviar molestias físicas y conseguir proporciones armónicas con el resto del cuerpo.",
      images: [
        { before: "/images/reduccion/caso1/frontal-antes.jpg", after: "/images/reduccion/caso1/frontal-despues.jpg", view: "Vista Frontal" },
        { before: "/images/reduccion/caso1/perfil-antes.jpg", after: "/images/reduccion/caso1/perfil-despues.jpg", view: "Vista Perfil" },
        { before: "/images/reduccion/caso1/tres-cuartos-antes.jpg", after: "/images/reduccion/caso1/tres-cuartos-despues.jpg", view: "Vista 3/4" },
        { before: "/images/reduccion/caso1/superior-antes.jpg", after: "/images/reduccion/caso1/superior-despues.jpg", view: "Vista Superior" }
      ]
    },
    {
      id: 2,
      title: "Reducción Mamaria Moderada",
      age: "42 años",
      description: "Reducción moderada con reposicionamiento del complejo areola-pezón para mejorar forma y simetría.",
      images: [
        { before: "/images/reduccion/caso2/frontal-antes.jpg", after: "/images/reduccion/caso2/frontal-despues.jpg", view: "Vista Frontal" },
        { before: "/images/reduccion/caso2/perfil-antes.jpg", after: "/images/reduccion/caso2/perfil-despues.jpg", view: "Vista Perfil" },
        { before: "/images/reduccion/caso2/tres-cuartos-antes.jpg", after: "/images/reduccion/caso2/tres-cuartos-despues.jpg", view: "Vista 3/4" }
      ]
    },
    {
      id: 3,
      title: "Reducción con Elevación Mamaria",
      age: "38 años",
      description: "Reducción mamaria combinada con elevación para corregir ptosis severa y mejorar proyección.",
      images: [
        { before: "/images/reduccion/caso3/frontal-antes.jpg", after: "/images/reduccion/caso3/frontal-despues.jpg", view: "Vista Frontal" },
        { before: "/images/reduccion/caso3/perfil-antes.jpg", after: "/images/reduccion/caso3/perfil-despues.jpg", view: "Vista Perfil" },
        { before: "/images/reduccion/caso3/tres-cuartos-antes.jpg", after: "/images/reduccion/caso3/tres-cuartos-despues.jpg", view: "Vista 3/4" },
        { before: "/images/reduccion/caso3/superior-antes.jpg", after: "/images/reduccion/caso3/superior-despues.jpg", view: "Vista Superior" }
      ]
    },
    {
      id: 4,
      title: "Reducción Bilateral Simétrica",
      age: "29 años",
      description: "Reducción bilateral para corregir hipertrofia mamaria juvenil y mejorar calidad de vida.",
      images: [
        { before: "/images/reduccion/caso4/frontal-antes.jpg", after: "/images/reduccion/caso4/frontal-despues.jpg", view: "Vista Frontal" },
        { before: "/images/reduccion/caso4/perfil-antes.jpg", after: "/images/reduccion/caso4/perfil-despues.jpg", view: "Vista Perfil" },
        { before: "/images/reduccion/caso4/tres-cuartos-antes.jpg", after: "/images/reduccion/caso4/tres-cuartos-despues.jpg", view: "Vista 3/4" }
      ]
    },
    {
      id: 5,
      title: "Reducción Mamaria Postparto",
      age: "33 años",
      description: "Reducción después del embarazo para corregir aumento excesivo de volumen y ptosis asociada.",
      images: [
        { before: "/images/reduccion/caso5/frontal-antes.jpg", after: "/images/reduccion/caso5/frontal-despues.jpg", view: "Vista Frontal" },
        { before: "/images/reduccion/caso5/perfil-antes.jpg", after: "/images/reduccion/caso5/perfil-despues.jpg", view: "Vista Perfil" },
        { before: "/images/reduccion/caso5/superior-antes.jpg", after: "/images/reduccion/caso5/superior-despues.jpg", view: "Vista Superior" },
        { before: "/images/reduccion/caso5/tres-cuartos-antes.jpg", after: "/images/reduccion/caso5/tres-cuartos-despues.jpg", view: "Vista 3/4" }
      ]
    },
    {
      id: 6,
      title: "Reducción con Corrección de Asimetría",
      age: "40 años",
      description: "Reducción mamaria con corrección de asimetría severa mediante técnicas diferenciadas por lado.",
      images: [
        { before: "/images/reduccion/caso6/frontal-antes.jpg", after: "/images/reduccion/caso6/frontal-despues.jpg", view: "Vista Frontal" },
        { before: "/images/reduccion/caso6/perfil-antes.jpg", after: "/images/reduccion/caso6/perfil-despues.jpg", view: "Vista Perfil" },
        { before: "/images/reduccion/caso6/tres-cuartos-antes.jpg", after: "/images/reduccion/caso6/tres-cuartos-despues.jpg", view: "Vista 3/4" },
        { before: "/images/reduccion/caso6/detalle-antes.jpg", after: "/images/reduccion/caso6/detalle-despues.jpg", view: "Vista Detalle" }
      ]
    }
  ];

  const currentCase = mamoplastiaCases[selectedCase];
  const currentImagePair = currentCase.images[selectedImage];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => 
      prev >= mamoplastiaCases.length - 6 ? 0 : prev + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => 
      prev === 0 ? 0 : prev - 1
    );
  };

  const goBack = (): void => {
    window.history.back();
  };

  const selectCase = (caseIndex: number): void => {
    setSelectedCase(caseIndex);
    setSelectedImage(0);
  };

  const nextCase = (): void => {
    if (selectedCase < mamoplastiaCases.length - 1) {
      selectCase(selectedCase + 1);
    }
  };

  const prevCase = (): void => {
    if (selectedCase > 0) {
      selectCase(selectedCase - 1);
    }
  };

  const handleImageSelect = (imageIndex: number): void => {
    setSelectedImage(imageIndex);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-gray-800 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a Senos
          </button>
          
          <nav className="text-sm text-gray-600">
            <a href="/galeria" className="hover:text-gray-800">Galería</a>
            <span className="mx-2">/</span>
            <a href="/galeria/senos" className="hover:text-gray-800">Senos</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Mamoplastia de Reducción</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          
          {/* Panel principal - 4 columnas */}
          <div className="lg:col-span-4">
            <div className="bg-blue-600 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                {/* Imagen ANTES */}
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-emerald-600 font-bold text-lg">ANTES</span>
                      </div>
                      <span className="text-emerald-800 font-medium text-lg">{currentImagePair.view}</span>
                      <p className="text-emerald-700 text-sm mt-2">Caso #{currentCase.id}</p>
                    </div>
                  </div>
                </div>
                
                {/* Imagen DESPUÉS */}
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-teal-600 font-bold text-lg">DESPUÉS</span>
                      </div>
                      <span className="text-teal-800 font-medium text-lg">{currentImagePair.view}</span>
                      <p className="text-teal-700 text-sm mt-2">Resultado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info del procedimiento */}
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{currentCase.title}</h1>
              <p className="text-lg text-gray-600 mb-2">{currentCase.age}</p>
              <p className="text-gray-700 mb-2">{currentCase.description}</p>
              <p className="text-sm text-gray-500 italic">Los resultados individuales pueden variar.</p>
            </div>
          </div>

          {/* Panel de thumbnails - 1 columna */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Otras Vistas</h3>
            <div className="space-y-3">
              {currentCase.images.map((imagePair, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(index)}
                  className={`w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 ${
                    selectedImage === index 
                      ? 'ring-2 ring-emerald-500 scale-105' 
                      : 'hover:scale-102 hover:shadow-lg'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-full h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 text-xs font-bold">A</span>
                    </div>
                    <div className="w-full h-12 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                      <span className="text-teal-600 text-xs font-bold">D</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <span className="text-xs font-medium text-gray-700">{imagePair.view}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navegación entre casos */}
        <div className="flex justify-between mb-8">
          <button 
            onClick={prevCase}
            disabled={selectedCase === 0}
            className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <div className="text-sm text-gray-600 self-center">
            Caso {selectedCase + 1} de {mamoplastiaCases.length}
          </div>
          <button 
            onClick={nextCase}
            disabled={selectedCase === mamoplastiaCases.length - 1}
            className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>

        {/* Grid fijo de casos relacionados - Solo 6 casos */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Ver Otros Pacientes</h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                disabled={mamoplastiaCases.length <= 6}
                className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={mamoplastiaCases.length <= 6}
                className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Grid de casos relacionados */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mamoplastiaCases.map((caso, index) => (
              <div 
                key={caso.id}
                className="w-full"
              >
                <div
                  onClick={() => selectCase(index)}
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 ${
                    selectedCase === index ? 'ring-2 ring-emerald-500' : ''
                  }`}
                >
                  <div className="grid grid-cols-2">
                    <div className="w-full h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 text-xs font-bold">ANTES</span>
                    </div>
                    <div className="w-full h-16 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                      <span className="text-teal-600 text-xs font-bold">DESPUÉS</span>
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-xs font-medium text-gray-700 line-clamp-2">{caso.title}</div>
                    <div className="text-xs text-gray-500">{caso.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MamoplastiaReduccionPage;