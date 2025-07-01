"use client";
import React, { useState } from 'react';

interface Procedure {
  id: string;
  title: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
}

const SurgicalProceduresSection = () => {
  const [hoveredProcedure, setHoveredProcedure] = useState<string | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);

  // Datos de los procedimientos con sus posiciones actualizadas
  const procedures: Procedure[] = [
    {
      id: 'blepharoplasty',
      title: 'Blefaroplastia',
      description: 'La cirugía de Blefaroplastia la realiza con tecnología láser o de radiofrecuencia permitiendo así una mínima inflamación postoperatoria y por ende un proceso de recuperación más corto.',
      position: { top: '33%', left: '42%' }
    },
    {
      id: 'eyebrow-lift',
      title: 'Elevación Cola de Cejas',
      description: 'Las cejas al igual que otras áreas del rostro presentan con el proceso normal de envejecimiento un descenso gradual que cambia su apariencia y posición normales. En las mujeres se va perdiendo la forma arqueada que las hace atractivas.',
      position: { top: '31%', left: '34%' }
    },
    {
      id: 'otoplasty',
      title: 'Otoplastia',
      description: 'La Otoplastia es un procedimiento quirúrgico mediante el cual se puede corregir ciertas alteraciones en la forma y el tamaño de las orejas. Dichas alteraciones pueden ser hereditarias o adquiridas.',
      position: { top: '39%', left: '15%' }
    },
    {
      id: 'lipofilling',
      title: 'Lipofilling de Células Madre',
      description: 'Al referirse a células madre, muchas personas pensaran de inmediato en aquellas células procedentes del cordón umbilical o de la médula ósea. Hoy en día es factible obtener células madre a partir de la grasa de nuestro propio cuerpo.',
      position: { top: '64%', left: '35%' }
    },
    {
      id: 'rhinoplasty',
      title: 'Rinoplastia',
      description: 'Una excelente cirugía de nariz no es aquella que genera un cambio dramático en la apariencia y que no guarda un equilibrio estético con el resto del rostro, mucho menos aquella que deja secuelas estéticas o funcionales.',
      position: { top: '45%', left: '53%' }
    },
    {
      id: 'lip-lift',
      title: 'Elevación del Labio',
      description: 'Consiste en la inyección de células grasas madre purificadas, dentro del espesor de los labios, lo cual es ideal debido a que al ser células del propio cuerpo están libres de reacciones adversas o de rechazo y adicionalmente proporcionan un resultado más perdurable.',
      position: { top: '54%', left: '48%' }
    },
    {
      id: 'facelift',
      title: 'Lifting en Hamaca de Mejillas y Cuello',
      description: 'La estructura de los tejidos blandos de las mejillas y el cuello tiene una distribución que simula a una hamaca que se extiende de un lado al otro del rostro. El proceso conlleva a que esta hamaca de tejidos progresivamente se vaya descolgando.',
      position: { top: '59%', left: '27%' }
    },
    {
      id: 'bichectomy',
      title: 'Bichectomía',
      description: 'La Bichectomía es un procedimiento quirúrgico que permite la extracción de las bolsas de Bichat con el propósito de lograr en aquellos pacientes que son candidatos, rostros que luzcan más delgados.',
      position: { top: '53%', left: '35%' }
    },
    {
      id: 'mentoplasty',
      title: 'Mentoplastia',
      description: 'Con alguna frecuencia el Dr. Pérez atiende pacientes que presentan mentones pequeños y retraídos, respecto a resto de sus rasgos faciales.',
      position: { top: '65%', left: '52%' }
    }
  ];

  return (
    <section className="bg-[#c4b5a0] relative overflow-hidden">
      {/* Contenedor principal responsive */}
      <div className="min-h-screen lg:h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-full">
          
          {/* Contenido de texto - Alineado a la izquierda */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-12 xl:p-16 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Procedimientos Quirúrgicos
              </h2>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-white mb-6 sm:mb-8"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6 max-w-xl lg:max-w-2xl">
              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed font-light">
                Descubre el arte detrás de los resultados armónicos y naturales.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
                El Dr. Pérez combina precisión y arte para lograr resultados que no solo se ven increíbles, sino que 
                también se sienten aún mejor.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
                Explora y conoce de primera mano las técnicas avanzadas y soluciones médicas que él ha desarrollado 
                para ofrecer resultados excepcionales.
              </p>
            </div>

            {/* Instrucciones alineadas a la izquierda */}
            <div className="lg:hidden mt-6 sm:mt-8 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Explora los procedimientos
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Toca los puntos en la imagen para conocer cada procedimiento en detalle.
                </p>
              </div>
            </div>

            {/* Texto informativo alineado a la izquierda */}
            <div className="mt-6 sm:mt-8">
              <p className="text-white/70 text-sm sm:text-base italic font-light">
                *Toca los puntos en la imagen para conocer más detalles.
              </p>
            </div>
          </div>

          {/* Imagen - Más centrada y ajustada para móviles */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-full order-2 lg:order-1">
            {/* Imagen responsive con positioning diferente por pantalla */}
            <img 
              src="/images/chica-puntos.png"
              alt="Procedimientos Quirúrgicos"
              className="w-full h-full object-cover object-center lg:object-[70%_center]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            
            {/* Fallback mejorado */}
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 hidden items-center justify-center">
              <div className="text-center p-4">
                <div className="text-4xl sm:text-6xl mb-2">👩‍⚕️</div>
                <p className="text-gray-700 text-sm sm:text-base font-medium">Procedimientos Quirúrgicos</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Imagen: chica-puntos.png</p>
              </div>
            </div>

            {/* Overlay gradiente para mejor legibilidad en móvil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#c4b5a0]/40 to-transparent lg:hidden"></div>

            {/* Puntos flotando sobre la imagen - Optimizados para móvil y desktop */}
            <div className="absolute inset-0">
              {procedures.map((procedure) => (
                <div
                  key={procedure.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ 
                    top: procedure.position.top, 
                    left: procedure.position.left,
                    zIndex: hoveredProcedure === procedure.id || selectedProcedure === procedure.id ? 60 : 10
                  }}
                  onMouseEnter={() => setHoveredProcedure(procedure.id)}
                  onMouseLeave={() => setHoveredProcedure(null)}
                  onClick={() => setSelectedProcedure(selectedProcedure === procedure.id ? null : procedure.id)}
                >
                  {/* Punto responsive - Muy tenue y delicado */}
                  <div className="relative">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-5 lg:h-5 bg-white/20 border-2 sm:border-3 lg:border-3 border-white/40 rounded-full shadow-md hover:scale-125 hover:bg-white hover:border-white active:scale-110 transition-all duration-300">
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-10"></div>
                    </div>
                    
                    {/* Anillo exterior animado - Muy tenue */}
                    <div className="absolute inset-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-5 lg:h-5 border-2 border-white rounded-full animate-ping opacity-15"></div>
                    
                    {/* Tooltip/Popup para desktop (hover) - Posición inteligente */}
                    {hoveredProcedure === procedure.id && (
                      <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-fadeIn ${
                        parseInt(procedure.position.top) < 50 ? 'top-10' : 'bottom-10'
                      }`} style={{ zIndex: 70 }}>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">
                            {procedure.title}
                          </h4>
                          <p className="text-gray-600 text-xs leading-relaxed mb-4 max-h-24 overflow-y-auto">
                            {procedure.description}
                          </p>
                          <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Más información
                          </button>
                        </div>
                        
                        {/* Flecha del tooltip - Posición dinámica */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
                          parseInt(procedure.position.top) < 50 
                            ? 'bottom-full border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white' 
                            : 'top-full border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white'
                        } drop-shadow-sm`}></div>
                      </div>
                    )}

                    {/* Modal/Popup para móvil y tablet (click/tap) */}
                    {selectedProcedure === procedure.id && (
                      <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" 
                           style={{ zIndex: 100 }}
                           onClick={(e) => {
                             if (e.target === e.currentTarget) setSelectedProcedure(null);
                           }}>
                        <div className="bg-white rounded-2xl max-w-sm w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl animate-slideUp relative">
                          {/* Botón cerrar */}
                          <button 
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            style={{ zIndex: 110 }}
                            onClick={() => setSelectedProcedure(null)}
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>

                          <div className="text-center pr-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                              {procedure.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                              {procedure.description}
                            </p>
                            <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-6 rounded-full text-sm font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg">
                              Más información
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SurgicalProceduresSection;