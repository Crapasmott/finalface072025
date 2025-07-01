"use client";
import dynamic from 'next/dynamic';

// Componentes estáticos (sin useState)
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import PhilosophySection from '@/components/PhilosophySection';
import TreatmentsSection from '@/components/TreatmentsSection';
import DrFaceSection from '@/components/DrFaceSection';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

// Componentes dinámicos (con useState) - se cargan solo en el cliente
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { 
  ssr: false,
  loading: () => (
    <div className="h-screen bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 flex items-center justify-center">
      <div className="text-white text-2xl">Cargando...</div>
    </div>
  )
});

const SurgicalProceduresSection = dynamic(() => import('@/components/SurgicalProceduresSection'), { 
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
      <div className="text-amber-800 text-xl">Cargando procedimientos...</div>
    </div>
  )
});

const ResultsGallerySection = dynamic(() => import('@/components/ResultsGallerySection'), { 
  ssr: false,
  loading: () => (
    <div className="h-96 bg-white flex items-center justify-center">
      <div className="text-blue-900 text-xl">Cargando galería...</div>
    </div>
  )
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { 
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-50 flex items-center justify-center">
      <div className="text-blue-900 text-xl">Cargando testimonios...</div>
    </div>
  )
});

const AccreditationsSection = dynamic(() => import('@/components/AccreditationsSection'), { 
  ssr: false,
  loading: () => (
    <div className="h-64 bg-white flex items-center justify-center">
      <div className="text-blue-900 text-xl">Cargando acreditaciones...</div>
    </div>
  )
});

const FourCardsSection = dynamic(() => import('@/components/FourCardsSection'), { 
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 flex items-center justify-center">
      <div className="text-gray-800 text-xl">Cargando servicios...</div>
    </div>
  )
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <AccreditationsSection />
      <WelcomeSection />
      <FourCardsSection />
      <PhilosophySection />
      <TreatmentsSection />
      <SurgicalProceduresSection />
      <ResultsGallerySection />
      <TestimonialsSection />
      <DrFaceSection />
      <Footer />
      
      {/* Botón flotante de contacto */}
      <FloatingContactButton
        phoneNumber="+521234567890"        // Cambia por tu número
        whatsappNumber="+521234567890"     // Cambia por tu WhatsApp
        appointmentUrl="/citas"            // Cambia por tu URL de citas
        customImage="/images/doctor.jpg"   // Opcional: tu imagen
        position="bottom-right"
      />
    </main>
  );
}