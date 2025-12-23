import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { PRODUCTS, getWhatsappUrl } from '../constants';
import { sendMessageToGemini } from '../services/geminiService';
import { Product } from '../types';

export const SmartRecommender: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{ product: Product; reasoning: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    const prompt = `
      El usuario tiene estos equipos o necesidades: "${input}".
      Basado EXCLUSIVAMENTE en este catálogo: ${JSON.stringify(PRODUCTS.map(p => ({ id: p.id, name: p.name, desc: p.description, supported: p.supportedDevices })))}.
      
      Analiza cuál es el producto que mejor se adapta. Considera potencia y capacidad.
      Responde estrictamente en formato JSON:
      {
        "productId": "id-del-producto-recomendado",
        "reasoning": "Breve explicación técnica de por qué este producto es el ideal para esos equipos específicos (máximo 2 líneas)."
      }
    `;

    try {
      const response = await sendMessageToGemini(prompt);
      // Intentar extraer JSON de la respuesta por si el modelo añade texto extra
      const jsonMatch = response.match(/\{.*\}/s);
      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);
        const recommendedProduct = PRODUCTS.find(p => p.id === data.productId);
        if (recommendedProduct) {
          setRecommendation({ product: recommendedProduct, reasoning: data.reasoning });
        } else {
          throw new Error("Producto no encontrado");
        }
      } else {
        throw new Error("Error en formato de respuesta");
      }
    } catch (err) {
      console.error(err);
      setError("No pudimos procesar la recomendación. Intenta ser más específico con los equipos.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Asesor Inteligente</h2>
                <p className="text-slate-500 text-sm font-medium">Dime qué quieres conectar y te diré qué necesitas</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ej: Tengo una casa con 2 aires acondicionados de 1 tonelada, un refrigerador, una bomba de agua y luces LED..."
                  className="w-full h-32 p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all text-slate-700 placeholder:text-slate-400"
                ></textarea>
                <div className="absolute bottom-4 right-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Powered by Gemini AI
                </div>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={isLoading || !input.trim()}
                className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Analizando requerimientos...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} className="text-blue-400" />
                    Obtener Recomendación
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm">
                <AlertCircle size={20} />
                {error}
              </div>
            )}

            {recommendation && (
              <div className="mt-8 animate-fade-in-up">
                <div className="p-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
                          Recomendación de Nuestra IA
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{recommendation.product.name}</h3>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-2xl font-black text-slate-900">${recommendation.product.price.toLocaleString()}</div>
                            <span className="text-slate-400 text-xs font-bold uppercase">USD</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                          <p className="text-sm text-slate-600 leading-relaxed italic">
                            "{recommendation.reasoning}"
                          </p>
                        </div>
                        <a
                          href={getWhatsappUrl(`Hola, usé el asesor inteligente y me recomendó el ${recommendation.product.name}. ¿Tienen stock disponible?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-md transition-all"
                        >
                          <MessageCircle size={18} />
                          Consultar por WhatsApp
                        </a>
                      </div>
                      <div className="w-full md:w-48 space-y-3">
                         <div className="text-[10px] font-bold text-slate-400 uppercase">Lo que soporta:</div>
                         {recommendation.product.supportedDevices.slice(0, 3).map((device, i) => (
                           <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                             <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                             {device}
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};