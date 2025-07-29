"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ApplicationZone {
  zone: string;
  description: string;
}

interface MedicalUse {
  title: string;
  description: string;
}

interface TechniqueFeature {
  feature: string;
}

interface SideEffect {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function BotoxPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const applicationZones: ApplicationZone[] = [
    { zone: "Frente", description: "(líneas horizontales)" },
    { zone: "Entrecejo", description: "(líneas glabelares o \"líneas de enojo\")" },
    { zone: "Patas de gallina", description: "(líneas alrededor de los ojos)" },
    { zone: "Líneas peribucales", description: "(código de barras)" },
    { zone: "Cuello", description: "(bandas platismales)" },
    { zone: "Elevación sutil de cejas o comisuras labiales", description: "" }
  ];

  const medicalUses: MedicalUse[] = [
    { title: "Migraña crónica:", description: "disminuye la frecuencia e intensidad de los episodios." },
    { title: "Hiperhidrosis (sudoración excesiva):", description: "reduce la producción de sudor en axilas, palmas y plantas." },
    { title: "Bruxismo y dolor mandibular:", description: "al relajar los músculos maseteros." },
    { title: "Blefaroespasmo:", description: "espasmos involuntarios de los párpados." },
    { title: "Asimetrías faciales postparálisis:", description: "mejora el equilibrio estético muscular." }
  ];

  const techniqueFeatures: TechniqueFeature[] = [
    { feature: "Utiliza agujas ultrafinas para minimizar molestias y evitar hematomas." },
    { feature: "Anestesia localizada mediante frío para mayor confort del paciente" },
    { feature: "Aplica el producto en puntos estratégicos, logrando un efecto natural y expresivo, sin \"rostros congelados\"." },
    { feature: "Ajusta la dosis y técnica según la anatomía y necesidades individuales del paciente." }
  ];

  const sideEffects: SideEffect[] = [
    { title: "Leve inflamación o enrojecimiento en el sitio de inyección", description: "(desaparece en horas)" },
    { title: "Pequeños hematomas", description: "" },
    { title: "Dolor de cabeza ocasional", description: "" },
    { title: "En casos raros: ptosis palpebral", description: "(caída del párpado) si se aplica incorrectamente" }
  ];

  const faqs: FAQ[] = [
    {
      question: "¿El Botox cambia mi expresión facial?",
      answer: "No, si es aplicado correctamente. El objetivo es suavizar las líneas sin alterar tu naturalidad ni tu capacidad de expresión. El Dr. Pérez prioriza resultados sutiles y elegantes."
    },
    {
      question: "¿Desde qué edad se puede aplicar?",
      answer: "No hay una edad específica. Generalmente se comienza entre los 25 y 35 años, ya sea como prevención o tratamiento de arrugas dinámicas ya visibles."
    },
    {
      question: "¿Cuánto dura la sesión?",
      answer: "El procedimiento dura entre 15 y 30 minutos, y no requiere tiempo de recuperación. Puedes retomar tus actividades inmediatamente."
    },
    {
      question: "¿Se puede combinar con otros tratamientos?",
      answer: "Sí. El Botox puede combinarse con otros procedimientos como rellenos faciales (ácido hialurónico), peeling químico, láser facial o bioestimuladores de colágeno para potenciar los resultados del rejuvenecimiento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Imagen 1 como fondo */}
        <section 
          className="relative py-16 min-h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%), url('/images/Botox.jpg')`
          }}
        >
          <div className="container mx-auto px-6 lg:px-8 h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              <div className="max-w-lg">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-900">
                  Botox
                </h1>
                <div className="w-64 h-1 bg-blue-900 mb-8"></div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Desde su aprobación por la FDA en 2002, el Botox® se 
                  ha convertido en uno de los tratamientos estéticos 
                  más solicitados a nivel mundial. Su capacidad para 
                  <span className="text-blue-600 font-semibold"> atenuar las líneas de expresión de manera rápida, 
                  segura y sin necesidad de cirugía</span> ha revolucionado el 
                  campo de la medicina estética.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  El Dr. Pérez cuenta con amplia experiencia en la 
                  aplicación de Botox®, enfocándose en lograr 
                  resultados naturales, armónicos y adaptados a las 
                  características faciales de cada paciente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is and How it works - Imagen 2 */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              ¿Qué es el Botox y cómo funciona?
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg leading-relaxed mb-8">
                El Botox® es una proteína purificada derivada de la toxina botulínica tipo A. Su aplicación en dosis mínimas 
                directamente sobre determinados músculos faciales provoca una relajación temporal y controlada, disminuyendo la 
                contracción excesiva que causa arrugas y líneas de expresión.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6">Principales áreas de aplicación:</h3>
                
                <div className="bg-blue-100 p-8 rounded-lg">
                  <div className="grid gap-4">
                    {applicationZones.map((zone, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-blue-900 font-medium">{zone.zone}</span>
                          <span className="text-blue-600 ml-1">{zone.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                El resultado es un rostro con una apariencia más descansada, fresca y rejuvenecida, sin perder la expresión natural.
              </p>
            </div>
          </div>
        </section>

        {/* Medical Uses - Imagen 3 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-blue-900">
              Otros usos médicos del Botox
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Además de su uso estético, el Botox también se utiliza en tratamientos clínicos para mejorar diversas 
              condiciones:
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid gap-6">
                  {medicalUses.map((use, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-blue-600 font-medium">{use.title}</span>
                        <span className="text-gray-600 ml-1">{use.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Pérez Technique - Imagen 4 */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              Técnica de aplicación del Dr. Pérez
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl leading-relaxed mb-12 text-center">
                El Dr. Pérez realiza una evaluación facial minuciosa previa a cada aplicación para identificar los músculos 
                responsables de las líneas de expresión y definir los puntos exactos de inyección.
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

        {/* Duration - Imagen 5 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                ¿Cuánto dura el efecto del Botox?
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                El efecto del Botox no es inmediato. Comienza a notarse entre el 3° y 5° día posterior a la aplicación, alcanzando su máximo efecto 
                en aproximadamente 7 a 10 días.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                <strong>Duración del resultado:</strong> En promedio, entre 4 y 6 meses.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                La duración puede variar dependiendo de:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>El metabolismo del paciente</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>La técnica y dosis utilizadas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>La calidad del producto</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>La frecuencia de tratamientos anteriores</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Para mantener los resultados, se recomienda repetir el tratamiento 2 veces al año.
              </p>
            </div>
          </div>
        </section>

        {/* Side Effects - Imagen 6 */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              ¿Existen efectos secundarios?
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              El Botox es un tratamiento seguro cuando es aplicado por un profesional con experiencia y 
              conocimiento profundo de la anatomía facial.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {sideEffects.map((effect, index) => (
                <div key={index} className="bg-blue-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6">
                    <div className="w-full h-full border-4 border-blue-900 rounded-full flex items-center justify-center bg-blue-100">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-medium text-blue-900 text-center leading-tight text-sm">
                    {effect.title}
                  </h4>
                  {effect.description && (
                    <p className="text-blue-600 text-xs mt-2">{effect.description}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold max-w-4xl mx-auto">
                Por eso, el Dr. Pérez insiste en la importancia de que este tratamiento sea realizado exclusivamente por 
                un médico certificado y capacitado.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ - Imagen 7 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-blue-900">
                Preguntas frecuentes
              </h2>
              <div className="w-24 h-1 bg-blue-900 mb-12"></div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-blue-900 pr-4">
                        {faq.question}
                      </h3>
                      <svg 
                        className={`w-6 h-6 text-blue-900 transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 border-2 border-blue-600">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}