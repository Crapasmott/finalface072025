"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const LiposuccionPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Anestesia y duración",
      answer: "El procedimiento se realiza bajo anestesia general y su duración habitual es de 2 a 3 horas, dependiendo del número de zonas tratadas y si se combina con otros procedimientos como la abdominoplastia o la transferencia de grasa."
    },
    {
      question: "¿Qué esperar después de la cirugía?",
      answer: "Reposo: Durante los primeros 3 días se recomienda mantener una actividad física leve y evitar cualquier tipo de ejercicio intenso. La deambulación temprana desde el primer día postoperatorio es fundamental para prevenir complicaciones.\n\nFaja postoperatoria: Se debe usar de forma continua, día y noche, al menos durante 6 semanas, para ayudar a controlar la inflamación, moldear la figura y optimizar los resultados."
    },
    {
      question: "¿Son necesarias las terapias postoperatorias?",
      answer: "En muchos casos no son requeridas, gracias al uso de cánulas finas y a la técnica cuidadosa del Dr. Pérez, que reduce la inflamación. Sin embargo, en función de la evolución individual del paciente, se puede recomendar drenaje linfático u otras terapias para acelerar la recuperación."
    },
    {
      question: "¿Se mantienen los resultados en el tiempo?",
      answer: "Sí, siempre y cuando se acompañe de un estilo de vida saludable. La liposucción debe entenderse como parte de un manejo integral que incluye:\n• Alimentación balanceada\n• Actividad física regular\n• Control de peso\n\nDe no mantenerse estos hábitos, es posible que vuelvan a acumularse depósitos de grasa con el tiempo."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section 
        className="relative h-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/liposuccion-banner.jpg')",
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-5xl font-bold text-blue-900">Liposucción</h1>
        </div>
      </section>

      {/* Lipoescultura Corporal Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Lipoescultura Corporal</h2>
          <p className="text-lg mb-8 leading-relaxed">
            La lipoescultura corporal se ha consolidado como uno de los procedimientos quirúrgicos más populares y solicitados 
            a nivel mundial, tanto en mujeres como en hombres. A lo largo de la vida, es común desarrollar acumulaciones de 
            grasa en distintas zonas del cuerpo, influenciadas por factores como:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-300 rounded-lg p-6 text-center text-blue-900">
              <span className="font-semibold">Cambios de peso</span>
            </div>
            <div className="bg-blue-300 rounded-lg p-6 text-center text-blue-900">
              <span className="font-semibold">Embarazos</span>
            </div>
            <div className="bg-blue-300 rounded-lg p-6 text-center text-blue-900">
              <span className="font-semibold">Envejecimiento</span>
            </div>
            <div className="bg-blue-300 rounded-lg p-6 text-center text-blue-900">
              <span className="font-semibold">Estilo de vida sedentario</span>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            Muchos de los pacientes que consultan al Dr. Pérez ya han intentado soluciones no quirúrgicas como dietas, ejercicio 
            o tratamientos estéticos sin obtener una mejoría notable en su contorno corporal. Es aquí donde la lipoescultura 
            ofrece una solución definitiva y efectiva.
          </p>
        </div>
      </section>

      {/* Tipos de Liposucción */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Tipos de Liposucción</h2>
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Utilizados por el Dr. Pérez</h3>
          
          <p className="text-lg mb-12 text-gray-700">
            En la actualidad, existen <span className="text-blue-600 font-semibold">diversas tecnologías</span> que facilitan la extracción de grasa y <span className="text-blue-600 font-semibold">optimizan los resultados</span> del procedimiento. Las más destacadas incluyen:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Técnica 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Liposucción Tumescente Tradicional</h4>
                <p className="text-gray-700 mb-6">
                  Es la técnica más utilizada. Consiste en infiltrar una solución especial en los depósitos de grasa, facilitando su extracción, reduciendo el sangrado y mejorando la seguridad del procedimiento.
                </p>
                
                {/* Video 1 */}
                <div className="bg-blue-900 rounded-lg p-6 text-center mb-4">
                  <span className="text-white font-semibold block mb-2">Liposucción tradicional</span>
                  <div className="text-white text-sm opacity-75 mb-4">Dr. Pérez</div>
                </div>
                
                <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/images/video-liposuccion-tradicional-poster.jpg"
                  >
                    <source src="/videos/liposuccion-tradicional.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                  </video>
                </div>
              </div>
            </div>

            {/* Técnica 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Técnica VASER</h4>
                <p className="text-gray-700 mb-6">
                  Utiliza ultrasonido para desintegrar la grasa y convertirla en un estado líquido, lo que permite una extracción más precisa. Es ideal para pacientes que ya se han sometido a liposucciones previas o presentan tejidos con fibrosis.
                </p>
                
                {/* Video 2 */}
                <div className="bg-blue-900 rounded-lg p-6 text-center mb-4">
                  <span className="text-white font-semibold block mb-2">Lipólisis vaser</span>
                  <div className="text-white text-sm opacity-75 mb-4">Dr. Pérez</div>
                </div>
                
                <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/images/video-vaser-poster.jpg"
                  >
                    <source src="/videos/tecnica-vaser.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Técnica 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">Técnica LÁSER</h4>
              <p className="text-gray-700 text-center">
                Similar a la técnica VASER, pero emplea energía láser en lugar de ultrasonido para licuar la grasa. 
                También mejora la retracción de la piel en algunas zonas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Técnica Personalizada */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Técnica Personalizada del Dr. Pérez</h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-lg leading-relaxed">
              Cada procedimiento es diseñado de manera individual por el Dr. Pérez, quien toma en cuenta la anatomía del paciente 
              y sus expectativas. Entre los detalles técnicos se destacan:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">•</span>
                <span>Uso de cánulas delgadas de 3 a 4 mm, que permiten un moldeamiento más preciso y armónico.</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">•</span>
                <span>Incisiones pequeñas y estratégicamente ubicadas, para que las cicatrices sean prácticamente imperceptibles.</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">•</span>
                <span>La cantidad de grasa a extraer se determina cuidadosamente con base en los estándares de seguridad de la Asociación Americana de Cirugía Plástica, priorizando siempre la salud del paciente.</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Lipoescultura de Alta Definición (HD)</h3>
            <p className="text-lg leading-relaxed mb-6">
              Esta técnica avanzada busca resaltar la musculatura y definir zonas específicas del cuerpo, simulando el efecto de una 
              tonificación corporal con ejercicio. Se trata de una lipoescultura extremadamente precisa del abdomen, espalda y 
              brazos, combinada con lipotransferencia de grasa en áreas como glúteos o pectorales, según el caso.
            </p>
            <div className="flex items-start">
              <span className="text-yellow-400 mr-3 mt-1">•</span>
              <span>El Dr. Pérez emplea esta técnica en un alto porcentaje de sus pacientes, logrando resultados naturales, estéticos y acordes al cuerpo de cada persona.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Nuestros excelentes resultados</h2>
          <button className="bg-white border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors">
            Ver galería
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 border-b-4 border-blue-900 pb-4 inline-block">
            Preguntas frecuentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                  {openFAQ === index ? 
                    <ChevronUp className="w-5 h-5 text-blue-900" /> : 
                    <ChevronDown className="w-5 h-5 text-blue-900" />
                  }
                </button>
                {openFAQ === index && isMounted && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-white border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors">
              Ver más
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiposuccionPage;