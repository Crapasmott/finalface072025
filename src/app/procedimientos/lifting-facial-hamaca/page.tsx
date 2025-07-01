"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function LiftingFacialHamacaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "¿Un lifting facial puede mejorar la flacidez tanto del tercio medio como del tercio inferior del rostro?",
      answer: "Sí, los liftings faciales pueden corregir la flacidez tanto del tercio medio como del inferior del rostro. Un lifting tradicional se enfoca en elevar y tensar la piel y los tejidos subyacentes, creando un contorno más juvenil en estas áreas."
    },
    {
      question: "¿Cuánto tiempo duran los resultados de un lifting facial en comparación con los tratamientos no quirúrgicos?",
      answer: "Mientras que los tratamientos no quirúrgicos suelen requerir mantenimiento cada pocos meses, los resultados de un lifting facial pueden durar 10 años o más, lo que lo convierte en una solución a largo plazo para el rejuvenecimiento facial."
    },
    {
      question: "¿Cuáles son las mejores prácticas de cuidado de la piel para mantener los resultados de un lifting?",
      answer: "Usar productos de calidad como antioxidantes y retinoides, junto con protección solar diaria (SPF), ayuda a mantener la salud de la piel. También pueden recomendarse tratamientos cutáneos suaves y no invasivos para prolongar los resultados."
    },
    {
      question: "¿Tendrá cicatrices visibles después de un lifting facial?",
      answer: "Las incisiones de un lifting suelen hacerse en zonas poco visibles, como la línea del cabello o detrás de las orejas. Cirujanos experimentados, como el Dr. Pérez, se enfocan en minimizar las cicatrices, que con el tiempo tienden a desvanecerse y volverse casi imperceptibles."
    },
    {
      question: "¿Un lifting facial hará que me vea poco natural?",
      answer: "Cuando es realizado por un cirujano con experiencia, un lifting facial realza tus rasgos naturales, proporcionando una apariencia rejuvenecida y fresca, sin lucir exagerada o artificial."
    },
    {
      question: "¿Cuánto tiempo después de un lifting puedo volver a hacer ejercicio?",
      answer: "Se recomienda caminar ligeramente desde los primeros días, pero se debe evitar el ejercicio intenso durante al menos 4 a 6 semanas para prevenir complicaciones y reducir la hinchazón."
    },
    {
      question: "¿Cuándo puedo volver a maquillarme tras un lifting facial?",
      answer: "La mayoría de los cirujanos recomiendan esperar al menos dos semanas antes de aplicar maquillaje, para evitar irritación o infecciones en las zonas de incisión."
    },
    {
      question: "¿Cómo afecta la pérdida de peso a los resultados de un lifting facial?",
      answer: "Una pérdida de peso significativa después de un lifting puede generar nueva flacidez en la piel, afectando los resultados. Por ello, es recomendable alcanzar un peso estable antes de someterse al procedimiento."
    },
    {
      question: "¿A qué edad debería considerar hacerme un lifting facial?",
      answer: "La mayoría de los pacientes que se realizan un lifting facial tienen entre 40 y 60 años, aunque el momento ideal depende de los signos de envejecimiento, la calidad de la piel y objetivos personales."
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
            backgroundImage: "url('/images/lifting-facial-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                  Lifting Facial en Hamaca
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El proceso de envejecimiento facial ocurre en todos nosotros y cuando se presenta comenzamos a notar que lucimos diferentes a como solíamos ser en un período de tiempo relativamente corto. En pocas palabras este proceso de envejecimiento lleva a que nuestros rostros muestran la edad real que tenemos, evitando así que podamos lucir tan jóvenes y frescos como nos sentimos.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Por fortuna el procedimiento de Lifting Facial en Hamaca que lleva a cabo el Dr. Pérez es la solución ideal que tú buscas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Redescubre Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                  Redescubre tu mejor versión con el lifting facial en hamaca
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El envejecimiento facial es un proceso inevitable, pero suele hacerse evidente en los momentos más cotidianos: al mirarnos al espejo, al tomarnos una foto o al interactuar con otras personas. Estos cambios, aunque naturales, pueden afectar nuestra seguridad y autoestima, al no reflejar cómo nos sentimos realmente por dentro.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Consciente de esta realidad, el Dr. Andrés Pérez ha dedicado años de experiencia, estudio y perfeccionamiento a desarrollar su exclusiva técnica de Lifting Facial en Hamaca.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Este procedimiento ha sido cuidadosamente diseñado para adaptarse a las particularidades de cada paciente, logrando resultados que no solo rejuvenecen el rostro, sino que lo hacen de manera sutil, armónica y duradera.
                </p>
              </div>
              
              <div className="relative">
                <div className="relative bg-blue-900 rounded-lg overflow-hidden aspect-video">
                  <video 
                    className="w-full h-full object-cover"
                    poster="/images/efecto-hamaca-poster.jpg"
                    controls
                  >
                    <source src="/videos/efecto-hamaca.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                  </video>
                  <div className="absolute bottom-4 right-4">
                    <div className="text-white text-sm font-light">Dr. Andrés Pérez</div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <h3 className="text-white text-lg font-semibold text-center">
                      Efecto hamaca
                    </h3>
                    <p className="text-white text-sm text-center">Hammock effect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Garantía Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Garantía de excelentes resultados
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
              El Lifting Facial en Hamaca es una técnica quirúrgica segura, efectiva y respaldada por resultados que reflejan belleza, naturalidad y permanencia en el tiempo.
            </p>
            <p className="text-lg leading-relaxed mb-12 max-w-4xl mx-auto">
              El éxito de esta técnica quirúrgica radica en la visión integral y personalizada del Dr. Andrés Pérez. Durante la consulta de valoración, el Dr. Pérez diseña un plan quirúrgico único para cada paciente, abordando de manera precisa las tres causas principales del envejecimiento facial: la flacidez de los tejidos, la pérdida de volumen y los cambios en la calidad de la piel.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-blue-400 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Descolgamiento de los tejidos blandos
                </h3>
              </div>
              
              <div className="bg-blue-400 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Laxitud de la piel
                </h3>
              </div>
              
              <div className="bg-blue-400 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Pérdida del volumen facial
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Elevación de tejidos blandos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
              Elevación de tejidos blandos
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl">
              Uno de los cambios más evidentes y transformadores del envejecimiento facial es el descenso progresivo de los tejidos blandos. Este desplazamiento ocurre de manera vertical, comenzando en la parte superior del rostro y avanzando hacia la zona inferior, provocando una pérdida de firmeza y definición.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { src: "/images/elevacion-antes-1.jpg", label: "Antes" },
                { src: "/images/elevacion-despues-1.jpg", label: "Después" },
                { src: "/images/elevacion-antes-2.jpg", label: "Antes" },
                { src: "/images/elevacion-despues-2.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Elevación ${Math.floor(index/2) + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Lifting facial en hamaca</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-5xl">
              <p>
                Cuando somos jóvenes, el contorno facial tiende a tener una forma triangular o &quot;triángulo invertido&quot;, con la base más ancha en la zona superior del rostro (pómulos) y el vértice apuntando hacia el mentón.
              </p>
              <p>
                Sin embargo, con el paso del tiempo y el proceso natural de envejecimiento, los tejidos del rostro comienzan a perder colágeno, elastina y volumen. La piel se vuelve más flácida y los compartimentos grasos descienden, lo que provoca una pérdida de definición en los pómulos y una acumulación de volumen en la parte inferior del rostro, como la mandíbula y el cuello. Este cambio progresivo transforma el triángulo facial de una figura invertida a una figura más cuadrada o rectangular.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Plane Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative bg-gray-300 rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/deep-plane-poster.jpg"
                  controls
                >
                  <source src="/videos/deep-plane-tecnica.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                  Lifting facial en hamaca
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-blue-800">
                  &quot;DEEP PLANE&quot;
                </h3>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El Lifting Facial Hamaca es una técnica avanzada de rejuvenecimiento desarrollada por el Dr. Andrés Pérez, que ofrece una solución innovadora y eficaz para tratar la flacidez facial. A diferencia de los métodos tradicionales que solo actúan sobre las capas superficiales, esta técnica trabaja en profundidad &quot;Deep Plane&quot; reposicionando estratégicamente los tejidos internos del rostro mediante una suspensión en forma de &apos;hamaca&apos;. Esto permite elevar de manera natural las estructuras del tercio medio e inferior de la cara, logrando una restauración armónica de los contornos faciales.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  El resultado es un rejuvenecimiento integral, sin tensión excesiva ni pérdida de expresión, preservando la naturalidad del rostro. El Lifting Facial Hamaca está especialmente indicado para quienes buscan resultados duraderos y una apariencia revitalizada, respetando la autenticidad de sus rasgos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Procedimientos Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Procedimientos para un rejuvenecimiento facial integral
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-4xl">
              Para revertir de manera efectiva el descolgamiento de los tejidos blandos y lograr un rejuvenecimiento facial armónico, el Dr. Andrés Pérez combina cuidadosamente distintos procedimientos quirúrgicos, seleccionados según las necesidades únicas de cada paciente.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-4xl">
              Entre los más utilizados se encuentran:
            </p>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/elevacion-cola-cejas.jpg"
                    alt="Elevación de cola de cejas"
                    width={250}
                    height={250}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Elevación de cola de cejas
                </h3>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/images/blefaroplastia-card.jpg"
                    alt="Blefaroplastia"
                    width={250}
                    height={250}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Blefaroplastia
                </h3>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 bg-gray-200 rounded-lg">
                  <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Lifting Hamaca de mejillas y cuello
                </h3>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 bg-gray-200 rounded-lg">
                  <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Lip Lift
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurar volumen */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                  Restaurar el volumen facial
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Con el paso del tiempo, el rostro pierde volumen y firmeza debido a la disminución del tejido graso facial, lo que genera una apariencia más delgada y hundida.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Para revertir estos signos de envejecimiento, el Dr. Andrés Pérez realiza el Lipofilling con células madre: una técnica avanzada que extrae, purifica y transfiere grasa autóloga a las zonas que lo requieren.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Este tratamiento no solo restaura el volumen de forma natural y duradera, sino que también mejora la calidad de la piel gracias a las propiedades regenerativas de las células madre.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Image
                    src="/images/volumen-antes.jpg"
                    alt="Antes - Restaurar volumen"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Antes
                    </span>
                    <p className="text-white text-xs mt-1">Lifting facial en hamaca</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/images/volumen-despues.jpg"
                    alt="Después - Restaurar volumen"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Después
                    </span>
                    <p className="text-white text-xs mt-1">Lifting facial en hamaca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Devolver lozanía */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                  Devolver la lozanía y vitalidad a la piel
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A medida que envejecemos, la piel del rostro experimenta cambios estructurales significativos: se adelgaza, pierde elasticidad y tonicidad, y comienza a mostrar signos visibles como la flacidez y las arrugas.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Para contrarrestar estos efectos, el Dr. Andrés Pérez emplea la técnica de Nano Fat, un tratamiento avanzado que consiste en la inyección de grasa ultra purificada dentro de las capas más superficiales de la piel. Esta grasa, rica en factores regenerativos y células madre, actúa estimulando la renovación celular, mejorando visiblemente la textura, el brillo y la calidad general de la piel.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Image
                    src="/images/lozania-antes.jpg"
                    alt="Antes - Lozanía piel"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Antes
                    </span>
                    <p className="text-white text-xs mt-1">Lifting facial en hamaca</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/images/lozania-despues.jpg"
                    alt="Después - Lozanía piel"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Después
                    </span>
                    <p className="text-white text-xs mt-1">Lifting facial en hamaca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VS Section */}
        <section className="py-16" style={{ backgroundColor: '#D4B5A0' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-900">
                    Lifting Facial en Hamaca
                  </h3>
                </div>
                <div className="text-4xl font-bold text-white">VS</div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-900">
                    Estiramiento Facial
                  </h3>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-8">
                Naturalidad y precisión: la clave del Lifting Facial en Hamaca
              </h3>
              
              <div className="max-w-4xl mx-auto space-y-6 text-white text-lg leading-relaxed">
                <p>
                  Muchas de las técnicas tradicionales de rejuvenecimiento facial, comúnmente conocidas como &quot;estiramientos faciales&quot;, se centran únicamente en estirar la piel en sentido horizontal, generalmente hacia las orejas. Este enfoque superficial puede generar resultados poco naturales, con rostros excesivamente tensos y sin armonía.
                </p>
                <p>
                  En contraste, el Lifting Facial en Hamaca desarrollado por el Dr. Andrés Pérez evita por completo estos inconvenientes gracias a un abordaje quirúrgico mucho más profundo, anatómicamente preciso. Esta técnica se enfoca en la movilización y reposicionamiento vertical de los tejidos blandos profundos, específicamente del Sistema Músculo Aponeurótico Superficial (SMAS), que es el verdadero soporte estructural del rostro.
                </p>
                <p className="font-semibold">El resultado:</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-blue-900">
                  Un procedimiento hecho a tu medida
                </h3>
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
                { src: "/images/lifting-resultado-1-antes.jpg", label: "Antes" },
                { src: "/images/lifting-resultado-1-despues.jpg", label: "Después" },
                { src: "/images/lifting-resultado-2-antes.jpg", label: "Antes" },
                { src: "/images/lifting-resultado-2-despues.jpg", label: "Después" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Lifting resultado ${Math.floor(index/2) + 1} - ${item.label}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.label}
                      </span>
                      <p className="text-white text-xs mt-1">Lifting facial en hamaca</p>
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
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster="/images/testimonio-lifting-poster.jpg"
                  controls
                >
                  <source src="/videos/testimonio-lifting-hamaca.mp4" type="video/mp4" />
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