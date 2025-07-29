import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ApplicationZone {
  zone: string;
  description: string;
}

interface TechniqueFeature {
  feature: string;
}

const AcidoHialuronico: React.FC = () => {
  const applicationZones: ApplicationZone[] = [
    { zone: "Surcos nasogenianos", description: "(líneas entre nariz y boca)" },
    { zone: "Líneas de marioneta", description: "(desde las comisuras hacia el mentón)" },
    { zone: "Labios", description: "(aumento de volumen, definición del contorno, hidratación)" },
    { zone: "Ojeras", description: "(mejora del hundimiento y pigmentación)" },
    { zone: "Pómulos y mejillas", description: "(volumen y definición)" },
    { zone: "Mentón y mandíbula", description: "(armonización del perfil facial)" },
    { zone: "Rinomodelación no quirúrgica", description: "(mejorar la forma de la nariz sin cirugía)" },
    { zone: "Líneas peribucales", description: "(código de barras)" }
  ];

  const techniqueFeatures: TechniqueFeature[] = [
    { feature: "Utiliza productos de máxima calidad y prestigio internacional" },
    { feature: "Aplica anestesia local tópica para mayor confort" },
    { feature: "Emplea microcánulas o agujas finas, según el área a tratar" },
    { feature: "Planifica cada sesión de forma individualizada, enfocándose en la simetría facial y la naturalidad" }
  ];

  const sideEffects = [
    {
      title: "Enrojecimiento leve o hinchazón en el sitio de aplicación",
    },
    {
      title: "Sensibilidad o pequeños hematomas que desaparecen en pocos días", 
    }
  ];

  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="min-h-screen bg-white">
        {/* Hero Section - Imagen 1 como fondo */}
        <section 
          className="relative py-16 min-h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.1) 100%), url('/images/Acido Hialuronico.jpg')`
          }}
        >
          <div className="container mx-auto px-6 lg:px-8 h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              <div className="max-w-lg">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-900">
                  Ácido Hialurónico
                </h1>
                <div className="w-64 h-1 bg-blue-900 mb-8"></div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  El Ácido Hialurónico es uno de los tratamientos más utilizados y 
                  seguros en la medicina estética moderna. Su capacidad para 
                  <span className="text-blue-600 font-semibold"> hidratar, rellenar y rejuvenecer</span> lo convierte en una herramienta 
                  altamente eficaz para restaurar la armonía facial sin necesidad de 
                  cirugía.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Se trata de una sustancia que se encuentra de forma natural en el 
                  cuerpo humano, especialmente en la piel, y cuya principal función 
                  es retener agua para mantener la piel hidratada, firme y con 
                  volumen. Con el paso del tiempo, su producción disminuye, dando 
                  lugar a arrugas, pérdida de elasticidad y flacidez.
                </p>
              </div>
              <div className="lg:block hidden">
                {/* Espacio para la imagen de fondo */}
              </div>
            </div>
          </div>
        </section>

        {/* What is and How it works */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              ¿Qué es y cómo actúa el Ácido Hialurónico?
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg leading-relaxed mb-8">
                El Ácido Hialurónico utilizado en estética es una forma biocompatible y reabsorbible, 
                diseñada para integrarse de forma natural en los tejidos sin causar reacciones adversas.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6">Mecanismo de acción:</h3>
                <p className="text-lg leading-relaxed">
                  A diferencia del Botox, que relaja los músculos, el Ácido Hialurónico actúa como un 
                  relleno dérmico, es decir, rellena las líneas, arrugas y surcos mediante la inyección 
                  directa en la piel. También se utiliza para restaurar volúmenes faciales perdidos o 
                  para realzar ciertas áreas como los labios o los pómulos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types and Applications - Imagen 2 exacta */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-blue-900">
              Tipos de Ácido Hialurónico y su uso
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Existen diferentes formulaciones de Ácido Hialurónico, que varían en su densidad y viscosidad. 
              Esto permite al Dr. Pérez seleccionar el tipo más adecuado dependiendo del área a tratar.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-20 h-20 mx-auto mb-6">
                  <div className="w-full h-full border-4 border-blue-900 rounded-full flex items-center justify-center bg-blue-50">
                    <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-blue-900">
                  Ácido Hialurónico de baja densidad:
                </h3>
                <p className="text-gray-600 text-sm">
                  ideal para líneas finas y contorno de labios.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-20 h-20 mx-auto mb-6">
                  <div className="w-full h-full border-4 border-blue-900 rounded-full flex items-center justify-center bg-blue-50">
                    <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-blue-900">
                  Ácido Hialurónico de densidad media:
                </h3>
                <p className="text-gray-600 text-sm">
                  se utiliza para surcos nasogenianos, líneas de marioneta y ojeras.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-20 h-20 mx-auto mb-6">
                  <div className="w-full h-full border-4 border-blue-900 rounded-full flex items-center justify-center bg-blue-50">
                    <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-blue-900">
                  Ácido Hialurónico de alta densidad:
                </h3>
                <p className="text-gray-600 text-sm">
                  para recuperar volumen en mejillas, pómulos, mentón o mandíbula.
                </p>
              </div>
            </div>

            {/* Application Zones - Exacto como imagen 2 */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                ¿En qué zonas se aplica?
              </h3>
              <p className="text-gray-600 mb-8">
                Las aplicaciones más comunes del Ácido Hialurónico incluyen:
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid gap-4">
                  {applicationZones.map((zone, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-blue-600 font-medium">{zone.zone}</span>
                        <span className="text-gray-600 ml-1">{zone.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Pérez Technique */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              Técnica de aplicación del Dr. Pérez
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl leading-relaxed mb-12 text-center">
                El Dr. Pérez realiza una evaluación facial integral para definir el mejor plan de tratamiento de acuerdo con las 
                necesidades de cada paciente. Su enfoque se basa en obtener resultados sutiles, armónicos y naturales, preservando 
                la expresión facial.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-8 text-center">Características de su técnica:</h3>
                <div className="grid gap-6 max-w-4xl mx-auto">
                  {techniqueFeatures.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-lg">{item.feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Duration and Side Effects - Imagen 3 exacta */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Duration */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                ¿Cuánto duran los efectos?
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                El efecto del Ácido Hialurónico es temporal pero prolongado, y puede durar entre 8 y 18 meses, dependiendo de:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-4">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>El tipo de producto utilizado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>El área tratada</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>El metabolismo del paciente</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Los hábitos y el estilo de vida (exposición al sol, tabaco, ejercicio intenso)</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Tras ese período, el producto se reabsorbe de forma natural, y puede repetirse el tratamiento sin inconvenientes.
              </p>
            </div>

            {/* Side Effects - Exacto como imagen 3 */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
                ¿Existen efectos secundarios?
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-center text-blue-600">
                Los efectos secundarios son mínimos y transitorios, como:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
                {sideEffects.map((effect, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="w-16 h-16 mx-auto mb-6">
                      <div className="w-full h-full border-4 border-blue-900 rounded-full flex items-center justify-center bg-white">
                        <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-medium text-blue-900 text-center leading-tight">{effect.title}</h4>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-blue-900 font-semibold text-lg">
                  En manos expertas, el Ácido Hialurónico es un tratamiento altamente seguro y efectivo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AcidoHialuronico;