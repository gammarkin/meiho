import fs from 'fs';
import createTemplate from './getTemplate';

const generateMJML = async (response: string, str:string, profile: string) => {
  const paragraphs = response.split('\n').filter(
    (line) => line.trim() !== '',
  );
  
  const mjml = createTemplate(str, paragraphs.join(''), profile);
  await fs.promises.writeFile('./src/output/index.mjml', await mjml);
  
  return mjml;
};

export default generateMJML;
