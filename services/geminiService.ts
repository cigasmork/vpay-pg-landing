import { GoogleGenAI } from "@google/genai";

// This will be undefined in the browser unless a build tool like Vite/Webpack injects it.
// The execution environment is expected to handle this, but we add safeguards.
const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;

if (!apiKey) {
    console.error("API_KEY environment variable not set or not accessible in this environment.");
}

// Initialize only if API key is available to prevent runtime errors.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Classifies a user inquiry using the Gemini API.
 * @param inquiry The user's message.
 * @returns A category string.
 */
export async function classifyInquiry(inquiry: string): Promise<string> {
    if (!ai) {
        console.warn("Gemini service not available due to missing API Key. Falling back to default category.");
        return "General Question"; // Fallback category
    }

    try {
        const prompt = `Classify the following user inquiry into one of these categories: "Partnership Inquiry", "Technical Question", "Press & Media", "Investment Inquiry", "General Question". Analyze the text and provide only the most appropriate category name as your response. Do not add any extra text or explanation. Inquiry: "${inquiry}"`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0,
                thinkingConfig: { thinkingBudget: 0 }
            }
        });

        const category = response.text.trim();
        const validCategories = ["Partnership Inquiry", "Technical Question", "Press & Media", "Investment Inquiry", "General Question"];
        
        if (validCategories.includes(category)) {
            return category;
        } else {
            console.warn(`Gemini returned an unexpected category: "${category}". Falling back.`);
            return "General Question";
        }

    } catch (error) {
        console.error('Error classifying inquiry with Gemini API:', error);
        if (error instanceof Error && error.message.includes('403')) {
             console.error("A 403 Forbidden error occurred. This might be due to API key restrictions (e.g., HTTP referrers) or disabled APIs in your Google Cloud project.");
        }
        return "General Question"; // Fallback on any error
    }
}