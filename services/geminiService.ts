import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Verificación de API Key
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY no configurada en el entorno.");
      throw new Error("Configuración incompleta");
    }

    // Creamos una instancia fresca en cada llamada para evitar estados corruptos en móviles
    const ai = new GoogleGenAI({ apiKey });
    
    // Usamos gemini-3-flash-preview para máxima compatibilidad y velocidad
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });
    
    return response.text || "No recibí una respuesta clara. Inténtalo de nuevo.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Error específico para bloqueo geográfico o de red
    if (error.message?.includes('fetch') || error.message?.includes('network')) {
      throw new Error("Error de red: Verifica tu conexión o si el servicio está disponible en tu región.");
    }
    
    throw new Error("Error al conectar con el asistente.");
  }
};