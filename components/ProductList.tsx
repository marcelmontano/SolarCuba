import React from 'react';
import { PRODUCTS, CURRENCY, WARRANTY_TEXT, getWhatsappUrl } from '../constants';
import { Check, Zap, Battery, Sun, ShieldCheck, MessageCircle, Wrench, Plug, Smartphone } from 'lucide-react';
import { Product } from '../types';

export const ProductList: React.FC = () => {
  const hybridProducts = PRODUCTS.filter(p => p.category === 'hybrid');
  const ecoFlowProducts = PRODUCTS.filter(p => p.category === 'portable');
  const panelProducts = PRODUCTS.filter(p => p.category === 'panels');

  const renderProductCard = (product: Product) => (
    <div key={product.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full mix-blend-overlay filter blur-2xl opacity-10"></div>
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-green-600 text-[10px] font-bold rounded-full mb-3 shadow-sm uppercase tracking-wider">
              {product.highlight}
            </span>
            <h3 className="text-xl font-bold mb-1">{product.name}</h3>
            <p className="text-slate-400 text-xs line-clamp-2">{product.description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">
              ${product.price.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-500 font-bold">{CURRENCY}</span>
          </div>
        </div>
        
        <div className="mt-4 relative z-10 flex flex-wrap gap-2">
            {product.installationCost > 0 && (
                <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">
                    <Wrench size={12} className="text-blue-400" />
                    <span className="text-[10px] text-slate-300">
                        Instalación: <span className="font-bold text-white">${product.installationCost}</span>
                    </span>
                </div>
            )}
            <div className="flex items-center gap-2 bg-green-900/40 px-3 py-1 rounded-lg border border-green-500/30">
                <ShieldCheck size={12} className="text-green-400" />
                <span className="text-[10px] text-green-300 font-bold uppercase">
                    {WARRANTY_TEXT}
                </span>
            </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1">
        <div className="space-y-4">
          {product.specs.map((spec, idx) => (
            <div key={idx}>
              <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-1.5 text-xs uppercase tracking-wide">
                {spec.category === "Inversor" || spec.category === "Potencia" ? <Zap size={14} className="text-yellow-500" /> : null}
                {spec.category === "Batería" || spec.category === "Capacidad" ? <Battery size={14} className="text-green-500" /> : null}
                {spec.category === "Paneles" || spec.category === "Rendimiento" ? <Sun size={14} className="text-orange-500" /> : null}
                {spec.category}
              </h4>
              <ul className="grid grid-cols-1 gap-1">
                {spec.items.map((item, i) => (
                  <li key={i} className="flex items-start text-xs text-slate-600">
                    <Check size={12} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pt-3 border-t border-slate-200">
            <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2 text-xs uppercase tracking-wide">
                <Plug size={14} className="text-purple-500" />
                Autonomía / Uso
            </h4>
            <div className="bg-white rounded-lg p-3 border border-slate-200">
                <div className="grid grid-cols-1 gap-y-1">
                     {product.supportedDevices.slice(0, 4).map((device, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
                            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                            {device}
                        </div>
                     ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-100 border-t border-slate-200">
         <a 
          href={getWhatsappUrl(`Hola, me interesa el ${product.name} de $${product.price} USD. ¿Tienen disponibilidad?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-green-600 hover:bg-green-500 text-white text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-green-900/10"
        >
          <MessageCircle size={18} />
          Consultar
        </a>
      </div>
    </div>
  );

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Catálogo de Energía Solar</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Desde sistemas residenciales completos hasta estaciones portátiles EcoFlow. 
            Calidad premium con garantía oficial.
          </p>
        </div>

        {/* Kits Residenciales */}
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <Zap size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">Kits Híbridos Residenciales</h3>
                    <p className="text-slate-500 text-sm">Soluciones permanentes para independencia energética total.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                {hybridProducts.map(renderProductCard)}
            </div>
        </div>

        {/* EcoFlow Section */}
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center">
                    <Smartphone size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">EcoFlow Power Stations</h3>
                    <p className="text-slate-500 text-sm">Energía portátil, inteligente y sin instalación (Plug & Play).</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ecoFlowProducts.map(renderProductCard)}
            </div>
        </div>

        {/* Portable Panels */}
        <div>
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                    <Sun size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">Paneles Solares Portátiles</h3>
                    <p className="text-slate-500 text-sm">Carga tus equipos EcoFlow en cualquier lugar bajo el sol.</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
                {panelProducts.map(renderProductCard)}
            </div>
        </div>
      </div>
    </section>
  );
};