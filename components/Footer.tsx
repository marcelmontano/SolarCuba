import React from 'react';

export const Footer: React.FC = () => {
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