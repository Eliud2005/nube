'use client';

import { Phone, Mail, Clock, Sparkles, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* --- COLUMNA 1: INFORMACIÓN DE CONTACTO (2/5 del ancho) --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-emerald-200/60 uppercase">
                Ubicación y Contacto
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-950">
                ¿Listo para visitarnos? <br />
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-purple-600 bg-clip-text text-transparent">
                  Te esperamos con gusto
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Ven a conocer nuestro espacio libre en Oaxaca. Puedes llamarnos o escribirnos directamente por WhatsApp para pedir informes sobre las inscripciones a clases o consultar disponibilidad de mesas.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Llamadas y WhatsApp</p>
                  <a href="tel:+529516424737" className="text-base font-bold text-slate-950 hover:text-emerald-600 transition-colors block">
                    951 642 4737
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dirección</p>
                  <p className="text-base font-bold text-slate-950">Oaxaca, México</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Correo Electrónico</p>
                  <a href="mailto:contacto@nubeserpiente.com" className="text-base font-bold text-slate-950 hover:text-emerald-600 transition-colors">
                    contacto@nubeserpiente.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLUMNA 2: HORARIOS Y RECUADRO INFORMATIVO (3/5 del ancho) --- */}
          <div className="lg:col-span-3 bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-200/60 pb-4">
              <Clock className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-bold font-serif text-slate-950">Nuestros Horarios de Servicio</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">🍳 Mañanas</span>
                <h4 className="text-base font-bold text-slate-950 font-serif">Desayunos "Hierba de Conejo"</h4>
                <p className="text-sm text-slate-500">Lunes a Sábado <br /> 8:00 AM - 1:00 PM</p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">🍔 Noches</span>
                <h4 className="text-base font-bold text-slate-950 font-serif">Noches de "Hamburgruesas"</h4>
                <p className="text-sm text-slate-500">Jueves a Sábado <br /> 7:00 PM - 11:00 PM</p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">🥋 Disciplina</span>
                <h4 className="text-base font-bold text-slate-950 font-serif">Clases de Karate Do</h4>
                <p className="text-sm text-slate-500">Consulta los grupos y horarios de entrenamiento vigentes por teléfono.</p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">🎪 Expresión</span>
                <h4 className="text-base font-bold text-slate-950 font-serif">Danza en Telas</h4>
                <p className="text-sm text-slate-500">Prácticas vespertinas semanales. Escríbenos para apartar tu clase muestra.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900 to-slate-950 text-emerald-100 p-5 rounded-2xl flex items-center gap-4 border border-emerald-800/40">
              <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                ¿Vienes con un grupo grande? Te recomendamos marcarnos con anticipación para asegurarles un lugar cómodo en el área de cocina.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}