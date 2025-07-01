"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function OtoplastiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia",
      answer: (
        <div className="space-y-2">
          <p>En pacientes menores de 12 años, se recomienda realizar la cirugía bajo anestesia general para mayor comodidad y seguridad.</p>
          <p>En adolescentes y adultos, se puede realizar con anestesia local y sedación.</p>
        </div>
      )
    },
    {
      question: "Postoperatorio y Recuperación",
      answer: (
        <div className="space-y-2">
          <p>Después del procedimiento, se coloca un vendaje blando alrededor de la cabeza, el cual ayuda a proteger las orejas y controlar la inflamación. Este vendaje se retira entre los 2 y 3 días posteriores a la cirugía.</p>
          <p>Recomendaciones postoperatorias:</p>
          <p>• Dormir en posición semisentada (30°) para facilitar el drenaje de la inflamación.</p>
          <p>• Evitar actividades deportivas o de contacto durante los primeros 15 días.</p>
          <p>• Seguir cuidadosamente las indicaciones del Dr. Pérez para garantizar una recuperación óptima.</p>
        </div>
      )
    },
    {
      question: "¿Cuándo puedo retomar mis actividades?",
      answer: "La mayoría de los pacientes pueden volver a sus rutinas habituales a partir del tercer o cuarto día postoperatorio."
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
            backgroundImage: "url('/images/otoplastia-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Otoplastia:
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
                  Cirugía Estética de Orejas
                </h2>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    La Otoplastia es un procedimiento quirúrgico diseñado para corregir alteraciones en la forma, tamaño o posición de las orejas, ya sean de origen congénito o adquiridas. La más común de estas alteraciones es la conocida como "orejas en pantalla", en la que los pabellones auriculares sobresalen más de lo habitual, generando una apariencia desproporcionada con el resto del rostro.
                  </p>
                  
                  <p>
                    Además de la estética, la Otoplastia cumple una función emocional importante, especialmente en niños, ya que ayuda a prevenir problemas de autoestima o burlas escolares. Por esta razón, se recomienda realizarla entre los 8 y los 10 años de edad, una vez que el desarrollo auricular está prácticamente completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Técnica Quirúrgica */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-12">
              La técnica quirúrgica del Dr. Pérez
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-5xl">
              El Dr. Pérez emplea una técnica altamente refinada, segura y efectiva, con resultados naturales y duraderos: La intervención se realiza a través de una incisión oculta en la parte posterior de la oreja, lo que asegura una cicatriz invisible.
            </p>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-5xl">
              <p>
                • Se remodela el cartílago auricular para corregir la proyección excesiva, y se colocan suturas permanentes que acercan la oreja al cráneo, devolviéndole una posición armónica.
              </p>
              
              <p>
                • El resultado respeta las curvaturas naturales de la oreja, por lo que el aspecto final es completamente natural y estético.
              </p>
              
              <p>
                • El cierre se realiza con suturas absorbibles, por lo que no es necesario retirarlas.
              </p>
            </div>
          </div>
        </section>

        {/* Results Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              Nuestros excelentes resultados
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: "/images/otoplastia-resultado-1-antes.jpg", label: "Antes" },
                { src: "/images/otoplastia-resultado-1-despues.jpg", label: "Después" },
                { src: "/images/otoplastia-resultado-2-antes.jpg", label: "Antes" },
                { src: "/images/otoplastia-resultado-2-despues.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Otoplastia resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Otoplastia</p>
                    </div>
                  </div>
                </div>
              ))}
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