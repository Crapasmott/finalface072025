"use client";
import React from 'react';

export default function AccreditationsSection() {
  const accreditations = [
    {
      name: "ISAPS",
      fullName: "International Society of Aesthetic Plastic Surgery",
      logo: "/images/isaps.png", // Logo real de ISAPS
      url: "https://www.isaps.org/",
      placeholder: "🏥"
    },
    {
      name: "AMERICAN SOCIETY OF PLASTIC SURGEONS",
      fullName: "American Society of Plastic Surgeons",
      logo: "/images/American-Society.jpg", // Logo real de ASPS
      url: "https://www.plasticsurgery.org/",
      placeholder: "🔵"
    },
    {
      name: "SOCIEDAD COLOMBIANA",
      fullName: "Sociedad Colombiana de Cirugía Plástica Estética y Reconstructiva",
      logo: "/images/logo-sccp.png", // Logo real de SCCP
      url: "https://www.cirugiaplastica.org.co/",
      placeholder: "🏛️"
    },
    {
      name: "FILACP",
      fullName: "Federación Ibero-Latinoamericana de Cirugía Plástica",
      logo: "/images/LogoWeb2025Desktop.png", // Logo real de FILACP
      url: "https://www.filacp.org/",
      placeholder: "🌎"
    }
  ]

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="bg-[#2c5aa0] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-4xl font-light text-center">
            Acreditaciones
          </h2>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Logo Container */}
              <a
                href={accreditation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-all duration-300 hover:scale-105"
              >
                {/* Logo */}
                <div className="w-40 h-32 mb-4 flex items-center justify-center">
                  <img
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Si no encuentra la imagen, muestra el placeholder
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center group-hover:bg-gray-50 transition-colors">
                    <span className="text-6xl opacity-50">{accreditation.placeholder}</span>
                  </div>
                </div>

                {/* Organization Name */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {accreditation.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-tight max-w-xs">
                    {accreditation.fullName}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Divider lines between logos (visible on desktop) */}
      <style jsx>{`
        @media (min-width: 768px) {
          .grid > div:not(:last-child)::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 80px;
            background-color: #e5e7eb;
          }
        }
      `}</style>
    </section>
  )
}