"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PasoAPasoPage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Tu Contacto",
      active: true
    },
    {
      id: 2, 
      title: "Tu primera cita",
      active: false
    },
    {
      id: 3,
      title: "Tu Asistente", 
      active: false
    },
    {
      id: 4,
      title: "Tu Pasaporte",
      active: false
    },
    {
      id: 5,
      title: "Tu Cirugía",
      active: false
    },
    {
      id: 6,
      title: "Tu Seguimiento",
      active: false
    },
    {
      id: 7,
      title: "Regreso a la normalidad",
      active: false
    }
  ];

  const stepContent = {
    1: {
      title: "Tu experiencia hace la diferencia",
      subtitle: "Contáctanos",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-blue-900 mb-6">
              Si ya tomaste la decisión o estás pensando realizarte un 
              procedimiento para mejorar e iluminar tu apariencia no 
              dudes en ponerte en contacto con nosotros.
            </p>
            <p className="text-lg text-blue-900 mb-8">
              Nuestro equipo está siempre listo para atenderte y 
              contamos con diferentes opciones:
            </p>
            <ul className="space-y-3 text-blue-900">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Puedes llamarnos a alguno de nuestros teléfonos:</strong><br/>
                3164953755 – 6299551</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Contactarnos al WhatsApp:</strong> +573164953755</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Llenar el formulario que encuentras en esta página web:</strong><br/>
                https://drandrespereznieto.com/contactenos/</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Enviarnos un correo a:</strong> info@drandrespereznieto.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Escribirnos en cualquiera de nuestras redes sociales:</strong><br/>
                Facebook o Instagram</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/paso-a-paso/contacto.jpg" 
              alt="Contacto"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    2: {
      title: "Será un gusto poder atenderte",
      subtitle: "Tu primera cita",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Cita Presencial</h4>
              <p className="text-lg text-blue-900">
                Para todos aquellos pacientes que pueden asistir a la cita 
                directamente en el consultorio del Dr. Pérez.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Cita Virtual</h4>
              <p className="text-lg text-blue-900 mb-4">
                Para todos aquellos pacientes que viven fuera de Bogotá 
                ya sea en Colombia o en el exterior. Se lleva a cabo a 
                través de internet gracias a que contamos con modernas 
                plataformas online para la realización de estas citas 
                virtuales con la seguridad y privacidad necesarias.
              </p>
              <p className="text-lg text-blue-900">
                Para la realización de la cita virtual el Dr. Pérez solicita 
                previamente el envío de fotos y en algunos casos de 
                video de las áreas de tu cuerpo que deseas mejorar; esto 
                es con el propósito de poder llevar a cabo una adecuada 
                valoración de cada caso en particular.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/paso-a-paso/primera-cita.jpg" 
              alt="Primera Cita"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    3: {
      title: "Te acompañamos en cada paso de tu proceso",
      subtitle: "Tu asistente",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-blue-900 mb-6">
              Con el propósito de prestarte toda la guía y asesoría 
              durante el proceso previo y posterior a tu cirugía, una de 
              nuestras asistentes estará presta a brindarte toda la 
              información concerniente a:
            </p>
            <ul className="space-y-3 text-blue-900 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Cuales son los requisitos previos a la realización de la cirugía</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Agendamiento de la fecha y hora tanto de la cirugía como de la cita de pre-anestesia.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Las diferentes formas de pago</span>
              </li>
            </ul>
            <p className="text-lg text-blue-900">
              Para aquellos pacientes procedentes del exterior contamos 
              con una coordinadora bilingüe quien se pondrá en contacto 
              directo contigo con el fin de asesorarte en todos los detalles 
              referentes a las fechas de viaje, opciones de hospedaje y 
              transporte entre muchas otras.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/paso-a-paso/asistente.jpg" 
              alt="Tu Asistente"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    4: {
      title: "Tu seguridad es nuestra prioridad",
      subtitle: "Pasaporte para tu cirugía",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-blue-900 mb-6">
              Para el Dr. Pérez y todo su equipo de trabajo, tu seguridad 
              y bienestar es una de nuestras mayores prioridades, por 
              esta razón hemos creado este pasaporte, el cual una vez 
              hayas completado te permitirá llegar completamente 
              preparada y de forma segura de a tu cirugía. No tienes 
              porque preocuparte porque cada uno de los detalles de tu 
              preparación será supervisado, y si tienes dudas o 
              inquietudes estaremos prestos a resolverlas.
            </p>
            <p className="text-lg text-blue-900 mb-6">
              Este pasaporte para cirugía incluye el visto bueno de cada 
              uno de los siguientes requisitos:
            </p>
            <ul className="space-y-3 text-blue-900">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Laboratorios y demás exámenes paraclínicos ordenados por el Dr. Pérez.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Cita de preanestesia,</strong> la cual se lleva a cabo en la clínica personalmente con uno de los anestesiólogos y se lleva a cabo de uno a dos días previos al procedimiento.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>La aprobación y firma por parte del paciente de los consentimientos informados para cada uno de los procedimientos que se vayan a realizar.</strong></span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/paso-a-paso/pasaporte.jpg" 
              alt="Pasaporte Cirugía"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    5: {
      title: "El día que tanto anhelabas ha llegado, nosotros lo haremos muy especial",
      subtitle: "Tu cirugía",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-blue-900 mb-6">
              Cuando llegue este día tan esperado, ya todo estará 
              preparado por parte del equipo del Dr. Pérez, con el fin de 
              brindarte la mejor experiencia posible.
            </p>
            <p className="text-lg text-blue-900 mb-6">
              Previo al inicio de la cirugía, el Dr. Pérez lleva a cabo varios 
              pasos importantes:
            </p>
            <ul className="space-y-3 text-blue-900 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Se toman las fotos preoperatorias, de acuerdo a los procedimientos que se vayan a realizar.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>El Dr. Pérez lleva a cabo la demarcación de las incisiones que vayan a ser necesarias y de los demás detalles relevantes para la adecuada realización de la cirugía. Esto tiene como finalidad plasmar y dejar claro el planeamiento preoperatorio de cada uno de los procedimientos.</span>
              </li>
            </ul>
            <p className="text-lg text-blue-900 mb-6">
              <strong>Una vez finalizada la cirugía:</strong>
            </p>
            <ul className="space-y-3 text-blue-900">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>El paciente permanecerá en el área de recuperación, el tiempo que sea necesario, bajo la supervisión y monitoreo permanentes del personal médico y de enfermería encargados.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Una vez se corrobore que el paciente se encuentra en óptimas condiciones, se autorizará su salida de la clínica y se le impartirán las recomendaciones necesarias para el manejo en casa.</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/paso-a-paso/cirugia.jpg" 
              alt="Tu Cirugía"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    6: {
      title: "Cada paso de tu recuperación será vigilado por nosotros",
      subtitle: "Recuperación y controles postoperatorios",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-blue-900 mb-6">
              Para el Dr. Pérez es igualmente importante tanto la realización 
              de un excelente procedimiento quirúrgico, como la supervisión 
              de un adecuado proceso postoperatorio.
            </p>
            <p className="text-lg text-blue-900 mb-6">
              Por esta razón alguien de su equipo de trabajo establecerá 
              contacto contigo la mañana siguiente a la cirugía y por lo 
              general se te solicita el envío de un video o de algunas fotos 
              con el fin de evaluar tu estado y tu adecuada evolución. Dentro 
              del equipo de trabajo del Dr. Pérez contamos con enfermeras 
              especializadas que pueden, si estas de acuerdo, realizarte una 
              visita o el acompañamiento domiciliarios que sean necesarios.
            </p>
            <p className="text-lg text-blue-900 mb-6">
              Dependiendo del tipo de procedimientos que se hayan 
              realizado, se coordinarán tus controles postoperatorios con el 
              Dr. Pérez, durante los cuales se llevará a cabo el retiro de los 
              puntos de sutura y de los vendajes que sea necesarios, así 
              mismo se te impartirán todas las indicaciones que garanticen 
              una adecuada evolución.
            </p>
            <p className="text-lg text-blue-900">
              Consciente de que uno de los temores más frecuentes de los 
              pacientes previo a un procedimiento quirúrgico son el dolor y la 
              inflamación postoperatoria, el Dr Pérez ha trabajado durante 
              años en todas aquellas alternativas que permitan 
              recuperaciones más suaves y con procesos inflamatorios muy 
              mínimos. Por esta razón ha implementado diferentes 
              alternativas terapéuticas de medicina natural para tu 
              preparación pre-operatoria, además de contar con técnicas de 
              cirugía a traumáticas y mínimamente invasivas.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/paso-a-paso/seguimiento.jpg" 
              alt="Tu Seguimiento"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    7: {
      title: "Disfruta de un cambio natural y hecho a tu medida",
      subtitle: "Regreso a la normalidad",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-blue-900 mb-6">
              Uno de los aspectos que mayor satisfacción genera en 
              los pacientes del Dr. Pérez es la posibilidad de poder 
              regresar a sus actividades normales de forma más 
              temprana y segura.Esto se debe a todas las medidas que 
              él lleva a cabo tanto en tu preparación previa como 
              dentro de tu cirugía, destinadas a disminuir al máximo el 
              proceso inflamatorio postoperatorio.
            </p>
            <p className="text-lg text-blue-900">
              Durante tu proceso de recuperación y de acuerdo a la 
              evolución que presentes se te irá dando toda la 
              información que te deje saber cuáles actividades podrás 
              ir retomando sin poner en riesgo tu recuperación.
              Es importante que entiendas que los resultados de tu 
              cirugía se irán haciendo evidentes de forma progresiva en 
              la medida que el proceso inflamatorio vaya 
              desapareciendo y esto es diferente para cada tipo de 
              procedimiento.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/paso-a-paso/normalidad.jpg" 
              alt="Regreso a la Normalidad"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-200">
        {/* Hero Section */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-blue-900">
              Tus pasos hacia una experiencia inolvidable
            </h1>
            
            {/* Navigation Steps */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeStep === step.id
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                  {stepContent[activeStep as keyof typeof stepContent].title}
                </h2>
                <h3 className="text-xl font-semibold text-blue-900 mb-8">
                  {stepContent[activeStep as keyof typeof stepContent].subtitle}
                </h3>
              </div>
              
              {stepContent[activeStep as keyof typeof stepContent].content}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  activeStep === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                ← Anterior
              </button>
              
              <button
                onClick={() => setActiveStep(Math.min(7, activeStep + 1))}
                disabled={activeStep === 7}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  activeStep === 7
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Siguiente →
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}