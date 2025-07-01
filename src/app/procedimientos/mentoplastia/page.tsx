"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function MentoplastiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia y Procedimientos Combinados",
      answer: (
        <div className="space-y-2">
          <p>• Si se realiza de forma aislada, la mentoplastia puede llevarse a cabo bajo anestesia local con sedación.</p>
          <p>• Es frecuente combinarla con una rinoplastia, ya que permite lograr una mejora estética integral del perfil facial en un solo procedimiento.</p>
        </div>
      )
    },
    {
      question: "¿Cuánto dura un implante de mentón?",
      answer: "Los implantes de silastic utilizados actualmente son altamente biocompatibles y estables, por lo que no requieren ser reemplazados a lo largo del tiempo, salvo en casos excepcionales."
    },
    {
      question: "¿Existen otras opciones quirúrgicas?",
      answer: "Sí. En pacientes con mentones extremadamente retraídos, puede ser necesario recurrir a una técnica llamada mentoplastia con avance óseo, que consiste en realizar un corte controlado del hueso (osteotomía) y avanzarlo hacia adelante, fijándolo con microplacas de titanio."
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
            backgroundImage: "url('/images/mentoplastia-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                  Mentoplastia
                </h1>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Un contorno mandibular equilibrado es clave para un rostro estéticamente armónico, tanto en hombres como en mujeres. La mentoplastia es un procedimiento quirúrgico que permite proyectar y definir el mentón, logrando una mejora significativa no solo en el perfil facial, sino también en la apariencia del cuello.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Técnica del Dr. Pérez */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-12">
              La técnica del Dr. Pérez
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-5xl">
              El Dr. Pérez realiza este procedimiento mediante la inserción de un implante de silastic (silicona blanda), diseñado específicamente para adaptarse a la anatomía de cada paciente. Su enfoque se basa en crear un resultado natural, seguro y duradero.
            </p>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-5xl">
              <div>
                <strong>• Incisión externa discreta:</strong> Prefiere realizar la intervención a través de una pequeña incisión ubicada en el pliegue natural bajo el mentón, justo donde se une con el cuello. Esta ubicación permite una excelente cicatrización y minimiza riesgos de complicaciones.
              </div>
              
              <div>
                <strong>• Implantes anatómicos personalizados:</strong> El Dr. Pérez utiliza implantes con prolongaciones laterales, lo que garantiza una integración perfecta con el contorno mandibular y evita que el implante sea visible o palpable con el tiempo.
              </div>
              
              <div>
                <strong>• Evita la vía intraoral,</strong> ya que esta puede aumentar el riesgo de infecciones al estar en contacto con la saliva.
              </div>
            </div>
          </div>
        </section>

        {/* Candidatos ideales */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              Candidatos ideales para la Mentoplastia
            </h2>
            
            <p className="text-lg text-center mb-12 max-w-4xl mx-auto">
              La mentoplastia está indicada para pacientes que presentan un mentón pequeño o retraído, lo que puede alterar el equilibrio facial, especialmente en su relación con la nariz. Esta condición suele ser hereditaria y puede corregirse una vez finalizado el desarrollo facial, generalmente al final de la adolescencia.
            </p>
          </div>
        </section>

        {/* Results Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              Nuestros excelentes resultados
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { src: "/images/mentoplastia-resultado-1-antes.jpg", label: "Antes" },
                { src: "/images/mentoplastia-resultado-1-despues.jpg", label: "Después" },
                { src: "/images/mentoplastia-resultado-2-antes.jpg", label: "Antes" },
                { src: "/images/mentoplastia-resultado-2-despues.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Mentoplastia resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Mentoplastia</p>
                    </div>
                  </div>
                </div>
              ))}
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}