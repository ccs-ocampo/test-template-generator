import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();


export const writeFile = async (text) => {
    const path = "tests/" + formatFeatureFile(process.env.COMMON_FEATURE) + ".js";
    try {
        await fs.writeFileSync(path, text);
      } catch (err) {
        console.log(err);
      }
};

function formatFeatureFile(inputString) {
    let cleanedString = inputString.replace(/[^\w\s]/g, '').replace(/\s+/g, '');
      
    cleanedString = cleanedString.charAt(0).toLowerCase() + cleanedString.slice(1);
    
    return cleanedString;
  }