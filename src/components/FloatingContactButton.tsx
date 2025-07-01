'use client'

import React, { useState, useEffect } from 'react'

interface FloatingContactButtonProps {
  phoneNumber?: string
  whatsappNumber?: string
  customImage?: string
  position?: 'bottom-right' | 'bottom-left'
  appointmentMessage?: string
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({
  phoneNumber = '+1234567890',
  whatsappNumber = '+1234567890', 
  customImage = '/images/rostros.png',
  position = 'bottom-right',
  appointmentMessage = 'Hola! Me gustaría solicitar una cita médica. ¿Cuáles son los horarios disponibles?'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Ocultar/mostrar el botón al hacer scroll
  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self')
    setIsOpen(false)
  }

  const handleWhatsAppAppointment = () => {
    const cleanNumber = whatsappNumber.replace(/[+\s-]/g, '')
    const encodedMessage = encodeURIComponent(appointmentMessage)
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, '_blank')
    setIsOpen(false)
  }

  const positionClass = position === 'bottom-right' ? 'bottom-8 right-8' : 'bottom-8 left-8'
  const optionsPosition = position === 'bottom-right' ? 'right-0' : 'left-0'

  return (
    <>
      <style jsx>{`
        .floating-container {
          position: fixed;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          filter: drop-shadow(0 12px 35px rgba(0,0,0,0.3));
        }
        
        .floating-container.hidden {
          transform: translateY(100px);
          opacity: 0;
          pointer-events: none;
        }
        
        .main-button {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(71, 85, 105, 0.15);
        }
        
        .main-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }
        
        .main-button:hover::before {
          opacity: 1;
        }
        
        .main-button:hover {
          transform: scale(1.1) rotate(8deg);
          box-shadow: 0 12px 35px rgba(71, 85, 105, 0.2);
        }
        
        .main-button.open {
          transform: scale(0.9) rotate(45deg);
          background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
          box-shadow: 0 8px 25px rgba(100, 116, 139, 0.3);
        }
        
        .button-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        
        .button-image {
          width: 90%;
          height: 90%;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid rgba(71, 85, 105, 0.15);
          transition: all 0.3s ease;
        }
        
        .button-image:hover {
          border-color: rgba(71, 85, 105, 0.3);
          transform: scale(1.05);
        }
        
        .button-icon {
          font-size: 32px;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        
        .options-container {
          position: absolute;
          bottom: 90px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .options-container.closed {
          opacity: 0;
          transform: translateY(30px) scale(0.8);
          pointer-events: none;
        }
        
        .options-container.open {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .option-button {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          font-size: 26px;
          backdrop-filter: blur(10px);
          border: 3px solid rgba(255,255,255,0.2);
        }
        
        .option-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          transition: all 0.3s ease;
          z-index: 1;
        }
        
        .option-button:hover {
          transform: scale(1.2) rotate(-8deg);
          border-color: rgba(255,255,255,0.4);
        }
        
        .option-button:active {
          transform: scale(0.95);
        }
        
        .option-button.whatsapp-citas {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
        }
        
        .option-button.whatsapp-citas:hover::before {
          background: linear-gradient(135deg, #7bed9f 0%, #25d366 100%);
          opacity: 0.8;
        }
        
        .option-button.phone {
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          box-shadow: 0 10px 30px rgba(71, 85, 105, 0.15);
        }
        
        .option-button.phone:hover::before {
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          opacity: 0.8;
        }
        
        .button-text {
          position: relative;
          z-index: 2;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        
        .button-subtitle {
          font-size: 10px;
          opacity: 0.9;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        .tooltip {
          position: absolute;
          ${position === 'bottom-right' ? 'right: 75px;' : 'left: 75px;'}
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #475569 0%, #334155 100%);
          color: white;
          padding: 12px 18px;
          border-radius: 15px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          pointer-events: none;
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255,255,255,0.15);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          max-width: 200px;
          text-align: center;
          line-height: 1.3;
        }
        
        .tooltip::before {
          content: '';
          position: absolute;
          ${position === 'bottom-right' ? 'left: -10px;' : 'right: -10px;'}
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-style: solid;
          ${position === 'bottom-right' 
            ? 'border-color: transparent transparent transparent #334155;'
            : 'border-color: transparent #334155 transparent transparent;'
          }
          border-width: 10px;
        }
        
        .option-button:hover .tooltip {
          opacity: 1;
          transform: translateY(-50%) ${position === 'bottom-right' ? 'translateX(-10px)' : 'translateX(10px)'};
        }
        
        .pulse-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        
        .pulse-ring {
          position: absolute;
          width: 75px;
          height: 75px;
          border: 3px solid rgba(71, 85, 105, 0.1);
          border-radius: 50%;
          animation: pulse 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        
        .pulse-ring:nth-child(2) {
          animation-delay: 0.7s;
        }
        
        .pulse-ring:nth-child(3) {
          animation-delay: 1.4s;
        }
        
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            opacity: 0.1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        
        .glow-effect {
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.4;
          animation: glow 3s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            opacity: 0.3;
            transform: scale(1);
          }
          to {
            opacity: 0.6;
            transform: scale(1.15);
          }
        }
        
        /* Animación de entrada */
        .fade-in {
          animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Efecto especial WhatsApp */
        .whatsapp-effect {
          position: relative;
          overflow: visible;
        }
        
        .whatsapp-effect::after {
          content: '💬';
          position: absolute;
          top: -8px;
          right: -8px;
          font-size: 16px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.4);
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>

      <div className={`floating-container ${positionClass} fade-in ${!isVisible ? 'hidden' : ''}`}>
        {/* Opciones - Solo 2 botones */}
        <div className={`options-container ${optionsPosition} ${isOpen ? 'open' : 'closed'}`}>
          
          {/* Botón WhatsApp + Citas Unificado */}
          <button
            onClick={handleWhatsAppAppointment}
            className="option-button whatsapp-citas whatsapp-effect"
            title="Solicitar Cita por WhatsApp"
          >
            <div className="button-text">
              <span style={{ fontSize: '24px' }}>📅</span>
              <span className="button-subtitle">CITA</span>
            </div>
            <span className="tooltip">
              Solicitar Cita<br/>
              <small>por WhatsApp</small>
            </span>
          </button>

          {/* Botón Teléfono */}
          <button
            onClick={handleCall}
            className="option-button phone"
            title="Llamar Ahora"
          >
            <div className="button-text">
              <span style={{ fontSize: '24px' }}>📞</span>
              <span className="button-subtitle">CALL</span>
            </div>
            <span className="tooltip">
              Llamar Ahora<br/>
              <small>Atención Inmediata</small>
            </span>
          </button>
        </div>

        {/* Botón principal */}
        <div className="main-button-container">
          <div className="glow-effect"></div>
          
          {!isOpen && (
            <div className="pulse-rings">
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
            </div>
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`main-button ${isOpen ? 'open' : ''}`}
            title="Contacto"
          >
            <div className="button-content">
              {customImage ? (
                <img
                  src={customImage}
                  alt="Contacto"
                  className="button-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'block'
                  }}
                />
              ) : null}
              <span 
                className="button-icon" 
                style={{ 
                  display: customImage ? 'none' : 'block',
                  color: 'white'
                }}
              >
                {isOpen ? '✕' : '🩺'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default FloatingContactButton