"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function LipofillingCelulasMadrePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia",
      answer: "Por lo general el procedimiento se lleva a cabo bajo anestesia local complementada con sedación."
    },
    {
      question: "¿Cuánto tiempo duran los resultados del injerto de grasa facial?",
      answer: "Los resultados del lipofilling pueden ser muy duraderos, e incluso permanentes, gracias a las técnicas avanzadas de extracción y purificación empleadas por el Dr. Andrés Pérez. La grasa transferida, rica en células madre, no solo rellena, sino que se integra y mejora progresivamente la calidad de la piel con el paso del tiempo."
    },
    {
      question: "¿Se puede repetir el procedimiento?",
      answer: "Sí. El procedimiento es seguro y repetible. Lo ideal es esperar al menos 12 meses para realizar una nueva sesión, ya que durante ese período las células madre ya han generado nueva microvascularización, optimizando el entorno para una nueva aplicación y potenciando los resultados globales."
    },
    {
      question: "¿Cuánto tiempo tarda en verse el resultado final?",
      answer: "El efecto del injerto de grasa es gradual. Si bien se nota una mejoría inicial en las primeras semanas, el resultado completo se observa en los meses siguientes, a medida que las células madre estimulan la regeneración tisular, mejoran la textura cutánea y promueven la producción de colágeno natural."
    },
    {
      question: "¿Qué áreas pueden tratarse con Lipofilling facial?",
      answer: "El injerto de grasa puede aplicarse en múltiples zonas del rostro: pómulos, surcos nasogenianos, ojeras, mentón, línea mandibular y labios, entre otras. Además, la versión NanoFat es ideal para mejorar líneas finas, cicatrices de acné y la calidad de la piel en general."
    },
    {
      question: "¿El lipofilling reemplaza a los rellenos sintéticos?",
      answer: "En muchos casos, sí. El lipofilling ofrece un resultado más natural y duradero, sin los riesgos de rechazo que pueden presentarse con sustancias sintéticas. Además, al contener células madre, aporta un beneficio regenerativo que los rellenos convencionales no ofrecen."
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
            backgroundImage: "url('/images/lipofilling-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                  Lipofilling
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                  de células madre
                </h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Introducción Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl space-y-6 text-gray-700 text-lg leading-relaxed mb-12">
              <p>
                Si deseas revertir los signos de envejecimiento facial, restaurando el volumen y la frescura de tu rostro, la inyección de células madre es una excelente y confiable alternativa que el Dr Pérez pone a tu disposición.
              </p>
              
              <p>
                Al referirse a células madre, muchas personas pensaban de inmediato en aquellas células procedentes del cordón umbilical o de la médula ósea. Hoy en día es factible obtener células madre a partir de la grasa de nuestro propio cuerpo.
              </p>
              
              <p>
                Por esta razón el Dr. Pérez, ha implementado dentro de sus técnicas de rejuvenecimiento facial, el Lipofilling de células madre, procedimiento en el cual se utilizan las células madre que se han obtenido luego de ultra purificar la grasa.
              </p>
              
              <p>
                Para el Dr. Pérez es muy importante además de elevar y suspender los tejidos blandos faciales que se han descendido, el restablecer un adecuado volumen facial, lo cual brinda una apariencia más joven y atractiva.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video max-w-2xl mx-auto">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/lipofilling-video-poster.jpg"
                  controls
                >
                  <source src="/videos/lipofilling-tecnica.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-xl font-bold text-center mb-2">
                    Lipofilling
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Lipofilling */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Tipos de lipofilling utilizados por el Dr. Pérez
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-12"></div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl">
              El injerto de grasa facial ha evolucionado significativamente gracias a técnicas avanzadas que permiten personalizar el tratamiento según las necesidades específicas de cada paciente. El Dr. Andrés Pérez emplea dos modalidades altamente especializadas: MicroFat y NanoFat, ambas obtenidas mediante procesos de ultrapurificación para garantizar seguridad, eficacia y resultados naturales.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
                  Microfat
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  La técnica MicroFat consiste en la inyección de grasa purificada obtenida mediante microcánulas finas.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Está especialmente indicada para restaurar volumen en áreas del rostro que lo han perdido con el envejecimiento, como pómulos, mejillas o región mandibular.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      También se utiliza para rellenar surcos y líneas de expresión profundas, como los pliegues nasolabiales y el entrecejo.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Proporciona una corrección duradera con una apariencia suave y natural.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
                  Nanofat
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  La técnica NanoFat permite inyectar dentro de la piel una fracción líquida de grasa rica en células madre y factores de crecimiento, con potentes efectos regenerativos.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Se aplica con agujas ultrafinas, permitiendo tratar zonas delicadas y superficiales.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Es ideal para mejorar la calidad de la piel, tratar líneas de expresión finas (como las del contorno de labios, patas de gallo, mentón y cuello), cicatrices de acné y zonas con signos visibles de envejecimiento.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Funciona también como un revitalizante cutáneo, aportando luminosidad, elasticidad y una textura más uniforme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mt-12 max-w-5xl mx-auto text-center">
              Ambas técnicas pueden combinarse en un mismo procedimiento para lograr un rejuvenecimiento facial completo, tanto en volumen como en calidad de la piel, con resultados naturales y duraderos.
            </p>
          </div>
        </section>

        {/* Detalles de la técnica */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Detalles de la técnica del Dr. Pérez
            </h2>
            
            <p className="text-lg leading-relaxed mb-8 max-w-5xl">
              El procedimiento de injerto de grasa facial es una técnica avanzada y natural de rejuvenecimiento que utiliza la propia grasa del paciente para restaurar volumen y mejorar la calidad de la piel. El Dr. Andrés Pérez emplea un protocolo meticuloso y altamente especializado para garantizar resultados seguros, duraderos y estéticamente armónicos. El proceso se desarrolla en tres etapas principales:
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">1. Extracción de la grasa</h3>
                <p className="text-lg leading-relaxed">
                  La grasa se obtiene cuidadosamente de zonas donantes donde existe un excedente natural, como el abdomen o la cara interna de los muslos. Este proceso se realiza mediante microcánulas muy delgadas que permiten una recolección suave y precisa, sin causar trauma innecesario a los tejidos.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">2. Purificación avanzada de la grasa</h3>
                <p className="text-lg leading-relaxed">
                  Una vez extraída, la grasa se somete a un proceso riguroso de purificación para asegurar su máxima calidad y viabilidad. El Dr. Pérez aplica técnicas como centrifugación, filtración y decantación, eliminando impurezas, exceso de líquidos y restos oleosos. Dependiendo del objetivo del tratamiento, se puede preparar MicroFat (para restaurar volumen) o NanoFat (ideal para mejorar la textura y calidad de la piel), aplicando procedimientos adicionales de emulsificación y refinamiento.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">3. Inyección precisa en el rostro</h3>
                <p className="text-lg leading-relaxed">
                  Finalmente, la grasa purificada se inyecta en áreas específicas del rostro previamente evaluadas, como pómulos, surcos nasogenianos, ojeras o región mandibular. Esta fase se realiza con microcánulas o agujas ultrafinas que permiten una distribución controlada y uniforme, garantizando un acabado natural y sin irregularidades.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Este procedimiento no solo devuelve volumen perdido con el paso del tiempo, sino que también mejora la calidad de la piel gracias a las propiedades regenerativas de las células madre contenidas en la grasa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Candidatos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              Candidatos para el lipofilling de células madre
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Aquellos pacientes que producto del proceso de envejecimiento facial han perdido volumen en algunas áreas del rostro generándoles una apariencia envejecida y poco atractiva.
                </p>
              </div>
              
              <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Algunos pacientes jóvenes generalmente entre los 20 y 40 años, pueden por razones hereditarias, presentar pérdidas de volumen en ciertas áreas específicas como el surco de las ojeras.
                </p>
              </div>
              
              <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Pacientes jóvenes que por razones estéticas desean tener más volumen en algunas áreas del rostro tales como los pómulos, los labios o el mentón.
                </p>
              </div>
              
              <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Es una excelente opción en pacientes que presentan deformidades o pérdidas de volumen secundarias a accidentes o cirugías previas mal practicadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Ventajas del lipofilling
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Este procedimiento con células grasas ultra purificadas obtenidas del mismo paciente, elimina la posibilidad de rechazo o de reacciones alérgicas que se pueden presentar con los productos sintéticos de relleno.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Se puede utilizar la cantidad de células grasas que sean necesarias dependiendo de cada caso particular, debido a que se obtienen de los depósitos de grasa del mismo paciente.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Debido a que con el Lipofilling se inyecta una buena cantidad de células madre, los resultados del procedimiento son más estables y perdurables que con los rellenos sintéticos.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Además de aportar células grasas y células madre, el Lipofilling conlleva factores de crecimiento que son sustancias que inducen la producción de colágeno y elastina en la piel.
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
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { src: "/images/lipofilling-resultado-1-antes.jpg", label: "Antes" },
                { src: "/images/lipofilling-resultado-1-despues.jpg", label: "Después" },
                { src: "/images/lipofilling-resultado-2-antes.jpg", label: "Antes" },
                { src: "/images/lipofilling-resultado-2-despues.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Lipofilling resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Lipofilling con Células Madre</p>
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
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-lipofilling-poster.jpg"
                  controls
                >
                  <source src="/videos/testimonio-lipofilling.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
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