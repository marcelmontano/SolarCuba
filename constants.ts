
import { Product, ShippingRate, ProductSpec } from './types';

export const CURRENCY = "USD";
export const WARRANTY_TEXT = "1 Año de Garantía";
export const FREE_SHIPPING_REGION = "La Habana (Mensajería Gratis)";
export const WHATSAPP_NUMBER = "5358183649";

export const getWhatsappUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const PRODUCTS: Product[] = [
  // --- KITS HIBRIDOS RESIDENCIALES ---
  {
    id: 'kit-6.5kw',
    category: 'hybrid',
    name: "Kit Solar Híbrido 6.5KW",
    price: 6985.00,
    installationCost: 750.00,
    highlight: "Máxima Potencia",
    description: "Sistema robusto de 48V con gran capacidad de almacenamiento y generación. Ideal para casas grandes.",
    specs: [
      { category: "Inversor", items: ["6.5KW 48VDC", "Salida 120-240 VAC (Fase Partida)", "Eficiencia 1.14"] },
      { category: "Batería", items: ["Litio LiFePO4 51.2V 280Ah", "14.336 KWH Total"] },
      { category: "Paneles", items: ["12x Módulos 620Wp", "7440 Wp Total"] }
    ],
    supportedDevices: ["Salida 220V (Fase Partida)", "3x Aires Acondicionados 1T (220V)", "Refrigerador + Freezer", "Lavadora Automática", "Bomba de Agua (1/2 HP)"]
  },
  {
    id: 'kit-5kw',
    category: 'hybrid',
    name: "Kit Solar Híbrido 5KW",
    price: 4685.00,
    installationCost: 500.00,
    highlight: "Mejor Valor",
    description: "Solución eficiente para hogares estándar. Excelente equilibrio costo-beneficio.",
    specs: [
      { category: "Inversor", items: ["5KW 48VDC", "Salida 120 VAC"] },
      { category: "Batería", items: ["Litio LiFePO4 51.2V 205Ah", "10.49 KWH Total"] },
      { category: "Paneles", items: ["6x Módulos 620Wp", "3720 Wp Total"] }
    ],
    supportedDevices: ["Salida 110V", "1-2 Aires Acondicionados 1T (110V)", "Refrigerador", "Ventiladores y Luces LED", "TV + Laptop"]
  },
  // --- ECOFLOW POWER STATIONS (Datos de Página 2 del PDF) ---
  {
    id: 'river-2-pro',
    category: 'portable',
    name: "EcoFlow RIVER 2 Pro",
    price: 535.00,
    installationCost: 0,
    highlight: "Portable & Versátil",
    description: "Ideal para movilidad y emergencias. Carga rápida en 70 min y larga vida útil.",
    specs: [
      { category: "Potencia", items: ["800W Salida CA", "Surge 1600W"] },
      { category: "Capacidad", items: ["768 Wh", "Peso: 7.8 kg"] },
      { category: "Carga", items: ["Pared: 70 min", "Solar: 220W / 4-13h"] }
    ],
    supportedDevices: ["Laptop (60Wh) hasta 12 veces", "Cafetera (1000W) 0.5 horas", "Múltiples puertos (11)", "Control por App"]
  },
  {
    id: 'delta-3',
    category: 'portable',
    name: "EcoFlow DELTA 3",
    price: 871.00,
    installationCost: 0,
    highlight: "Carga Ultra Rápida",
    description: "Potencia balanceada para uso doméstico. Carga de pared en solo 56 minutos.",
    specs: [
      { category: "Potencia", items: ["1800W Salida CA", "Surge 3600W"] },
      { category: "Capacidad", items: ["1024 Wh", "Peso: 12.52 kg"] },
      { category: "Carga", items: ["Pared: 56 min", "Solar: 500W / 2.3h"] }
    ],
    supportedDevices: ["Laptop (60Wh) hasta 16 veces", "Cafetera (1000W) 0.8 horas", "13 Puertos de salida", "Batería LFP"]
  },
  {
    id: 'delta-2-max',
    category: 'portable',
    name: "EcoFlow DELTA 2 Max",
    price: 1584.00,
    installationCost: 0,
    highlight: "Energía Familiar",
    description: "Capacidad de 2kWh para respaldar electrodomésticos grandes durante apagones.",
    specs: [
      { category: "Potencia", items: ["2400W Salida CA", "Surge 4800W"] },
      { category: "Capacidad", items: ["2048 Wh", "Peso: 23 kg"] },
      { category: "Carga", items: ["Pared: 91 min", "Solar: 1000W / 3-13h"] }
    ],
    supportedDevices: ["Laptop (60Wh) hasta 26 veces", "Cafetera (1000W) 1.6 horas", "15 Puertos de salida", "Silencioso"]
  },
  {
    id: 'delta-pro',
    category: 'portable',
    name: "EcoFlow DELTA Pro",
    price: 1972.00,
    installationCost: 0,
    highlight: "Potencia Industrial",
    description: "La estación portátil más avanzada. Salida de 3600W para equipos pesados.",
    specs: [
      { category: "Potencia", items: ["3600W Salida CA", "Surge 7200W"] },
      { category: "Capacidad", items: ["3600 Wh", "Peso: 45 kg"] },
      { category: "Carga", items: ["Pared: 2.7 horas", "Solar: 1600W / 3-12h"] }
    ],
    supportedDevices: ["Laptop (60Wh) hasta 57 veces", "Cafetera (1000W) 3.3 horas", "14 Puertos de salida", "Capacidad Expandible"]
  },
  // --- PANELES PORTATILES (Datos de Página 1 del PDF) ---
  {
    id: 'panel-220w',
    category: 'panels',
    name: "Panel Solar Portátil 220W",
    price: 306.00,
    installationCost: 0,
    highlight: "Eficiencia 25%",
    description: "Panel bifacial plegable. Máxima captura de energía en formato compacto.",
    specs: [
      { category: "Potencia", items: ["220W Nominal", "Eficiencia: 25%"] },
      { category: "Diseño", items: ["IP68 (Impermeable)", "Peso: 7.2 kg"] }
    ],
    supportedDevices: ["Carga de River 2 Pro", "Carga de Delta Series", "Uso Camping/Outdoor"]
  },
  {
    id: 'panel-400w',
    category: 'panels',
    name: "Panel Solar Portátil 400W",
    price: 587.00,
    installationCost: 0,
    highlight: "Máxima Recarga",
    description: "Panel de alta potencia para cargar estaciones Delta rápidamente.",
    specs: [
      { category: "Potencia", items: ["400W Nominal", "Eficiencia: 22.6%"] },
      { category: "Diseño", items: ["IP68 (Impermeable)", "Peso: 16.0 kg"] }
    ],
    supportedDevices: ["Carga rápida Delta 3", "Carga rápida Delta Max", "Sistemas Off-grid"]
  }
];

