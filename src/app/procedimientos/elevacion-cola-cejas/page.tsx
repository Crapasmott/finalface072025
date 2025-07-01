"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Componentes estáticos
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Componente dinámico para el botón flotante
const FloatingContactButton = dynamic(() => import('@/components/FloatingContactButton'), { 
  ssr: false 
});

// Banner Principal
const ElevacionCejasBanner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.1) 100%),
            url('/images/elevacion-cejas-banner.jpg') center/cover no-repeat,
            linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
          `
        }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <div className="mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-blue-900">
                Elevación cola de cejas
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-blue-800 mb-8 font-medium leading-tight">
                Restaurando la forma natural y atractiva del marco superior del rostro
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-2xl">
                <p>
                  Así como otras áreas del rostro, las cejas también sufren un descenso progresivo como parte del proceso natural de 
                  envejecimiento. Este cambio altera su posición original y afecta significativamente la expresión facial.
                </p>
                
                <p>
                  En las mujeres, una de las transformaciones más notorias es la pérdida de la curvatura alargada que otorga feminidad y juventud 
                  al rostro. Con el tiempo, las cejas tienden a volverse más horizontales e incluso a inclinarse hacia abajo en los casos más 
                  marcados, otorgando una apariencia de cansancio o tristeza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: La visión estética del Dr. Pérez
const VisionEsteticaSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido de texto */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                La visión estética del Dr. Pérez
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  El Dr. Pérez considera que la posición y forma de las cejas son elementos clave en cualquier procedimiento 
                  de rejuvenecimiento facial. A lo largo de su trayectoria ha estudiado cuidadosamente los rasgos que hacen 
                  unas cejas visualmente atractivas y armónicas, integrando este conocimiento en sus técnicas quirúrgicas para lograr resultados refinados y 
                  naturales.
                </p>
                
                <p>
                  A diferencia de técnicas tradicionales que elevan las cejas de forma generalizada —especialmente aquellas 
                  que realizan suspensiones desde el centro de la frente—, el Dr. Pérez evita abordajes que puedan 
                  generar una expresión artificial o un aspecto de asombro permanente.
                </p>
              </div>
            </div>

            {/* Imagen antes y después */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src="/images/antes-elevacion-cejas.jpg"
                    alt="Antes - Elevación cola de cejas"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='320' viewBox='0 0 300 320'%3E%3Crect width='300' height='320' fill='%23f3f4f6'/%3E%3Ctext x='150' y='160' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EAntes%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                    <span className="font-semibold">Antes</span>
                    <div className="text-sm opacity-90">Elevación cola de cejas</div>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src="/images/despues-elevacion-cejas.jpg"
                    alt="Después - Elevación cola de cejas"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='320' viewBox='0 0 300 320'%3E%3Crect width='300' height='320' fill='%23f3f4f6'/%3E%3Ctext x='150' y='160' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EDespués%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                    <span className="font-semibold">Después</span>
                    <div className="text-sm opacity-90">Elevación cola de cejas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Detalles de la Técnica
const DetallesTecnicaSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Detalles de la Técnica del Dr. Pérez
          </h2>
          <p className="text-xl mb-16 opacity-90">
            Una técnica sutil para una mirada más armónica y rejuvenecida
          </p>
          
          <div className="mb-12 text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              El Dr. Pérez considera que la elevación selectiva de la cola de las cejas es una de las intervenciones más efectivas y 
              estéticamente agradables para realizar la expresión facial. A diferencia de las técnicas que elevan la ceja en su 
              totalidad, su enfoque se centra en reposicionar únicamente la parte externa, preservando la naturalidad del rostro y 
              evitando expresiones artificiales o exageradas.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-12">
            Beneficios de la elevación de la cola de las cejas:
          </h3>

          {/* Grid de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Beneficio 1</h4>
              <p className="text-white/90">
                Restablece la forma natural y armónica de la ceja, logrando que la cola se ubique ligeramente más alta que su cabeza, 
                lo que suaviza y estiliza la mirada.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Beneficio 2</h4>
              <p className="text-white/90">
                Reduce el exceso de piel en los párpados superiores, aportando una apariencia más descansada y juvenil.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Beneficio 3</h4>
              <p className="text-white/90">
                Mejora de forma notable y duradera las líneas de expresión en la zona lateral de los ojos, conocidas como &quot;patas de gallina&quot;.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Técnicas personalizadas
const TecnicasPersonalizadasSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
            Técnicas personalizadas según el caso
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
            El Dr. Pérez utiliza variantes quirúrgicas para la elevación de la cola de las cejas, seleccionando la más adecuada 
            según la anatomía y expectativas del paciente. Una de las más frecuentemente empleadas es:
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Técnica 1: Elevación Temporal Corta */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Elevación Temporal Corta
              </h3>
              
              <div className="mb-6">
                <img
                  src="/images/tecnica-temporal-corta.jpg"
                  alt="Elevación Temporal Corta"
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e5e7eb'/%3E%3Ctext x='200' y='125' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3ETécnica Temporal Corta%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Esta técnica se realiza mediante una pequeña incisión a nivel del cuero cabelludo en la región temporal que permite que la cicatriz quede completamente oculta y al ser poco invasiva, permite que el postoperatorio de los tejidos ubicados por encima de las cejas, acompañado por la eliminación del exceso de piel en esta misma área, a través de una cicatriz quirúrgica de alta precisión.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Cicatriz mínima, de quedar prácticamente dentro del cuero cabelludo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Anestesia local con sedación o anestesia general, según el caso</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Resultado natural y armonioso en la estructura facial</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Técnica 2: Elevación Temporal Extendida */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Elevación Temporal Extendida
              </h3>
              
              <div className="mb-6">
                <img
                  src="/images/tecnica-temporal-extendida.jpg"
                  alt="Elevación Temporal Extendida"
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e5e7eb'/%3E%3Ctext x='200' y='125' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3ETécnica Temporal Extendida%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  La intervención se realiza a través de una incisión por detrás de la línea de implantación del cabello a nivel de la región temporal en tanto perdidas. Esta ubicación estratégica permite que la cicatriz quede completamente oculta entre los cabellos, y además es menos visible tras la recuperación.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Incisión con precisión del exceso de piel en la región lateral del ojo, mejorando de forma notable las arrugas perioculares</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Elevación natural del músculo orbicular disminuyó en su proyección o de las patas de gallo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Mejora el contorno del tercio superior de la cara de manera simultánea</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Es una técnica con resultados procedimientos con lifting facial o superciliar</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span>Recuperación rápida y sin cambios antiestéticos en la expresión facial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Candidatos
const CandidatosSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Candidatos para la elevación de cola de cejas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Candidato 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg">
                Pacientes que presenten descenso y pérdida de la forma y posición normal de las cejas.
              </p>
            </div>

            {/* Candidato 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg">
                Pacientes que consultan para realizarse una blefaroplastia y que durante su evaluación se definan los mejores candidatos para elevación de cola de cejas simultáneamente, con el fin de lograr los mejores resultados en el párpado superior.
              </p>
            </div>

            {/* Candidato 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg">
                Aquellos pacientes que presenten líneas de expresión pronunciadas en el área de las patas de gallina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Preguntas frecuentes
const PreguntasFrecuentesSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Anestesia",
      answer: "El procedimiento de elevación de cola de cejas se lleva a cabo por lo general simultáneamente con la blefaroplastia, razón por la cual su anestesia es local y sedación."
    },
    {
      question: "¿Qué esperar luego de la cirugía?",
      answer: "Es normal la presencia de inflamación leve que compromete el área de las sienes. Los morados aparecen muy rara vez, sin embargo en los casos centro en algunos casos producto de la inflamación, se pueden observar las áreas de los ojos en poco días elevados de lo normal, lo cual desaparece por completo en pocos días."
    },
    {
      question: "Recomendaciones postoperatorias",
      answer: "Se recomienda mantener una posición semissentada a 45 grados, con el fin de facilitar un mejor drenaje de la inflamación y la cicatrización del sitio operado y aplicar una compresa para evitar que se formen costras que se adhieran al cabello."
    },
    {
      question: "¿Se puede realizar el procedimiento si se ha aplicado botox previamente?",
      answer: "Si se puede realizar e incluso al haber aplicado botox con anterioridad, los músculos están más relajados y por ende son más fáciles de trabajar."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12">
            Preguntas frecuentes
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-blue-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ElevacionCejasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Banner Principal */}
      <ElevacionCejasBanner />
      
      {/* Sección: Visión Estética */}
      <VisionEsteticaSection />
      
      {/* Sección: Detalles de la Técnica */}
      <DetallesTecnicaSection />
      
      {/* Sección: Técnicas Personalizadas */}
      <TecnicasPersonalizadasSection />
      
      {/* Sección: Candidatos */}
      <CandidatosSection />
      
      {/* Sección: Preguntas Frecuentes */}
      <PreguntasFrecuentesSection />
      
      <Footer />
      
      {/* Botón flotante */}
      <FloatingContactButton
        phoneNumber="+521234567890"
        whatsappNumber="+521234567890"
        customImage="/images/doctor.jpg"
        position="bottom-right"
        appointmentMessage="Hola! Me interesa conocer más sobre la elevación de cola de cejas. ¿Podrían darme información sobre una consulta?"
      />
    </main>
  );
}