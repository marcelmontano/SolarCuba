import React from 'react';
import { SHIPPING_RATES, FREE_SHIPPING_REGION } from '../constants';
import { Truck } from 'lucide-react';

export const ShippingRates: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Truck size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Tarifas de Envío</h2>
            <p className="text-slate-600">
              Contamos con servicio de mensajería especializada para asegurar que tu equipo llegue en perfectas condiciones.
            </p>
            <div className="mt-4 px-6 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm">
              ✨ {FREE_SHIPPING_REGION} ✨
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-900 text-white uppercase font-bold">
                <tr>
                  <th className="px-6 py-4">Región / Destino</th>
                  <th className="px-6 py-4 text-right">Costo Máximo (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {SHIPPING_RATES.map((rate, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-slate-700">{rate.region}</td>
                    <td className="px-6 py-3 text-right text-slate-900 font-bold">${rate.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-slate-50 px-6 py-4 text-xs text-slate-500 border-t border-slate-200">
              * Los precios mostrados son los valores máximos de referencia para el traslado hasta la localidad más lejana de la región.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};