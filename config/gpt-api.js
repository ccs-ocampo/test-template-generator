import OpenAI from "openai";
import { writeFile } from "./utils.js"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const gptRequest = async () => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
              role: "user",
              content: `Generate a basic test script templates in ${process.env.TEST_FRAMEWORK} to validate a ${process.env.COMMON_FEATURE} feature, covering the main scenarios. Only respond with code as plain text without code block syntax around it.`,
            },
          ],
        temperature: 0.2,
        max_tokens: 2048,
        top_p: 0.1,
    });
    return response.choices[0].message.content;
    
}

export const generateTestTemplate = async () => {
    const code = await gptRequest();
    await writeFile(code);
}