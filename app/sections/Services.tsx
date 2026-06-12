'use client';

import { Dumbbell, Sun, Moon, Sparkles, Flame } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Clases de Karate Do",
      description: "Disciplina, enfoque y defensa personal. Impartimos sesiones para diferentes niveles que fortalecen el cuerpo, la mente y el carácter en un ambiente de respeto."
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Danza y Acrobacia en Telas",
      description: "Encuentra tu fuerza y flexibilidad en el aire. Clases de expresión corporal artísticas y seguras, diseñadas para dominar el vuelo coreográfico."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Desayunos \"Hierba de Conejo\"",
      description: "Mañanas con sabor tradicional. Platillos e ingredientes locales inspirados en la riqueza de Oaxaca para arrancar el día con energía real."
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Noches de \"Hamburgruesas\"",
      description: "Nuestra propuesta nocturna más imponente. Hamburguesas artesanales generosas, jugosas y preparadas al momento con recetas de la casa."
    }
  ];

  return (
    <section id="disciplines" className="py-20 lg:py-28 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-emerald-200/60 uppercase">
            Cultura, Deporte y Gastronomía
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-slate-950">
            Todo lo que encuentras en <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-purple-600 bg-clip-text text-transparent">
              Nube Serpiente
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium tracking-wide max-w-xl mx-auto">
            Karate Do • Danza en Telas • Desayunos • Hamburgruesas <br />
            <span className="text-purple-600 font-semibold">Un espacio de encuentro libre en Oaxaca</span>
          </p>
        </div>

        {/* Rejilla de Disciplinas y Cocina */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:bg-slate-950 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Contenedor del ícono con transiciones esmeralda/morado */}
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Título y descripción */}
                <h3 className="text-xl font-bold text-slate-950 tracking-tight font-serif group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}