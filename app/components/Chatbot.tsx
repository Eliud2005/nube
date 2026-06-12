'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight, CornerDownRight } from 'lucide-react';

// Base de conocimientos interactiva de Nube Serpiente
const FAQ_DATA = [
  {
    category: "🥋 Karate Do",
    questions: [
      {
        q: "¿A partir de qué edad se puede ingresar a Karate?",
        a: "Contamos con grupos adaptados para todas las edades. Recibimos niños desde los 4 o 5 años en adelante, así como jóvenes y adultos sin importar su nivel de experiencia previa."
      },
      {
        q: "¿Ofrecen alguna clase de muestra?",
        a: "¡Sí, por supuesto! Puedes venir a tomar una clase muestra completamente gratis para conocer las instalaciones, al instructor y la dinámica del dojo antes de inscribirte."
      },
      {
        q: "¿Qué se necesita para la primera clase?",
        a: "Para tu clase muestra solo es necesario asistir con ropa deportiva cómoda (pants y playera) y una botella de agua. Una vez inscrito, te daremos los detalles para adquirir tu Karategi (uniforme)."
      }
    ]
  },
  {
    category: "🎪 Danza en Telas",
    questions: [
      {
        q: "¿Es necesario tener fuerza o experiencia previa?",
        a: "Para nada. El proceso es progresivo; la fuerza, la condición física y la flexibilidad las irás desarrollando clase con clase mediante ejercicios de preparación seguros y guiados."
      },
      {
        q: "¿Cuáles son las medidas de seguridad?",
        a: "La seguridad es nuestra prioridad. Trabajamos con colchonetas de alta densidad debajo de cada estación de telas, herrajes certificados y un límite controlado de alumnos por sesión para garantizar supervisión personalizada."
      }
    ]
  },
  {
    category: "🍳 Desayunos \"Hierba de Conejo\"",
    questions: [
      {
        q: "¿Cuál es el horario y qué tipo de comida ofrecen?",
        a: "Servimos desayunos de Lunes a Sábado de 8:00 AM a 1:00 PM. Nuestro menú está inspirado en los ingredientes tradicionales de Oaxaca, con opciones frescas, saludables y sazón local."
      },
      {
        q: "¿Es necesario reservar una mesa por las mañanas?",
        a: "De manera ordinaria no es obligatorio, atendemos conforme van llegando. Sin embargo, si planeas venir con un grupo de más de 6 personas, te sugerimos llamarnos para asegurar que tengamos su espacio listo."
      }
    ]
  },
  {
    category: "🍔 Noches de \"Hamburgruesas\"",
    questions: [
      {
        q: "¿Qué días y a qué hora abren la cocina de noche?",
        a: "Nuestras imponentes 'Hamburgruesas' están disponibles de Jueves a Sábado en un horario de 7:00 PM a 11:00 PM. Ideales para cerrar el día con una cena artesanal generosa."
      },
      {
        q: "¿Tienen servicio a domicilio o solo para llevar?",
        a: "Por el momento puedes disfrutar de ellas directamente en nuestro espacio cultural o pedirlas con anticipación para pasar a recogerlas y disfrutarlas en casa."
      }
    ]
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStage, setChatStage] = useState<'welcome' | 'category' | 'answer'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<typeof FAQ_DATA[0] | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<{ q: string; a: string } | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al fondo al interactuar con el asistente
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatStage, selectedAnswer]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Botón Flotante con transiciones esmeralda */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
        aria-label="Abrir preguntas frecuentes"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Ventana del Asistente Virtual */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white border border-slate-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800">
          
          {/* Encabezado místico de Nube Serpiente */}
          <div className="bg-slate-950 p-4 text-white flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <div>
              <h4 className="font-bold text-sm">Asistente Nube Serpiente</h4>
              <p className="text-[11px] text-slate-400">Respuestas automatizadas • En línea</p>
            </div>
          </div>

          {/* Cuerpo interactivo del chat */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            
            {/* Mensaje de Bienvenida */}
            <div className="flex items-start gap-2 max-w-[85%]">
              <div className="bg-emerald-600 text-white p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed shadow-sm">
                ¡Hola! Qué gusto saludarte. Soy tu asistente de **Nube Serpiente**. Estoy aquí para resolver tus dudas sobre nuestras disciplinas y barras de cocina de forma inmediata. ¿Qué te gustaría consultar?
              </div>
            </div>

            {/* FASE: Selección de Categoría */}
            {(chatStage === 'welcome' || chatStage === 'category' || chatStage === 'answer') && (
              <div className="space-y-2 pt-2">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider px-1">Selecciona un área:</p>
                <div className="grid grid-cols-1 gap-2">
                  {FAQ_DATA.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setChatStage('category');
                        setSelectedAnswer(null);
                      }}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                        selectedCategory?.category === cat.category
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                          : 'bg-white border-slate-200 hover:border-emerald-500 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.category}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FASE: Lista de preguntas de la categoría seleccionada */}
            {chatStage !== 'welcome' && selectedCategory && (
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider px-1">Preguntas comunes:</p>
                <div className="space-y-2">
                  {selectedCategory.questions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedAnswer(item);
                        setChatStage('answer');
                      }}
                      className={`w-full text-left text-xs p-2.5 rounded-xl border transition-all flex items-start gap-2 ${
                        selectedAnswer?.q === item.q
                          ? 'bg-slate-900 border-slate-900 text-white'
                          : 'bg-white border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <CornerDownRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-60" />
                      <span>{item.q}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FASE: Respuesta en pantalla */}
            {chatStage === 'answer' && selectedAnswer && (
              <div className="flex items-start gap-2 max-w-[90%] pt-2">
                <div className="bg-purple-50 border border-purple-200/80 text-slate-950 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed shadow-sm">
                  <p className="font-bold mb-1 text-purple-900">💡 Respuesta:</p>
                  {selectedAnswer.a}
                </div>
              </div>
            )}

            {/* Anchor invisible para scroll automático */}
            <div ref={chatEndRef} />
          </div>

          {/* Pie de página con Call to Action directo al contacto telefónico */}
          <div className="p-3 bg-white border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-500 mb-1.5">¿Tienes alguna otra duda o quieres inscribirte?</p>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-600 to-purple-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:opacity-95 transition-all w-full shadow-sm"
            >
              <Send className="w-3 h-3" /> Ver Teléfono y Horarios de Atención
            </a>
          </div>

        </div>
      )}
    </div>
  );
}