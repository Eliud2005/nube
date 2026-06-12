'use client';

import { Camera, Sparkles, ZoomIn } from 'lucide-react';

export default function Gallery() {
  // Arreglo de fotos estratégicas para capturar la esencia de Nube Serpiente
  const images = [
    {
      url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
      tag: "Artes Marciales",
      title: "Clases de Karate Do",
      size: "md:col-span-2 md:row-span-2" // Tarjeta grande destacada
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      tag: "Noches",
      title: "Hamburgruesas Artesanales",
      size: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
      tag: "Arte Corporal",
      title: "Danza y Acrobacia en Telas",
      size: "md:col-span-1 md:row-span-2" // Tarjeta alta
    },
    {
      url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop",
      tag: "Mañanas",
      title: "Desayunos Hierba de Conejo",
      size: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=800&auto=format&fit=crop",
      tag: "Comunidad",
      title: "Ambiente Cultural y Deportivo",
      size: "md:col-span-2 md:row-span-1" // Tarjeta ancha
    }
  ];

  return (
    <section id="Gallery" className="py-20 lg:py-28 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-emerald-200/60 uppercase">
              <Camera className="w-3.5 h-3.5" /> Galería Visual
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-950">
              Energía, arte y sabor <br />
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">en un solo espacio</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Un recorrido por la disciplina en nuestro dojo, el vuelo en las telas y la cocina tradicional e imponente que preparamos para ti todos los días.
            </p>
          </div>
          
          {/* Texto decorativo de esquina */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-500" /> El equilibrio perfecto
          </div>
        </div>

        {/* Rejilla de Mosaico Asimétrica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group shadow-md bg-slate-200 border border-white/40 ${img.size}`}
            >
              {/* Capa oscura superior interna al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10" />
              
              {/* Imagen del Mosaico */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Contenido/Texto interactivo que aparece abajo de la foto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {img.tag}
                  </span>
                  <p className="text-lg font-bold text-white tracking-tight font-serif">
                    {img.title}
                  </p>
                </div>
                
                {/* Icono de zoom decorativo */}
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}