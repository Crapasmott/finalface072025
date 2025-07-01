"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function BlefaroplastiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia",
      answer: "Por lo general el procedimiento se lleva a cabo bajo anestesia local y sedación endovenosa. El tiempo quirúrgico aproximadamente es de una hora y media."
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: (
        <div className="space-y-2">
          <p>Durante los primeros dos días es normal presentar una inflamación moderada en los párpados. Esta disminuye progresivamente y, en la mayoría de los casos, a partir del cuarto día ya es poco notoria.</p>
          <p>- Los puntos de sutura se retiran entre el día 5 y 6 postoperatorio.</p>
          <p>- Una vez las heridas se encuentren completamente cicatrizadas, el Dr. Pérez indicará el uso de una crema cicatrizante especializada para optimizar la recuperación y mejorar el resultado estético.</p>
        </div>
      )
    },
    {
      question: "¿Es normal tener visión borrosa?",
      answer: "Sí, en algunos casos puede presentarse una visión levemente borrosa durante los primeros días. Esto puede deberse al uso de gotas lubricantes oftálmicas o a una ligera inflamación de la conjuntiva. Es un efecto temporal que se resuelve espontáneamente sin necesidad de tratamiento adicional."
    },
    {
      question: "¿Cuándo puedo aplicar maquillaje?",
      answer: "El maquillaje en la zona de los ojos puede aplicarse una vez se hayan retirado los puntos de sutura, es decir, a partir del quinto día posterior a la cirugía, siempre y cuando la piel se encuentre en buen estado."
    },
    {
      question: "¿Puedo ver pantallas después de la cirugía?",
      answer: (
        <div className="space-y-2">
          <p>Durante los primeros dos días, se recomienda evitar el uso prolongado de pantallas (computador, celular o televisión), ya que la inflamación puede generar resequedad, ardor o fatiga ocular.</p>
          <p>A partir del tercer día, es posible retomar su uso, preferiblemente en períodos cortos y con descansos frecuentes para no forzar la vista.</p>
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
            backgroundImage: "url('/images/blefaroplastia-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Blefaroplastia
                </h1>
                <h2 className="text-xl lg:text-2xl text-blue-700 mb-6">
                  Rejuvenecimiento de la mirada
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  La mirada refleja nuestras emociones, personalidad y vitalidad. Por eso, el Dr. Pérez pone a disposición de cada paciente toda su experiencia, técnica y sensibilidad estética, con el objetivo de recuperar la frescura, juventud y naturalidad en la expresión de los párpados.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A través de un enfoque personalizado y una valoración integral del área periorbitaria, el Dr. Pérez logra resultados que no solo rejuvenecen la mirada, sino que también preservan la identidad y esencia del rostro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: "/images/blefaroplastia-antes-1.jpg", label: "Antes" },
                { src: "/images/blefaroplastia-despues-1.jpg", label: "Después" },
                { src: "/images/blefaroplastia-antes-2.jpg", label: "Antes" },
                { src: "/images/blefaroplastia-despues-2.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Resultado ${index + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Blefaroplastia</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rejuvenecimiento Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
              Rejuvenecimiento de la mirada
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-4xl">
              El Lifting Facial en Hamaca es una técnica quirúrgica segura, efectiva y respaldada por resultados que reflejan belleza, naturalidad y permanencia en el tiempo.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-4xl">
              El éxito de esta técnica radica en la visión integral y personalizada del Dr. Andrés Pérez. Durante la consulta de valoración, el Dr. Pérez diseña un plan quirúrgico único para cada paciente, abordando de manera precisa las tres causas principales del envejecimiento facial: la flacidez de los tejidos, la pérdida de volumen y los cambios en la calidad de la piel.
            </p>

            {/* Video Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video cursor-pointer group">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/video-consulta-poster.jpg"
                  controls
                >
                  <source src="/videos/consulta-parpados.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:bg-black group-hover:bg-opacity-10 transition-all">
                  <div className="text-center">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      ¿Cómo es la consulta para
                    </h3>
                    <h3 className="text-white text-lg font-semibold">
                      cirugía de párpados?
                    </h3>
                    <div className="mt-4">
                      <div className="text-white text-sm font-light">Dr. Andrés Pérez</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video cursor-pointer group">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/video-blefaroplastia-poster.jpg"
                  controls
                >
                  <source src="/videos/como-realizo-blefaroplastia.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:bg-black group-hover:bg-opacity-10 transition-all">
                  <div className="text-center">
                    <h3 className="text-white text-lg font-semibold">
                      ¿Cómo realizo la blefaroplastia?
                    </h3>
                    <div className="mt-4">
                      <div className="text-white text-sm font-light">Dr. Andrés Pérez</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blefaroplastia Superior Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Blefaroplastia Superior
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-8">
              Efecto cortina: cómo devolverle frescura a tu mirada
            </h3>
            
            <div className="max-w-4xl space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Con el paso del tiempo, los párpados superiores tienden a acumular exceso de piel y tejido blando, generando un efecto similar al de una cortina que cae lentamente sobre los ojos. Este fenómeno no solo da un aspecto cansado y envejecido, sino que también puede afectar el campo visual.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">La técnica del Dr. Pérez</h4>
                <p className="mb-4">
                  Antes de la intervención, el Dr. Pérez realiza una marcación minuciosa y personalizada para identificar con precisión la cantidad de piel a retirar. La incisión se ubica exactamente sobre el pliegue natural del párpado, lo que permite camuflarla por completo una vez finalizado el proceso de cicatrización.
                </p>
                <p>
                  Durante la cirugía, se elimina el exceso de piel, se remodela discretamente el músculo orbicular y se retira la grasa sobrante, lo que permite recuperar unos párpados superiores más definidos y juveniles.
                </p>
              </div>
              
              <p>
                Este procedimiento se realiza utilizando tecnología láser o de radiofrecuencia, lo que se traduce en menos inflamación, menor sangrado y una recuperación mucho más rápida y cómoda para el paciente.
              </p>
            </div>
          </div>
        </section>

        {/* Blefaroplastia Inferior Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                  Blefaroplastia Inferior
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-8">
                  Efecto ojera: solución avanzada con resultados naturales
                </h3>
                
                <div className="text-gray-700 text-lg leading-relaxed">
                  <p>
                    Las conocidas &quot;ojeras&quot; se deben comúnmente a la protrusión de bolsas de grasa en los párpados inferiores, que se acompañan de exceso de piel y, en muchos casos, de un surco profundo entre el párpado y la mejilla, que intensifica el aspecto cansado del rostro. En algunos pacientes, el problema se limita a arrugas y pliegues cutáneos sin presencia de bolsas grasas.
                  </p>
                </div>
              </div>
              
              <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video cursor-pointer group">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/video-efecto-cortina-poster.jpg"
                  controls
                >
                  <source src="/videos/efecto-cortina-ojera.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:bg-black group-hover:bg-opacity-10 transition-all">
                  <div className="text-center">
                    <h3 className="text-white text-lg font-semibold">
                      Efecto cortina y ojera
                    </h3>
                    <div className="mt-4">
                      <div className="text-white text-sm font-light">Dr. Andrés Pérez</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fat Sliding Technique */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/video-fat-sliding-poster.jpg"
                  controls
                >
                  <source src="/videos/fat-sliding-tecnica.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
              </div>
              
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Técnica Fat Sliding:
                </h2>
                <div className="w-20 h-1 bg-white mb-6"></div>
                <h3 className="text-xl lg:text-2xl mb-8">
                  Redefiniendo el tratamiento de ojeras
                </h3>
                <p className="text-lg leading-relaxed">
                  El Dr. Pérez emplea la innovadora técnica de Fat Sliding o Reubicación de Bolsas Grasas, una evolución avanzada de la blefaroplastia inferior tradicional que ha demostrado resultados superiores y duraderos.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                ¿Por qué es diferente?
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-blue-400 p-8 rounded-lg text-white">
                  <p className="text-lg leading-relaxed">
                    No se extrae la grasa de los párpados, sino que se redistribuye suavemente hacia el surco de la ojera, rellenando esa zona hundida y suavizando el contorno entre el párpado y el pómulo.
                  </p>
                </div>
                
                <div className="bg-blue-400 p-8 rounded-lg text-white">
                  <p className="text-lg leading-relaxed">
                    Esta técnica previene secuelas frecuentes de la blefaroplastia convencional, como los ojos hundidos, vacíos o sin expresión, que pueden aparecer meses después de una extracción excesiva de grasa.
                  </p>
                </div>
                
                <div className="bg-blue-400 p-8 rounded-lg text-white">
                  <p className="text-lg leading-relaxed">
                    Se realiza a través del interior del párpado (abordaje transconjuntival), lo que evita cicatrices visibles y reduce significativamente el trauma en los tejidos.
                  </p>
                </div>
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
                { src: "/images/resultado-1-antes.jpg", label: "ANTES", type: "Antes" },
                { src: "/images/resultado-1-despues.jpg", label: "DESPUÉS", type: "Después" },
                { src: "/images/resultado-2-antes.jpg", label: "ANTES", type: "Antes" },
                { src: "/images/resultado-2-despues.jpg", label: "DESPUÉS", type: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Resultado ${Math.floor(index/2) + 1} - ${item.type}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm font-medium">
                        {item.type}
                      </span>
                      <p className="text-white text-xs">Blefaroplastia</p>
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
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-1-poster.jpg"
                  controls
                >
                  <source src="/videos/testimonio-paciente-1.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute bottom-4 right-4">
                  <div className="text-white text-sm font-light">Dr. Andrés Pérez</div>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-2-poster.jpg"
                  controls
                >
                  <source src="/videos/testimonio-paciente-2.mp4" type="video/mp4" />
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