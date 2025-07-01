import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';

const Footer = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
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
            { label: 'SENOS', href: '/procedimientos/senos' },
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

  // Función para abrir submenu con delay
  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenSubmenu(itemLabel);
  };

  // Función para cerrar submenu con delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
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
      setOpenSubmenu(null);
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
    <footer className="bg-[#2c5aa0] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          
          {/* Menú de navegación horizontal - En la parte superior */}
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

                  {/* Dropdown Menu */}
                  {item.hasSubmenu && openSubmenu === item.label && (
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white shadow-2xl rounded-xl border border-gray-100 py-4 z-50 animate-fadeIn"
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
                                    onClick={() => setOpenSubmenu(null)} // Cerrar al hacer clic
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
                                  onClick={() => setOpenSubmenu(null)} // Cerrar al hacer clic
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
          </div>

          {/* Grid de 2 columnas para logo y contacto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Logo y firma del doctor - Columna izquierda */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start">
                {/* Logo real del doctor */}
                <div className="flex items-center space-x-8">
                  {/* Logo imagen real */}
                  <div>
                    <img
                      src="/images/logo-footer.png"
                      alt="Dr. Andrés Pérez Nieto - Logo"
                      className="h-32 sm:h-40 lg:h-48 xl:h-56 w-auto"
                      onError={(e) => {
                        // Si no encuentra la imagen, muestra el SVG de respaldo
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    
                    {/* SVG de respaldo si no carga la imagen */}
                    <div className="hidden">
                      <svg width="140" height="80" viewBox="0 0 140 80" className="text-white">
                        {/* Simulación de firma manuscrita "Andres Perez Nieto" */}
                        <path 
                          d="M10 50 Q15 30 25 45 Q30 60 40 40 Q45 25 55 50 Q60 65 70 45 Q75 30 85 55 Q90 70 100 50 Q105 35 115 60 Q120 75 130 55" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          className="opacity-90"
                        />
                        <path 
                          d="M12 55 Q20 35 28 50 Q35 65 45 45 Q50 30 60 55 Q65 70 75 50 Q80 35 90 60 Q95 75 105 55 Q110 40 120 65" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          fill="none"
                          className="opacity-70"
                        />
                        {/* Línea base de la firma */}
                        <path 
                          d="M10 65 L130 65" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          fill="none"
                          className="opacity-50"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de contacto - Columna derecha */}
            <div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold mb-6 text-center lg:text-left">
                  CONTÁCTANOS:
                </h3>
                
                {/* Redes sociales */}
                <div className="flex space-x-3 justify-center lg:justify-start mb-8">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300"
                    title="WhatsApp"
                  >
                    <Phone size={18} className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300"
                    title="Facebook"
                  >
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300"
                    title="Instagram"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300"
                    title="Email"
                  >
                    <Mail size={18} className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300"
                    title="YouTube"
                  >
                    <Youtube size={18} className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-colors duration-300"
                    title="Ubicación"
                  >
                    <MapPin size={18} className="text-white" />
                  </a>
                </div>

                {/* Información de contacto */}
                <div className="space-y-2 text-center lg:text-left">
                  <div className="text-white font-medium">
                    (+57) 601 629 9551
                  </div>
                  <div className="text-white font-medium">
                    (+57) 316 495 3755
                  </div>
                  <div className="text-white font-medium">
                    info@drandrespereznieto.com
                  </div>
                  <div className="text-white font-medium">
                    Calle 119 # 7 – 14 Bogotá, Colombia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="w-full h-px bg-white/30 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/90 text-sm">
            Copyright 2025 Andrés Pérez Nieto | Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
    </footer>
  );
};

export default Footer;