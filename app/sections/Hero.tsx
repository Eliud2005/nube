'use client';

import { useState, useEffect } from 'react';
import { Award, Flame, Coffee, Store, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Imágenes representativas de los 4 pilares de Nube Serpiente
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop",
      alt: "Práctica de Karate Do - Enfoque y disciplina",
      title: "Disciplina y Enfoque",
      desc: "Clases de Karate Do para todas las edades."
    },
    {
      url: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop",
      alt: "Danza y acrobacia en telas aéreas",
      title: "Arte en las Alturas",
      desc: "Explora la flexibilidad y fuerza con Danza en Telas."
    },
    {
      url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop",
      alt: "Desayuno tradicional fresco",
      title: "Sabor de la Mañana",
      desc: "Desayunos artesanales en 'Hierba de Conejo'."
    },
    {
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      alt: "Hamburguesas artesanales jugosas",
      title: "Noches Antojables",
      desc: "Recetas imponentes en Noches de 'Hamburgruesas'."
    }
  ];

  // Efecto para la rotación automática del carrusel (5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden flex items-center">
      
      {/* Decoración geométrica sutil de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100/40 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto Principal (Izquierda) */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-purple-200/60 shadow-sm">
              🐍 Centro Deportivo, Cultural y Gastronómico
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-none font-serif">
              Bienvenidos a <br />
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                Nube Serpiente.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Un espacio libre para conectar el cuerpo, el arte y el sabor. Encuentra tu equilibrio con disciplinas que desafían la gravedad y complementa tu día con nuestra cocina artesanal desde la mañana hasta la noche.
            </p>

            {/* Puntos clave de las actividades principales */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-slate-700 font-medium pt-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Karate Do
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-purple-600 flex-shrink-0" /> Danza en Telas
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-600 flex-shrink-0" /> Desayunos "Hierba de Conejo"
              </div>
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-orange-600 flex-shrink-0" /> Noches de "Hamburgruesas"
              </div>
            </div>
          </div>

          {/* Composición Visual / Carrusel Dinámico (Derecha) */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full group">
            {/* Efecto de fondo girado estético */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-purple-100 rounded-3xl transform rotate-3 scale-95 opacity-60 filter blur-sm"></div>
            
            {/* Contenedor de las Imágenes */}
            <div className="relative h-full w-full bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-slate-900/15 z-10" />
              
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-0' : 'opacity-0'
                  }`}
                >
                  {index === currentSlide && (
                    <img 
                      src={slide.url} 
                      alt={slide.alt} 
                      className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                </div>
              ))}
              
              {/* Controles de Navegación Manual (Visibles al hacer hover) */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                aria-label="Anterior imagen"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores de posición (Líneas inferiores) */}
              <div className="absolute bottom-6 right-6 z-20 flex gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'
                    }`}
                    aria-label={`Ir al slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Tarjeta flotante adaptada al slide activo */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg z-20 flex items-center gap-4 max-w-xs border border-white/20 animate-fade-in">
                <div className="bg-emerald-600 text-white p-2.5 rounded-xl flex-shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-950 text-xs sm:text-sm tracking-tight">
                    {slides[currentSlide].title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight mt-0.5">
                    {slides[currentSlide].desc}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}