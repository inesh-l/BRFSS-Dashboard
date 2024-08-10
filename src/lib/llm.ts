import { GoogleGenerativeAI } from "@google/generative-ai";
import { systemPrompt } from "./llm-prompt";


const genAI = new GoogleGenerativeAI("AIzaSyCeloaDLqLCLocwuwflIiYsyt-E4lWqiyI");

const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
});
const chat = model.startChat({ history: [] });
const response = await chat.sendMessage(systemPrompt);
console.log(response);

export async function runLlmQuery(prompt: string) {
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(result);
    return text;
}
  