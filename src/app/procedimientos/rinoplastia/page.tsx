"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function RinoplastiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia",
      answer: "En la gran mayoría de los casos, la rinoplastia se realiza bajo anestesia general, lo que garantiza mayor comodidad y seguridad para el paciente. La duración del procedimiento suele estar entre 1 y 2 horas, dependiendo de la complejidad del caso."
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: (
        <div className="space-y-2">
          <p>Es común presentar una inflamación leve en la zona de las mejillas y los párpados inferiores. Para proteger la nariz y facilitar el proceso cicatrizante el Dr. Pérez utiliza:</p>
          <p>• Clips de mención</p>
          <p>• Nariz ligeramente de aluminio</p>
          <p>Estos elementos se retiran normalmente a los 7 días del procedimiento.</p>
          <p>Durante los primeros días es normal experimentar una sensación de congestión nasal debido a la inflamación interna. Para aliviar este síntoma, el Dr. Pérez prescribe un spray antiinflamatorio nasal, que favorece la recuperación y mejora la respiración.</p>
        </div>
      )
    },
    {
      question: "¿A qué edad se puede realizar una rinoplastia?",
      answer: (
        <div className="space-y-2">
          <p>La rinoplastia puede realizarse una vez que se ha completado el desarrollo facial óseo, lo cual ocurre normalmente alrededor de los 16 años en mujeres y los 18 años en hombres.</p>
          <p>Además de la madurez física, es importante que el paciente cuente con madurez emocional y una expectativa realista sobre los resultados.</p>
        </div>
      )
    },
    {
      question: "¿Cuánto dura la inflamación?",
      answer: (
        <div className="space-y-2">
          <p>Existen dos fases de inflamación posteriores a la cirugía:</p>
          <p>• Fase aguda: se presenta durante los primeros 10 a 15 días, con una inflamación visible leve a moderada.</p>
          <p>• Fase de inflamación residual: es prácticamente imperceptible, que se resuelve progresivamente durante los 8 a 10 meses posteriores a la cirugía. A medida que desaparece, la nariz adquiere una forma más refinada y definida.</p>
        </div>
      )
    },
    {
      question: "¿Es dolorosa la cirugía de nariz?",
      answer: "Contrario a lo que muchos creen, la rinoplastia no suele ser dolorosa en el postoperatorio. En caso de presentarse un dolor moderado, este se maneja fácilmente con analgésicos orales y, podría tratarse de una molestia asociada a la congestión nasal temporal."
    },
    {
      question: "¿Todas las cirugías de nariz son iguales?",
      answer: "Definitivamente no. Cada nariz tiene características únicas según la anatomía y origen étnico del paciente (mestiza, afrodescendiente, caucásica, entre otras), lo que convierte a la rinoplastia en uno de los procedimientos más complejos de la cirugía plástica. El Dr. Pérez comprende esta diversidad y, por eso, individualiza cada caso, realizando una valoración detallada que incluye análisis facial y corporal completo, a fin de determinar las características de cada paciente."
    },
    {
      question: "Recomendaciones postoperatorias",
      answer: (
        <div className="space-y-2">
          <p>• Mantener la cabeza elevada a 30 grados para reducir la inflamación.</p>
          <p>• Evitar actividades físicas intensas durante la primera semana.</p>
          <p>• No exponerse directamente al sol durante las primeras fases nasales limpias, facilitando la recuperación.</p>
        </div>
      )
    },
    {
      question: "¿Son necesarios los tapones nasales?",
      answer: "En la mayoría de los casos, el Dr. Pérez no utiliza tapones nasales en el postoperatorio, gracias al uso de una técnica con suturas absorbibles en el tabique nasal. Esto permite al paciente respirar por la nariz desde el primer día postoperatorio, haciendo el proceso de recuperación mucho más tolerable. Solo en casos específicos, como fracturas traumáticas o cirugías funcionales complejas, podría ser necesario el uso temporal de tapones."
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
            backgroundImage: "url('/images/rinoplastia-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                  Rinoplastia
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-6">
                  Armonía facial con resultados naturales y funcionales
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  La nariz es una de las estructuras más importantes del rostro. Su forma, proporción y posición influyen significativamente en la expresión y la armonía facial.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Desde su etapa de especialización en cirugía plástica, el Dr. Pérez ha desarrollado una profunda pasión por la rinoplastia. Esta vocación lo llevó a perfeccionar su técnica entrenando en Estados Unidos con dos referentes mundiales en cirugía nasal: el Dr. Eugene Tardy y el Dr. Dean Toriumi, en la Universidad de Illinois. Con más de 25 años de experiencia y más de 2.000 rinoplastias realizadas, el Dr. Pérez ha creado un enfoque quirúrgico integral, enfocado en la armonía estética, la funcionalidad y la naturalidad.
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
                  poster="/images/rinoplastia-video-poster.jpg"
                  controls
                >
                  <source src="/videos/rinoplastia-tecnica.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-xl font-bold text-center mb-2">
                    Rinoplastia
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enfoque Integral */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Enfoque Integral
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            
            <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-12">
              Más allá de la nariz: armonía facial completa
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl">
              El análisis del rostro no se limita únicamente a la nariz. El Dr. Pérez realiza una evaluación facial integral que incluye áreas clave como el mentón y los labios, ya que estas zonas juegan un papel crucial en el equilibrio estético general. Esta valoración detallada permite diseñar un plan quirúrgico personalizado que potencie la armonía del rostro.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
                  Función Respiratoria
                </h3>
                <h4 className="text-lg font-semibold text-blue-800 text-center mb-6">
                  Belleza que respira salud.
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  La principal función de la nariz es permitir el paso adecuado del aire hacia los pulmones. Muchos pacientes que consultan al Dr. Pérez presentan dificultades respiratorias causadas por desviaciones del tabique, hipertrofia de cornetes u otras alteraciones anatómicas. Su técnica quirúrgica permite no solo mejorar la estética nasal, sino también corregir estos problemas funcionales, garantizando una respiración óptima.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
                  Naturalidad
                </h3>
                <h4 className="text-lg font-semibold text-blue-800 text-center mb-6">
                  Resultados que realzan, no transforman.
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  Para el Dr. Pérez, una buena rinoplastia no busca cambiar por completo la apariencia del paciente, sino realzar su belleza natural. Su objetivo es lograr un resultado armónico, equilibrado y duradero, que no deje huellas visibles ni comprometa la función nasal. Cada intervención se enfoca en resaltar las facciones con naturalidad y sin exageraciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Técnica del Dr. Pérez */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              La técnica del Dr Pérez - Rinoplastia abierta de preservación
            </h2>
            
            <p className="text-lg leading-relaxed mb-8 max-w-5xl">
              La mayoría de sus pacientes son tratados con la técnica de rinoplastia abierta de preservación, un enfoque moderno y avanzado que ofrece múltiples beneficios frente a las técnicas tradicionales.
            </p>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-5xl">
              <p>
                • Preservación anatómica: Se respetan las estructuras originales de la nariz, modificando su forma o posición sin eliminarlas, lo cual reduce el riesgo de complicaciones estéticas o funcionales a largo plazo.
              </p>
              
              <p>
                • Visualización precisa: La técnica abierta permite una visión directa y detallada del dorso nasal, la punta, el tabique y otras estructuras internas, lo que garantiza mayor precisión quirúrgica.
              </p>
              
              <p>
                • Mayor simetría y durabilidad: Los resultados son más estables y armónicos con el paso del tiempo.
              </p>
              
              <p>
                • Corrección funcional completa: Esta técnica facilita el tratamiento de alteraciones respiratorias como problemas en los cornetes, desviaciones del tabique o disfunción de la válvula nasal.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed mt-8 max-w-5xl">
              La técnica desarrollada por el Dr. Pérez se alinea con los más altos estándares internacionales de rinoplastia moderna, que priorizan la preservación estructural para obtener resultados seguros, naturales y funcionales.
            </p>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/rinoplastia-abierta-poster-1.jpg"
                  controls
                >
                  <source src="/videos/rinoplastia-abierta-preservacion-1.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-lg font-semibold text-center mb-2">
                    Rinoplastia abierta de preservación
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>

              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/rinoplastia-abierta-poster-2.jpg"
                  controls
                >
                  <source src="/videos/rinoplastia-abierta-preservacion-2.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-lg font-semibold text-center mb-2">
                    Rinoplastia abierta de preservación
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidatos */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              Candidatos ideales para Rinoplastia
            </h2>
            
            <p className="text-lg text-center mb-12">
              Este procedimiento está indicado para:
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Personas que desean mejorar la forma, tamaño o proporción de su nariz para lograr una mayor armonía facial.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Pacientes que presentan obstrucción nasal causada por alteraciones estructurales como desviaciones del tabique o hipertrofia de cornetes.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Aquellos con secuelas funcionales o estéticas derivadas de traumatismos o cirugías previas de nariz.
                </p>
              </div>
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
                { src: "/images/rinoplastia-resultado-1-antes.jpg", label: "Antes" },
                { src: "/images/rinoplastia-resultado-1-despues.jpg", label: "Después" },
                { src: "/images/rinoplastia-resultado-2-antes.jpg", label: "Antes" },
                { src: "/images/rinoplastia-resultado-2-despues.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Rinoplastia resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Rinoplastia</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Testimonios
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-12"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/testimonio-rinoplastia-1.jpg"
                  alt="Testimonio rinoplastia 1"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 bg-opacity-80 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="text-white text-sm font-light">Dr. Andrés Pérez</div>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src="/images/testimonio-rinoplastia-2.jpg"
                  alt="Testimonio rinoplastia 2"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 bg-opacity-80 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="text-white text-sm font-light">Dr. Andrés Pérez</div>
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