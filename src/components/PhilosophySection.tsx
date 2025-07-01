import React from 'react';
import Link from 'next/link';

interface PhilosophySectionProps {
  buttonUrl?: string;
  buttonText?: string;
  isExternalLink?: boolean;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ 
  buttonUrl = "/dr-face", 
  buttonText = "Más información",
  isExternalLink = false 
}) => {
  
  const ButtonComponent = () => (
    <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
      {buttonText}
    </button>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/fondo negro.png" 
          alt="Philosophy Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
          }}
        />
        {/* Fallback si no encuentra la imagen */}
        <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 hidden">
          <div className="w-full h-full bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center">
            <div className="text-center text-white/30">
              <p className="text-sm">Imagen de fondo: philosophy-bg.jpg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Todos lo notarán, pero nadie lo sabrá
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white/90">
                Es un concepto que el Dr. Andrés Pérez, a través de su vasta 
                experiencia, ha logrado incorporar en su forma de concebir y 
                practicar el arte de la cirugía plástica. Su compromiso con cada 
                paciente es realizar su belleza natural, preservando la esencia que 
                los hace únicos. La experticia quirúrgica y un profundo sentido 
                artístico se fusionan para lograr resultados que van más allá de la 
                excelencia. Con técnicas quirúrgicas propias y tecnología de 
                punta, estarás{' '}
                <span className="font-bold">EN LAS MEJORES MANOS</span>.
              </p>
            </div>

            <div className="pt-4">
              {isExternalLink ? (
                <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                  <ButtonComponent />
                </a>
              ) : (
                <Link href={buttonUrl}>
                  <ButtonComponent />
                </Link>
              )}
            </div>
          </div>

          {/* Espacio reservado para el lado derecho de la imagen */}
          <div className="relative">
            {/* Esta área está cubierta por la imagen de fondo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;