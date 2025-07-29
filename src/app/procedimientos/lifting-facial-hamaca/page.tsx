"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function LiftingFacialHamacaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "¿Qué es el Lifting Facial en Hamaca?",
      answer: "Es una técnica avanzada de rejuvenecimiento facial que utiliza el método Deep Plane para lograr resultados naturales y duraderos, elevando los tejidos de manera integral."
    },
    {
      question: "¿Cuánto dura la recuperación?",
      answer: "La recuperación inicial es de 7-10 días, con resultados visibles inmediatos. La recuperación completa toma aproximadamente 3-4 semanas."
    },
    {
      question: "¿Los resultados son permanentes?",
      answer: "Los resultados duran entre 8-12 años, dependiendo de factores individuales como la edad, cuidado de la piel y estilo de vida."
    },
    {
      question: "¿Es doloroso el procedimiento?",
      answer: "Se realiza bajo anestesia general, por lo que no hay dolor durante el procedimiento. El postoperatorio se maneja con analgésicos efectivos."
    },
    {
      question: "¿Qué diferencia al Dr. Pérez en esta técnica?",
      answer: "El Dr. Pérez es especialista en la técnica Deep Plane con más de 15 años de experiencia, garantizando resultados naturales y seguros."
    }
  ]

  return (
    <div>
      <Header />
      
      <main className="min-h-screen">
        {/* IMAGEN 1 - Hero Section Banner */}
        <section className="relative min-h-screen overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%),
                url('/images/lifting-facial-banner.jpg') center/cover no-repeat
              `
            }}
          >
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
            <div className="max-w-4xl">
              <div className="space-y-8">
                <div className="mb-12">
                  <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
                    Lifting Facial en Hamaca
                  </h1>

                  <h2 className="text-2xl lg:text-3xl text-white mb-8 font-medium leading-tight">
                    Rejuvenecimiento integral con técnica Deep Plane
                  </h2>

                  <div className="space-y-6 text-lg text-white leading-relaxed max-w-3xl">
                    <p>
                      El Lifting Facial en Hamaca es una técnica avanzada que permite un rejuvenecimiento facial 
                      completo y natural, trabajando en las capas profundas del rostro para lograr resultados 
                      duraderos y armoniosos.
                    </p>

                    <p>
                      Esta innovadora técnica del Dr. Pérez combina la precisión del Deep Plane con un enfoque 
                      integral que respeta la anatomía facial, devolviendo la juventud sin perder la expresión 
                      natural del paciente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 2 - Galería Antes/Después - SOLO IMÁGENES LIMPIAS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Resultados Reales
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/lifting/lifting-antes-1.jpg"
                  alt="Resultado 1"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 1%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/lifting/lifting-despues-1.jpg"
                  alt="Resultado 2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 2%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/lifting/lifting-antes-2.jpg"
                  alt="Resultado 3"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 3%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/lifting/lifting-despues-2.jpg"
                  alt="Resultado 4"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 4%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 3 - Redescubre */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <div>
                  <h2 className="text-4xl font-bold text-blue-900 mb-8 leading-tight">
                    Redescubre tu mejor versión con el lifting facial en hamaca
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      El envejecimiento facial es un proceso inevitable, pero suele hacerse evidente en los momentos más cotidianos: al 
                      mirarnos al espejo, al tomarnos una foto o al interactuar con otras personas. Estos cambios, aunque naturales, pueden 
                      afectar nuestra seguridad y autoestima, al no reflejar cómo nos sentimos realmente por dentro.
                    </p>
                    
                    <p>
                      Consciente de esta realidad, el Dr. Andrés Pérez ha dedicado años de experiencia, estudio y perfeccionamiento 
                      a desarrollar su exclusiva técnica de Lifting Facial en Hamaca.
                    </p>
                    
                    <p>
                      Este procedimiento ha sido cuidadosamente diseñado para adaptarse a las particularidades de cada paciente, logrando 
                      resultados que no solo rejuvenecen el rostro, sino que lo hacen de manera sutil, armónica y duradera.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-blue-900 rounded-lg p-8 text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Efecto hamaca</h3>
                      <p className="text-blue-200 text-sm">Hamaca effect</p>
                    </div>
                    <p className="text-right text-blue-300 text-sm">Dr. Andrés Pérez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 4 - Garantía de excelentes resultados */}
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center text-white">
              
              <h2 className="text-4xl font-bold mb-8">
                Garantía de excelentes resultados
              </h2>
              
              <div className="space-y-4 mb-12 leading-relaxed">
                <p>
                  El Lifting Facial en Hamaca es una técnica quirúrgica segura, efectiva y respaldada por resultados que reflejan belleza, 
                  naturalidad y permanencia en el tiempo.
                </p>
                <p>
                  El éxito de esta técnica quirúrgica radica en la visión integral y personalizada del Dr. Andrés Pérez. Durante la consulta 
                  de valoración, el Dr. Pérez diseña un plan quirúrgico único para cada paciente, abordando de manera precisa las tres 
                  causas principales del envejecimiento facial: la flacidez de los tejidos, la pérdida de volumen y los cambios en la 
                  calidad de la piel.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-300 rounded-lg p-8 text-center">
                  <h3 className="font-bold text-blue-900 text-lg mb-2">
                    Descolgamiento de los tejidos blandos
                  </h3>
                </div>
                
                <div className="bg-gray-300 rounded-lg p-8 text-center">
                  <h3 className="font-bold text-blue-900 text-lg mb-2">
                    Laxitud de la piel
                  </h3>
                </div>
                
                <div className="bg-gray-300 rounded-lg p-8 text-center">
                  <h3 className="font-bold text-blue-900 text-lg mb-2">
                    Pérdida del volumen facial
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 5 - Elevación de tejidos blandos - SIN BOTONES AZULES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                Elevación de tejidos blandos
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-8 max-w-6xl">
                Uno de los cambios más evidentes y transformadores del envejecimiento facial es el descenso progresivo de los 
                tejidos blandos. Este desplazamiento ocurre de manera vertical, comenzando en la parte superior del rostro y 
                avanzando hacia la zona inferior, provocando una pérdida de firmeza y definición.
              </p>
              
              {/* 4 IMÁGENES COMPLETAMENTE LIMPIAS - SIN BOTONES AZULES */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/images/lifting/elevacion-tejidos-antes-1.jpg"
                    alt="Elevación tejidos 1"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EImagen 1%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/images/lifting/elevacion-tejidos-despues-1.jpg"
                    alt="Elevación tejidos 2"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EImagen 2%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/images/lifting/elevacion-tejidos-antes-2.jpg"
                    alt="Elevación tejidos 3"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EImagen 3%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/images/lifting/elevacion-tejidos-despues-2.jpg"
                    alt="Elevación tejidos 4"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EImagen 4%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed max-w-6xl">
                <p>
                  Cuando somos jóvenes, el contorno facial tiende a tener una forma triangular o "triángulo invertido", con la base más 
                  ancha en la zona superior del rostro (pómulos) y el vértice apuntando hacia el mentón.
                </p>
                
                <p>
                  Sin embargo, con el paso del tiempo y el proceso natural de envejecimiento, los tejidos del rostro comienzan a perder 
                  colágeno, elastina y volumen. La piel se vuelve más flácida y los compartimentos grasos descienden, lo que provoca 
                  una pérdida de definición en los pómulos y una acumulación de volumen en la parte inferior del rostro, como la 
                  mandíbula y el cuello. Este cambio progresivo transforma la forma facial de un triángulo invertido a una figura más 
                  cuadrada o rectangular.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 6 - Deep Plane */}
        <section className="py-16" style={{ backgroundColor: '#D4B5A0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <div className="relative">
                  <div className="bg-white rounded-lg aspect-[4/3] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg width="24" height="24" fill="#6B7280" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm">Video Deep Plane</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-white">
                  <h2 className="text-4xl font-bold mb-4 leading-tight">
                    Lifting facial en hamaca<br />
                    <span className="text-2xl">"DEEP PLANE"</span>
                  </h2>
                  <div className="w-24 h-1 bg-white mb-8"></div>
                  
                  <div className="space-y-6 leading-relaxed">
                    <p>
                      El Lifting Facial Hamaca es una técnica avanzada de rejuvenecimiento desarrollada por el Dr. Andrés Pérez, que 
                      ofrece una solución innovadora y eficaz para tratar la flacidez facial. A diferencia de los métodos tradicionales 
                      que solo actúan sobre las capas superficiales, esta técnica trabaja en profundidad "Deep Plane" reposicionando 
                      estratégicamente los tejidos internos del rostro mediante una suspensión en forma de "hamaca". Esto permite elevar 
                      de manera natural las estructuras del tercio medio e inferior de la cara, logrando una restauración armónica de 
                      los contornos faciales.
                    </p>
                    
                    <p>
                      El resultado es un rejuvenecimiento integral, sin tensión excesiva ni pérdida de expresión, preservando la 
                      naturalidad del rostro. El Lifting Facial Hamaca está especialmente indicado para quienes buscan resultados 
                      duraderos y una apariencia revitalizada, respetando la autenticidad de sus rasgos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 7 - Procedimientos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-8 leading-tight">
                  Procedimientos para un rejuvenecimiento facial integral
                </h2>
                
                <div className="text-gray-700 leading-relaxed max-w-6xl">
                  <p className="mb-4">
                    Para revertir de manera efectiva el descolgamiento de los tejidos blandos y lograr un rejuvenecimiento facial armónico, 
                    el Dr. Andrés Pérez combina cuidadosamente distintos procedimientos quirúrgicos, seleccionados según las 
                    necesidades únicas de cada paciente.
                  </p>
                  <p className="font-semibold">
                    Entre los más utilizados se encuentran:
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/lifting/elevacion-cola-cejas.jpg"
                      alt="Elevación de cola de cejas"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f3f4f6'/%3E%3Ctext x='150' y='112' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EElevación cejas%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-blue-900 text-lg">Elevación de cola de cejas</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/lifting/blefaroplastia.jpg"
                      alt="Blefaroplastia"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f3f4f6'/%3E%3Ctext x='150' y='112' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EBlefaroplastia%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-blue-900 text-lg">Blefaroplastia</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/lifting/lifting-hamaca-mejillas-cuello.jpg"
                      alt="Lifting Hamaca de mejillas y cuello"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f3f4f6'/%3E%3Ctext x='150' y='100' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3ELifting Hamaca%3C/text%3E%3Ctext x='150' y='120' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3Emejillas y cuello%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-blue-900 text-lg leading-tight">Lifting Hamaca de mejillas y cuello</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/lifting/lip-lift.jpg"
                      alt="Lip Lift"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='225' viewBox='0 0 300 225'%3E%3Crect width='300' height='225' fill='%23f3f4f6'/%3E%3Ctext x='150' y='112' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3ELip Lift%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-blue-900 text-lg">Lip Lift</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 8 - Restaurar volumen - SIN BOTONES AZULES */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <div>
                  <h2 className="text-4xl font-bold text-blue-900 mb-8 leading-tight">
                    Restaurar el volumen facial
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      Con el paso del tiempo, el rostro pierde volumen y firmeza debido a la disminución del tejido graso 
                      facial, lo que genera una apariencia más delgada y hundida.
                    </p>
                    
                    <p>
                      Para revertir estos signos de envejecimiento, el Dr. Andrés Pérez realiza el <span className="font-semibold text-blue-900">Lipofilling con células madre</span>: 
                      una técnica avanzada que extrae, purifica y transfiere grasa autóloga a las zonas que lo requieren.
                    </p>
                    
                    <p>
                      Este tratamiento no solo restaura el volumen de forma natural y duradera, sino que también mejora la 
                      calidad de la piel gracias a las propiedades regenerativas de las células madre.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/images/lifting/restaurar-volumen-antes.jpg"
                      alt="Restaurar volumen antes"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 1%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                  
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/images/lifting/restaurar-volumen-despues.jpg"
                      alt="Restaurar volumen después"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 2%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 9 - Devolver lozanía - SIN BOTONES AZULES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <div>
                  <h2 className="text-4xl font-bold text-blue-900 mb-8 leading-tight">
                    Devolver la lozanía y vitalidad a la piel
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      A medida que envejecemos, la piel del rostro experimenta cambios estructurales significativos: se 
                      adelgaza, pierde elasticidad y tonicidad, y comienza a mostrar signos visibles como la flacidez y las arrugas.
                    </p>
                    
                    <p>
                      Para contrarrestar estos efectos, el Dr. Andrés Pérez emplea la técnica Nano Fat, un tratamiento 
                      avanzado que consiste en la inyección de grasa ultra purificada dentro de las capas más superficiales de la 
                      piel. Esta grasa, rica en factores regenerativos y células madre, actúa estimulando la renovación 
                      celular, mejorando visiblemente la textura, el brillo y la calidad general de la piel.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/images/lifting/devolver-lozania-antes.jpg"
                      alt="Devolver lozanía antes"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 1%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                  
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/images/lifting/devolver-lozania-despues.jpg"
                      alt="Devolver lozanía después"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen 2%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGEN 10 - Sección VS */}
        <section className="py-16" style={{ backgroundColor: '#D4B5A0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12 relative">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Lifting Facial en Hamaca
                  </h3>
                </div>
                
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 lg:block hidden">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-gray-200">
                    <span className="text-2xl font-bold text-blue-900">VS</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Estiramiento Facial
                  </h3>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Naturalidad y precisión: la clave del Lifting Facial en Hamaca
                </h4>
                <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto text-sm">
                  Muchas de las técnicas tradicionales de rejuvenecimiento facial, comúnmente conocidas como "estiramientos 
                  faciales", se centran únicamente en traccionar la piel en dirección horizontal, generalmente hacia las orejas. Este 
                  enfoque superficial puede generar resultados poco naturales, con rostros excesivamente tensos y sin armonía.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto text-sm mt-4">
                  En contraste, el Lifting Facial en Hamaca desarrollado por el Dr. Andrés Pérez evita por completo estos inconvenientes 
                  gracias a un abordaje quirúrgico mucho más profundo y anatómicamente preciso. Esta técnica se enfoca en la 
                  movilización y reposicionamiento vertical de los tejidos blandos profundos, específicamente del Sistema Músculo 
                  Aponeurótico Superficial (SMAS), que es el verdadero soporte estructural del rostro.
                </p>
                <p className="text-gray-700 font-semibold mt-4">
                  El resultado:
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-blue-900 text-center">
                  Un procedimiento hecho a tu medida
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros excelentes resultados - CON ETIQUETAS como elevación cejas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-12">
              Nuestros excelentes resultados
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: "/images/lifting/lifting-resultado-1-antes.jpg", label: "ANTES", type: "Antes" },
                { src: "/images/lifting/lifting-resultado-1-despues.jpg", label: "DESPUÉS", type: "Después" },
                { src: "/images/lifting/lifting-resultado-2-antes.jpg", label: "ANTES", type: "Antes" },
                { src: "/images/lifting/lifting-resultado-2-despues.jpg", label: "DESPUÉS", type: "Después" }
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
                      <p className="text-white text-xs">Lifting Facial</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios CON VIDEOS - EXACTO como elevación cejas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Testimonios
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-12"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Video Testimonio 1 */}
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-lifting-facial-1-poster.jpg"
                >
                  <source src="/videos/testimonio-lifting-facial-1.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                <div className="absolute bottom-4 right-4">
                  <div className="text-white text-sm font-light bg-black/50 px-2 py-1 rounded">
                    Dr. Andrés Pérez
                  </div>
                </div>
              </div>
              
              {/* Video Testimonio 2 */}
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-lifting-facial-2-poster.jpg"
                >
                  <source src="/videos/testimonio-lifting-facial-2.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                <div className="absolute bottom-4 right-4">
                  <div className="text-white text-sm font-light bg-black/50 px-2 py-1 rounded">
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full bg-white p-6 text-left rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-600"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-blue-900 pr-4">
                        {faq.question}
                      </h3>
                      <svg 
                        className={`w-6 h-6 text-blue-600 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {openFaq === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu rostro?
            </h2>
            <p className="text-blue-200 text-xl mb-8 max-w-3xl mx-auto">
              Agenda tu consulta personalizada y descubre cómo el Lifting Facial en Hamaca 
              puede devolverle la juventud a tu rostro de manera natural y duradera.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Agendar Consulta
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors w-full sm:w-auto">
                Ver Más Casos
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}