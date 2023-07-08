import { OpenAI } from 'langchain/llms/openai';
import nodemailer from 'nodemailer';
import mjml from 'mjml';
import 'dotenv/config';
import fs from 'fs';

const openAIApiKey = process.env.OPEN_AI_KEY;

const createSubject = async (message: string) => {
  const model = new OpenAI({ openAIApiKey, temperature: 0.9 });
  const param = `Create a email subject (not a lot of words) 
  based on the following message: ${message}`;
  const subject = await model.call(param);
  return subject;
};

const { GMAIL_USER, GMAIL_PASSWORD } = process.env;

const sendEmail = async (message: string, to: string) => {
  const mjmlData = fs.readFileSync('./src/output/index.mjml', 'utf8');
  // const mjmlData = fs.readFileSync('./src/templates/index.mjml', 'utf8');
  const { html } = mjml(mjmlData);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });

  const subject = await createSubject(message);

  const info = await transporter.sendMail({
    from: 'Daniel Rubens <pythondanielrubens@gmail.com>',
    to,
    subject,
    html,

  });
  return `Message sent: ${info.messageId}`;
};

export default sendEmail;