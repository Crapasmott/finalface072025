"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  image: string;
  procedure: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const ResultsGallerySection = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  // Datos de los pacientes
  const patients: Patient[] = [
    {
      id: 'sandra',
      name: 'Sandra',
      image: '/images/sandra.jpg',
      procedure: 'Rinoplastia',
      description: 'Refinamiento nasal que logró una armonía perfecta con sus facciones naturales, manteniendo su esencia única.',
      beforeImage: '/images/sandra-before.jpg',
      afterImage: '/images/sandra-after.jpg'
    },
    {
      id: 'nubia',
      name: 'Nubia',
      image: '/images/nubia.jpg',
      procedure: 'Lifting Facial',
      description: 'Rejuvenecimiento facial integral que devolvió la firmeza y luminosidad natural de su piel.',
      beforeImage: '/images/nubia-before.jpg',
      afterImage: '/images/nubia-after.jpg'
    },
    {
      id: 'angelica',
      name: 'Angelica',
      image: '/images/angelica.jpg',
      procedure: 'Botox y Rellenos',
      description: 'Tratamiento combinado que suavizó las líneas de expresión y restauró el volumen facial de manera natural.',
      beforeImage: '/images/angelica-before.jpg',
      afterImage: '/images/angelica-after.jpg'
    },
    {
      id: 'angela',
      name: 'Angela',
      image: '/images/angela.jpg',
      procedure: 'Blefaroplastia',
      description: 'Rejuvenecimiento de párpados que eliminó el exceso de piel, logrando una mirada más joven y descansada.',
      beforeImage: '/images/angela-before.jpg',
      afterImage: '/images/angela-after.jpg'
    }
  ];

  const openModal = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  return (
    <>
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título principal */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Más de 5k<br />
              Resultados naturales
            </h2>
          </div>

          {/* Grid de pacientes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="group cursor-pointer"
                onClick={() => openModal(patient)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  {/* Imagen real del paciente */}
                  <div className="aspect-[4/5] relative">
                    <img
                      src={patient.image}
                      alt={`Resultado de ${patient.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback si no encuentra la imagen
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 hidden items-center justify-center absolute inset-0">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">👤</div>
                        <span className="text-gray-600 text-sm font-medium">Foto de {patient.name}</span>
                        <p className="text-gray-500 text-xs mt-1">{patient.procedure}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay con efecto hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                        <span className="text-blue-900 font-semibold">Ver resultado</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Información del paciente */}
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">
                    {patient.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {patient.procedure}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón ver galería */}
          <div className="text-center">
            <button className="border-2 border-blue-900 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Ver galería de resultados
            </button>
          </div>
        </div>
      </section>

      {/* Modal/Popup mejorado */}
      {selectedPatient && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                Resultado de {selectedPatient.name}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
                {/* Imagen Antes */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Antes</h4>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={selectedPatient.beforeImage}
                      alt={`Antes - ${selectedPatient.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback si no encuentra la imagen before
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback para imagen before */}
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 hidden items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">📸</div>
                        <span className="text-gray-600 text-sm font-medium">Foto ANTES</span>
                        <p className="text-gray-500 text-xs mt-1">{selectedPatient.name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Imagen Después */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Después</h4>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={selectedPatient.afterImage}
                      alt={`Después - ${selectedPatient.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback si no encuentra la imagen after
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback para imagen after */}
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 hidden items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">✨</div>
                        <span className="text-gray-600 text-sm font-medium">Foto DESPUÉS</span>
                        <p className="text-gray-500 text-xs mt-1">{selectedPatient.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información del procedimiento */}
              <div className="text-center space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    {selectedPatient.procedure}
                  </h4>
                  <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                    {selectedPatient.description}
                  </p>
                </div>

                {/* Botón ir a galería */}
                <div className="pt-4 sm:pt-6">
                  <button className="bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Ir a galería del procedimiento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultsGallerySection;