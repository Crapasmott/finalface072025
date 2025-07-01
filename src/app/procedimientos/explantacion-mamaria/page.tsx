"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ExplantacionMamariaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia y duración del procedimiento",
      answer: (
        <div className="space-y-2">
          <p>La explantación mamaria se realiza bajo anestesia general.</p>
          <p>La duración de la cirugía depende del tipo de procedimiento, oscilando entre 1.5 a 3 horas.</p>
        </div>
      )
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: (
        <div className="space-y-2">
          <p>• Inflamación y sensibilidad: Es normal experimentar hinchazón y sensación de presión durante los primeros días.</p>
          <p>• Reposo y cuidado postoperatorio: Se recomienda reposo relativo y uso permanente del brassiere postoperatorio para dar soporte al tejido.</p>
          <p>• Drenes quirúrgicos: En algunos casos, se dejan drenajes durante 2 a 5 días para evitar acumulación de líquidos.</p>
          <p>• Incapacidad: La mayoría de las pacientes pueden retomar actividades livianas después del 4° o 5° día.</p>
          <p>• Resultado final: La forma del seno se estabiliza gradualmente, alcanzando su apariencia definitiva entre 4 a 6 semanas postcirugía.</p>
        </div>
      )
    },
    {
      question: "¿Mis senos volverán a la forma que tenían antes del aumento?",
      answer: "No exactamente. La forma final dependerá del volumen de tejido mamario natural, la elasticidad de la piel y el tiempo que se hayan llevado los implantes. El Dr. Pérez explica claramente los posibles resultados durante la consulta."
    },
    {
      question: "¿Siempre es necesario un levantamiento?",
      answer: "No. En algunos casos, si hay buen tono de piel y volumen adecuado, el tejido se acomoda de manera natural sin necesidad de pexia. Sin embargo, si hay caída marcada, es recomendable realizar el levantamiento en el mismo acto quirúrgico para lograr un resultado más estético."
    },
    {
      question: "¿Qué pasa con la cicatriz?",
      answer: "Las cicatrices varían según el tipo de técnica utilizada. El Dr. Pérez emplea métodos de cierre y ubicación estratégica para que sean lo menos visibles posible. Con un buen cuidado, estas cicatrices tienden a atenuarse con el tiempo."
    },
    {
      question: "¿Puedo colocarme nuevos implantes en el futuro?",
      answer: "Sí. En caso de que la paciente lo desee más adelante, es posible realizar una recolocación de implantes, ajustando la técnica a las nuevas condiciones del tejido mamario."
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
            backgroundImage: "url('/images/explantacion-mamaria-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                  Explantación Mamaria
                </h1>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-8">
                  Retiro de implantes mamarios con o sin reconstrucción del tejido
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Cada vez más mujeres en el mundo están considerando la explantación mamaria como una alternativa para recuperar el bienestar físico, emocional y estético, ya sea por motivos personales, médicos o simplemente porque sienten que sus implantes ya no forman parte de su identidad.
              </p>
              
              <p>
                El Dr. Pérez cuenta con amplia experiencia en cirugía de retiro de implantes mamarios, ofreciendo un enfoque individualizado que prioriza la seguridad, la estética y las expectativas de cada paciente.
              </p>
            </div>
          </div>
        </section>

        {/* Cuándo considerar */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              ¿Cuándo considerar una explantación mamaria?
            </h2>
            
            <p className="text-lg text-center mb-12 max-w-4xl mx-auto">
              Existen múltiples razones por las que una paciente puede optar por retirar sus implantes mamarios:
            </p>
            
            <div className="bg-gray-200 text-blue-900 p-8 rounded-lg max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Cambios en las prioridades estéticas o estilo de vida
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Complicaciones como contractura capsular, ruptura o desplazamiento del implante
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Síntomas relacionados con el Síndrome de ASIA o malestar físico asociado a los implantes
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Incomodidad o sensación de peso en el pecho
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Deseo de recuperar una imagen corporal más natural
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Explantación */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-8">
              Tipos de Explantación que realiza el Dr. Pérez
            </h2>
            
            <p className="text-lg text-center mb-12 max-w-4xl mx-auto text-gray-700">
              Dependiendo del caso particular, el Dr. Pérez puede optar por diferentes técnicas quirúrgicas:
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  Explantación simple
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Retiro de los implantes mamarios a través de la misma incisión por donde fueron colocados. Es indicada cuando no hay contractura capsular ni alteraciones del tejido circundante.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  Explantación con capsulectomía parcial o total
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  En pacientes que presentan contractura capsular u otros síntomas, se procede al retiro completo o parcial de la cápsula que se ha formado alrededor del implante, además de extraer la prótesis.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  Explantación con pexia (levantamiento de senos)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cuando el tejido mamario ha perdido firmeza o presenta caída importante, se realiza simultáneamente una pexia para levantar y redefinir el seno de forma estética y armónica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detalles de la Técnica */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              Detalles de la Técnica del Dr. Pérez
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-5xl">
              <p>
                • Cada intervención es cuidadosamente planeada en consulta, teniendo en cuenta la anatomía del tórax, la cantidad de tejido residual y los objetivos de la paciente.
              </p>
              
              <p>
                • En casos de contractura capsular o sospecha de ruptura, se realiza capsulectomía total en bloque, retirando el implante y la cápsula en una sola pieza.
              </p>
              
              <p>
                • Cuando es necesario, se combinan técnicas de reconstrucción natural del seno usando el propio tejido mamario, logrando una forma agradable y proporcional.
              </p>
              
              <p>
                • Las cicatrices se diseñan con criterio estético, buscando que sean poco visibles y fáciles de disimular.
              </p>
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