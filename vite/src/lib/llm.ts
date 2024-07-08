import { GoogleGenerativeAI } from "@google/generative-ai";
type setLlmResultType = (text: string) => void;
const genAI = new GoogleGenerativeAI("key");

const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

async function run(setLlmResult: setLlmResultType) {
    const prompt = "Who are you?"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setLlmResult(text);
}
  