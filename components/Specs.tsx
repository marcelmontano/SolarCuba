import React from 'react';
import { PRODUCT_SPECS } from '../constants';
import { Battery, Sun, Zap, ShieldCheck } from 'lucide-react';

const getIcon = (category: string) => {
  if (category.includes("Inversor")) return <Zap className="w-6 h-6 text-yellow-500" />;
  if (category.includes("Batería")) return <Battery className="w-6 h-6 text-green-500" />;
  if (category.includes("Paneles")) return <Sun className="w-6 h-6 text-orange-500" />;
  return <ShieldCheck className="w-6 h-6 text-blue-500" />;
};

export const Specs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Especificaciones Técnicas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Componentes de grado industrial seleccionados para máxima eficiencia y durabilidad.
            Marcas reconocidas internacionalmente (DAH Solar, SRNE, Makro).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_SPECS.map((spec, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                {getIcon(spec.category)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 h-12 flex items-center">
                {spec.category}
              </h3>
              <ul className="space-y-3">
                {spec.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start text-sm text-slate-600">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};