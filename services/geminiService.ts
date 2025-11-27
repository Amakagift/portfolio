import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    // We return a dummy session or throw, but strictly per guidelines we assume valid env.
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = getChatSession();

  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    // Create an async generator to yield text chunks
    async function* textGenerator() {
      for await (const chunk of resultStream) {
        // According to guidelines, chunk is GenerateContentResponse
        // We access .text directly
        const text = chunk.text;
        if (text) {
          yield text;
        }
      }
    }

    return textGenerator();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
