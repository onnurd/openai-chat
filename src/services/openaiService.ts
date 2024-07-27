// src/services/openaiService.ts
import axios from 'axios';

const API_KEY = 'sk-proj-Ozk1HKoVBO1TXpwoF3DzT3BlbkFJqu76Mab5ascwIW5xPMFV';
const API_URL = 'https://api.openai.com/v1/completions';

interface OpenAIResponse {
  choices: { text: string }[];
}

export const fetchOpenAIResponse = async (message: string): Promise<string> => {
  try {
    const response = await axios.post<OpenAIResponse>(API_URL, {
      model: 'gpt-4o-mini',
      prompt: message,
      max_tokens: 256,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    throw error;
  }
};
