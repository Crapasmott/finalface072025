"use client";

import React from 'react';
import { ArrowRight, Eye, Heart, Users } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section 
        className="relative h-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/galeria-banner.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-5xl font-bold text-blue-900">Galería</h1>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Categorías de Galería</h2>
          <h3 className="text-2xl font-bold text-blue-900 mb-12 text-center">Explora Nuestros Resultados</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <a href="/galeria/procedimientos-faciales" className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/galeria-faciales.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/60 transition-all duration-500"></div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-300">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Procedimientos Faciales</h4>
                <p className="text-white/90 mb-4 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">Rinoplastias, blefaroplastias, lifting facial y más transformaciones naturales</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-300 font-semibold text-sm">150+ casos</span>
                  <span className="inline-flex items-center text-white font-semibold text-sm group-hover:text-yellow-300 transition-colors duration-300">Ver Galería <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" /></span>
                </div>
              </div>
            </a>

            <a href="/galeria/procedimientos-corporales" className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/galeria-corporales.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/60 transition-all duration-500"></div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Procedimientos Corporales</h4>
                <p className="text-white/90 mb-4 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">Liposucciones, abdominoplastias, mamoplastias con resultados espectaculares</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-300 font-semibold text-sm">200+ casos</span>
                  <span className="inline-flex items-center text-white font-semibold text-sm group-hover:text-yellow-300 transition-colors duration-300">Ver Galería <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" /></span>
                </div>
              </div>
            </a>

            <a href="/galeria/testimonios" className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/galeria-testimonios.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/60 transition-all duration-500"></div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Testimonios</h4>
                <p className="text-white/90 mb-4 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">Experiencias reales, videos y relatos auténticos de transformación</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-300 font-semibold text-sm">500+ testimonios</span>
                  <span className="inline-flex items-center text-white font-semibold text-sm group-hover:text-yellow-300 transition-colors duration-300">Ver Testimonios <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" /></span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}