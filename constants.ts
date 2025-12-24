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
  // --- ECOFLOW POWER STATIONS ---
  {
    id: 'river-2-pro',
    category: 'portable',
    name: "EcoFlow RIVER 2 Pro",
    price: 535.00,
    installationCost: 0,
    highlight: "Portable & Versátil",
    description: "Ideal para movilidad y emergencias. Carga rápida en 70 min.",
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
    description: "Potencia balanceada para uso doméstico. Carga en 56 minutos.",
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
    description: "Capacidad de 2kWh para respaldar electrodomésticos grandes.",
    specs: [
      { category: "Potencia", items: ["2400W Salida CA", "Surge 4800W"] },
      { category: "Capacidad", items: ["2048 Wh", "Peso: 23 kg"] },
      { category: "Carga", items: ["Pared: 91 min", "Solar: 1000W / 3-13h"] }
    ],
    supportedDevices: ["Laptop (60Wh) hasta 26 veces", "Cafetera (1000W) 1.6 horas", "15 Puertos de salida"]
  },
  {
    id: 'delta-pro',
    category: 'portable',
    name: "EcoFlow DELTA Pro",
    price: 1972.00,
    installationCost: 0,
    highlight: "Potencia Industrial",
    description: "La estación portátil más avanzada. Salida de 3600W.",
    specs: [
      { category: "Potencia", items: ["3600W Salida CA", "Surge 7200W"] },
      { category: "Capacidad", items: ["3600 Wh", "Peso: 45 kg"] },
      { category: "Carga", items: ["Pared: 2.7 horas", "Solar: 1600W / 3-12h"] }
    ],
    supportedDevices: ["Laptop (60Wh) hasta 57 veces", "Cafetera (1000W) 3.3 horas", "14 Puertos de salida"]
  },
  {
    id: 'panel-220w',
    category: 'panels',
    name: "Panel Solar Portátil 220W",
    price: 306.00,
    installationCost: 0,
    highlight: "Eficiencia 25%",
    description: "Panel bifacial plegable e impermeable IP68.",
    specs: [
      { category: "Potencia", items: ["220W Nominal", "Eficiencia: 25%"] },
      { category: "Diseño", items: ["IP68", "Peso: 7.2 kg"] }
    ],
    supportedDevices: ["Carga de River 2 Pro", "Carga de Delta Series", "Uso Camping"]
  },
  {
    id: 'panel-400w',
    category: 'panels',
    name: "Panel Solar Portátil 400W",
    price: 587.00,
    installationCost: 0,
    highlight: "Máxima Recarga",
    description: "Panel de alta potencia plegable e impermeable IP68.",
    specs: [
      { category: "Potencia", items: ["400W Nominal", "Eficiencia: 22.6%"] },
      { category: "Diseño", items: ["IP68", "Peso: 16.0 kg"] }
    ],
    supportedDevices: ["Carga rápida Delta 3", "Carga rápida Delta Max"]
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
Eres el Ingeniero de Ventas Senior de "Makro Soluciones Tecnológicas". 
Tu objetivo es asesorar a clientes sobre energía solar y logística de envío en Cuba.

CATÁLOGO RESUMIDO:
1. KITS HÍBRIDOS (Residenciales, 1 año de garantía):
   - 6.5KW ($6985): Soporta 220V, aires acondicionados, etc.
   - 5KW ($4685): Soporta 110V, ideal para el hogar estándar.
2. ESTACIONES ECOFLOW (Portátiles, sin garantía):
   - River 2 Pro ($535), Delta 3 ($871), Delta 2 Max ($1584), Delta Pro ($1972).
3. PANELES PORTÁTILES: 220W ($306) y 400W ($587).

LOGÍSTICA Y ENVÍOS (Aclara esto siempre que pregunten):
- La Habana: Mensajería GRATIS.
- Otras regiones (Tarifas máximas en USD):
  Pinar Centro ($145), Viñales ($170), Matanzas ($90), Varadero ($130), Artemisa ($65), Mayabeque ($60), Villa Clara ($240), Cienfuegos ($205), Sancti Spiritus ($310).

REGLAS DE RESPUESTA:
- Usa un tono profesional y amable.
- Si preguntan por "precio a [Provincia]", responde con la tarifa de logística exacta.
- Si el cliente menciona equipos específicos (ej. "tengo 2 aires"), recomienda el Kit de 6.5KW por su salida de 220V.
- Para camping o movilidad, recomienda EcoFlow.
- Siempre menciona que el contacto final es vía WhatsApp +53 58183649.
`;

export const PRODUCT_SPECS: ProductSpec[] = [
  {
    category: "Inversor Híbrido",
    items: ["Eficiencia 1.14 (98%)", "Onda Senoidal Pura 120/240V", "Cargador Solar MPPT 120A"]
  },
  {
    category: "Batería de Litio",
    items: ["Tecnología LiFePO4", "Ciclo de Vida > 6000 cargas", "BMS Inteligente Integrado"]
  },
  {
    category: "Paneles Solares",
    items: ["Celdas Mono-Perc Alta Eficiencia", "Marco de aluminio anodizado", "IP68"]
  },
  {
    category: "Soporte Makro",
    items: ["Asistencia Técnica 24/7", "Instalación Profesional", "Software de Monitoreo"]
  }
];