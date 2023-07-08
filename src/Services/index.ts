import { OpenAI } from 'langchain/llms/openai';
import 'dotenv/config';
import sendEmail from './sendEmail';
// import generateMJML from './warehouse/createMJML';
import klavio from './klaviyo';
import generateMJML from './createMJML';

const openAIApiKey = process.env.OPEN_AI_KEY;

const model = new OpenAI({ openAIApiKey, temperature: 0.9 });
const { postKlaviyo } = klavio;
export { model, sendEmail, generateMJML, postKlaviyo };