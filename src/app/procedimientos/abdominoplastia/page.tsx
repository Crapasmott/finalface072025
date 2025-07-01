"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function AbdominoplastiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia y duración",
      answer: (
        <div className="space-y-2">
          <p>En la mayoría de los casos, el Dr. Pérez realiza la abdominoplastia bajo anestesia general, lo que garantiza comodidad y seguridad durante todo el procedimiento.</p>
          <p>Como alternativa, también puede emplearse anestesia epidural, aplicada en la zona lumbar, especialmente en pacientes que cumplen con ciertos criterios clínicos.</p>
          <p>Duración del procedimiento: entre 2 y 3 horas, dependiendo de la complejidad del caso y si se combina con otros procedimientos como el lipomodelamiento o la plicatura muscular.</p>
        </div>
      )
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Reposo y postura</h4>
            <p>Durante los primeros días es fundamental mantener una posición semisentada a 30°, con las rodillas ligeramente elevadas utilizando una almohada. Esta postura favorece la desinflamación y protege la herida quirúrgica de tensiones innecesarias.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Movilización</h4>
            <p>El Dr. Pérez recomienda comenzar a caminar desde el día siguiente a la cirugía. Esta movilización temprana mejora la circulación, acelera la recuperación y disminuye el riesgo de trombosis venosa.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Drenes</h4>
            <p>Para evitar la acumulación de líquidos debajo de la piel, se deja un dren tipo Hemovac durante los primeros 5 a 6 días. Su retiro se realiza en consulta, de manera sencilla y sin dolor.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Estreñimiento</h4>
            <p>Es frecuente que los pacientes presenten estreñimiento leve durante los primeros días postoperatorios. Se recomienda una dieta rica en frutas como papaya y alimentos con fibra. Si el problema persiste, pueden emplearse laxantes suaves o enemas bajo indicación médica.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Higiene personal</h4>
            <p>Durante los primeros 2 a 4 días, el aseo corporal debe realizarse con una toalla húmeda, cuidando la zona de la herida. A partir del cuarto día, y si la evolución es favorable, puede retomarse el baño en ducha con precauciones.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Retorno a las actividades</h4>
            <p>La mayoría de pacientes pueden retomar labores administrativas o de baja demanda física a partir del quinto día postoperatorio. Sin embargo, se deben evitar esfuerzos físicos importantes o ejercicio intenso durante las primeras semanas, según indicaciones del Dr. Pérez.</p>
          </div>
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
            backgroundImage: "url('/images/abdominoplastia-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900">
                  Abdominoplastia de Alta definición
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Remodela tu Abdomen */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Remodela tu Abdomen, Recupera tu Confianza
            </h2>
            
            <p className="text-lg leading-relaxed mb-12 max-w-5xl">
              Muchas mujeres experimentan cambios notables en la forma y apariencia del abdomen debido a una variedad de factores, entre los más comunes se encuentran:
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <p className="text-lg leading-relaxed">
                  Embarazos y los cambios que conllevan en la piel y musculatura abdominal.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <p className="text-lg leading-relaxed">
                  Cirugías abdominales previas que dejan cicatrices visibles o alteran la estética.
                </p>
              </div>
              
              <div className="bg-gray-200 text-blue-900 p-8 rounded-lg text-center">
                <p className="text-lg leading-relaxed">
                  Fluctuaciones importantes de peso, que generan exceso de piel y pérdida de firmeza.
                </p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              A pesar de realizar dietas estrictas, rutinas de ejercicio o someterse a tratamientos estéticos no invasivos, en muchos casos no es posible recuperar la firmeza y contorno del abdomen sin recurrir a una solución quirúrgica definitiva.
            </p>
          </div>
        </section>

        {/* Candidatos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-8">
              ¿Quiénes son candidatos para una Abdominoplastia?
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl mx-auto text-center">
              Muchas mujeres experimentan cambios notables en la forma y apariencia del abdomen debido a una variedad de factores, entre los más comunes se encuentran:
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Exceso de piel abdominal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Presencia de piel redundante, especialmente en la parte inferior del abdomen, que no mejora con dieta o ejercicio.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Flacidez muscular
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Debilitamiento o separación de los músculos abdominales (diástasis), que genera una apariencia abombada y falta de tono.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Cicatrices o deformidades estéticas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Marcas visibles y poco estéticas producto de cesáreas, cirugías anteriores o estrías extensas que distorsionan la forma natural del abdomen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Técnica HD */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Técnica HD del Dr. Pérez
            </h2>
            <h3 className="text-xl lg:text-2xl mb-12">
              Abdominoplastia con Resultados de Alta Precisión
            </h3>
            
            <p className="text-lg leading-relaxed mb-12 max-w-5xl">
              El Dr. Pérez ha perfeccionado una técnica de Abdominoplastia de Alta Definición (HD) que supera ampliamente los resultados de la liposucción abdominal convencional, al ofrecer no solo una mejora estética en la piel, sino también una definición y contorno más estilizados del abdomen y la cintura.
            </p>
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">
              Ventajas de la Técnica HD del Dr. Pérez
            </h3>
            
            <div className="space-y-8 text-lg leading-relaxed max-w-5xl">
              <div>
                <strong>• Moldeo preciso del abdomen y la cintura</strong>
                <br />
                A diferencia de la técnica tradicional que solo elimina el exceso de piel, la Abdominoplastia HD incluye un completo lipomodelamiento, eliminando depósitos grasos no deseados del abdomen y los flancos. Esto permite definir mejor el contorno corporal y lograr un resultado mucho más armónico y natural.
              </div>
              
              <div>
                <strong>• Incisión tipo bikini, discreta y estética</strong>
                <br />
                Gracias a la reducción del grosor de la piel con el lipomodelamiento, el Dr. Pérez puede ubicar la cicatriz final en una posición muy baja, justo sobre el pubis, donde queda fácilmente oculta por ropa interior o trajes de baño.
              </div>
              
              <div>
                <strong>• Planificación personalizada de la cicatriz</strong>
                <br />
                Cada incisión es cuidadosamente diseñada antes de la cirugía, considerando la anatomía y proporciones del paciente, para asegurar una cicatriz simétrica y sin exceso de piel en los laterales.
              </div>
              
              <div>
                <strong>• Ombligo natural y sin cicatrices visibles</strong>
                <br />
                Una de las grandes ventajas de la técnica del Dr. Pérez es la reconstrucción estética del ombligo. La nueva forma se diseña de manera que las cicatrices queden completamente ocultas dentro del mismo, evitando ombligos artificiales o deformes.
              </div>
              
              <div>
                <strong>• Refuerzo muscular con técnica de &quot;Corset abdominal&quot;</strong>
                <br />
                Como parte del procedimiento, el Dr. Pérez realiza una plicatura o reconstrucción de la pared muscular abdominal, uniendo los músculos rectos del abdomen que suelen estar separados por embarazos o aumento de peso. Esto no solo aplana el abdomen, sino que también ayuda a acentuar la cintura, ofreciendo una silueta más esbelta y definida.
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
                  poster="/images/abdominoplastia-video-poster.jpg"
                  controls
                >
                  <source src="/videos/abdominoplastia.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-xl font-bold text-center mb-2">
                    Abdominoplastia
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Otras técnicas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              ¿Qué otras técnicas de abdominoplastia realiza el Dr. Pérez?
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-12"></div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl">
              Entendiendo que no todos los pacientes requieren el mismo tipo de procedimiento, el Dr. Pérez selecciona la técnica quirúrgica más apropiada luego de una valoración detallada, priorizando siempre la seguridad y el resultado estético personalizado.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
                Miniabdominoplastia o Minilipectomía Abdominal
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                Indicada en pacientes que presentan un exceso moderado de piel y flacidez limitada exclusivamente a la parte inferior del abdomen.
              </p>
              
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Requiere una incisión mucho más corta que la técnica convencional.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>No se realiza el reposicionamiento del ombligo, lo que reduce el tiempo de recuperación.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Ideal para personas delgadas con un pequeño &quot;rollito&quot; en el bajo vientre difícil de eliminar con dieta y ejercicio.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
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