
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this example, we assume it's set.
  console.warn("Gemini API key not found in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateGameDescription = async (gameTitle: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable. This is a dummy description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.";
  }
  
  try {
    const prompt = `Generate a compelling and exciting e-commerce product description for a digital video game titled: "${gameTitle}". 
    Focus on its key features, gameplay hooks, and story premise. 
    The tone should be energetic and persuasive. 
    Keep it concise, around 100-150 words. 
    Do not use markdown formatting.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    if (response.text) {
        return response.text.trim();
    }
    
    return "Failed to generate description.";
    
  } catch (error) {
    console.error("Error generating game description:", error);
    return `Error: Could not generate a description. Please try again. Details: ${error instanceof Error ? error.message : String(error)}`;
  }
};
