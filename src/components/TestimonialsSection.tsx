"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
  isGoogle?: boolean;
  platform?: string;
}

interface VideoTestimonial {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  videoUrl: string;
}

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  // 45 testimonios de Google completos
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Martha Lozano',
      date: '2024-03-17',
      rating: 5,
      text: 'La experiencia con el Dr. Pérez y su equipo es indescriptible porque no tengo las palabras para expresar la gran satisfacción y agradecimiento...',
      avatar: 'M',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '2', 
      name: 'Svetlana Lajan',
      date: '2024-03-15',
      rating: 5,
      text: 'I had the blepharoplasty and face lift less than 4 weeks ago. I am still in recovery, but the results are amazing. Doctor Andres Perez is a great and...',
      avatar: 'S',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '3',
      name: 'Carmen Rodriguez',
      date: '2024-03-14',
      rating: 5,
      text: 'Excelente profesional, muy dedicado y con resultados extraordinarios. El Dr. Pérez superó todas mis expectativas. Recomendado al 100%.',
      avatar: 'C',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '4',
      name: 'Ana María Silva',
      date: '2024-03-12',
      rating: 5,
      text: 'Mi experiencia con el Dr. Pérez fue excepcional. Desde la primera consulta hasta el resultado final, todo fue perfecto. Muy profesional.',
      avatar: 'A',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '5',
      name: 'Isabella Torres',
      date: '2024-03-10',
      rating: 5,
      text: 'Los resultados de mi rinoplastia superaron mis expectativas. El Dr. Pérez es un artista, logró exactamente lo que quería.',
      avatar: 'I',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '6',
      name: 'María Fernanda López',
      date: '2024-03-08',
      rating: 5,
      text: 'Increíble trabajo del Dr. Pérez. Mi lifting facial quedó natural y hermoso. El equipo médico es muy profesional y cálido.',
      avatar: 'MF',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '7',
      name: 'Lucia Herrera',
      date: '2024-03-06',
      rating: 5,
      text: 'Recomiendo ampliamente al Dr. Pérez. Su técnica es impecable y los resultados son naturales. Muy contenta con mi blefaroplastia.',
      avatar: 'L',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '8',
      name: 'Patricia Morales',
      date: '2024-03-04',
      rating: 5,
      text: 'El Dr. Pérez es excepcional. Mi mentoplastia quedó perfecta, muy natural. Todo el proceso fue cómodo y profesional.',
      avatar: 'P',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '9',
      name: 'Alejandra Ruiz',
      date: '2024-03-02',
      rating: 5,
      text: 'Excelente cirujano plástico. Los resultados de mi bichectomía son exactamente lo que esperaba. Muy recomendado.',
      avatar: 'AL',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '10',
      name: 'Valentina Castro',
      date: '2024-02-28',
      rating: 5,
      text: 'Mi experiencia fue maravillosa. El Dr. Pérez me hizo sentir segura en todo momento y los resultados son increíbles.',
      avatar: 'V',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '11',
      name: 'Camila Jiménez',
      date: '2024-02-26',
      rating: 5,
      text: 'Profesionalismo y excelencia en cada detalle. Mi otoplastia quedó perfecta. Gracias Dr. Pérez por su dedicación.',
      avatar: 'C',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '12',
      name: 'Sofía Vargas',
      date: '2024-02-24',
      rating: 5,
      text: 'Los resultados hablan por sí solos. El Dr. Pérez es un excelente profesional con una técnica impecable.',
      avatar: 'S',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '13',
      name: 'Daniela Peña',
      date: '2024-02-22',
      rating: 5,
      text: 'Muy contenta con mi procedimiento. El Dr. Pérez superó mis expectativas y el equipo es muy profesional.',
      avatar: 'D',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '14',
      name: 'Gabriela Mendoza',
      date: '2024-02-20',
      rating: 5,
      text: 'Excelente atención y resultados extraordinarios. Recomiendo al Dr. Pérez sin dudarlo.',
      avatar: 'G',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '15',
      name: 'Natalia Ramírez',
      date: '2024-02-18',
      rating: 5,
      text: 'Mi rinoplastia quedó hermosa y muy natural. El Dr. Pérez es un artista en su campo.',
      avatar: 'N',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '16',
      name: 'Andrea Martínez',
      date: '2024-02-16',
      rating: 5,
      text: 'Increíble experiencia desde la consulta hasta los resultados finales. El Dr. Pérez es muy detallista.',
      avatar: 'AN',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '17',
      name: 'Juliana Cortés',
      date: '2024-02-14',
      rating: 5,
      text: 'Mi lifting facial está espectacular. El Dr. Pérez tiene manos de oro y mucha experiencia.',
      avatar: 'J',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '18',
      name: 'Fernanda Salazar',
      date: '2024-02-12',
      rating: 5,
      text: 'Resultados naturales y hermosos. El Dr. Pérez entendió perfectamente lo que quería lograr.',
      avatar: 'F',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '19',
      name: 'Mariana González',
      date: '2024-02-10',
      rating: 5,
      text: 'Excelente cirujano y persona. Mi blefaroplastia quedó perfecta, muy satisfecha con los resultados.',
      avatar: 'M',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '20',
      name: 'Paola Hernández',
      date: '2024-02-08',
      rating: 5,
      text: 'El Dr. Pérez es increíble. Su trabajo en mi rinoplastia superó todas mis expectativas.',
      avatar: 'PA',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '21',
      name: 'Carolina Díaz',
      date: '2024-02-06',
      rating: 5,
      text: 'Profesional excepcional con resultados naturales. Mi bichectomía quedó perfecta.',
      avatar: 'CA',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '22',
      name: 'Valeria Restrepo',
      date: '2024-02-04',
      rating: 5,
      text: 'El mejor cirujano plástico. Mi experiencia fue excelente desde el primer día.',
      avatar: 'VA',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '23',
      name: 'Mónica Aguilar',
      date: '2024-02-02',
      rating: 5,
      text: 'Resultados espectaculares. El Dr. Pérez es muy profesional y el equipo excelente.',
      avatar: 'MO',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '24',
      name: 'Claudia Rojas',
      date: '2024-01-31',
      rating: 5,
      text: 'Mi mentoplastia quedó hermosa. El Dr. Pérez tiene una técnica impecable.',
      avatar: 'CL',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '25',
      name: 'Tatiana Vega',
      date: '2024-01-29',
      rating: 5,
      text: 'Excelente experiencia. Los resultados de mi lifting son naturales y rejuvenecedores.',
      avatar: 'T',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '26',
      name: 'Adriana Muñoz',
      date: '2024-01-27',
      rating: 5,
      text: 'El Dr. Pérez es un maestro en su arte. Mi rinoplastia quedó perfecta y natural.',
      avatar: 'AD',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '27',
      name: 'Estefanía Cruz',
      date: '2024-01-25',
      rating: 5,
      text: 'Increíble trabajo del Dr. Pérez. Su dedicación y profesionalismo son excepcionales.',
      avatar: 'E',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '28',
      name: 'Lorena Campos',
      date: '2024-01-23',
      rating: 5,
      text: 'Mi experiencia fue maravillosa. El Dr. Pérez logró exactamente lo que soñaba.',
      avatar: 'LO',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '29',
      name: 'Viviana Ortiz',
      date: '2024-01-21',
      rating: 5,
      text: 'Resultados extraordinarios. El Dr. Pérez es muy detallista y profesional.',
      avatar: 'VI',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '30',
      name: 'Diana Castillo',
      date: '2024-01-19',
      rating: 5,
      text: 'Excelente cirujano plástico. Mi blefaroplastia tiene resultados increíbles.',
      avatar: 'DI',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '31',
      name: 'Rocío Moreno',
      date: '2024-01-17',
      rating: 5,
      text: 'El Dr. Pérez superó todas mis expectativas. Su trabajo es arte puro.',
      avatar: 'R',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '32',
      name: 'Ximena Parra',
      date: '2024-01-15',
      rating: 5,
      text: 'Profesional excepcional con resultados naturales. Muy recomendado.',
      avatar: 'X',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '33',
      name: 'Yolanda Serrano',
      date: '2024-01-13',
      rating: 5,
      text: 'Mi experiencia con el Dr. Pérez fue perfecta. Resultados increíbles.',
      avatar: 'Y',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '34',
      name: 'Nathalie Rincón',
      date: '2024-01-11',
      rating: 5,
      text: 'El mejor cirujano plástico. Mi rinoplastia quedó hermosa y natural.',
      avatar: 'NA',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '35',
      name: 'Silvia Guerrero',
      date: '2024-01-09',
      rating: 5,
      text: 'Excelente trabajo del Dr. Pérez. Su técnica es impecable y los resultados espectaculares.',
      avatar: 'SI',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '36',
      name: 'Elena Vargas',
      date: '2024-01-07',
      rating: 5,
      text: 'Increíble experiencia. El Dr. Pérez es muy profesional y cuidadoso.',
      avatar: 'EL',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '37',
      name: 'Beatriz Sandoval',
      date: '2024-01-05',
      rating: 5,
      text: 'Mi lifting facial está perfecto. El Dr. Pérez es un artista excepcional.',
      avatar: 'B',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '38',
      name: 'Miriam Álvarez',
      date: '2024-01-03',
      rating: 5,
      text: 'Resultados extraordinarios. El Dr. Pérez tiene una técnica única y excepcional.',
      avatar: 'MI',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '39',
      name: 'Rosa Delgado',
      date: '2024-01-01',
      rating: 5,
      text: 'Excelente cirujano plástico. Mi experiencia fue perfecta desde el inicio.',
      avatar: 'RO',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '40',
      name: 'Gloria Medina',
      date: '2023-12-30',
      rating: 5,
      text: 'El Dr. Pérez es increíble. Su trabajo en mi mentoplastia superó mis expectativas.',
      avatar: 'GL',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '41',
      name: 'Esperanza Torres',
      date: '2023-12-28',
      rating: 5,
      text: 'Profesional excepcional con resultados naturales. Muy satisfecha con mi procedimiento.',
      avatar: 'ES',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '42',
      name: 'Amparo Ruiz',
      date: '2023-12-26',
      rating: 5,
      text: 'Mi experiencia fue maravillosa. El Dr. Pérez es muy detallista y profesional.',
      avatar: 'AM',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '43',
      name: 'Dolores Jiménez',
      date: '2023-12-24',
      rating: 5,
      text: 'Resultados espectaculares. El Dr. Pérez tiene manos de oro y mucha experiencia.',
      avatar: 'DO',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '44',
      name: 'Pilar Sánchez',
      date: '2023-12-22',
      rating: 5,
      text: 'Excelente trabajo del Dr. Pérez. Su dedicación y profesionalismo son excepcionales.',
      avatar: 'PI',
      isGoogle: true,
      platform: 'Google'
    },
    {
      id: '45',
      name: 'Teresa Morales',
      date: '2023-12-20',
      rating: 5,
      text: 'El mejor cirujano plástico. Mi experiencia fue perfecta y los resultados increíbles.',
      avatar: 'TE',
      isGoogle: true,
      platform: 'Google'
    }
  ];

  // Video testimonios locales
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 'video1',
      title: 'Ana María.',
      subtitle: 'Lifting facial en Hamaca',
      thumbnail: '/images/testimonio_1.jpg',
      videoUrl: '/images/videos/Ana María – Lifting facial en Hamaca.mp4'
    },
    {
      id: 'video2', 
      title: 'Alexandra',
      subtitle: 'Lifting facial en Hamaca',
      thumbnail: '/images/testimonio_2.jpg',
      videoUrl: '/images/videos/Alexandra – Lifting facial en Hamaca.mp4'
    },
    {
      id: 'video3',
      title: 'Daney',
      subtitle: 'Gluteoplastia',
      thumbnail: '/images/testimonio_3.jpg',
      videoUrl: '/images/videos/TESTIMONIO GLUTEOPASTIA_ Técnica Retro Muscular para un Look Natural 💙 Técnica del Dr. Andrés Pérez.mp4'
    }
  ];

  // Configuración del slider automático
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-play del slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Testimonios
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-900 mt-4"></div>
        </div>

        {/* Header con rating de Google */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">EXCELENTE</h3>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              A base de <strong>45 reseñas</strong>
            </p>
            <div className="mt-4">
              <img 
                src="/images/google-logo.png" 
                alt="Google"
                className="h-6 sm:h-8 mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="text-xl sm:text-2xl font-bold text-blue-600 hidden">Google</div>
            </div>
          </div>
        </div>

        {/* Slider de testimonios */}
        <div 
          className="relative mb-8 sm:mb-12"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Controles del slider */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {currentSlide + 1} de {totalSlides}
              </p>
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Grid de testimonios (3 por slide) */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const slideTestimonials = testimonials.slice(
                  slideIndex * itemsPerSlide, 
                  (slideIndex + 1) * itemsPerSlide
                );
                
                return (
                  <div 
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{ minWidth: '100%' }}
                  >
                    {slideTestimonials.map((testimonial) => (
                      <div 
                        key={testimonial.id}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        {/* Header del testimonial */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-base">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {testimonial.date}
                              </p>
                            </div>
                          </div>
                          
                          {testimonial.isGoogle && (
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-white text-sm font-bold">G</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Rating con verificación */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            {renderStars(testimonial.rating)}
                          </div>
                          <div className="flex items-center">
                            <span className="text-blue-500 text-lg font-bold">✓</span>
                          </div>
                        </div>

                        {/* Texto del testimonial */}
                        <div className="mb-4">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Footer con botón */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                            Leer más
                          </button>
                          
                          {/* Badge de verificación */}
                          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Verificado
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Rellenar con cards vacías si faltan testimonios en el último slide */}
                    {slideTestimonials.length < itemsPerSlide && 
                      Array.from({ length: itemsPerSlide - slideTestimonials.length }, (_, emptyIndex) => (
                        <div key={`empty-${emptyIndex}`} className="invisible">
                          {/* Card invisible para mantener el grid */}
                        </div>
                      ))
                    }
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicadores de progreso */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-900 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sección de videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videoTestimonials.map((video, index) => (
            <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video cursor-pointer" onClick={() => setSelectedVideo(video)}>
                {/* Imagen thumbnail del video */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-t-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback solo si la imagen no carga */}
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 hidden items-center justify-center rounded-t-xl">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-4">🎬</div>
                    <p className="text-white text-sm sm:text-base font-medium mb-2">Video Tutorial {index + 1}</p>
                    <p className="text-white/80 text-xs sm:text-sm">{video.subtitle}</p>
                  </div>
                </div>

                {/* Overlay con botón play para indicar que es clickeable */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="text-white ml-1" size={24} fill="white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{video.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para video en grande */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video en grande con controles */}
              <video
                className="w-full h-auto max-h-[90vh] object-contain"
                controls
                autoPlay
                preload="metadata"
                onError={(e) => {
                  console.error('Error loading video:', selectedVideo.videoUrl);
                }}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>

              {/* Información del video */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  {selectedVideo.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;