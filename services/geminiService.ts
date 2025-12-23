
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Fix: Always use named parameter and direct process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  // Fix: Using gemini-3-flash-preview for basic text tasks as per guidelines
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
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
    
    // Fix: Accessing .text property directly instead of calling it as a function
    return result.text || "Disculpa, no pude procesar esa respuesta. ¿Podrías reformular la pregunta?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Error de conexión con el asistente de ventas.");
  }
};
