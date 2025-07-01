'use client'

import { useState, useRef } from 'react'

export default function WelcomeSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-light text-[#2c5aa0] mb-4">
                Bienvenidos
              </h2>
              <div className="w-24 h-1 bg-[#2c5aa0]"></div>
            </div>

            {/* Description Text */}
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Gracias por visitar mi sitio web. Como especialista en cirugía plástica, 
                estoy comprometido a ofrecer los más altos estándares de atención y 
                resultados excepcionales.
              </p>
              <p>
                Te invito a conocer más sobre mis servicios y filosofía de trabajo.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full lg:w-auto bg-white border-2 border-[#2c5aa0] text-[#2c5aa0] px-8 py-4 rounded-full font-medium hover:bg-[#2c5aa0] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                {/* Icono - Puedes usar SVG o imagen */}
                <div className="w-5 h-5 flex items-center justify-center">
                  {/* OPCIÓN 1: Imagen PNG/SVG */}
                  <img 
                    src="/images/icons/agenda-icon.png" 
                    alt="Agenda" 
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      // Si no encuentra la imagen, muestra el SVG de respaldo
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'block';
                    }}
                  />
                  {/* OPCIÓN 2: SVG de respaldo */}
                  <svg className="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                Agenda tu cita
              </button>

              <button className="w-full lg:w-auto bg-white border-2 border-[#2c5aa0] text-[#2c5aa0] px-8 py-4 rounded-full font-medium hover:bg-[#2c5aa0] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                {/* Icono - Puedes usar SVG o imagen */}
                <div className="w-5 h-5 flex items-center justify-center">
                  {/* OPCIÓN 1: Imagen PNG/SVG */}
                  <img 
                    src="/images/icons/consulta-icon.png" 
                    alt="Consulta" 
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      // Si no encuentra la imagen, muestra el SVG de respaldo
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'block';
                    }}
                  />
                  {/* OPCIÓN 2: SVG de respaldo */}
                  <svg className="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                Consulta Virtual
              </button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controls
                preload="metadata"
              >
                <source src="/images/videos/Bienvenida a los visitantes de la web - subtitulado.mp4" />
                <source src="/videos/doctor-welcome.webm" type="video/webm" />
                Tu navegador no soporta el elemento de video.
              </video>

              {/* Video Overlay with Play Button - Solo cuando está pausado */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayPause}
                    className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl border-4 border-white"
                  >
                    <svg className="w-8 h-8 text-[#2c5aa0] ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Video Description */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Conoce más sobre mi filosofía de trabajo y compromiso con la excelencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}