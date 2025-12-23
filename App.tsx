import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { Gallery } from './components/Gallery';
import { ShippingRates } from './components/ShippingRates';
import { SystemDiagram } from './components/SystemDiagram';
import { ContactForm } from './components/ContactForm';
import { ChatBot } from './components/ChatBot';
import { Footer } from './components/Footer';
import { SmartRecommender } from './components/SmartRecommender';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Kits Solares</button>
            <button onClick={() => scrollToSection('contact-form')} className="hover:text-white transition-colors">Contacto</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-left py-2 text-slate-300 hover:text-white font-medium border-b border-slate-800"
            >
              Kits Solares
            </button>
            <button 
              onClick={() => scrollToSection('contact-form')} 
              className="text-left py-2 text-slate-300 hover:text-white font-medium"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <SmartRecommender />
        <ProductList />
        <Gallery />
        <SystemDiagram />
        <ShippingRates />
        <ContactForm />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;