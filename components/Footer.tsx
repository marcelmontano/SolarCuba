import React from 'react';
import { Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Makro Solar',
          text: 'Mira estos Kits Solares Híbridos disponibles. ¡Olvídate de los apagones!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error compartiendo:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
             <span className="font-bold text-slate-900">M</span>
          </div>
          <span className="text-xl font-bold text-white">MAKRO</span>
        </div>
        <p className="mb-4 text-sm">
          Soluciones Tecnológicas Integrales. Especialistas en Energía Solar.
        </p>
        
        <div className="flex justify-center mb-8">
           <button 
             onClick={handleShare}
             className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-700 text-sm font-medium"
           >
             <Share2 size={16} />
             Compartir esta Web
           </button>
        </div>

        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Soporte</a>
        </div>
        <div className="mt-8 text-xs text-slate-600">
          © {new Date().getFullYear()} Makro Soluciones. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};