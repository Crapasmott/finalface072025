"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function BichectomiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia y duración",
      answer: "Este procedimiento se realiza generalmente con anestesia local y sedación, y tiene una duración aproximada de 30 a 45 minutos por sesión, permitiendo una recuperación rápida y sin hospitalización."
    },
    {
      question: "Postoperatorio y recuperación",
      answer: (
        <div className="space-y-2">
          <p>Es común presentar una inflamación moderada en las mejillas durante los primeros días, la cual disminuye progresivamente.</p>
          <p>Recomendaciones del Dr. Pérez para una óptima recuperación:</p>
          <p>• Mantener una posición semisentada (30 grados), especialmente durante el reposo, para reducir la inflamación.</p>
          <p>• Aplicar frío local en las mejillas durante las primeras 48 horas.</p>
          <p>• Realizar enjuagues bucales con antiséptico durante los primeros 5 días para mantener la higiene y evitar infecciones.</p>
        </div>
      )
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
            backgroundImage: "url('/images/bichectomia-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Bichectomía
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">
                  Resección de Bolsas de Bichat
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                
                <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-6">
                  Contorno facial más definido y armónico
                </h3>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Las bolsas de Bichat son cúmulos de grasa ubicados en el interior de las mejillas que, dependiendo de su tamaño, aportan volumen a esta zona del rostro. En ciertos pacientes, este volumen puede generar un aspecto facial redondeado o poco definido.
                  </p>
                  
                  <p>
                    La bichectomía es un procedimiento quirúrgico mínimamente invasivo que busca remover de forma selectiva parte de estas bolsas grasas para lograr un rostro más delgado, estilizado y con mayor definición en el área de los pómulos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Técnica Personalizada */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-12">
              La técnica personalizada del Dr. Pérez
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-5xl">
              Con más de 25 años de experiencia, el Dr. Pérez realiza esta cirugía con un enfoque conservador y altamente estético, cuidando siempre la armonía facial a largo plazo. Su técnica se caracteriza por:
            </p>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-5xl">
              <p>
                • Realizar una pequeña incisión intraoral, es decir, dentro de la boca, lo que garantiza ausencia de cicatrices visibles.
              </p>
              
              <p>
                • Llevar a cabo una resección parcial y controlada de las bolsas de Bichat, evitando un resultado excesivo que con el tiempo podría generar hundimientos o una apariencia envejecida.
              </p>
              
              <p>
                • Utilizar suturas absorbibles, lo que facilita la recuperación y evita la necesidad de retirar puntos.
              </p>
            </div>
          </div>
        </section>

        {/* Candidatos ideales */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              Candidatos ideales para la bichectomía
            </h2>
            
            <p className="text-lg text-center mb-12">
              Este procedimiento está indicado para:
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Pacientes con rostros redondeados o mejillas prominentes que desean una apariencia más esculpida.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Personas que buscan realzar sus pómulos y perfilar su contorno facial.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Mayores de 18 años, una vez finalizado el desarrollo óseo facial.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                Una decisión basada en criterio y experiencia
              </h3>
              <p className="text-lg leading-relaxed">
                El Dr. Pérez destaca la importancia de una valoración profesional previa para determinar si la bichectomía realmente es necesaria. Muchos pacientes solicitan este procedimiento sin ser candidatos ideales, por lo que una evaluación honesta y detallada es clave para obtener resultados naturales y armoniosos.
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