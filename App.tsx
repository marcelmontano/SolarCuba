import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { Gallery } from './components/Gallery';
import { ShippingRates } from './components/ShippingRates';
import { SystemDiagram } from './components/SystemDiagram';
import { ContactForm } from './components/ContactForm';
import { ChatBot } from './components/ChatBot';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-green-200 selection:text-green-900">
      <nav className="fixed w-full z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white text-xl">
             <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
               <span className="text-white font-bold">M</span>
             </div>
             <span>MAKRO <span className="text-green-500">SOLAR</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Kits Solares</button>
            <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Contacto</button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <ProductList />
        <Gallery />
        <SystemDiagram />
        <ShippingRates />
        <ContactForm />
      </main>

      <Footer />
      <ChatBot />
      <Analytics />
    </div>
  );
}

export default App;