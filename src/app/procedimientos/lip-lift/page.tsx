"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function LipLiftPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "¿El Lip Lift deja cicatrices visibles?",
      answer: "No. La incisión se realiza justo en el pliegue natural de la base de la nariz, lo que permite camuflarla completamente. Con una adecuada técnica quirúrgica y buen cuidado postoperatorio, la cicatriz es prácticamente imperceptible."
    },
    {
      question: "¿Cuánto tiempo dura la recuperación?",
      answer: "El tiempo de recuperación es corto. La mayoría de los pacientes pueden retomar sus actividades sociales entre 5 y 7 días después de la cirugía, aunque la inflamación leve puede persistir un poco más."
    },
    {
      question: "¿Es doloroso el procedimiento?",
      answer: "Generalmente no. El Lip Lift se realiza bajo anestesia local con sedación, y el postoperatorio suele ser bien tolerado. Se puede manejar fácilmente con analgésicos suaves si es necesario."
    },
    {
      question: "¿A partir de qué edad se puede realizar un Lip Lift?",
      answer: "Este procedimiento está indicado tanto para pacientes jóvenes con una distancia entre nariz y labio superior más larga de lo deseado, como para personas mayores que buscan rejuvenecer esta zona. En general, puede realizarse a partir de los 20 años, dependiendo del caso."
    },
    {
      question: "¿Qué diferencia hay entre el Lip Lift y los rellenos con ácido hialurónico?",
      answer: "El Lip Lift modifica la forma anatómicamente, acortando la distancia entre la nariz y el labio superior. Los rellenos son temporales y solo aportan volumen. Son procedimientos diferentes que pueden complementarse, pero no se sustituyen entre sí."
    },
    {
      question: "¿Qué ventajas tiene el lipofilling con células madre frente a los rellenos comunes?",
      answer: "El lipofilling ofrece un resultado más natural y duradero, al utilizar grasa del propio paciente. Además, las células madre presentes en la grasa mejoran la calidad de la piel, aportan hidratación y estimulan la regeneración tisular."
    },
    {
      question: "¿Cuánto tiempo duran los resultados del Lip Lift y del Lipofilling?",
      answer: "El Lip Lift tiene resultados permanentes. En cuanto al lipofilling, una parte de la grasa inyectada se reabsorbe en las primeras semanas, pero el volumen restante es duradero, especialmente si el paciente mantiene un peso estable."
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
            backgroundImage: "url('/images/lip-lift-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Lip Lift
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">
                  Elevación del Labio Superior
                </h2>
                <p className="text-lg font-semibold text-blue-800">
                  Rejuvenece tu expresión con unos labios más armónicos y atractivos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introducción Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl">
              <p className="text-gray-700 text-lg leading-relaxed">
                Cuando se habla de rejuvenecimiento facial, con frecuencia se priorizan áreas como los párpados, las mejillas o el cuello. Sin embargo, los labios y la región perioral son elementos clave en la estética del rostro. Para el Dr. Pérez, brindar atención a esta zona es fundamental para lograr una expresión más fresca, natural y juvenil.
              </p>
              <br />
              <p className="text-gray-700 text-lg leading-relaxed">
                El Lip Lift o elevación del labio superior es uno de los procedimientos que el Dr. Pérez realiza con mayor frecuencia y entusiasmo, gracias a los resultados notables y duraderos que ofrece a sus pacientes.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué cambia el labio */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              ¿Por qué cambia el labio con el tiempo?
            </h2>
            
            <p className="text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              Con el paso de los años —ya sea por causas genéticas o por el envejecimiento natural— los labios sufren transformaciones visibles:
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-400 p-8 rounded-lg text-center">
                <p className="text-lg leading-relaxed">
                  El labio superior tiende a descender, alargando la distancia entre la base de la nariz y el borde del labio, lo que genera una apariencia envejecida y apaga la expresión facial.
                </p>
              </div>
              
              <div className="bg-blue-400 p-8 rounded-lg text-center">
                <p className="text-lg leading-relaxed">
                  Se produce una pérdida de proyección y volumen, especialmente en el labio superior, haciendo que los labios luzcan más delgados y menos definidos.
                </p>
              </div>
              
              <div className="bg-blue-400 p-8 rounded-lg text-center">
                <p className="text-lg leading-relaxed">
                  El labio inferior también puede perder firmeza y proyección, desequilibrando el equilibrio natural de la boca.
                </p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Estos cambios afectan no solo la armonía de la sonrisa, sino también la percepción general de juventud y vitalidad del rostro.
            </p>
          </div>
        </section>

        {/* Por qué elegir Lip Lift */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              ¿Por qué elegir el Lip Lift?
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Mejora la proporción y forma de los labios de manera permanente.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Requiere solo anestesia local y ofrece una recuperación rápida.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Puede realizarse como procedimiento independiente o en combinación con otras cirugías faciales como la blefaroplastia o el lifting facial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detalles de la técnica */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Detalles de la Técnica del Dr. Pérez
            </h2>
            <h3 className="text-xl lg:text-2xl mb-12">
              Precisión, naturalidad y armonía en cada procedimiento
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-5xl">
              <p>
                El Dr. Pérez lleva a cabo el Lip Lift con una técnica minuciosa y personalizada, diseñada para ofrecer resultados naturales y duraderos sin dejar huellas visibles.
              </p>
              
              <div className="space-y-4">
                <p>
                  • La intervención comienza con una incisión perfectamente ubicada en el pliegue natural entre las alas nasales y la base de la nariz, lo que permite ocultar completamente la cicatriz.
                </p>
                
                <p>
                  • El diseño de la resección cutánea tiene forma de un delgado &quot;bigote&quot; alargado, cuidadosamente adaptado a las proporciones de cada paciente.
                </p>
                
                <p>
                  • La elevación del labio se realiza de forma simétrica y precisa, garantizando un equilibrio estético perfecto con el resto del rostro.
                </p>
                
                <p>
                  • La cantidad de piel retirada se calcula milimétricamente, basándose en las características anatómicas de cada paciente, asegurando un resultado armónico, juvenil y natural.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video max-w-2xl mx-auto">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/lip-lift-video-poster.jpg"
                  controls
                >
                  <source src="/videos/lip-lift-tecnica.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-xl font-bold text-center mb-2">
                    Lip Lift
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lipofilling en Labios */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Lipofilling de Células Madre en Labios
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-8">
              Restableciendo volumen y juventud con los recursos del propio cuerpo
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl">
              Como complemento ideal al Lip Lift, el Dr. Pérez realiza de manera rutinaria un Lipofilling con células madre, una técnica avanzada que devuelve al labio su volumen natural y suaviza los signos del envejecimiento.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Este procedimiento consiste en la inyección de grasa purificada rica en células madre, extraída del propio paciente, dentro del espesor de los labios.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Al utilizar tejido autólogo, no existen riesgos de rechazo ni reacciones adversas.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Las células madre ayudan no solo a restaurar volumen, sino también a mejorar la calidad de la piel y la hidratación natural del labio.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Los resultados son más naturales y perdurables en comparación con los rellenos convencionales.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mt-12 max-w-5xl mx-auto text-center">
              Una técnica precisa y un enfoque integral del rejuvenecimiento perioral pueden transformar la expresión del rostro. El Lip Lift, junto al lipofilling de labios, permite recuperar una apariencia más joven, fresca y equilibrada, sin perder la naturalidad.
            </p>
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
                { src: "/images/lip-lift-resultado-1-antes.jpg", label: "Antes" },
                { src: "/images/lip-lift-resultado-1-despues.jpg", label: "Después" },
                { src: "/images/lip-lift-resultado-2-antes.jpg", label: "Antes" },
                { src: "/images/lip-lift-resultado-2-despues.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Lip Lift resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Lip Lift</p>
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
                        {faq.answer}
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