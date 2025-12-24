import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  // Se utiliza gemini-flash-lite-latest para máxima velocidad/baja latencia
  chatSession = ai.chats.create({
    model: 'gemini-flash-lite-latest',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });
    
    return result.text || "Disculpa, no pude procesar esa respuesta. ¿Podrías reformular la pregunta?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Error de conexión con el asistente de ventas.");
  }
};