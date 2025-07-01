"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function MamoplastiaAumentoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia",
      answer: "El procedimiento se lleva a cabo bajo anestesia general y tiene una duración aproximada de 1 hora."
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: (
        <div className="space-y-2">
          <p>• Es normal que se presente inflamación moderada durante la primera semana postoperatoria. Durante este período, los senos pueden parecer más grandes de lo que serán una vez completada la recuperación.</p>
          <p>• Gracias a la técnica empleada por el Dr. Pérez, la mayoría de las pacientes no experimentan dolor intenso, aunque es común sentir una sensación de presión en el pecho durante los primeros 4 a 5 días.</p>
          <p>• Inicialmente, los senos se sienten más firmes o duros debido al proceso inflamatorio, pero esto suele mejorar en aproximadamente 15 días.</p>
        </div>
      )
    },
    {
      question: "Recomendaciones postoperatorias",
      answer: (
        <div className="space-y-2">
          <p>• Mantener una posición semisentada (30°) durante los primeros días, para facilitar el drenaje de la inflamación.</p>
          <p>• Aplicar compresas frías sobre los senos durante las primeras 48 horas para reducir la inflamación.</p>
          <p>• Usar de forma permanente el brassiere postoperatorio, tanto de día como de noche.</p>
          <p>• Evitar actividades físicas intensas o de esfuerzo durante los primeros 12 a 15 días.</p>
        </div>
      )
    },
    {
      question: "¿Qué tipos de implantes existen?",
      answer: (
        <div className="space-y-2">
          <p>Los implantes varían en función de tres características principales:</p>
          <p>• Textura de la cubierta.</p>
          <p>• Tamaño o perfil texturizados. La elección depende de factores anatómicos y del criterio médico.</p>
          <p>• Forma:</p>
          <p>Existen implantes redondos y anatómicos (con forma de gota), y su proyección puede ser de perfil bajo, alto o extra alto. La selección se hace según el resultado estético deseado y las proporciones del cuerpo.</p>
          <p>• Tipo de relleno:</p>
          <p>Silicona cohesiva: actualmente en desuso.</p>
          <p>Gel cohesivo de silicona: el más utilizado por su mayor durabilidad, firmeza y seguridad.</p>
        </div>
      )
    },
    {
      question: "¿Qué es la contractura capsular?",
      answer: (
        <div className="space-y-2">
          <p>Cuando se introduce cualquier material en el cuerpo, este reacciona formando una cápsula de tejido a su alrededor como respuesta natural del sistema inmune. En algunos casos, esta cápsula puede volverse más gruesa, fibrosa y rígida, generando:</p>
          <p>• Endurecimiento del seno.</p>
          <p>• Cambios en la forma.</p>
          <p>• Dolor al tacto.</p>
          <p>Gracias a los avances en materiales y técnicas quirúrgicas más asépticas, la frecuencia de contractura capsular ha disminuido considerablemente en los últimos años.</p>
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
            backgroundImage: "url('/images/mamoplastia-aumento-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Mamoplastia de Aumento:
                </h1>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-8">
                  Mejora del volumen y la forma del busto
                </h2>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  La mamoplastia de aumento es uno de los procedimientos de cirugía plástica más realizados a nivel mundial. Está indicada en mujeres que desean mejorar el tamaño, la forma y la proyección de sus senos, ya sea por razones estéticas, cambios posteriores al embarazo o condiciones anatómicas particulares.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quiénes suelen consultar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              ¿Quiénes suelen consultar por una mamoplastia de aumento?
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  Mujeres en sus 30s, muchas con antecedentes de embarazo y lactancia:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Este es el grupo más común. Son pacientes que han experimentado una pérdida de volumen, especialmente en la parte superior del busto, así como una disminución en la firmeza y tono de la piel.
                </p>
              </div>
              
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  Mujeres jóvenes, generalmente en sus 20s:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Buscan un aumento de tamaño que les permita lograr un cuerpo más armónico y balanceado, mejorando su proporción corporal y confianza en sí mismas.
                </p>
              </div>
              
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  Pacientes con asimetrías o deformidades mamarias:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Algunas mujeres presentan diferencias notorias entre ambos senos o alteraciones en su forma. En estos casos, la mamoplastia de aumento puede corregir dichas asimetrías, brindando un resultado natural y equilibrado.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">
                Importante tener en cuenta: ¿Y si los senos están caídos?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Es fundamental aclarar que la mamoplastia de aumento no corrige por sí sola la caída o ptosis mamaria. Cuando los senos están descendidos, el procedimiento ideal es una cirugía combinada de elevación mamaria (mastopexia) con colocación de implantes, para restaurar tanto la forma como la posición del
              </p>
            </div>
            
            {/* Video Section */}
            <div className="text-center mt-12">
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video max-w-2xl mx-auto">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/mamoplastia-aumento-video-poster.jpg"
                  controls
                >
                  <source src="/videos/mamoplastia-aumento.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <h3 className="text-white text-xl font-bold text-center mb-2">
                    Mamoplastia de aumento
                  </h3>
                  <div className="text-white text-sm text-center">Dr. Andrés Pérez</div>
                </div>
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
            
            <p className="text-lg leading-relaxed mb-8 max-w-5xl">
              El enfoque del Dr. Pérez en la mamoplastia de aumento se basa en lograr un resultado estético que no solo cumpla con las expectativas de la paciente, sino que también se vea natural y armónico con el resto del cuerpo. Cada cirugía es cuidadosamente planificada de manera individual, teniendo en cuenta múltiples factores anatómicos y personales.
            </p>
            
            <div className="space-y-6 text-lg leading-relaxed max-w-5xl">
              <div>
                <strong>Planificación personalizada:</strong>
                <br />
                Durante la consulta inicial, el Dr. Pérez realiza una evaluación integral que incluye aspectos como la estatura, el ancho del tórax, la calidad de la piel y el biotipo de la paciente. Con esta información, se define de forma precisa:
              </div>
              
              <div className="ml-4">
                <p>• El volumen adecuado del implante</p>
                <p>• El tipo de implante (textura, forma, proyección).</p>
                <p>• La ubicación ideal para obtener el mejor resultado estético.</p>
              </div>
              
              <div>
                <strong>Tipo de incisión</strong>
                <br />
                En la mayoría de los casos, el Dr. Pérez utiliza la incisión periareolar, que se realiza discretamente alrededor de la mitad inferior de la areola. Esta ubicación permite un acceso eficaz para colocar el implante y, al mismo tiempo, una cicatriz final prácticamente imperceptible.
              </div>
            </div>
          </div>
        </section>

        {/* Técnicas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
                  Técnica Dual Plane
                </h3>
                <p className="text-gray-700 mb-6">
                  La técnica preferida por el Dr. Pérez es la Dual Plane, en la cual el implante se coloca parcialmente detrás del músculo pectoral mayor. Esta técnica ofrece múltiples ventajas:
                </p>
                
                <div className="space-y-3 text-gray-700">
                  <p>• Resultado con aspecto más natural.</p>
                  <p>• Mejor transición entre el tórax y el implante.</p>
                  <p>• Menor riesgo de que el implante sea visible o palpable con el paso del tiempo.</p>
                  <p>• Reducción del riesgo de contractura capsular.</p>
                </div>
              </div>
              
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
                  Cierre quirúrgico estético
                </h3>
                <p className="text-gray-700">
                  Para finalizar el procedimiento, el Dr. Pérez realiza el cierre de la herida con suturas absorbibles, lo que evita la necesidad de retirar puntos posteriormente y favorece una cicatrización más estética.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-8">
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