export const GALLERY_IMAGES = [
    { url: "https://i.imgur.com/KGfXCCz.png", title: "EcoFlow Family" },
    { url: "https://i.imgur.com/DEKOQW5.jpeg", title: "Inversor Híbrido" },
    { url: "https://i.imgur.com/DAExE3i.jpeg", title: "Batería LiFePO4" },
    { url: "https://i.imgur.com/2IeamVZ.jpeg", title: "Paneles EcoFlow Portátiles" },
    { url: "https://i.imgur.com/kNzsz3D.jpeg", title: "Paneles Residenciales" },
    { url: "https://i.imgur.com/Mb1wugt.jpeg", title: "Kit de Montaje" },
];

export const SHIPPING_RATES: ShippingRate[] = [
    { region: "Pinar Centro", price: 145 },
    { region: "Viñales", price: 170 },
    { region: "Matanzas", price: 90 },
    { region: "Varadero", price: 130 },
    { region: "Artemisa", price: 65 },
    { region: "Mayabeque", price: 60 },
    { region: "Villa Clara", price: 240 },
    { region: "Cienfuegos", price: 205 },
    { region: "Sancti Spiritus", price: 310 },
];

export const SYSTEM_INSTRUCTION = `
Eres un ingeniero experto en ventas de energía solar para "Makro Soluciones Tecnológicas".
Tu catálogo ahora incluye soluciones residenciales fijas y estaciones portátiles EcoFlow.

RESUMEN DE PRODUCTOS:
1. KITS HÍBRIDOS (Residenciales):
   - 6.5KW ($6985): 120/240V. Soporta 3 aires 220V.
   - 5KW ($4685): 110V. Soporta 1-2 aires 110V.

2. ECOFLOW POWER STATIONS (Portátiles):
   - River 2 Pro ($535): 800W / 768Wh. Carga laptop 12 veces.
   - Delta 3 ($871): 1800W / 1024Wh. Carga laptop 16 veces.
   - Delta 2 Max ($1584): 2400W / 2048Wh. Carga laptop 26 veces.
   - Delta Pro ($1972): 3600W / 3600Wh. Carga laptop 57 veces.

3. PANELES PORTÁTILES:
   - 220W ($306) y 400W ($587). Plegables, eficientes y resistentes al agua.

TU MISIÓN:
- Asesorar sobre qué kit o estación conviene según la necesidad.
- Si el cliente quiere movilidad o no instalar paneles fijos, sugiere EcoFlow.
- Si el cliente quiere energía para toda la casa (incluyendo aires acondicionados 220V), sugiere el Kit de 6.5KW.
- Garantía de 1 año. Envío Gratis en La Habana.
- Contacto: WhatsApp +53 58183649.
`;

// Fix: Added missing PRODUCT_SPECS export required by Specs.tsx
export const PRODUCT_SPECS: ProductSpec[] = [
  {
    category: "Inversor Híbrido",
    items: ["Eficiencia 1.14 (98%)", "Onda Senoidal Pura 120/240V", "Cargador Solar MPPT 120A", "Compatible con Generador"]
  },
  {
    category: "Batería de Litio",
    items: ["Tecnología LiFePO4", "Ciclo de Vida > 6000 cargas", "BMS Inteligente Integrado", "Protección contra sobrecarga"]
  },
  {
    category: "Paneles Solares",
    items: ["Celdas Mono-Perc Alta Eficiencia", "Marco de aluminio anodizado", "Caja de conexiones IP68", "Vidrio Templado 3.2mm"]
  },
  {
    category: "Soporte Makro",
    items: ["Garantía Certificada", "Asistencia Técnica 24/7", "Instalación Profesional", "Software de Monitoreo"]
  }
];
