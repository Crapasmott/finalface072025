"use client";
import React from 'react';

export default function FourCardsSection() {
  const cards = [
    {
      icon: "/images/icons/doctor-icon.png", // Tu icono personalizado
      title: "Dr. Pérez",
      description: "Especialista en técnicas avanzadas de rejuvenecimiento facial con resultados naturales.",
      fallbackSvg: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      icon: "/images/icons/innovation-icon.png", // Tu icono personalizado
      title: "Innovación",
      description: "Tecnología de vanguardia y procedimientos menos invasivos con resultados superiores.",
      fallbackSvg: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
          <circle cx="12" cy="9" r="1.5"/>
          <circle cx="10" cy="11" r="0.5"/>
          <circle cx="14" cy="11" r="0.5"/>
        </svg>
      )
    },
    {
      icon: "/images/icons/experience-icon.png", // Tu icono personalizado
      title: "Experiencia",
      description: "Más de 15 años de experiencia y formación en centros médicos de prestigio internacional.",
      fallbackSvg: (
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )
    },
    {
      icon: "/images/icons/international-icon.png", // Tu icono personalizado
      title: "Trayectoria Internacional",
      description: "Reconocido por sociedades médicas internacionales y conferencista en congresos mundiales.",
      fallbackSvg: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="bg-[#2c5aa0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  {/* OPCIÓN 1: Imagen personalizada (PNG/SVG) */}
                  <img 
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      // Si no encuentra la imagen, muestra el SVG de respaldo
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  {/* OPCIÓN 2: SVG de respaldo */}
                  <div className="hidden items-center justify-center">
                    {card.fallbackSvg}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}