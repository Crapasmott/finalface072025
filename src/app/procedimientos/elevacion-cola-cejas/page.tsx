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

// Banner Principal - Imagen 1
const ElevacionCejasBanner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%),
            url('/images/Elevacion de Cola de cejas_ banner.jpg') center/cover no-repeat
          `
        }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
                Elevación cola de cejas
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-white mb-8 font-medium leading-tight">
                Restaurando la forma natural y atractiva del marco superior del rostro
              </h2>
              
              <div className="space-y-6 text-lg text-white leading-relaxed max-w-3xl">
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

// Sección: La visión estética del Dr. Pérez - Imagen 2
const VisionEsteticaSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Contenido de texto */}
            <div className="space-y-8">
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
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group">
                  <img
                    src="/images/antes-cejas.jpg"
                    alt="Antes - Elevación cola de cejas"
                    className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='380' viewBox='0 0 300 380'%3E%3Crect width='300' height='380' fill='%23f3f4f6'/%3E%3Ctext x='150' y='190' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EAntes%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                
                <div className="relative group">
                  <img
                    src="/images/despues-cejas.jpg"
                    alt="Después - Elevación cola de cejas"
                    className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='380' viewBox='0 0 300 380'%3E%3Crect width='300' height='380' fill='%23f3f4f6'/%3E%3Ctext x='150' y='190' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EDespués%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Detalles de la Técnica - Imagen 3
const DetallesTecnicaSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Detalles de la Técnica del Dr. Pérez
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Una técnica sutil para una mirada más armónica y rejuvenecida
            </p>
          </div>
          
          <div className="mb-16 text-lg leading-relaxed max-w-5xl mx-auto text-center">
            <p>
              El Dr. Pérez considera que la elevación selectiva de la cola de las cejas es una de las intervenciones más efectivas y 
              estéticamente agradables para mejorar la expresión facial. A diferencia de las técnicas que elevan la ceja en su 
              totalidad, su enfoque se centra en reposicionar únicamente la parte externa, preservando la naturalidad del rostro y 
              evitando expresiones artificiales o exageradas.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-12 text-center">
            Beneficios de la elevación de la cola de las cejas:
          </h3>

          {/* Grid de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-300 rounded-lg p-6 text-center">
              <p className="text-blue-900 text-lg leading-relaxed font-medium">
                Restablece la forma natural y armónica de la ceja, logrando que la cola se ubique ligeramente más alta que su cabeza, 
                lo que suaviza y estiliza la mirada.
              </p>
            </div>
            
            <div className="bg-gray-300 rounded-lg p-6 text-center">
              <p className="text-blue-900 text-lg leading-relaxed font-medium">
                Reduce el exceso de piel en los párpados superiores, aportando una apariencia más descansada y juvenil.
              </p>
            </div>
            
            <div className="bg-gray-300 rounded-lg p-6 text-center">
              <p className="text-blue-900 text-lg leading-relaxed font-medium">
                Mejora de forma notable y duradera las líneas de expresión en la zona lateral de los ojos, conocidas como "patas de gallina".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Técnicas personalizadas - Imagen 4
const TecnicasPersonalizadasSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
              Técnicas personalizadas según el caso
            </h2>
            
            <p className="text-lg text-blue-900 leading-relaxed max-w-4xl mx-auto font-medium">
              El Dr. Pérez utiliza variantes quirúrgicas para la elevación de la cola de las cejas, seleccionando la más adecuada 
              según la anatomía y expectativas del paciente. Una de las más frecuentemente empleadas es:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Técnica 1: Elevación Temporal Corta */}
            <div className="bg-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Elevación Temporal Corta
              </h3>
              
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/elevacion-temporal.jpg"
                  alt="Elevación Temporal Corta"
                  className="w-48 h-56 object-contain bg-gray-100 rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='240' viewBox='0 0 200 240'%3E%3Crect width='200' height='240' fill='%23e5e7eb'/%3E%3Ctext x='100' y='120' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3ETécnica Temporal Corta%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-blue-900">
                <p className="leading-relaxed text-sm">
                  Esta técnica se realiza mediante una pequeña incisión dentro del cuero cabelludo, en la región de las sienes, lo que permite que la cicatriz quede completamente oculta. A través de esta apertura, se lleva a cabo un cuidadoso despegamiento de los tejidos alrededor de las cejas, seguido de su elevación y fijación mediante suturas quirúrgicas de alta precisión.
                </p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Cicatriz invisible al quedar completamente dentro del cabello.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Recuperación rápida y mínimamente invasiva.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Resultado natural y armonioso, sin alterar la expresión facial.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Técnica 2: Elevación Temporal Extendida */}
            <div className="bg-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Elevación Temporal Extendida
              </h3>
              
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/elevacion-temporal-extendida.jpg"
                  alt="Elevación Temporal Extendida"
                  className="w-48 h-56 object-contain bg-gray-100 rounded-lg shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='240' viewBox='0 0 200 240'%3E%3Crect width='200' height='240' fill='%23e5e7eb'/%3E%3Ctext x='100' y='120' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3ETécnica Temporal Extendida%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-blue-900">
                <p className="leading-relaxed text-sm">
                  La intervención se realiza a través de una incisión discretamente ubicada en la línea del cabello, justo por encima de las patillas. Esta ubicación estratégica permite que la cicatriz quede completamente oculta y sin evidencias visibles tras la recuperación.
                </p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Resección precisa del exceso de piel en la región lateral del ojo, mejorando de forma notable las líneas de expresión o patas de gallina.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Elevación natural del músculo orbicular (alrededor de los párpados) y de las cejas, logrando una mirada más abierta, armónica y juvenil.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Mejora el contorno del tercio superior del rostro de manera simultánea.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Técnica que se combina con otros procedimientos como lifting facial o blefaroplastia.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 text-base mt-0.5">✓</span>
                    <span>Recuperación rápida y sin cambios artificiales en la expresión facial.</span>
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

// Sección: Candidatos - Imagen 5
const CandidatosSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Candidatos para la elevación de cola de cejas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Candidato 1 */}
            <div className="bg-gray-300 rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-transparent border-4 border-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-blue-900 text-lg leading-relaxed font-medium">
                Pacientes que presenten descenso y pérdida de la forma y posición normal de las cejas.
              </p>
            </div>

            {/* Candidato 2 */}
            <div className="bg-gray-300 rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-transparent border-4 border-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-blue-900 text-lg leading-relaxed font-medium">
                Pacientes que consultan para realizarse una blefaroplastia, y que durante su evaluación el Dr. Pérez recomienda la elevación de cola de cejas simultáneamente, con el fin de lograr una mejor definición de los párpados superiores.
              </p>
            </div>

            {/* Candidato 3 */}
            <div className="bg-gray-300 rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-transparent border-4 border-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-blue-900 text-lg leading-relaxed font-medium">
                Aquellos pacientes que presenten líneas de expresión pronunciadas en el área de las patas de gallina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Nuestros excelentes resultados
const ExcelentesResultadosSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
          Nuestros excelentes resultados
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: "/images/cejas/Copia de Paciente 4 3_4 Antes.png", label: "ANTES", type: "Antes" },
            { src: "/images/cejas/Copia de Paciente 4 3_4 Después.png", label: "DESPUÉS", type: "Después" },
            { src: "/images/cejas/Nelly 3 Lado Antes.png", label: "ANTES", type: "Antes" },
            { src: "/images/cejas/Nelly 3 Lado Después.png", label: "DESPUÉS", type: "Después" }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={item.src}
                  alt={`Resultado ${Math.floor(index/2) + 1} - ${item.type}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.type}%3C/text%3E%3C/svg%3E`
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium">
                    {item.type}
                  </span>
                  <p className="text-white text-xs">Elevación de cejas</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección: Testimonios CON VIDEOS
const TestimoniosSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
          Testimonios
        </h2>
        <div className="w-20 h-1 bg-blue-600 mb-12"></div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Video Testimonio 1 */}
          <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/images/testimonio-elevacion-cejas-1-poster.jpg"
            >
              <source src="/videos/testimonio-elevacion-cejas-1.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="absolute bottom-4 right-4">
              <div className="text-white text-sm font-light bg-black/50 px-2 py-1 rounded">
                Dr. Andrés Pérez
              </div>
            </div>
          </div>
          
          {/* Video Testimonio 2 */}
          <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/images/testimonio-elevacion-cejas-2-poster.jpg"
            >
              <source src="/videos/testimonio-elevacion-cejas-2.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="absolute bottom-4 right-4">
              <div className="text-white text-sm font-light bg-black/50 px-2 py-1 rounded">
                Dr. Andrés Pérez
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
};

const PreguntasFrecuentesSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Anestesia",
      answer: "El procedimiento de elevación de cola de cejas se lleva a cabo por lo general simultáneamente con la blefaroplastia, razón por la cual su anestesia es local y sedación."
    },
    {
      question: "¿Qué esperar luego de la cirugía?",
      answer: "Es normal la presencia de inflamación leve que compromete el área de las sienes. Los morados aparecen muy rara vez, sin embargo en algunos casos producto de la inflamación, se pueden observar las áreas de los ojos un poco elevados de lo normal, lo cual desaparece por completo en pocos días."
    },
    {
      question: "Recomendaciones postoperatorias",
      answer: "Se recomienda mantener una posición semissentada a 45 grados, con el fin de facilitar un mejor drenaje de la inflamación y la cicatrización del sitio operado y aplicar una compresa para evitar que se formen costras que se adhieran al cabello."
    },
    {
      question: "¿Se puede realizar el procedimiento si se ha aplicado botox previamente?",
      answer: "Sí se puede realizar e incluso al haber aplicado botox con anterioridad, los músculos están más relajados y por ende son más fáciles de trabajar."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Preguntas frecuentes
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
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
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
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
      
      {/* Sección: Nuestros excelentes resultados */}
      <ExcelentesResultadosSection />
      
      {/* Sección: Testimonios */}
      <TestimoniosSection />
      
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