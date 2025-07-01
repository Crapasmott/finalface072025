import React from 'react';

const TreatmentsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Luce tan joven como te sientes
          </h2>
        </div>

        {/* Grid de tratamientos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regeneración Celular */}
          <div className="bg-[#e8e8e8] rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#2c5aa0] mb-6">
                Regeneración Celular
              </h3>
              
              {/* Imagen real */}
              <div className="w-48 h-48 mx-auto bg-gray-300 rounded-lg mb-6 overflow-hidden shadow-md">
                <img 
                  src="/images/1.jpg"
                  alt="Regeneración Celular - Mujer rubia"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si no encuentra la imagen, muestra el placeholder
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 hidden items-center justify-center">
                  <span className="text-gray-600 text-sm">Imagen mujer rubia</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#2c5aa0] text-center">
                Lipofilling con Células Madre
              </h4>
              
              <p className="text-gray-700 text-center leading-relaxed text-sm">
                La inyección con células madres obtenidas de tu propia grasa es una 
                excelente y confiable alternativa para restaurar el volumen de tu rostro y 
                revitalizar tu piel. La utilidad de este procedimiento se ha expandido y se lleva 
                a cabo para rejuvenecer el dorso de las manos y reducir las arrugas en ciertas 
                áreas del rostro.
              </p>

              <div className="pt-6 text-center">
                <button className="border-2 border-[#2c5aa0] text-[#2c5aa0] px-8 py-3 rounded-full font-semibold hover:bg-[#2c5aa0] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                  Más Información
                </button>
              </div>
            </div>
          </div>

          {/* Rejuvenecimiento Facial */}
          <div className="bg-[#e8e8e8] rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#2c5aa0] mb-6">
                Rejuvenecimiento Facial
              </h3>
              
              {/* Imagen real */}
              <div className="w-48 h-48 mx-auto bg-gray-300 rounded-lg mb-6 overflow-hidden shadow-md">
                <img 
                  src="/images/lovely-woman-white-dress (1).jpeg"
                  alt="Rejuvenecimiento Facial - Mujer castaña"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si no encuentra la imagen, muestra el placeholder
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 hidden items-center justify-center">
                  <span className="text-gray-600 text-sm">Imagen mujer castaña</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#2c5aa0] text-center">
                Lifting Facial en Hamaca
              </h4>
              
              <p className="text-gray-700 text-center leading-relaxed text-sm">
                Te brinda la posibilidad de rejuvenecer tu rostro de manera completamente natural 
                y perdurable.
              </p>
              
              <p className="text-gray-700 text-center leading-relaxed text-sm">
                En esencia, es una combinación de procedimientos quirúrgicos que logran 
                revertir los signos del envejecimiento facial, devolviendo así la frescura y 
                lozanía que te hacen lucir joven y bella.
              </p>

              <div className="pt-6 text-center">
                <button className="border-2 border-[#2c5aa0] text-[#2c5aa0] px-8 py-3 rounded-full font-semibold hover:bg-[#2c5aa0] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;