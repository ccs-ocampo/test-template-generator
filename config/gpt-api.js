const OpenAI = require("openai");
const fs = require('fs');
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const gptRequest = async () => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
              role: "user",
              content: "Generate a test script template in Cypress",
            },
          ],
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
    });
    return response.choices[0].message.content;
    
}

const writeFile = async (text) => {
    try {
        await fs.writeFileSync('cypress/e2e/basicTemplate.js', text);
      } catch (err) {
        console.log(err);
      }
};

const generateTestTemplate = async () => {
    const code = await gptRequest();
    await writeFile(code);
}


generateTestTemplate();