import React from 'react';

const DrFaceSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo real */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/slider2.jpg"
          alt="Dr. Pérez con ilustración facial"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'block';
          }}
        />
        
        {/* Fallback si no encuentra la imagen */}
        <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-900/80 to-gray-700/60 flex items-center justify-center">
            <div className="text-center text-white/30">
              <p className="text-sm">Imagen: dr-face-background.jpg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido de texto - lado izquierdo */}
          <div className="text-white space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                Dr Face
              </h1>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white mb-6 sm:mb-8"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90">
                Considerado por sus pacientes como un artista de la cirugía facial.
              </p>
            </div>

            <div className="pt-6 sm:pt-8">
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-xl">
                Conoce al Dr Face
              </button>
            </div>
          </div>

          {/* Lado derecho - Espacio para la imagen del doctor que ya está en el fondo */}
          <div className="relative lg:block">
            {/* 
              Este espacio está reservado para que la imagen de fondo 
              del Dr. Pérez se vea claramente en el lado derecho.
              No necesita contenido adicional ya que la imagen de fondo 
              incluye al doctor.
            */}
            <div className="aspect-[3/4] relative opacity-0">
              {/* Elemento invisible para mantener el espaciado */}
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos sutiles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 opacity-5 pointer-events-none">
        {/* Línea artística estilizada del rostro - muy sutil */}
        <svg width="300" height="400" viewBox="0 0 300 400" className="text-white">
          <path 
            d="M120 80 Q150 60 180 80 Q200 100 195 140 Q190 170 175 190 Q160 210 150 220 Q140 210 125 190 Q110 170 105 140 Q100 100 120 80 Z" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="opacity-30"
          />
          <circle cx="135" cy="120" r="2" fill="currentColor" className="opacity-40" />
          <circle cx="165" cy="120" r="2" fill="currentColor" className="opacity-40" />
          <path 
            d="M140 140 Q150 143 160 140" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="opacity-35"
          />
          <path 
            d="M130 155 Q150 160 170 155" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="opacity-35"
          />
        </svg>
      </div>
    </section>
  );
};

export default DrFaceSection;