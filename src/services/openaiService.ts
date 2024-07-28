import axios from 'axios';

const API_KEY = 'sk-proj-7zHPH4hAbll4gVF692nHT3BlbkFJ8M40CHVR7CrXkChacsRf';
const API_URL = 'https://api.openai.com/v1/chat/completions';

interface Choice {
  message: {
    content: string;
  };
}

interface OpenAIResponse {
  choices: Choice[];
}

export const fetchOpenAIResponse = async (prompt: string) => {
  try {
    const response = await axios.post<OpenAIResponse>(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error: any) {
    console.error('Error fetching OpenAI response:', error.response ? error.response.data : error.message);
    throw error;
  }
};
