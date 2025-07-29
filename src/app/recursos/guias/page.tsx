"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GuiasPrePostPage() {
  const postOperativeSymptoms = [
    {
      title: "Inflamación y \"morados\"",
      description: "Es habitual que aparezcan en los días posteriores a la cirugía. Su intensidad puede variar dependiendo del tipo de procedimiento realizado. Los morados cambiarán de color durante su proceso de resolución, pasando por tonos verdes y amarillos antes de desaparecer completamente."
    },
    {
      title: "Dolor leve a moderado", 
      description: "Dependiendo del tipo de cirugía y de la sensibilidad individual, es posible sentir molestias o dolor leve. Éste suele ser controlable con los medicamentos indicados. Si el dolor aumenta progresivamente o se vuelve intenso, es importante contactar de inmediato al equipo médico."
    },
    {
      title: "Sangrado leve",
      description: "Un sangrado escaso a través de las incisiones o drenajes quirúrgicos puede considerarse normal en los primeros días. No obstante, si el sangrado es significativo o persistente, se debe comunicar al equipo médico de inmediato."
    },
    {
      title: "Entumecimiento o pérdida de sensibilidad",
      description: "Es común sentir adormecimiento en las zonas cercanas a las incisiones. Esta sensación puede ser temporal y mejorar gradualmente, respetando el tiempo que el cuerpo necesita en semanas o meses."
    },
    {
      title: "Náuseas o vómitos",
      description: "Pueden presentarse como efecto secundario de la anestesia o de algunos medicamentos utilizados durante la cirugía. Si tienes antecedentes de sensibilidad a estos fármacos, por favor, comunícalo antes del procedimiento para tomar las medidas preventivas necesarias."
    },
    {
      title: "Enrojecimiento o picazón en las heridas",
      description: "Durante el proceso de cicatrización, las heridas pueden cambiar de color (de rosado a rojizo) y generar algo de picazón. Tras un adecuado cuidado, normalmente mejoran rápido. Si el enrojecimiento es excesivo, hay secreción con mal olor o se presenta fiebre, se debe indicar a una cuenta inmediatamente para su uso prolongado, según el caso."
    }
  ];

  const facialProcedures = [
    {
      category: "Cuidado diario de la piel",
      items: [
        "Establecimiento de una rutina de calidad médica como ácido ascórbico, vitamina C, especialmente, protector solar de amplio espectro. Sus resultados ayudan a mantener la piel saludable, firme y luminosa por más tiempo.",
        "Tratamientos cosméticos complementarios: La aplicación de procedimientos que permitan la protección natural de colágeno en la piel: Hifu, Plasma Rico en Plaquetas, Bioestimuladores, Microneedling con plasma con en plaquetas y otros tratamientos de mantenimiento."
      ]
    },
    {
      category: "Lipofilling facial con células madre",
      items: [
        "Según la experiencia del Dr. Pérez, este procedimiento cada 2 a 3 años ayuda a mantener la calidad de la piel y el volumen facial. Es una excelente estrategia para prevenir el envejecimiento prematuro y preservar los resultados de forma natural."
      ]
    },
    {
      category: "Aplicación de toxina botulínica (Botox)",
      items: [
        "Realizar esta reaplicación aproximadamente cada año ayuda a prevenir la aparición de líneas finas de expresión facial, manteniendo una apariencia joven y descansada."
      ]
    }
  ];

  const corporalProcedures = [
    {
      category: "Alimentación balanceada y personalizada",
      items: [
        "Un plan nutricional que incluya alimentos nutritivos que contribuyan no solo a mantener los resultados estéticos, sino también al bienestar general."
      ]
    },
    {
      category: "Actividad física regular",
      items: [
        "Ejercitarse de 3 a 4 veces por semana favorece el tono muscular, mejora la circulación y fortalece tu bienestar general, ayudando a mantener exitosamente los resultados de procedimientos como liposucción o cirugía abdominal."
      ]
    }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-200">
        {/* Hero Section - Imagen 1 */}
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                Guías pre y post operatorias
              </h1>
              <div className="w-96 h-1 bg-blue-900 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Introducción - Imagen 2 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-blue-900 mb-8 leading-relaxed">
                Para el Dr. Pérez, ayudarte a verte tan joven y bella como te sientes por dentro es más que un propósito: es nuestro 
                mayor compromiso. Muy pronto comenzarás una experiencia transformadora, y nos sentimos profundamente 
                honrados de acompañarte en este camino hacia una mejor versión de ti misma.
              </p>
              
              <p className="text-lg text-blue-900 mb-12 leading-relaxed">
                Como cirujano plástico, es un privilegio haber sido elegido para llevar a cabo este procedimiento que has deseado con 
                tanto entusiasmo. Mi compromiso —y el de todo mi equipo— es total: trabajaremos con profesionalismo, precisión y 
                dedicación para lograr resultados armónicos y naturales. Queremos que sepas que estamos aquí para ti en todo momento... pero que nadie lo sepa.
                Durante cada etapa de tu tratamiento, podrás contar con nuestro acompañamiento y asesoría personalizada. Estamos 
                aquí para ti.
              </p>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Consideraciones Generales</h2>
                
                <p className="text-lg text-blue-900 mb-6 leading-relaxed">
                  Una buena preparación es clave para alcanzar excelentes resultados y asegurar una recuperación óptima. Por eso, es 
                  fundamental que conozcas qué hacer antes de la cirugía y qué esperar después. Esto te permitirá afrontar cada fase 
                  del proceso con tranquilidad y confianza.
                </p>
                
                <p className="text-lg text-blue-900 mb-6 leading-relaxed">
                  Es importante entender que cada cuerpo reacciona de forma diferente. La inflamación, la cicatrización y el ritmo de 
                  recuperación varían entre pacientes, por lo que te recomendamos no comparar tu proceso con el de otras personas. La 
                  paciencia y el seguimiento de las indicaciones médicas serán tus mejores aliados.
                </p>
                
                <p className="text-lg text-blue-900 leading-relaxed">
                  Con más de 30 años de experiencia y miles de procedimientos realizados, puedo asegurar que la gran mayoría de 
                  nuestros pacientes viven una recuperación tranquila y sin complicaciones. Esto se debe a que utilizamos técnicas 
                  quirúrgicas mínimamente invasivas, altamente predecibles y apoyadas en tecnología de última generación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fases de Recuperación - Imagen 3 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-12">
                Fases de la Recuperación
              </h2>
              <div className="w-64 h-1 bg-blue-900 mb-12"></div>
              
              <div className="space-y-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                    1. Fase Temprana (0 a 14 días):
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta etapa comprende los primeros días tras la cirugía. Durante las primeras 48 a 72 horas, es normal 
                    presentar mayor inflamación. Sin embargo, a partir del tercer día, suele comenzar una rápida mejoría. Para la 
                    segunda semana, muchos pacientes ya se sienten listos para retomar sus actividades cotidianas y laborales, 
                    aunque el proceso de recuperación sigue en marcha.
                    Entre los signos más comunes que pueden indicar que una persona es candidata a este procedimiento se 
                    encuentran:
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                    2. Fase Tardía (hasta 6 meses o más):
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    En esta fase, el cuerpo continúa cicatrizando internamente. Las cicatrices se suavizan progresivamente y los 
                    resultados finales comienzan a consolidarse. Es en este período cuando la apariencia alcanza su máxima 
                    naturalidad.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Para ayudarte a visualizar este proceso, hemos creado un video que llamamos "La montaña rusa de la 
                    recuperación", donde te explicamos de forma clara y realista cómo evoluciona el cuerpo día a día tras la 
                    cirugía.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos y Timeline - Imagen 4 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* Estamos Contigo */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">
                    Estamos Contigo en Cada Paso
                  </h2>
                  <p className="text-lg text-blue-900 mb-6 leading-relaxed">
                    Recuerda: la cirugía plástica es una experiencia 
                    transformadora y positiva, siempre que esté 
                    acompañada de expectativas realistas, cuidados 
                    adecuados y un equipo médico comprometido con tu 
                    bienestar.
                  </p>
                  <p className="text-lg text-blue-900 leading-relaxed">
                    Nos sentimos orgullosos de acompañarte en este 
                    proceso tan importante. Gracias por tu confianza.
                  </p>
                </div>
                <div className="bg-blue-900 p-8 rounded-lg text-center">
                  <div className="text-white text-lg mb-4">Video Explicativo</div>
                  <div className="bg-blue-800 p-4 rounded">
                    <span className="text-white">🎥 La montaña rusa de la recuperación</span>
                  </div>
                </div>
              </div>

              {/* Indicaciones Preoperatorias */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">
                    Indicaciones preoperatorias
                  </h2>
                  <p className="text-lg text-blue-900 leading-relaxed">
                    Previo a cualquier tipo de procedimiento quirúrgico se 
                    deben tener en cuenta una serie de instrucciones que 
                    serán fundamentales tanto para el éxito de la cirugía 
                    y la prevención de posibles complicaciones. Por esta 
                    razón aconsejamos a nuestros pacientes seguir 
                    cuidadosamente cada una de las indicaciones que a 
                    continuación podrás encontrar en el video:
                  </p>
                </div>
                <div className="bg-blue-600 p-8 rounded-lg text-center">
                  <div className="text-white text-lg mb-4">Recomendaciones Preoperatorias</div>
                  <div className="bg-blue-500 p-4 rounded">
                    <span className="text-white">🎥 Video de Preparación</span>
                  </div>
                </div>
              </div>

              {/* Timeline - Imagen 2 */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                  Línea de tiempo pre y postoperatoria
                </h3>
                
                {/* Imagen del timeline */}
                <div className="text-center">
                  <img 
                    src="/images/guias/timeline-prepost.jpg" 
                    alt="Línea de tiempo pre y postoperatoria para cirugía"
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Síntomas Postoperatorios - Imagen 5 */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                ¿Qué se puede esperar luego de la cirugía?
              </h2>
              
              <p className="text-lg mb-12 text-center leading-relaxed">
                Es fundamental que comprendas que, tras un procedimiento quirúrgico, pueden presentarse ciertos síntomas 
                secundarios. La mayoría de estas manifestaciones son normales, transitorias y varían según cada paciente. Aunque 
                las complicaciones serias son poco frecuentes, es clave estar en constante comunicación con nosotros para 
                resolver cualquier duda que puedas tener sobre tu evolución.
              </p>
              
              <p className="text-lg mb-12 text-center leading-relaxed">
                A continuación, te explicamos las reacciones más comunes y esperadas en el postoperatorio:
              </p>

              <div className="grid gap-6">
                {postOperativeSymptoms.map((symptom, index) => (
                  <div key={index} className="bg-blue-100 p-6 rounded-lg text-blue-900">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{symptom.title}</h3>
                        <p className="leading-relaxed">{symptom.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg font-semibold">
                  <strong>Recuerda:</strong> Ante cualquier síntoma que te preocupe o si notas cambios inesperados, no dudes en comunicarte con nuestro 
                  equipo. Estamos para acompañarte en cada etapa de tu recuperación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Videos de Cuidado - Imagen 6 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                La Clave del Éxito: Un Buen Cuidado Postoperatorio
              </h2>
              
              <p className="text-lg text-blue-900 mb-12 leading-relaxed">
                El éxito de una cirugía no depende únicamente del procedimiento en sí, sino también del compromiso del paciente 
                con su proceso de recuperación. Seguir adecuadamente las indicaciones médicas y mantener un compromiso 
                responsable con las indicaciones de nuestro equipo, es fundamental para obtener los mejores resultados y vivir una experiencia 
                satisfactoria.
              </p>
              
              <p className="text-lg text-blue-900 mb-12 leading-relaxed">
                Por eso, hemos preparado una serie de videos educativos que cubren los cuidados postoperatorios de los 
                procedimientos quirúrgicos que realizamos con mayor frecuencia. Estos materiales han sido diseñados 
                cuidadosamente para que tengas acceso en cualquier momento y que te resulte fácil y accesible seguir cada una de las instrucciones que te 
                ayuden a recuperarte de la mejor manera.
              </p>
              
              <div className="mb-12">
                <p className="text-lg text-blue-900 mb-8 font-semibold">
                  Te recomendamos ver estos videos antes de tu procedimiento.
                </p>
                
                <p className="text-lg text-blue-900 mb-8">
                  Te ayudarán a entender mejor cada etapa de la recuperación y te permitirán afrontar el proceso con mayor 
                  tranquilidad y confianza.
                </p>
              </div>

              {/* Video Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-900 p-6 rounded-lg text-center">
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Cuidados postoperatorios de Lifting Facial en Bogotá
                  </h3>
                  <div className="bg-blue-800 p-4 rounded">
                    <span className="text-white">🎥 Cuidados post-operatorio lifting facial en Bogotá</span>
                  </div>
                </div>

                <div className="bg-blue-900 p-6 rounded-lg text-center">
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Cuidados postoperatorios de Blefaroplastia
                  </h3>
                  <div className="bg-blue-800 p-4 rounded">
                    <span className="text-white">🎥 Cuidados post-operatorio blefaroplastia</span>
                  </div>
                </div>

                <div className="bg-blue-900 p-6 rounded-lg text-center">
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Cuidados postoperatorios de Rinoplastia
                  </h3>
                  <div className="bg-blue-800 p-4 rounded">
                    <span className="text-white">🎥 Cuidados post-operatorio Rinoplastia</span>
                  </div>
                </div>

                <div className="bg-blue-900 p-6 rounded-lg text-center">
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Cuidados postoperatorios de Abdominoplastia
                  </h3>
                  <div className="bg-blue-800 p-4 rounded">
                    <span className="text-white">🎥 Cuidados post-operatorio abdominoplastia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mantenimiento de Resultados - Imagen 7 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Mantenimiento de los Resultados Postoperatorios
              </h2>
              
              <p className="text-lg text-blue-900 mb-8 leading-relaxed">
                Como ocurre con muchos aspectos importantes de nuestra vida, los resultados de una cirugía estética también 
                necesitan mantenimiento. Es vital proteger las mejoras estéticas logradas a través del tiempo.
              </p>
              
              <p className="text-lg text-blue-900 mb-8 leading-relaxed">
                Un procedimiento quirúrgico puede ayudarte a rejuvenecer tu apariencia o mejorar ciertas áreas de tu cuerpo o del 
                rostro. Sin embargo, es importante entender que el paso del tiempo continúa y que ciertos hábitos y tratamientos no quirúrgicos 
                pueden contribuir significativamente para mantener esos resultados permanentes. Lo que se puede hacer es cuidar y potenciar esos resultados para mantenerlos en su mejor 
                versión a través del tiempo.
              </p>
              
              <p className="text-lg text-blue-900 mb-12 leading-relaxed">
                A continuación, te compartimos algunas recomendaciones para preservar los efectos de tu cirugía, tanto en 
                procedimientos faciales como corporales:
              </p>

              {/* Procedimientos Faciales */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-blue-900 mb-8">Procedimientos Faciales</h3>
                
                <div className="space-y-8">
                  {facialProcedures.map((procedure, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                      <h4 className="text-xl font-semibold text-blue-900 mb-4">• {procedure.category}</h4>
                      <ul className="space-y-3">
                        {procedure.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-lg text-gray-700 leading-relaxed pl-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedimientos Corporales */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-8">Procedimientos Corporales</h3>
                
                <div className="space-y-8">
                  {corporalProcedures.map((procedure, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                      <h4 className="text-xl font-semibold text-blue-900 mb-4">• {procedure.category}</h4>
                      <ul className="space-y-3">
                        {procedure.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-lg text-gray-700 leading-relaxed pl-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}