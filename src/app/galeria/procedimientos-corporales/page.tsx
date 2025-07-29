"use client";

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProcedureCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  procedures: Procedure[];
}

interface Procedure {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  caseCount: number;
}

const Header = () => {
  return (
    <header className="bg-[#2c5aa0] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white">
              <Image
                src="/images/firma-2.png"
                alt="Dr. Andrés Pérez Nieto"
                width={200}
                height={128}
                className="h-32 w-auto"
                priority
              />
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              INICIO
            </Link>
            <Link href="/galeria" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              GALERÍA
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2">
              BLOG
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#2c5aa0] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-white/90 text-sm">
            Copyright 2025 Andrés Pérez Nieto | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function ProcedimientosCorporalesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('senos');

  const procedureCategories: ProcedureCategory[] = [
    {
      id: 'senos',
      title: 'Procedimientos de Senos',
      description: 'Cirugías especializadas para mejorar la forma, tamaño y posición de los senos.',
      imageUrl: '/images/categories/senos-category.jpg',
      procedures: [
        {
          id: 'mamoplastia-aumento',
          name: 'Mamoplastia de Aumento',
          description: 'Aumento del volumen mamario con implantes de última generación.',
          imageUrl: '/images/procedures/mamoplastia-aumento.jpg',
          href: '/galeria/procedimientos-corporales/senos/mamoplastia-aumento',
          caseCount: 8
        },
        {
          id: 'mamoplastia-reduccion',
          name: 'Mamoplastia de Reducción',
          description: 'Reducción del tamaño mamario para mayor comodidad y proporción.',
          imageUrl: '/images/procedures/mamoplastia-reduccion.jpg',
          href: '/galeria/procedimientos-corporales/senos/mamoplastia-reduccion',
          caseCount: 6
        },
        {
          id: 'pexia',
          name: 'Pexia - Elevación Mamaria',
          description: 'Elevación y reposicionamiento de senos caídos para un perfil juvenil.',
          imageUrl: '/images/procedures/pexia.jpg',
          href: '/galeria/procedimientos-corporales/senos/pexia',
          caseCount: 5
        },
        {
          id: 'ginecomastia',
          name: 'Ginecomastia',
          description: 'Corrección del exceso de tejido mamario en hombres.',
          imageUrl: '/images/procedures/ginecomastia.jpg',
          href: '/galeria/procedimientos-corporales/senos/ginecomastia',
          caseCount: 4
        }
      ]
    },
    {
      id: 'corporal',
      title: 'Procedimientos Corporales',
      description: 'Cirugías para contornear y esculpir la silueta corporal.',
      imageUrl: '/images/categories/corporal-category.jpg',
      procedures: [
        {
          id: 'abdominoplastia',
          name: 'Abdominoplastia HD',
          description: 'Eliminación de exceso de piel y grasa abdominal con definición muscular.',
          imageUrl: '/images/procedures/abdominoplastia.jpg',
          href: '/galeria/procedimientos-corporales/corporal/abdominoplastia',
          caseCount: 12
        },
        {
          id: 'liposuccion',
          name: 'Liposucción',
          description: 'Eliminación selectiva de grasa localizada para contornear la figura.',
          imageUrl: '/images/procedures/liposuccion.jpg',
          href: '/galeria/procedimientos-corporales/corporal/liposuccion',
          caseCount: 15
        },
        {
          id: 'gluteoplastia',
          name: 'Gluteoplastia',
          description: 'Aumento y remodelación de glúteos para una silueta atractiva.',
          imageUrl: '/images/procedures/gluteoplastia.jpg',
          href: '/galeria/procedimientos-corporales/corporal/gluteoplastia',
          caseCount: 9
        },
        {
          id: 'brazioplastia',
          name: 'Brazioplastia',
          description: 'Eliminación de exceso de piel en brazos para un contorno definido.',
          imageUrl: '/images/procedures/brazioplastia.jpg',
          href: '/galeria/procedimientos-corporales/corporal/brazioplastia',
          caseCount: 7
        }
      ]
    },
    {
      id: 'intimos',
      title: 'Procedimientos Íntimos',
      description: 'Cirugías especializadas en rejuvenecimiento y estética íntima.',
      imageUrl: '/images/categories/intimos-category.jpg',
      procedures: [
        {
          id: 'labioplastia',
          name: 'Labioplastia',
          description: 'Remodelación de labios menores para mayor comodidad y estética.',
          imageUrl: '/images/procedures/labioplastia.jpg',
          href: '/galeria/procedimientos-corporales/intimos/labioplastia',
          caseCount: 6
        },
        {
          id: 'vaginoplastia',
          name: 'Vaginoplastia',
          description: 'Rejuvenecimiento vaginal para mejorar función y estética.',
          imageUrl: '/images/procedures/vaginoplastia.jpg',
          href: '/galeria/procedimientos-corporales/intimos/vaginoplastia',
          caseCount: 4
        }
      ]
    }
  ];

  const currentCategory = procedureCategories.find(cat => cat.id === selectedCategory);

  const goBack = () => {
    router.push('/galeria');
  };

  const getTotalCases = () => {
    return procedureCategories.reduce((total, category) => {
      return total + category.procedures.reduce((catTotal, procedure) => catTotal + procedure.caseCount, 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gray-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-gray-800 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a Galería Principal
          </button>
          
          <nav className="text-sm text-gray-600">
            <Link href="/galeria" className="hover:text-gray-800">Galería</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Procedimientos Corporales</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Galería de Procedimientos Corporales
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Explora los resultados reales de nuestros pacientes
          </p>
          <p className="text-lg text-gray-500">
            {getTotalCases()} casos documentados con fotos antes y después
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {procedureCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.title}
              <span className="ml-2 text-sm opacity-75">
                ({category.procedures.reduce((total, proc) => total + proc.caseCount, 0)} casos)
              </span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        {currentCategory && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentCategory.title}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {currentCategory.description}
              </p>
            </div>
          </div>
        )}

        {/* Procedures Grid */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCategory.procedures.map((procedure) => (
              <Link
                key={procedure.id}
                href={procedure.href}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-blue-600 font-bold text-lg">
                          {procedure.caseCount}
                        </span>
                      </div>
                      <span className="text-blue-800 font-medium">Casos</span>
                    </div>
                  </div>
                  
                  {/* Badge with case count */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {procedure.caseCount} casos
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {procedure.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {procedure.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium text-sm">
                      Ver galería →
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 text-xs font-medium">
                        Casos disponibles
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Statistics Section */}
        <div className="bg-gray-50 rounded-xl p-8 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Estadísticas de Nuestra Galería
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {getTotalCases()}
              </div>
              <div className="text-gray-700 font-medium">
                Total de Casos Documentados
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {procedureCategories.length}
              </div>
              <div className="text-gray-700 font-medium">
                Categorías de Procedimientos
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {procedureCategories.reduce((total, cat) => total + cat.procedures.length, 0)}
              </div>
              <div className="text-gray-700 font-medium">
                Tipos de Procedimientos
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para tu Transformación?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Consulta con el Dr. Pérez y descubre cuál es el procedimiento ideal para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Agendar Consulta
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Ver Más Procedimientos
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}