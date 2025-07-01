"use client";
import dynamic from 'next/dynamic';

// Componentes estáticos
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Componente dinámico para el botón flotante
const FloatingContactButton = dynamic(() => import('@/components/FloatingContactButton'), { 
  ssr: false 
});

// Sección: Instalaciones y Staff (Banner principal)
const InstalacionesBanner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo - Centro Médico */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,0.1) 50%, rgba(0, 0, 0, 0) 100%),
            url('/images/santa-ana.jpg') center/cover no-repeat,
            linear-gradient(135deg, #34495e 0%, #2c3e50 100%)
          `
        }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-start pt-32">
        <div className="max-w-4xl">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900">
              Instalaciones y Staff
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Consultorio
const ConsultorioSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
              Consultorio
            </h2>
            <div className="w-20 h-1 bg-blue-900 mb-8"></div>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-4xl">
              <p>
                El consultorio del Dr. Perez se encuentra ubicado en el edificio <strong>Santa Ana Medical Center</strong> en la ciudad de Bogotá. 
                Esta es una de las áreas de la ciudad con mayor proyección y desarrollo en el sector médico, contando con 
                importantes centros hospitalarios tales como la Fundación Santa Fe de Bogotá entre otros.
              </p>
              
              <p>
                Adicionalmente esta zona de la ciudad es de gran importancia turística ya que cuenta con una amplia oferta de 
                hoteles, gran variedad de restaurantes y excelentes centros comerciales.
              </p>
            </div>
          </div>

          {/* Galería de imágenes del consultorio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Imagen 1 - Placa del consultorio */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/placa-andres.jpg"
                alt="Placa del consultorio Dr. Andrés Pérez"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EPlaca Consultorio%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Imagen 2 - Consultorio principal */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/ofis1.jpg"
                alt="Consultorio principal"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EConsultorio Principal%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Imagen 3 - Sala de espera */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/ofis2.jpg"
                alt="Sala de espera"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3ESala de Espera%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Imagen 4 - Recepción */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/ofis3.jpg"
                alt="Área de recepción"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3ERecepción%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Imagen 5 - Oficina */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/ofis4.jpg"
                alt="Oficina del doctor"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EOficina del Doctor%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Salas de cirugía
const SalasCirugiaSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido de texto */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                Salas de cirugía
              </h2>
              <div className="w-20 h-1 bg-blue-900 mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Los centros quirúrgicos donde el Dr. Perez lleva a cabo sus cirugías son especializados en el área de la 
                  cirugía plástica contando así con tecnología de punta y un grupo multidisciplinario de 
                  anestesiólogos y enfermeras que brindan toda la seguridad y confianza que requieren sus pacientes.
                </p>
                
                <p>
                  Es de resaltar que por ser centros quirúrgicos donde se realizan exclusivamente procedimientos de 
                  cirugía plástica, la exposición a infecciones adquiridas intrahospitalariamente es 
                  extremadamente baja. Adicionalmente están debidamente dotados y habilitados, cumpliendo con 
                  los protocolos internacionales.
                </p>
                
                <p>
                  Nos esforzamos por ofrecer a nuestros pacientes un ambiente de confort y trato personalizado que hacen 
                  la diferencia.
                </p>
              </div>
            </div>

            {/* Imagen de la sala de cirugía */}
            <div className="relative">
              <div className="relative group overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/images/sala-opera.jpg"
                  alt="Sala de cirugía especializada"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='300' y='200' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3ESala de Cirugía%3C/text%3E%3C/svg%3E"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-900/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-900/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function InstalacionesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Banner: Instalaciones y Staff */}
      <InstalacionesBanner />
      
      {/* Sección: Consultorio */}
      <ConsultorioSection />
      
      {/* Sección: Salas de cirugía */}
      <SalasCirugiaSection />
      
      <Footer />
      
      {/* Botón flotante */}
      <FloatingContactButton
        phoneNumber="+521234567890"
        whatsappNumber="+521234567890"
        customImage="/images/doctor.jpg"
        position="bottom-right"
        appointmentMessage="Hola! Me gustaría conocer más sobre las instalaciones y agendar una cita. ¿Podrían darme información?"
      />
    </main>
  );
}