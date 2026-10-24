import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "node:fs";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-image",
      contents:
        "Professional ecommerce product photo of a white PVC pressure pipe on a pure white background, studio lighting, photorealistic.",
      config: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log(part.text);
      } else if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync("images/test.png", buffer);
        console.log("✅ Image saved as images/test.png");
      }
    }
  } catch (err) {
    console.error(err);
  }
}

main();