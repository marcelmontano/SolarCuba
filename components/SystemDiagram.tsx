import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Plug, CheckCircle2 } from 'lucide-react';

type KitType = '6.5kw' | '5kw';

export const SystemDiagram: React.FC = () => {
  const [activeKit, setActiveKit] = useState<KitType>('6.5kw');

  // Helper to get product data for easy access
  const product65 = PRODUCTS.find(p => p.id === 'kit-6.5kw');
  const product5 = PRODUCTS.find(p => p.id === 'kit-5kw');

  const kitData = {
    '6.5kw': {
      title: 'Configuración Kit 6.5KW',
      inverter: '6.5KW',
      voltage: '120/240V',
      battery: '14.3 kWh',
      panels: '12x Paneles',
      panelPower: '7440Wp',
      appliances: product65?.supportedDevices || []
    },
    '5kw': {
      title: 'Configuración Kit 5KW',
      inverter: '5KW',
      voltage: '120V',
      battery: '10.49 kWh',
      panels: '6x Paneles',
      panelPower: '3720Wp',
      appliances: product5?.supportedDevices || []
    }
  };

  const current = kitData[activeKit];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Diagrama y Capacidad</h2>
             <p className="text-slate-600 text-lg max-w-2xl mb-8">
              Visualiza cómo se integran los componentes y qué equipos soporta cada kit. Selecciona una opción para ver los detalles.
            </p>

            <div className="flex bg-slate-200 p-1 rounded-lg shadow-inner">
                <button
                    onClick={() => setActiveKit('6.5kw')}
                    className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${activeKit === '6.5kw' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Kit 6.5KW
                </button>
                <button
                    onClick={() => setActiveKit('5kw')}
                    className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${activeKit === '5kw' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Kit 5KW
                </button>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-1/3 space-y-6">
             {/* Tech Specs Box */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-xl text-slate-900 mb-4">{current.title}</h3>
                <ul className="space-y-4">
                     <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">AC</div>
                        <div>
                            <span className="block text-sm font-bold text-slate-700">Entrada Red/Generador</span>
                            <span className="text-xs text-slate-500">Respaldo automático</span>
                        </div>
                     </li>
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">PV</div>
                        <div>
                            <span className="block text-sm font-bold text-slate-700">{current.panels}</span>
                            <span className="text-xs text-slate-500">Potencia Solar Total: {current.panelPower}</span>
                        </div>
                     </li>
                     <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">BAT</div>
                        <div>
                            <span className="block text-sm font-bold text-slate-700">Batería LiFePO4</span>
                            <span className="text-xs text-slate-500">Capacidad: {current.battery}</span>
                        </div>
                     </li>
                </ul>
             </div>

             {/* Supported Apps Box (Dynamic) */}
             <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100 relative overflow-hidden transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <Plug size={20} className="text-purple-600" />
                    Capacidad Estimada
                </h3>
                <div className="space-y-3">
                    {current.appliances.map((app, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 animate-fade-in-up" style={{animationDelay: `${idx * 50}ms`}}>
                            <CheckCircle2 size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                            <span>{app}</span>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-slate-400 mt-4 italic">
                    * Estimación basada en uso eficiente de la energía.
                </p>
             </div>
          </div>

          <div className="lg:w-2/3 w-full bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex justify-center relative overflow-hidden">
            {/* Diagram SVG */}
            <svg viewBox="0 0 800 500" className="w-full h-auto max-w-2xl">
              
              {/* Lines */}
              {/* PV to Inverter */}
              <path d="M150 150 L350 150 L350 200" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              <text x="200" y="140" className="text-xs fill-slate-500">PV INPUT</text>

              {/* Grid to Inverter */}
              <path d="M150 300 L300 300 L300 280" stroke="#94a3b8" strokeWidth="2" fill="none" />
              <text x="200" y="320" className="text-xs fill-slate-500">AC INPUT</text>

              {/* Generator to Inverter */}
              <path d="M150 400 L280 400 L280 350 L350 350" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="2,2" />
              
              {/* Inverter to Battery */}
              <path d="M400 320 L400 380" stroke="#22c55e" strokeWidth="4" fill="none" />
              <text x="410" y="360" className="text-xs fill-slate-500">48VDC</text>

              {/* Inverter to Loads */}
              <path d="M450 250 L600 250" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <path d="M600 250 L600 350" stroke="#3b82f6" strokeWidth="2" fill="none" />
              
              {/* Components */}
              
              {/* PV Panels */}
              <g transform="translate(50, 100)">
                 <rect width="80" height="100" fill="#e2e8f0" stroke="#334155" />
                 <line x1="10" y1="0" x2="10" y2="100" stroke="#cbd5e1" />
                 <line x1="70" y1="0" x2="70" y2="100" stroke="#cbd5e1" />
                 <line x1="0" y1="20" x2="80" y2="20" stroke="#cbd5e1" />
                 <line x1="0" y1="80" x2="80" y2="80" stroke="#cbd5e1" />
                 <text x="40" y="120" textAnchor="middle" className="text-xs font-bold fill-slate-700">Paneles</text>
                 <text x="40" y="135" textAnchor="middle" className="text-[10px] fill-slate-500">{current.panelPower}</text>
              </g>

              {/* Grid Icon */}
              <g transform="translate(80, 280)">
                <path d="M20 0 L10 40 L30 40 L20 0" fill="none" stroke="#475569" />
                <line x1="0" y1="20" x2="40" y2="20" stroke="#475569" />
                <line x1="10" y1="40" x2="5" y2="50" stroke="#475569" />
                <line x1="30" y1="40" x2="35" y2="50" stroke="#475569" />
                <text x="20" y="65" textAnchor="middle" className="text-xs font-bold fill-slate-700">Red</text>
              </g>

              {/* Generator Icon */}
              <g transform="translate(60, 380)">
                 <rect width="60" height="40" rx="4" fill="#f1f5f9" stroke="#64748b" />
                 <circle cx="20" cy="20" r="10" stroke="#64748b" fill="none"/>
                 <text x="30" y="55" textAnchor="middle" className="text-xs font-bold fill-slate-700">Gen</text>
              </g>

              {/* Inverter (Center) */}
              <g transform="translate(350, 200)">
                 <rect width="100" height="120" rx="8" fill="white" stroke="#334155" strokeWidth="2" />
                 <rect x="20" y="20" width="60" height="40" fill="#e2e8f0" />
                 <text x="50" y="80" textAnchor="middle" className="text-xs font-bold fill-slate-700">INVERSOR</text>
                 <text x="50" y="95" textAnchor="middle" className="text-[10px] font-bold fill-blue-600">{current.inverter}</text>
                 <text x="50" y="108" textAnchor="middle" className="text-[10px] fill-slate-500">{current.voltage}</text>
              </g>

              {/* Battery */}
              <g transform="translate(360, 380)">
                 <rect width="80" height="100" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
                 <path d="M30 30 h20 v20 h-20 z" fill="#bbf7d0" />
                 <text x="40" y="80" textAnchor="middle" className="text-xs font-bold fill-slate-700">LiFePO4</text>
                 <text x="40" y="95" textAnchor="middle" className="text-[10px] fill-slate-500">{current.battery}</text>
              </g>

              {/* Home Loads */}
              <g transform="translate(600, 350)">
                 <line x1="-100" y1="0" x2="150" y2="0" stroke="#3b82f6" strokeWidth="2" />
                 
                 {/* Appliance 1 */}
                 <g transform="translate(0, 10)">
                    <rect width="30" height="30" fill="none" stroke="#64748b" />
                    <text x="15" y="45" textAnchor="middle" className="text-[10px] fill-slate-600">AC</text>
                    <line x1="15" y1="0" x2="15" y2="-10" stroke="#3b82f6" />
                 </g>
                 {/* Appliance 2 */}
                 <g transform="translate(50, 10)">
                    <rect width="30" height="30" fill="none" stroke="#64748b" />
                    <text x="15" y="45" textAnchor="middle" className="text-[10px] fill-slate-600">TV</text>
                    <line x1="15" y1="0" x2="15" y2="-10" stroke="#3b82f6" />
                 </g>
                  {/* Appliance 3 */}
                  <g transform="translate(100, 10)">
                    <rect width="30" height="30" fill="none" stroke="#64748b" />
                    <text x="15" y="45" textAnchor="middle" className="text-[10px] fill-slate-600">Nevera</text>
                    <line x1="15" y1="0" x2="15" y2="-10" stroke="#3b82f6" />
                 </g>
              </g>

            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};