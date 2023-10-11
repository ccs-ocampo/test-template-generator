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
              content: `${process.argv[2]}. Only respond with code as plain text without code block syntax around it.`,
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

const writeFile = async (text, path) => {
    try {
        await fs.writeFileSync(path, text);
      } catch (err) {
        console.log(err);
      }
};

const generateTestTemplate = async () => {
    const code = await gptRequest();
    await writeFile(code, process.argv[3]);
}


generateTestTemplate();