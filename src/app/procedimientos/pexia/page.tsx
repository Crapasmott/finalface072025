"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function PexiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia y duración del procedimiento",
      answer: "La cirugía se realiza bajo anestesia general y tiene una duración aproximada de 2 a 3 horas, dependiendo de la complejidad del caso."
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: (
        <div className="space-y-2">
          <p>• Inflamación: Es normal la aparición de inflamación moderada durante la primera semana postoperatoria.</p>
          <p>• Soporte mamario: Es fundamental el uso continuo de un brassiere postoperatorio, que brinde soporte, protección y comodidad.</p>
          <p>• Actividad física: Se recomienda evitar actividades deportivas o de esfuerzo durante los primeros 10 días.</p>
          <p>• Incapacidad laboral: La mayoría de las pacientes puede retomar labores administrativas o de bajo esfuerzo a partir del tercer día postoperatorio.</p>
          <p>• Reposo: Es aconsejable dormir en posición semisentada (30°) para favorecer la desinflamación y una recuperación más cómoda.</p>
        </div>
      )
    },
    {
      question: "¿Los resultados son duraderos?",
      answer: "Sí, los resultados suelen ser estables a largo plazo. Sin embargo, factores como la calidad de la piel, el volumen de los senos, embarazos futuros o variaciones de peso pueden influir en la evolución de los resultados. El Dr. Pérez recomienda el uso diario de sujetadores de soporte, incluso al dormir, para contrarrestar el efecto de la gravedad y preservar los resultados obtenidos."
    },
    {
      question: "¿Se puede lograr una buena simetría en los senos?",
      answer: "Muchos pacientes presentan cierto grado de asimetría mamaria natural. Uno de los objetivos clave de la pexia es mejorar esta simetría, logrando un aspecto más equilibrado y estético entre ambos senos."
    },
    {
      question: "¿Se pierde la sensibilidad en los senos?",
      answer: "Aunque existe cierto riesgo de alteración temporal de la sensibilidad, las técnicas que utiliza el Dr. Pérez respetan al máximo la sensibilidad, especialmente en la areola y el pezón. Es común experimentar una disminución temporal de la sensibilidad durante las primeras semanas, la cual suele mejorar progresivamente."
    },
    {
      question: "¿Se retiran los pezones durante la cirugía?",
      answer: "No, los pezones no se retiran ni se separan de la glándula. Son elevados cuidadosamente a su nueva posición mediante una técnica que conserva su irrigación y función, evitando riesgos innecesarios."
    }
  ]

  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="relative py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pexia-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                  Pexia
                </h1>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-8">
                  Elevación y Rejuvenecimiento del Busto
                </h2>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Con el paso del tiempo, es común que muchas mujeres experimenten cierto grado de descenso o descolgamiento de los senos, un proceso que puede deberse a diferentes factores como:
                  </p>
                  
                  <div className="ml-4 space-y-2">
                    <p>• Embarazos y períodos de lactancia.</p>
                    <p>• Pérdida de peso significativa.</p>
                    <p>• Envejecimiento natural y pérdida de elasticidad de la piel.</p>
                  </div>
                  
                  <p>
                    Este cambio en la forma y posición del busto puede afectar no solo la estética, sino también la comodidad y la autoestima de la paciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidatas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
              ¿Quiénes son candidatas para una pexia mamaria (elevación de senos)?
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl text-center mx-auto">
              Existen dos perfiles principales de pacientes que pueden beneficiarse de este procedimiento:
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                  Senos caídos con volumen suficiente
                </h3>
                <p className="text-gray-700 mb-6">
                  Son mujeres que presentan senos descendidos, pero que aún conservan un volumen mamario adecuado o incluso ligeramente aumentado. En estos casos, la pexia permite:
                </p>
                
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Reposicionar los senos.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Remodelar y aprovechar el tejido glandular existente.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Lograr una forma más firme, juvenil y simétrica, sin necesidad de implantes.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                  Senos caídos con poco volumen y exceso de piel
                </h3>
                <p className="text-gray-700 mb-4">
                  Estas pacientes tienen un grado mayor de caída, acompañado de:
                </p>
                
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Escaso tejido mamario.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Piel flácida o en exceso.</p>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  En estos casos, la pexia se realiza de forma combinada con una mamoplastia de aumento, mediante la colocación de implantes mamarios idealmente detrás del músculo pectoral, para evitar su desplazamiento hacia abajo. Posteriormente se realiza la remodelación y elevación de la glándula mamaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detalles de la Técnica */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Detalles de la Técnica del Dr. Pérez
            </h2>
            
            <p className="text-lg leading-relaxed mb-12 max-w-5xl">
              Cada paciente es única. Por ello, durante la consulta de valoración, el Dr. Pérez analiza cuidadosamente las características físicas de la paciente, sus expectativas y objetivos, para definir la técnica quirúrgica más adecuada. Esta personalización garantiza resultados naturales, armónicos y duraderos.
            </p>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
              Técnicas quirúrgicas utilizadas
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-center mb-6">
                  Pexia sin implantes – Técnica vertical:
                </h3>
                <p className="leading-relaxed">
                  En pacientes con suficiente volumen mamario y senos ligeramente descendidos, el Dr. Pérez emplea la técnica vertical. Esta opción permite realizar una incisión más corta, ubicada bajo la areola, y logra una forma elevada y bien proyectada del busto.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-center mb-6">
                  Pexia en casos de caída severa – Técnica en T invertida:
                </h3>
                <p className="leading-relaxed">
                  En pacientes con un descenso más acentuado y exceso significativo de piel, la técnica preferida es la T invertida, que permite retirar mayor cantidad de tejido y tensar adecuadamente la piel para lograr un resultado más firme y natural.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-center mb-6">
                  Pexia con implantes:
                </h3>
                <p className="leading-relaxed">
                  En pacientes con escaso volumen glandular, se combina la elevación con la colocación de implantes mamarios. Estos se ubican completamente detrás del músculo pectoral, para evitar su desplazamiento hacia abajo. Posteriormente se realiza la remodelación y elevación de la glándula mamaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/levantamiento-senos-sin-implante-poster.jpg"
                  controls
                >
                  <source src="/videos/levantamiento-senos-sin-implante.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-lg font-semibold text-center mb-2">
                    Levantamiento de senos <span className="text-sm">(sin implante)</span>
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>

              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/levantamiento-senos-con-implante-poster.jpg"
                  controls
                >
                  <source src="/videos/levantamiento-senos-con-implante.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-lg font-semibold text-center mb-2">
                    Levantamiento de senos <span className="text-sm">(implante)</span>
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Preguntas frecuentes
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div 
                    className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-blue-900 text-left flex-1 pr-4">{faq.question}</h3>
                    <svg 
                      className={`w-6 h-6 text-blue-900 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="text-gray-700 leading-relaxed text-left">
                        {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                Ver más
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}