import React from 'react';
import { PRODUCTS, CURRENCY, WARRANTY_TEXT, getWhatsappUrl } from '../constants';
import { ShoppingCart, Check, Zap, Battery, Sun, ShieldCheck, MessageCircle, Wrench, Plug } from 'lucide-react';

export const ProductList: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Kits Solares</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Soluciones completas listas para instalar. Todos nuestros equipos cuentan con {WARRANTY_TEXT}.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Header */}
              <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full mix-blend-overlay filter blur-2xl opacity-20"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-600 text-xs font-bold rounded-full mb-3 shadow-sm">
                      {product.highlight}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                    <p className="text-slate-400 text-sm">{product.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">
                      ${product.price.toLocaleString()}
                    </div>
                    <span className="text-xs text-slate-500 font-bold">{CURRENCY}</span>
                  </div>
                </div>
                {/* Badges: Installation & Warranty */}
                <div className="mt-4 relative z-10 flex flex-wrap justify-end gap-2">
                    <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">
                        <Wrench size={14} className="text-blue-400" />
                        <span className="text-xs text-slate-300">
                            Instalación opcional: <span className="font-bold text-white">${product.installationCost}</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-900/40 px-3 py-1 rounded-lg border border-green-500/30">
                        <ShieldCheck size={14} className="text-green-400" />
                        <span className="text-xs text-green-300 font-bold uppercase tracking-tighter">
                            {WARRANTY_TEXT}
                        </span>
                    </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-1">
                <div className="space-y-6">
                  {product.specs.map((spec, idx) => (
                    <div key={idx}>
                      <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">
                        {spec.category === "Inversor" && <Zap size={16} className="text-yellow-500" />}
                        {spec.category === "Batería" && <Battery size={16} className="text-green-500" />}
                        {spec.category === "Paneles" && <Sun size={16} className="text-orange-500" />}
                        {spec.category === "Accesorios" && <ShieldCheck size={16} className="text-blue-500" />}
                        {spec.category}
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {spec.items.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <Check size={14} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Supported Devices Section */}
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                        <Plug size={16} className="text-purple-500" />
                        ¿Qué puedes conectar?
                    </h4>
                    <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                             {product.supportedDevices.map((device, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                    {device}
                                </div>
                             ))}
                        </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-slate-100 border-t border-slate-200">
                 <a 
                  href={getWhatsappUrl(`Hola, me interesa consultar disponibilidad del ${product.name} ($${product.price} + $${product.installationCost} instalación opcional).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  Consultar Disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};