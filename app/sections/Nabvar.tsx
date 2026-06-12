'use client';

import { useState } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Nube Serpiente */}
          <div className="flex items-center gap-3 cursor-pointer">
            {/* Imagen del Logo Circular */}
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-emerald-500/30 shadow-md bg-gradient-to-br from-emerald-500 to-purple-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img 
                  src="/logo-nube.png" // Recuerda guardar tu logo en la carpeta /public de Next.js con este nombre
                  alt="Nube Serpiente Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback por si aún no pones la imagen, se verá un icono estético
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center bg-slate-50 text-emerald-600">
                  🐍
                </div>
              </div>
            </div>
            
            {/* Texto Estilizado al lado */}
            <div className="flex flex-col justify-center">
              <span className="text-lg font-bold tracking-tight font-serif text-slate-950 leading-none">
                Nube Serpiente
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-purple-600 mt-1 leading-none">
                Deporte & Cultura
              </span>
            </div>
          </div>

          {/* Menú Escritorio (Desktop) */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#disciplines" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-purple-500" /> Disciplinas
            </a>
            <a href="#food" className="hover:text-emerald-600 transition-colors">Cocina</a>
            <a href="#schedule" className="hover:text-emerald-600 transition-colors">Horarios</a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-emerald-600 to-purple-600 text-white px-5 py-2.5 rounded-xl shadow-sm hover:opacity-90 transition-all font-semibold flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Reservar Clase / Mesa
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a 
            href="#disciplines" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Disciplinas (Karate y Telas)
          </a>
          <a 
            href="#food" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Menú (Hierba de Conejo / Hamburgruesas)
          </a>
          <a 
            href="#schedule" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Horarios
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block text-center bg-gradient-to-r from-emerald-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold shadow-sm transition-colors"
          >
            Reservar Clase / Mesa
          </a>
        </div>
      )}
    </nav>
  );
}