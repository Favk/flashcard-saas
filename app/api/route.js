import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}`;

export async function POST(req) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(systemPrompt);
    
    try {
        const data = await req.text();
        const response = await gemini.generateFlashcards({
            prompt: systemPrompt,  // Sending the prompt along with the data
            text: data,
            numberOfFlashcards: 10,
        });
    } catch (error) {
        
    }
    // We'll implement the OpenAI API call here
  }