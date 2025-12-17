import { Product, ShippingRate, ProductSpec } from './types';

export const CURRENCY = "USD";
export const WARRANTY_TEXT = "1 Año de Garantía";
export const FREE_SHIPPING_REGION = "La Habana (Mensajería Gratis)";
export const WHATSAPP_NUMBER = "5358183649";

export const getWhatsappUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const PRODUCT_SPECS: ProductSpec[] = [
  {
    category: "Inversor Híbrido",
    items: ["6.5KW Potencia Nominal", "Salida 120/240 VAC Split Phase", "Controlador MPPT Integrado", "Monitoreo WiFi"]
  },
  {
    category: "Batería LiFePO4",
    items: ["14.3 kWh Capacidad", "Vida útil > 6000 ciclos", "BMS Inteligente", "Diseño Rack 19\""]
  },
  {
    category: "Paneles Solares",
    items: ["Tecnología Monocristalina", "Eficiencia > 21%", "Vidrio Templado 3.2mm", "Resistencia a Viento/Nieve"]
  },
  {
    category: "Protecciones",
    items: ["Breakers DC/AC Incluidos", "DPS (Descargadores)", "Caja de Combinación", "Cableado Certificado"]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'kit-6.5kw',
    name: "Kit Solar Híbrido 6.5KW",
    price: 6985.00,
    installationCost: 750.00,
    highlight: "Máxima Potencia",
    description: "Sistema robusto de 48V con gran capacidad de almacenamiento y generación. Ideal para casas grandes.",
    specs: [
      {
        category: "Inversor",
        items: ["6.5KW 48VDC", "Salida 120-240 VAC (Fase Partida)", "Eficiencia 1.14", "Modelo ASP4865U140-H"]
      },
      {
        category: "Batería",
        items: ["Litio LiFePO4 51.2V 280Ah", "14.336 KWH Total", "Modelo SE15B"]
      },
      {
        category: "Paneles",
        items: ["12x Módulos 620Wp", "7440 Wp Total", "Inclinación 15°"]
      }
    ],
    supportedDevices: [
      "3x Aires Acondicionados (Split 1T)",
      "Refrigerador + Freezer",
      "Lavadora Automática",
      "Bomba de Agua (1/2 HP)",
      "Iluminación Completa + TV + PC",
      "Microondas (Uso intermitente)"
    ]
  },
  {
    id: 'kit-5kw',
    name: "Kit Solar Híbrido 5KW",
    price: 4685.00,
    installationCost: 500.00,
    highlight: "Mejor Valor",
    description: "Solución eficiente para hogares estándar. Excelente equilibrio costo-beneficio.",
    specs: [
      {
        category: "Inversor",
        items: ["5KW 48VDC", "Salida 120 VAC", "Modelo HF4850U80-H"]
      },
      {
        category: "Batería",
        items: ["Litio LiFePO4 51.2V 205Ah", "10.49 KWH Total", "Modelo SE10B"]
      },
      {
        category: "Paneles",
        items: ["6x Módulos 620Wp", "3720 Wp Total", "Soporte Incluido"]
      }
    ],
    supportedDevices: [
      "1-2 Aires Acondicionados (Split 1T)",
      "Refrigerador Doble Temperatura",
      "Ventiladores y Luces LED",
      "TV + Laptop + Router",
      "Olla Reina (Uso diurno)",
      "Electrodomésticos Pequeños"
    ]
  }
];

export const GALLERY_IMAGES = [
    { url: "https://i.imgur.com/KGfXCCz.png", title: "Conjunto Completo" },
    { url: "https://i.imgur.com/DEKOQW5.jpeg", title: "Inversor Instalado" },
    { url: "https://i.imgur.com/DAExE3i.jpeg", title: "Batería LiFePO4" },
    { url: "https://i.imgur.com/2IeamVZ.jpeg", title: "Paneles (Vista Inferior)" },
    { url: "https://i.imgur.com/kNzsz3D.jpeg", title: "Paneles (Vista Superior)" },
    { url: "https://i.imgur.com/Mb1wugt.jpeg", title: "Kit de Montaje" },
    { url: "https://i.imgur.com/G4Dzvk1.png", title: "Detalle Batería" },
    { url: "https://i.imgur.com/bCW2ews.png", title: "Detalle Inversor" },
];

export const SHIPPING_RATES: ShippingRate[] = [
    { region: "Pinar Centro", price: 145 },
    { region: "Viñales", price: 170 },
    { region: "Matanzas", price: 90 },
    { region: "Varadero", price: 130 },
    { region: "Aguada de Pasajeros", price: 160 },
    { region: "Artemisa", price: 65 },
    { region: "San Cristóbal", price: 85 },
    { region: "Mayabeque", price: 60 },
    { region: "Batabanó", price: 60 },
    { region: "Nueva Paz", price: 75 },
    { region: "Santa Cruz del Norte", price: 58 },
    { region: "San Nicolás", price: 58 },
    { region: "Villa Clara", price: 240 },
    { region: "Caibarién", price: 290 },
    { region: "Cienfuegos", price: 205 },
    { region: "Trinidad", price: 275 },
    { region: "Sancti Spiritus", price: 310 },
    { region: "Jatibonico", price: 330 },
];

export const SYSTEM_INSTRUCTION = `
Eres un ingeniero experto en ventas de energía solar para "Makro Soluciones Tecnológicas".
Vendes dos productos principales:
1. Kit Solar 6.5KW ($6985 USD): Inversor 6.5KW 120/240V, 12 Paneles (7440Wp), Batería 14.3kWh.
   - Soporta: 3 Aires, Nevera, Freezer, Lavadora, Luces, TV.
2. Kit Solar 5KW ($4685 USD): Inversor 5KW 120V, 6 Paneles (3720Wp), Batería 10.49kWh.
   - Soporta: 1-2 Aires, Nevera, Luces, TV, Olla.

Información Clave:
- Garantía: 1 Año en todos los equipos.
- Envío: GRATIS en La Habana. Para otras provincias, hay tarifas específicas (ej: Matanzas $90, Villa Clara $240).
- Instalación (Opcional):
  * Kit 6.5KW: $750 USD.
  * Kit 5KW: $500 USD.
- Marcas: DAH Solar, TW Solar, SRNE, Leader.
- Contacto directo: WhatsApp +53 58183649.

Estilo:
- Profesional y amable.
- Si preguntan por instalación, da los precios exactos dependiendo del kit.
- Si preguntan qué equipos soporta, usa la lista de arriba.
- Resalta la independencia energética.
`;