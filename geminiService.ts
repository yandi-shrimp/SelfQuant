
import { GoogleGenAI, Type } from "@google/genai";

export const analyzeStock = async (symbol: string, context: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a brief quantitative and qualitative analysis for ${symbol}. 
      Context: ${context}. 
      Provide: 
      1. An Executive Summary (2-3 sentences).
      2. 3 key financial highlights.
      3. A technical outlook.
      4. A Bull vs Bear case summary.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            highlights: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            technical: { type: Type.STRING },
            bullCase: { type: Type.STRING },
            bearCase: { type: Type.STRING }
          },
          required: ["summary", "highlights", "technical", "bullCase", "bearCase"]
        }
      }
    });

    const text = response.text || '{}';
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return null;
  }
};
