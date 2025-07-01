"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
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
            { label: 'SENOS', href: '/procedimientos/explantacion-mamaria' },
            { label: 'MAMOPLASTIA DE AUMENTO', href: '/procedimientos/mamoplastia-aumento' },
            { label: 'MAMOPLASTIA DE REDUCCIÓN', href: '/procedimientos/mamoplastia-reduccion' },
            { label: 'PEXIA - ELEVACIÓN MAMARIA', href: '/procedimientos/pexia' },
            { label: 'CORPORAL', href: '/procedimientos/corporal' },
            { label: 'ABDOMINOPLASTIA HD', href: '/procedimientos/abdominoplastia' },
            { label: 'LIPOSUCCIÓN', href: '/procedimientos/liposuccion' }
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

  // Función para abrir dropdown con delay
  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemLabel);
  };

  // Función para cerrar dropdown con delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms de delay antes de cerrar
  };

  // Mantener abierto cuando el mouse está sobre el dropdown
  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Cerrar dropdown cuando el mouse sale del dropdown
  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Delay más corto para mejor UX
  };

  // Limpiar timeout al desmontar el componente
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
          
          {/* Logo/Firma del Doctor */}
          <div className="flex items-center">
            <div className="text-white">
              <Image
                src="/images/firma-2.png"
                alt="Dr. Andrés Pérez Nieto"
                width={200}
                height={128}
                className="h-32 w-auto"
                onError={(e) => {
                  // Si no encuentra la imagen, muestra el texto
                  (e.target as HTMLImageElement).style.display = 'none';
                  const nextSibling = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
                  if (nextSibling) nextSibling.style.display = 'block';
                }}
                priority
              />
              
              {/* Texto de respaldo si no hay imagen */}
              <div className="hidden">
                <h1 className="text-xl font-light tracking-wide text-white">
                  Dr. Andrés Pérez Nieto
                </h1>
              </div>
            </div>
          </div>

          {/* Menú de navegación */}
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

                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 py-4 z-50 animate-fadeIn"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.label === 'PROCEDIMIENTOS' ? (
                      // Mega menú especial para PROCEDIMIENTOS
                      <div className="w-[800px] grid grid-cols-3 gap-6 px-6">
                        {item.subItems?.map((category, catIndex) => (
                          <div key={catIndex} className="space-y-3">
                            {/* Header de categoría */}
                            <div className="flex items-center space-x-2 pb-3 border-b border-gray-100">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <h3 className="font-bold text-blue-700 text-sm uppercase tracking-wide">
                                {category.label}
                              </h3>
                            </div>
                            
                            {/* Items de la categoría */}
                            <div className="space-y-1">
                              {'items' in category && Array.isArray(category.items) && category.items.map((subItem, subIndex) => (
                                <a 
                                  key={subIndex}
                                  href={subItem.href} 
                                  className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-1"
                                  onClick={() => setOpenDropdown(null)} // Cerrar al hacer clic
                                >
                                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                                  <span className="text-sm font-medium">{subItem.label}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Menú elegante para otros elementos
                      <div className="w-72 px-4">
                        <div className="space-y-1">
                          {item.subItems?.map((subItem, subIndex) => (
                            'href' in subItem ? (
                              <a 
                                key={subIndex}
                                href={subItem.href} 
                                className="group flex items-center space-x-3 px-4 py-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-2 hover:shadow-md"
                                onClick={() => setOpenDropdown(null)} // Cerrar al hacer clic
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
                        
                        {/* Footer del menú */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="px-4 py-2 text-center">
                            <span className="text-xs text-gray-500">¿Necesitas ayuda? </span>
                            <a 
                              href="/contacto" 
                              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                              onClick={() => setOpenDropdown(null)}
                            >
                              Contáctanos
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Menú móvil - Hamburger */}
          <div className="lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Estilos CSS para animaciones */}
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

export default Header;