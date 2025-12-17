import React from 'react';
import { ChevronDown, Zap, MessageCircle } from 'lucide-react';
import { getWhatsappUrl } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-90 z-0"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/50 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Soluciones de Energía Renovable</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Energía Solar para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Tu Hogar y Negocio
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Olvídate de los apagones con nuestros kits híbridos de última generación. 
            Baterías de Litio de alta capacidad, Paneles de alta eficiencia e inversores robustos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg shadow-green-900/20 transition-all transform hover:-translate-y-1"
              >
                Ver Kits Disponibles
              </button>
              <a 
                href={getWhatsappUrl("Hola, me interesa consultar disponibilidad sobre los Kits Solares.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-green-400" />
                Consultar Disponibilidad
              </a>
          </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};