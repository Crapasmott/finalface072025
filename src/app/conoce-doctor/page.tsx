"use client";
import dynamic from 'next/dynamic';

// Componentes estáticos
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Componente dinámico para el botón flotante
const FloatingContactButton = dynamic(() => import('@/components/FloatingContactButton'), { 
  ssr: false 
});

// Banner del Doctor
const DoctorBanner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo del doctor - TU IMAGEN JPG */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%),
            url('/images/foto1.jpg') center right/cover no-repeat,
            linear-gradient(135deg, #34495e 0%, #2c3e50 100%)
          `
        }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="text-white space-y-8">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-light mb-4" 
                  style={{ fontFamily: 'cursive' }}>
                Dr. Andrés Jiménez Nieto
              </h1>
              
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide">
                International Plastic Surgeon
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed opacity-90">
              <p>
                Con más de 30 años de experiencia en cirugía plástica y estética, 
                el Dr. Jiménez Nieto se ha consolidado como uno de los especialistas 
                más reconocidos a nivel internacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm uppercase tracking-wider">Certificación Internacional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm uppercase tracking-wider">30+ Años de Experiencia</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm uppercase tracking-wider">5000+ Cirugías Exitosas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm uppercase tracking-wider">Reconocimiento Global</span>
                </div>
              </div>
            </div>

            {/* Botón de contacto */}
            <div className="pt-8">
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-light tracking-wide">
                <span className="flex items-center space-x-3">
                  <span>Agenda tu Consulta</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Guiado por su pasión
const PassionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Guiado por su pasión
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              El Dr. Perez realizó sus estudios de pregrado en medicina en la <em className="text-blue-800 font-medium">Universidad del Rosario</em> de Bogotá. Fue allí donde 
              despertó su incansable interés por la cirugía plástica luego de asistir como estudiante a diversos procedimientos de 
              reconstrucción facial.
            </p>
            
            <p>
              Una vez finalizó sus estudios de medicina tuvo el honor de ingresar a realizar sus estudios de postgrado al 
              prestigioso programa de cirugía plástica de la <em className="text-blue-800 font-medium">Universidad Nacional de Colombia</em>. Fue allí donde se formó como 
              cirujano plástico integral, tanto en el área reconstructiva como en la estética y tuvo el honor de ser elegido como 
              jefe de residentes del servicio de cirugía plástica, por sus méritos académicos y su desempeño quirúrgico.
            </p>
            
            <p>
              Posteriormente viajó a los Estados Unidos donde realizó un Fellow observer en cirugía estética facial en en dos de 
              las más prestigiosas instituciones en dicho campo como son, <em className="text-blue-800 font-medium">The University of Illinois</em> y <em className="text-blue-800 font-medium">The Manhattan Eye and 
              Ear Hospital en New York</em>.
            </p>
            
            <p>
              Hace 30 años el Dr. Perez estableció su práctica en la ciudad de Bogotá y desde ese entonces ha mantenido un 
              permanente deseo por innovar y actualizarse en las más avanzadas técnicas y tecnologías quirúrgicas disponibles. 
              Esto lo ha llevado a visitar importantes centros de cirugía plástica, en diversas partes del mundo compartiendo y 
              desarrollando muchas de sus ideas con cirujanos plásticos del más alto nivel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Educación y experiencia
const EducationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white bg-blue-900 py-4 px-8 inline-block">
            Educación y experiencia
          </h2>
        </div>
        
        <div className="flex justify-center items-center space-x-16 max-w-4xl mx-auto">
          <div className="text-center">
            {/* Logo Universidad del Rosario - FLOTANTE */}
            <img
              src="/images/rosario.png"
              alt="Universidad del Rosario"
              className="h-32 mx-auto mb-4 object-contain"
              onError={(e) => {
                // Fallback a texto si no hay logo
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            {/* Fallback */}
            <div className="h-32 mx-auto mb-4 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center text-red-600">
                <div className="text-3xl font-bold">Universidad del</div>
                <div className="text-4xl font-bold">Rosario</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-red-600">Universidad del</h3>
            <h3 className="text-xl font-bold text-red-600">Rosario</h3>
          </div>
          
          <div className="text-center">
            {/* Logo Universidad Nacional - FLOTANTE */}
            <img
              src="/images/nacional.png"
              alt="Universidad Nacional de Colombia"
              className="h-32 mx-auto mb-4 object-contain"
              onError={(e) => {
                // Fallback a texto si no hay logo
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            {/* Fallback */}
            <div className="h-32 mx-auto mb-4 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center text-green-700">
                <div className="text-lg font-bold">UNIVERSIDAD</div>
                <div className="text-2xl font-bold">NACIONAL</div>
                <div className="text-sm">DE COLOMBIA</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-700">UNIVERSIDAD</h3>
            <h3 className="text-xl font-bold text-gray-700">NACIONAL</h3>
            <h3 className="text-sm text-gray-600">DE COLOMBIA</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Filosofía del doctor
const PhilosophySection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Un profundo sentido estético y habilidades quirúrgicas innatas se fusionan en una práctica hecha a la medida de cada paciente
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Con cerca de 30 años de experiencia, el Dr. Pérez ha perfeccionado el equilibrio entre la estética y la ciencia, 
              combinando su gran sentido artístico con habilidades quirúrgicas desarrollado su propio nivel. Sus años de experiencia 
              y vasta pasión por el arte en todas sus expresiones le ha permitido desarrollar un enfoque único en la cirugía plástica facial, donde cada procedimiento es 
              una obra maestra diseñada para resaltar la belleza natural de sus pacientes.
            </p>
            
            <p>
              Su compromiso con la excelencia y la armonía facial lo han convertido en un referente de 
              su campo, brindando resultados que reflejan la naturalidad, elegancia y precisión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Compromiso social
const SocialCommitmentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-16">
            Su compromiso social
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                El Dr Pérez además de ser un reconocido cirujano plástico facial tiene un profundo compromiso con la 
                labor social. Como miembro de la Milwaukee Medical Mission organización del Medical College of 
                Winsconsin participa activamente en misiones quirúrgicas en Colombia donde junto a un equipo de 
                especialistas del más alto nivel brindan cirugías plásticas reconstructivas a pacientes de escasos 
                recursos.
              </p>
              
              <p>
                Esta iniciativa permite a personas con malformaciones congénitas, secuelas de quemaduras y otras 
                condiciones acceder a tratamientos quirúrgicos que mejoran significativamente su calidad de vida. Para el 
                Dr Pérez, la cirugía plástica no solo es un arte sino también una herramienta para devolver la confianza, la 
                funcionalidad y la esperanza quienes más lo necesitan.
              </p>
            </div>
            
            <div className="relative">
              {/* Imagen del compromiso social */}
              <div 
                className="w-full h-96 rounded-lg shadow-lg bg-cover bg-center flex items-end"
                style={{
                  backgroundImage: `
                    linear-gradient(to top, rgba(0, 0, 0, 0) 0%, transparent 100%),
                    url('/images/social.jpg'),
                    linear-gradient(135deg,rgba(59, 131, 246, 0) 0%,rgba(30, 64, 175, 0) 100%)
                  `
                }}
              >
                <div className="p-6 text-white">
                  <div className="text-xl font-semibold">Equipo Médico</div>
                  <div className="text-lg">Misión Social</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function DoctorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Banner del Doctor */}
      <DoctorBanner />
      
      {/* Sección: Guiado por su pasión */}
      <PassionSection />
      
      {/* Sección: Educación y experiencia */}
      <EducationSection />
      
      {/* Sección: Filosofía del doctor */}
      <PhilosophySection />
      
      {/* Sección: Compromiso social */}
      <SocialCommitmentSection />
      
      <Footer />
      
      {/* Botón flotante */}
      <FloatingContactButton
        phoneNumber="+521234567890"
        whatsappNumber="+521234567890"
        customImage="/images/doctor.jpg"
        position="bottom-right"
        appointmentMessage="Hola! Me gustaría agendar una consulta con el Dr. Jiménez Nieto. ¿Cuáles son los horarios disponibles?"
      />
    </main>
  );
}