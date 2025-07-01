"use client";
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/foto1.jpg',
    title: 'Dr. Andrés Pérez Nieto',
    subtitle: 'International Plastic Surgeon',
    description: 'La experiencia que hace la diferencia.'
  },
  {
    id: 2,
    image: '/images/slider1.jpeg',
    title: 'Dr. Andrés Pérez Nieto',
    subtitle: 'International Plastic Surgeon', 
    description: 'La experiencia que hace la diferencia.'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden mb-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full relative">
            <img 
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.style.display = 'block';
              }}
            />
            <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 hidden">
              <div className="w-full h-full bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <p className="text-sm">Imagen de fondo: {slide.image}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl text-white">
                <h1 className="text-6xl lg:text-7xl font-light mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <div className="w-24 h-1 bg-white mb-6"></div>
                
                <p className="text-xl lg:text-2xl mb-8 font-light">
                  {slides[currentSlide].subtitle}
                </p>
                
                <p className="text-lg lg:text-xl mb-12 text-gray-200">
                  {slides[currentSlide].description}
                </p>

                <div className="flex gap-3">
                  <a href="/dr-perez" className="bg-gray-400 rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 hover:bg-gray-300 transition-all">
                    <svg className="w-10 h-10 text-blue-600 mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 text-sm text-center font-medium">Dr. Pérez</span>
                  </a>

                  <a href="/consulta-virtual" className="bg-gray-400 rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 hover:bg-gray-300 transition-all">
                    <svg className="w-10 h-10 text-blue-600 mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                    </svg>
                    <span className="text-gray-800 text-sm text-center font-medium">Consulta Virtual</span>
                  </a>

                  <a href="/agenda-cita" className="bg-gray-400 rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 hover:bg-gray-300 transition-all">
                    <svg className="w-10 h-10 text-blue-600 mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 text-sm text-center font-medium">Agenda tu cita</span>
                  </a>

                  <a href="/galeria" className="bg-gray-400 rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 hover:bg-gray-300 transition-all">
                    <svg className="w-10 h-10 text-blue-600 mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 text-sm text-center font-medium">Galería</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}