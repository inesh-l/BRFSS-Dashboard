import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyCeloaDLqLCLocwuwflIiYsyt-E4lWqiyI");

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

export async function runLlmQuery(prompt: string) {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}
  