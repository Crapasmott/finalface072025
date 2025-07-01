"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function MamoplastiaReduccionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia",
      answer: "La mamoplastia de reducción se lleva a cabo bajo anestesia general y el procedimiento tiene una duración entre 2 y 3 horas."
    },
    {
      question: "¿Qué se puede esperar después de la cirugía?",
      answer: (
        <div className="space-y-2">
          <p>• Es normal que se presente inflamación moderada durante los primeros 7 días posteriores al procedimiento.</p>
          <p>• Es fundamental el uso constante de un brassiere postoperatorio, diseñado para brindar soporte y confort, favoreciendo una adecuada recuperación.</p>
          <p>• Se recomienda evitar actividades físicas y esfuerzos físicos intensos durante al menos los primeros 10 días, siguiendo siempre las indicaciones médicas personalizadas</p>
        </div>
      )
    },
    {
      question: "¿Pueden volver a aumentar de tamaño los senos?",
      answer: "Después de una mamoplastia de reducción, el tamaño de los senos suele mantenerse estable a largo plazo. Sin embargo, es importante tener en cuenta que factores como aumentos significativos de peso o embarazos posteriores pueden modificar el volumen y la forma del busto."
    },
    {
      question: "¿Qué tipos de implantes existen?",
      answer: "Las técnicas quirúrgicas que utiliza el Dr. Pérez están diseñadas para preservar la sensibilidad de los pezones. Durante el procedimiento se respeta al máximo la integridad de los nervios responsables de la sensibilidad mamaria, por lo que el riesgo de pérdida permanente es bajo."
    },
    {
      question: "¿Es posible lactar después de una mamoplastia de reducción?",
      answer: "Sí. En la mayoría de los casos, la capacidad de lactar se conserva, ya que las técnicas empleadas preservan los conductos galactóforos (los que transportan la leche desde la glándula mamaria hasta el pezón). No obstante, cada caso es único, y se evaluará individualmente durante la consulta."
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
            backgroundImage: "url('/images/mamoplastia-reduccion-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Mamoplastia de Reducción:
                </h1>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-blue-800">
                  Senos grandes y descendidos: una condición que afecta la calidad de vida
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
                Para muchas mujeres, tener senos de gran tamaño y con caída (ptosis mamaria) no solo representa una preocupación estética, sino también un problema que impacta significativamente en la calidad de vida. Esta condición puede dificultar la realización de actividades físicas, limitar el uso de ciertas prendas de vestir y generar incomodidad en el día a día.
              </p>
              
              <p>
                Además de las molestias funcionales, el peso excesivo del busto puede ocasionar una serie de problemas de salud, entre los que se incluyen:
              </p>
              
              <div className="ml-4 space-y-2">
                <p>• Dolores crónicos de espalda, cuello y cabeza.</p>
                <p>• Desviaciones progresivas de la columna vertebral.</p>
                <p>• Irritaciones e infecciones en la piel debajo de los senos, debido a la fricción y la humedad constante.</p>
              </div>
              
              <p>
                Ante esta situación, muchas pacientes consideran procedimientos médicos o quirúrgicos que les permitan recuperar comodidad, movilidad y bienestar.
              </p>
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
              Existen diversas técnicas quirúrgicas para realizar una reducción mamaria, y su elección depende de múltiples factores individuales que el Dr. Pérez evalúa cuidadosamente en cada paciente. Entre estos factores se encuentran el tamaño y la forma de los senos, la calidad de la piel, el grado de caída (ptosis) y las expectativas estéticas de la paciente. En términos generales, estas técnicas se clasifican según el tipo de incisiones que se utilizan para llevarlas a cabo.
            </p>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Técnica Vertical: la más utilizada por el Dr. Pérez
            </h3>
            
            <p className="text-lg text-center mb-12">
              Ofrece importantes ventajas tanto estéticas como funcionales:
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-6">
                  Incisión discreta y mínimamente invasiva:
                </h3>
                <p className="leading-relaxed mb-4">
                  La técnica se realiza a través de una incisión vertical que se extiende desde la parte inferior de la areola hacia el pliegue submamario. Esta incisión se mantiene lo más corta posible y, por lo general, cicatriza muy bien con el tiempo.
                </p>
                <p className="leading-relaxed">
                  Solo en casos de senos extremadamente grandes, puede ser necesario agregar una incisión horizontal corta en el surco inframamario para lograr un mejor resultado.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-6">
                  Resultados estéticos superiores:
                </h3>
                <p className="leading-relaxed">
                  Esta técnica permite remodelar el tejido mamario logrando una forma natural, armónica y con buena proyección. A diferencia de otras técnicas que pueden dejar un resultado más plano o sin contorno definido, la técnica vertical favorece un resultado firme y juvenil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Candidatas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
              ¿Quiénes son candidatas para una mamoplastia de reducción?
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-5xl">
              La mamoplastia de reducción está indicada para mujeres que presentan molestias físicas o incomodidad estética debido al tamaño excesivo de sus senos. Este procedimiento no solo busca mejorar la apariencia del busto, sino también aliviar síntomas asociados y mejorar la calidad de vida.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Son candidatas ideales aquellas pacientes que presentan uno o más de los siguientes signos o síntomas:
                </p>
                
                <div className="space-y-3 text-gray-700 text-lg">
                  <p>• Senos grandes y caídos, desproporcionados en relación con el resto del cuerpo.</p>
                  <p>• Dolor crónico de cuello, hombros o espalda, provocado por el peso excesivo del busto.</p>
                  <p>• Cefaleas frecuentes asociadas a la tensión muscular generada por la carga mamaria.</p>
                  <p>• Limitaciones para realizar actividad física o deportiva por incomodidad o dolor</p>
                  <p>• Irritación, erupciones o infecciones en la piel debajo de los senos.</p>
                  <p>• Dificultad para encontrar ropa adecuada o brassieres que brinden soporte y comodidad.</p>
                </div>
              </div>
              
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/mamoplastia-reduccion-video-poster.jpg"
                  controls
                >
                  <source src="/videos/mamoplastia-reduccion.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-xl font-bold text-center mb-2">
                    Mamoplastia de reducción
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mt-16 mb-8">
              Nuestros excelentes resultados
            </h2>
            
            <div className="text-center">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                Ver galería
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