"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function LipofillingCelulasMadrePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
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
    <div>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section - Imagen 1 */}
        <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="/images/lipofilling-celulas-madre-banner.jpg"
              alt="Banner Lipofilling de células madre"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)';
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contenido de texto - Lado izquierdo */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                    Lipofilling
                  </h1>
                  <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                    de células madre
                  </h2>
                  <div className="w-32 h-1 bg-blue-900 mb-8"></div>
                </div>
              </div>
              
              {/* Imagen de la mujer - Lado derecho */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <Image
                    src="/images/mujer-lipofilling.jpg"
                    alt="Mujer Lipofilling"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f3e7e9'/%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EMujer Lipofilling%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explicación Lipofilling - Imagen 2 - FONDO BLANCO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-blue-900 leading-relaxed mb-6">
                Si deseas revertir los signos de envejecimiento facial, restaurando el volumen y la frescura de tu rostro, la inyección de 
                células madre es una excelente y confiable alternativa que el Dr. Pérez pone a tu disposición.
              </p>
              
              <p className="text-blue-900 leading-relaxed mb-6">
                Al referirse a células madre, muchas personas pensarán de inmediato en aquellas células procedentes del cordón 
                umbilical o de la médula ósea. Hoy en día es factible obtener células madre a partir de la grasa de nuestro propio 
                cuerpo.
              </p>
              
              <p className="text-blue-900 leading-relaxed mb-6">
                Por esta razón el Dr. Pérez, ha implementado dentro de sus técnicas de rejuvenecimiento facial, el Lipofilling de 
                células madre, procedimiento en el cual se utilizan las células madre que se han obtenido luego de ultra purificar la 
                grasa.
              </p>
              
              <p className="text-blue-900 leading-relaxed mb-12">
                Para el Dr. Pérez es muy importante además de elevar y suspender los tejidos blandos faciales que se han 
                descendido, el restablecer un adecuado volumen facial, lo cual brinda una apariencia más joven y atractiva.
              </p>
              
              {/* Video Lipofilling - CENTRADO */}
              <div className="flex justify-center">
                <div className="relative rounded-lg overflow-hidden aspect-video w-full max-w-2xl">
                  <video
                    className="w-full h-full object-cover"
                    poster="/images/lipofilling-video-poster.jpg"
                    controls
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  >
                    <source src="/images/lipofilling-video.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                  </video>
                  
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-blue-900 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <h3 className="text-white text-lg font-medium mb-8">
                        Lipofilling
                      </h3>
                      <div className="text-white text-sm font-light italic">
                        Dr. Andrés Pérez
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de lipofilling - Imagen 3 - FONDO GRIS */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Tipos de lipofilling utilizados
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
              por el Dr. Pérez
            </h3>
            <div className="w-32 h-1 bg-blue-900 mb-12"></div>
            
            <p className="text-blue-900 leading-relaxed mb-12 max-w-5xl">
              El injerto de grasa facial ha evolucionado significativamente gracias a técnicas avanzadas que permiten personalizar 
              el tratamiento según las necesidades específicas de cada paciente. El Dr. Andrés Pérez emplea dos modalidades 
              altamente especializadas: MicroFat y NanoFat, ambas obtenidas mediante procesos de ultrapurificación para 
              garantizar seguridad, eficacia y resultados naturales.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Microfat */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Microfat</h3>
                
                <p className="text-blue-900 leading-relaxed mb-6 text-center">
                  La técnica MicroFat consiste en la inyección de grasa purificada obtenida mediante microcánulas finas.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-900 text-sm">
                      Está especialmente indicada para restaurar volumen en áreas del rostro que lo han perdido con el envejecimiento, como pómulos, mejillas o región mandibular.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-900 text-sm">
                      También se utiliza para rellenar surcos y líneas de expresión profundas, como los pliegues nasolabiales y el entrecejo.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-900 text-sm">
                      Proporciona una corrección duradera con una apariencia suave y natural.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nanofat */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Nanofat</h3>
                
                <p className="text-blue-900 leading-relaxed mb-6 text-center">
                  La técnica NanoFat permite inyectar dentro de la piel una fracción líquida de grasa rica en células madre y factores de crecimiento, con potentes efectos regenerativos.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-900 text-sm">
                      Se aplica con agujas ultrafinales, permitiendo tratar zonas delicadas y superficiales.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-900 text-sm">
                      Es ideal para mejorar la calidad de la piel, tratar líneas de expresión finas (como las del contorno de labios, patas de gallo, mentón y cuello), cicatrices de acné y zonas con signos visibles de envejecimiento.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-900 text-sm">
                      Funciona también como un revitalizante cutáneo, aportando luminosidad, elasticidad y una textura más uniforme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-blue-900 leading-relaxed text-center max-w-4xl mx-auto">
              Ambas técnicas pueden combinarse en un mismo procedimiento para lograr un rejuvenecimiento facial completo, 
              tanto en volumen como en calidad de piel, con resultados naturales y duraderos.
            </p>
          </div>
        </section>

        {/* Detalles de la técnica - Imagen 4 - FONDO AZUL CON DEGRADADO */}
        <section 
          className="py-16 text-white"
          style={{
            background: 'radial-gradient(ellipse at center, #3b82f6 0%, #1e3a8a 70%, #1e3a8a 100%)'
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              Detalles de la técnica del Dr. Pérez
            </h2>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              <p className="text-lg leading-relaxed">
                El procedimiento de injerto de grasa facial es una técnica avanzada y natural de rejuvenecimiento que utiliza la propia 
                grasa del paciente para restaurar volumen y mejorar la calidad de la piel. El Dr. Andrés Pérez emplea un protocolo 
                meticuloso y altamente especializado para garantizar resultados seguros, duraderos y estéticamente armónicos. El 
                proceso se desarrolla en tres etapas principales:
              </p>
              
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Extracción de la grasa</h3>
                  <p className="leading-relaxed">
                    La grasa se obtiene cuidadosamente de zonas donantes donde existe un excedente natural, como el abdomen o la 
                    cara interna de los muslos. Este proceso se realiza mediante microcánulas muy delgadas que permiten una 
                    recolección suave y precisa, sin causar trauma innecesario a los tejidos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Purificación avanzada de la grasa</h3>
                  <p className="leading-relaxed">
                    Una vez extraída, la grasa se somete a un proceso riguroso de purificación para asegurar su máxima calidad y 
                    viabilidad. El Dr. Pérez aplica técnicas como la centrifugación, filtración y decantación, eliminando impurezas, exceso 
                    de líquidos y restos oleosos. Dependiendo del objetivo del tratamiento, se puede preparar MicroFat (para restaurar 
                    volumen) o NanoFat (ideal para mejorar la textura y calidad de la piel), aplicando procedimientos adicionales de 
                    emulsificación y refinamiento.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">3. Inyección precisa en el rostro</h3>
                  <p className="leading-relaxed">
                    Finalmente, la grasa purificada se inyecta en áreas específicas del rostro previamente evaluadas, como pómulos, 
                    surcos nasogenianos, ojeras o región mandibular. Esta fase se realiza con microcánulas o agujas ultrafinas que 
                    permiten una distribución controlada y uniforme, garantizando un acabado natural y sin irregularidades. 
                    Este procedimiento no solo devuelve volumen perdido con el paso del tiempo, sino que también mejora la calidad de la 
                    piel gracias a las propiedades regenerativas de las células madre contenidas en la grasa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidatos - Imagen 5 y 6 - FONDO BLANCO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-12">
              Candidatos para el lipofilling de células madre
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  text: "Aquellos pacientes que producto del proceso de envejecimiento facial han perdido volumen en algunas áreas del rostro generándoles una apariencia envejecida y poco atractiva."
                },
                {
                  text: "Algunos pacientes jóvenes generalmente entre los 20 y 40 años, pueden por razones hereditarias, presentar pérdidas de volumen en ciertas áreas específicas como el surco de las ojeras."
                },
                {
                  text: "Pacientes jóvenes que por razones estéticas desean obtener más volumen en algunas áreas del rostro tales como los pómulos, los labios o el mentón."
                },
                {
                  text: "Es una excelente opción en pacientes que presentan deformidades o pérdidas de volumen secundarias a accidentes o cirugías previas mal practicadas."
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-500 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas del lipofilling - FONDO AZUL OSCURO */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Ventajas del lipofilling
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  text: "Este procedimiento con células grasas ultra purificadas obtenidas del mismo paciente, elimina la posibilidad de rechazo o de reacciones alérgicas que se pueden presentar con los productos sintéticos de relleno."
                },
                {
                  text: "Se puede utilizar la cantidad de células grasas que sean necesarias dependiendo de cada caso particular, debido a que se obtienen de los depósitos de grasa del mismo paciente."
                },
                {
                  text: "Debido a que con el Lipofilling se inyecta una buena cantidad de células madre, los resultados del procedimiento son más estables y perdurables que con los rellenos sintéticos."
                },
                {
                  text: "Además de aportar células grasas y células madre, el Lipofilling conlleva factores de crecimiento que son sustancias que inducen la producción de colágeno y elastina en la piel."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-200 p-6 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 border-4 border-blue-900 rounded-full mb-4 mx-auto">
                    <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-center text-blue-900">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Gallery - Imagen 7 - FONDO BLANCO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              Nuestros excelentes resultados
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { src: "/images/lipofilling-antes-1.jpg", label: "ANTES", procedure: "Lipofilling con Células Madre" },
                { src: "/images/lipofilling-despues-1.jpg", label: "DESPUÉS", procedure: "Lipofilling con Células Madre" },
                { src: "/images/lipofilling-antes-2.jpg", label: "ANTES", procedure: "Lipofilling con Células Madre" },
                { src: "/images/lipofilling-despues-2.jpg", label: "DESPUÉS", procedure: "Lipofilling con Células Madre" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`
                      }}
                    />
                    
                    {/* Etiqueta inferior con degradado azul */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div 
                        className="px-4 py-3 text-white text-center rounded-b-lg"
                        style={{
                          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(30, 64, 175, 0.3) 30%, rgba(37, 99, 235, 0.6) 70%, rgba(59, 130, 246, 0.8) 100%)'
                        }}
                      >
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs opacity-90">{item.procedure}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonios */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Testimonios
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-12"></div>
            
            {/* Video testimonio */}
            <div className="flex justify-center mb-12">
              <div className="relative rounded-lg overflow-hidden aspect-video w-full max-w-2xl">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-lipofilling-poster.jpg"
                  controls
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source src="/images/testimonio-lipofilling.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                
                {/* Fallback */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-gray-600 text-sm">Testimonio Paciente</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition-colors">
                Ver más
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section - Imagen 8 - FONDO GRIS */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Preguntas frecuentes
              </h2>
              <div className="w-32 h-1 bg-blue-900"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div 
                    className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                    <svg 
                      className={`w-6 h-6 text-blue-900 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded hover:bg-blue-900 hover:text-white transition-colors">
                Ver más
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}