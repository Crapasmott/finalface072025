"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function BlefaroplastiaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Anestesia",
      answer: "Por lo general el procedimiento se lleva a cabo bajo anestesia local y sedación endovenosa. El tiempo quirúrgico aproximadamente es de una hora y media."
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: "Durante los primeros dos días es normal presentar una inflamación moderada en los párpados. Esta disminuye progresivamente y, en la mayoría de los casos, a partir del cuarto día ya es poco notoria. Los puntos de sutura se retiran entre el día 5 y 6 postoperatorio. Una vez las heridas se encuentren completamente cicatrizadas, el Dr. Pérez indicará el uso de una crema cicatrizante especializada para optimizar la recuperación y mejorar el resultado estético."
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
      answer: "Durante los primeros dos días, se recomienda evitar el uso prolongado de pantallas (computador, celular o televisión), ya que la inflamación puede generar resequedad, ardor o fatiga ocular. A partir del tercer día, es posible retomar su uso, preferiblemente en períodos cortos y con descansos frecuentes para no forzar la vista."
    }
  ]

  return (
    <div>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section - Imagen 1 */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="/images/blefaroplastia-banner.jpg"
              alt="Banner Blefaroplastia"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                // Fallback con gradiente elegante si la imagen no carga
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
                    Blefaroplastia
                  </h1>
                  <div className="w-32 h-1 bg-blue-900 mb-8"></div>
                </div>
                
                <h2 className="text-xl lg:text-2xl text-blue-900 mb-8 font-medium">
                  Rejuvenecimiento de la mirada
                </h2>
                
                <div className="space-y-6 text-base text-blue-900 leading-relaxed">
                  <p>
                    La mirada refleja nuestras emociones, personalidad y 
                    vitalidad. Por eso, el Dr. Pérez pone a disposición de cada 
                    paciente toda su experiencia, técnica y sensibilidad 
                    estética, con el objetivo de recuperar la frescura, juventud y 
                    naturalidad en la expresión de los párpados.
                  </p>
                  
                  <p>
                    A través de un enfoque personalizado y una valoración 
                    integral del área periorbitaria, el Dr. Pérez logra resultados 
                    que no solo rejuvenecen la mirada, sino que también 
                    preservan la identidad y esencia del rostro.
                  </p>
                </div>
              </div>
              
              {/* Imagen de la mujer - Lado derecho */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <Image
                    src="/images/mujer-blefaroplastia.jpg"
                    alt="Mujer Blefaroplastia"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f3e7e9'/%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EMujer Blefaroplastia%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery - Imagen 2 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: "/images/blefaroplastia-antes-1.jpg", label: "Antes", procedure: "Blefaroplastia" },
                { src: "/images/blefaroplastia-despues-1.jpg", label: "Después", procedure: "Blefaroplastia" },
                { src: "/images/blefaroplastia-antes-2.jpg", label: "Antes", procedure: "Blefaroplastia" },
                { src: "/images/blefaroplastia-despues-2.jpg", label: "Después", procedure: "Blefaroplastia" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23e5e7eb'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`
                      }}
                    />
                    
                    {/* Etiqueta inferior con degradado suave transparente */}
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
          </div>
        </section>

        {/* Rejuvenecimiento Section - Imagen 3 */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
              Rejuvenecimiento de la mirada
            </h2>
            
            <div className="space-y-6 text-blue-900 leading-relaxed mb-12 max-w-5xl">
              <p>
                El Lifting Facial en Hamaca es una técnica quirúrgica segura, efectiva y respaldada por resultados que 
                reflejan belleza, naturalidad y permanencia en el tiempo.
              </p>
              <p>
                El éxito de esta técnica quirúrgica radica en la visión integral y personalizada del Dr. Andrés Pérez. Durante la 
                consulta de valoración, el Dr. Pérez diseña un plan quirúrgico único para cada paciente, abordando de 
                manera precisa las tres causas principales del envejecimiento facial: la flacidez de los tejidos, la pérdida de 
                volumen y los cambios en la calidad de la piel.
              </p>
            </div>

            {/* Video Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Video 1 - ¿Cómo es la consulta para cirugía de párpados? */}
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/consulta-parpados-poster.jpg"
                  controls
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source src="/images/consulta-parpados.mp4" type="video/mp4" />
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
                    <h3 className="text-white text-lg font-medium mb-2">
                      ¿Cómo es la consulta para
                    </h3>
                    <h3 className="text-white text-lg font-medium mb-8">
                      cirugía de párpados?
                    </h3>
                    <div className="text-white text-sm font-light italic">
                      Dr. Andrés Pérez
                    </div>
                  </div>
                </div>
              </div>

              {/* Video 2 - ¿Cómo realizo la blefaroplastia? */}
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/como-realizo-blefaroplastia-poster.jpg"
                  controls
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) style.display = 'flex';
                  }}
                >
                  <source src="/images/como-realizo-blefaroplastia.mp4" type="video/mp4" />
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
                      ¿Cómo realizo la blefaroplastia?
                    </h3>
                    <div className="text-white text-sm font-light italic">
                      Dr. Andrés Pérez
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blefaroplastia Superior e Inferior Section - Imagen 4 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Blefaroplastia Superior */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Blefaroplastia Superior
              </h2>
              <div className="w-32 h-1 bg-blue-900 mb-6"></div>
              
              <h3 className="text-xl lg:text-2xl font-medium text-blue-900 mb-8">
                Efecto cortina: cómo devolverle frescura a tu mirada
              </h3>
              
              <div className="space-y-6 text-blue-900 leading-relaxed">
                <p>
                  Con el paso del tiempo, los párpados superiores tienden a acumular exceso de piel y tejido blando, 
                  generando un efecto similar al de una cortina que cae lentamente sobre los ojos. Este fenómeno no solo da 
                  un aspecto cansado y envejecido, sino que también puede afectar el campo visual.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">La técnica del Dr. Pérez</h4>
                  <p className="mb-4">
                    Antes de la intervención, el Dr. Pérez realiza una marcación minuciosa y personalizada para identificar con 
                    precisión la cantidad de piel a retirar. La incisión se ubica exactamente sobre el pliegue natural del párpado, 
                    lo que permite camuflarla por completo una vez finalizado el proceso de cicatrización.  
                  </p>
                  <p>
                    Durante la cirugía, se elimina el exceso de piel, se remodela discretamente el músculo orbicular y se retira 
                    la grasa sobrante, lo que permite recuperar unos párpados superiores más definidos y juveniles.
                  </p>
                </div>
                
                <p>
                  Este procedimiento se realiza utilizando tecnología láser o de radiofrecuencia, lo que se traduce en menos 
                  inflamación, menor sangrado y una recuperación mucho más rápida y cómoda para el paciente.
                </p>
              </div>
            </div>

            {/* Blefaroplastia Inferior */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                  Blefaroplastia Inferior
                </h2>
                <div className="w-32 h-1 bg-blue-900 mb-6"></div>
                
                <h3 className="text-xl lg:text-2xl font-medium text-blue-900 mb-8">
                  Efecto ojera: solución avanzada con resultados naturales
                </h3>
                
                <p className="text-blue-900 leading-relaxed">
                  Las conocidas "ojeras" se deben comúnmente a la 
                  protrusión de bolsas de grasa en los párpados inferiores, 
                  que se acompañan de exceso de piel y, en muchos casos, 
                  de un surco profundo entre el párpado y la mejilla, que 
                  intensifica el aspecto cansado del rostro. En algunos 
                  pacientes, el problema se limita a arrugas y pliegues 
                  cutáneos sin presencia de bolsas grasas.
                </p>
              </div>
              
              {/* Video Efecto cortina y ojera */}
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/efecto-cortina-ojera-poster.jpg"
                  controls
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source src="/images/efecto-cortina-ojera.mp4" type="video/mp4" />
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
                      Efecto cortina y ojera
                    </h3>
                    <div className="text-white text-sm font-light italic">
                      Dr. Andrés Pérez
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fat Sliding Technique - Imagen 5 */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            {/* Header con video */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Video Fat Sliding */}
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/fat-sliding-poster.jpg"
                  controls
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source src="/images/fat-sliding.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                
                {/* Fallback */}
                <div className="absolute inset-0 bg-blue-800 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-white text-sm font-light italic">
                      Dr. Andrés Pérez
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenido de texto */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Técnica Fat Sliding:
                </h2>
                <div className="w-32 h-1 bg-white mb-6"></div>
                
                <h3 className="text-xl lg:text-2xl mb-8">
                  Redefiniendo el tratamiento de ojeras
                </h3>
                
                <p className="text-lg leading-relaxed">
                  El Dr. Pérez emplea la innovadora técnica de Fat 
                  Sliding o Reubicación de Bolsas Grasas, una 
                  evolución avanzada de la blefaroplastia inferior 
                  tradicional que ha demostrado resultados superiores 
                  y duraderos.
                </p>
              </div>
            </div>

            {/* ¿Por qué es diferente? */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                ¿Por qué es diferente?
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-200 p-6 rounded-lg">
                  <p className="text-blue-900 leading-relaxed">
                    No se extrae la grasa de los párpados, sino que se 
                    redistribuye suavemente hacia el surco de la ojera, 
                    rellenando esa zona hundida y suavizando el 
                    contorno entre el párpado y el pómulo.
                  </p>
                </div>
                
                <div className="bg-blue-200 p-6 rounded-lg">
                  <p className="text-blue-900 leading-relaxed">
                    Esta técnica previene secuelas frecuentes de la 
                    blefaroplastia convencional, como los ojos hundidos, 
                    vacíos o sin expresión, que pueden aparecer meses 
                    después de una extracción excesiva de grasa.
                  </p>
                </div>
                
                <div className="bg-blue-200 p-6 rounded-lg">
                  <p className="text-blue-900 leading-relaxed">
                    Se realiza a través del interior del párpado (abordaje 
                    transconjuntival), lo que evita cicatrices visibles y 
                    reduce significativamente el trauma en los tejidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Gallery - Imagen 6 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              Nuestros excelentes resultados
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { src: "/images/blefaroplastia/img-antes.jpg", label: "ANTES", type: "Antes" },
                { src: "/images/resultado-1-despues.jpg", label: "DESPUÉS", type: "Después" },
                { src: "/images/resultado-2-antes.jpg", label: "ANTES", type: "Antes" },
                { src: "/images/resultado-2-despues.jpg", label: "DESPUÉS", type: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Resultado ${Math.floor(index/2) + 1} - ${item.type}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.type}%3C/text%3E%3C/svg%3E`
                      }}
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
              {/* Video Testimonio 1 */}
              <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-1-poster.jpg"
                  controls
                  onError={(e) => {
                    // Fallback si el video no carga
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source src="/images/testimonio-paciente-1.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                
                {/* Fallback si el video no carga */}
                <div className="absolute inset-0 bg-blue-600 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-white text-sm">Testimonio Paciente 1</div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="text-white text-sm font-light bg-black bg-opacity-50 px-2 py-1 rounded">
                    Dr. Andrés Pérez
                  </div>
                </div>
              </div>
              
              {/* Video Testimonio 2 */}
              <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-2-poster.jpg"
                  controls
                  onError={(e) => {
                    // Fallback si el video no carga
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source src="/images/testimonio-paciente-2.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                
                {/* Fallback si el video no carga */}
                <div className="absolute inset-0 bg-blue-600 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-white text-sm">Testimonio Paciente 2</div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="text-white text-sm font-light bg-black bg-opacity-50 px-2 py-1 rounded">
                    Dr. Andrés Pérez
                  </div>
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

        {/* FAQ Section - Imagen 7 */}
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