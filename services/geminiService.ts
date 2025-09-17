import { type ReflectionResponse } from '../types';
import { GoogleGenAI, Type } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = "gemini-2.5-flash";

const reflectionSchema = {
  type: Type.OBJECT,
  properties: {
    message: {
      type: Type.STRING,
      description: "Uma mensagem curta, gentil e de apoio que valide a emoção do usuário com base nas palavras-chave do texto (ex: 'feliz', 'triste')."
    },
    question: {
      type: Type.STRING,
      description: "Uma pergunta aberta e provocativa que convide o usuário a explorar sua emoção ou situação mais a fundo."
    }
  },
  required: ["message", "question"]
};

export const getReflection = async (diaryEntry: string): Promise<ReflectionResponse> => {
  const prompt = `
    Analise o seguinte texto de um diário em português. Identifique a emoção principal com base em palavras-chave (como 'feliz', 'triste', 'animado', 'cansado', 'frustrado', etc.).

    Texto do diário: "${diaryEntry}"

    Com base no texto, gere duas coisas:
    1. 'message': Uma mensagem curta, gentil e de apoio que valide a emoção principal identificada.
    2. 'question': Uma pergunta aberta, gentil e provocativa que convide o usuário a explorar essa emoção ou situação mais a fundo.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: reflectionSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const reflection: ReflectionResponse = JSON.parse(jsonText);
    
    if (!reflection.message || !reflection.question) {
        throw new Error("Invalid response structure from AI.");
    }

    return reflection;

  } catch (error) {
    console.error("Error fetching reflection from Gemini API:", error);
    throw new Error("Failed to get reflection from AI.");
  }
};