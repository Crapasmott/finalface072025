"use client";
import dynamic from 'next/dynamic';

// Componentes estáticos
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Componente dinámico para el botón flotante
const FloatingContactButton = dynamic(() => import('@/components/FloatingContactButton'), { 
  ssr: false 
});

// Banner Dr Face
const DrFaceBanner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0)) 50%,rgba(0, 0, 0, 0)) 100%),
            url('/images/dr-face.jpg') center/cover no-repeat,
            linear-gradient(135deg, #374151 0%,rgba(31, 41, 55, 0) 100%)
          `
        }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <div className="text-white space-y-8">
            <div className="mb-12">
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-white">
                Dr Face
              </h1>
              <div className="w-24 h-1 bg-white mb-8"></div>
              
              <p className="text-xl lg:text-2xl leading-relaxed">
                Considerado por sus pacientes como un artista de la cirugía facial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Ilumina y expresa tu belleza natural
const BellezaNaturalSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Ilumina y expresa tu belleza natural
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              El Dr. Perez ha logrado perfeccionar el arte de lograr resultados completamente naturales brindando a sus pacientes 
              la oportunidad de alcanzar sus expectativas y lucir tan jóvenes y frescos como se sienten.
            </p>
            
            <p>
              Definitivamente un NO rotundo a los rostros que lucen tensos e inexpresivos, a las narices &quot;raspingadas&quot; y en 
              general a todos aquellos resultados que no mantienen y exaltan la esencia y belleza inherentes a cada persona, 
              sino que por el contrario la distorsionan.
            </p>
            
            <p>
              El Dr. Perez cree firmemente que realizando técnicas quirúrgicas lo suficientemente precisas y delicadas se pueden 
              lograr cambios sutiles que hagan una gran diferencia. Así mismo entiende que los mejores resultados se obtienen 
              al priorizar las expectativas y necesidades de cada paciente y simultáneamente hacer uso de técnicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Nuestra Misión y Compromiso
const MisionCompromisoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Nuestra Misión */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
              Nuestra Misión
            </h2>
            <div className="w-20 h-1 bg-blue-900 mb-8"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Una de las prioridades del Dr. Pérez es restaurar el autoestima, la belleza y la frescura de cada uno de sus pacientes 
              a través de lograr sus objetivos estéticos. Por esta razón siempre dedica el tiempo que sea necesario para escuchar 
              todos sus deseos y expectativas al tiempo que les plantea soluciones que sean realistas.
            </p>
          </div>

          {/* Nuestro Compromiso */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
              Nuestro compromiso
            </h2>
            <p className="text-xl text-blue-800 text-center mb-12">
              Contigo y con tus resultados
            </p>
            
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <p className="text-lg mb-6">
                Con el fin de alcanzar dichos objetivos el Dr. Perez ha establecido una serie de compromisos con sus pacientes:
              </p>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-300 text-xl mt-1">•</span>
                  <span>Lograr el mejor resultado estético manteniendo la naturalidad y la esencia propias.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-300 text-xl mt-1">•</span>
                  <span>Brindar diferentes opciones que le permitan a cada paciente escoger la que más se adapte a sus necesidades.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-300 text-xl mt-1">•</span>
                  <span>Hacer uso de técnicas quirúrgicas seguras y de avanzada, apoyadas con tecnología de punta.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-300 text-xl mt-1">•</span>
                  <span>Ofrecer información clara y precisa acerca de cada uno de los procedimientos que se planean llevar a cabo.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-300 text-xl mt-1">•</span>
                  <span>Mantener todo el cuidado posible y la supervisión permanentes durante cada una de las fases tanto pre como postoperatorias.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Un planeamiento hecho a tu medida
const PlaneamientoSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Un planeamiento hecho a tu medida
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            El Dr. Perez cuenta con una amplia gama de procedimientos y de técnicas quirúrgicas que pone al servicio de sus 
            pacientes con el fin de lograr el mejor resultado posible colmando por completo las expectativas y deseos de cada 
            uno de ellos. Son cuatro los pilares sobre los que fundamenta su práctica quirúrgica:
          </p>

          {/* Grid de 4 tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Tarjeta 1: Seguridad */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Seguridad</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Es una de nuestras mayores prioridades, por ello el Dr. Pérez cuenta con un equipo multidisciplinario de anestesiólogos y enfermeras de gran experiencia que estará supervisando cada etapa de tu experiencia tanto antes como después de tu cirugía.
              </p>
            </div>

            {/* Tarjeta 2: Resultados naturales */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Resultados naturales</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Esta es una de las razones por cuales el Dr. Pérez se ha consolidado como uno de los grandes referentes en cirugía facial y es consultado por pacientes de múltiples países del mundo.
              </p>
            </div>

            {/* Tarjeta 3: Cambios perdurables */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Cambios perdurables</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nuestro objetivo es lograr resultados que se mantengan a lo largo del tiempo, razón por la cual el Dr. Pérez realiza técnicas quirúrgicas en las cuales se llevan a cabo tanto la movilización como el anclaje a puntos fijos de aquellos tejidos que se encuentran descendidos.
              </p>
            </div>

            {/* Tarjeta 4: Acompañamiento */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Acompañamiento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No hay de que preocuparse porque durante todo tu proceso tanto previo como posterior a tu cirugía estarás bajo la supervisión tanto del Dr Pérez como de su staff de trabajo, con el fin de brindarte una experiencia segura y muy placentera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function DrFacePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Banner Dr Face */}
      <DrFaceBanner />
      
      {/* Sección: Belleza Natural */}
      <BellezaNaturalSection />
      
      {/* Sección: Misión y Compromiso */}
      <MisionCompromisoSection />
      
      {/* Sección: Planeamiento */}
      <PlaneamientoSection />
      
      <Footer />
      
      {/* Botón flotante */}
      <FloatingContactButton
        phoneNumber="+521234567890"
        whatsappNumber="+521234567890"
        customImage="/images/doctor.jpg"
        position="bottom-right"
        appointmentMessage="Hola! Me interesa conocer más sobre los procedimientos del Dr. Face. ¿Podrían darme información sobre una consulta?"
      />
    </main>
  );
}