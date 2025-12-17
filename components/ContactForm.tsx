import React, { useState } from 'react';
import { getWhatsappUrl, WHATSAPP_NUMBER } from '../constants';
import { MessageCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.type === 'tel' ? 'phone' : e.target.type === 'email' ? 'email' : e.target.placeholder.includes('Nombre') ? 'name' : 'city']: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, mi nombre es ${formData.name}. Teléfono: ${formData.phone}. Email: ${formData.email}. Ciudad: ${formData.city}. Quisiera consultar disponibilidad de los equipos.`;
    window.open(getWhatsappUrl(message), '_blank');
  };

  return (
    <section id="contact-form" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
            <p className="text-slate-400 mb-6">
              ¿Tienes dudas o quieres concretar tu compra? Consulta disponibilidad directamente.
            </p>
            
            <a 
              href={getWhatsappUrl("Hola, quisiera consultar disponibilidad sobre los equipos solares.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg mb-8"
            >
              <MessageCircle size={24} />
              Consultar Disponibilidad ({WHATSAPP_NUMBER})
            </a>

            <div className="flex items-center gap-4 text-slate-500 mb-2">
              <div className="h-px bg-slate-700 flex-1"></div>
              <span className="text-sm uppercase tracking-wider">O envíanos tus datos por WhatsApp</span>
              <div className="h-px bg-slate-700 flex-1"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Nombre Completo</label>
              <input 
                required 
                type="text" 
                placeholder="Juan Pérez"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Teléfono</label>
              <input 
                required 
                type="tel" 
                placeholder="+53 5123 4567"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-300">Correo Electrónico</label>
              <input 
                required 
                type="email" 
                placeholder="juan@ejemplo.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-300">Ciudad / Provincia</label>
              <input 
                required 
                type="text" 
                placeholder="La Habana, Playa"
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button type="submit" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Consultar Disponibilidad
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};