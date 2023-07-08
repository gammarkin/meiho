/* eslint-disable max-len */
import fs from 'fs';
import fetch from 'node-fetch';
import 'dotenv/config';

const Authorization = process.env.KLAVIYO_URI as string;
const url = 'https://a.klaviyo.com/api/templates/';
const APPLICATION_JSON = 'application/json';

const options = {
  method: 'GET',
  headers: {
    accept: APPLICATION_JSON,
    revision: '2023-06-15',
    Authorization,
  },
};

const getKlaviyo = async () => {
  const data = await fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => (json.data));

  const firstElement = data[0];
  const { html } = firstElement.attributes;

  fs.writeFileSync('./src/output/klaviyo.html', html);  

  return html;
};

const postKlaviyo = async () => {
  const htmlToPost = fs.readFileSync('./src/output/index.html', 'utf-8').toString();
  const optionsPost = {
    method: 'POST',
    headers: {
      accept: APPLICATION_JSON,
      revision: '2023-06-15',
      'content-type': APPLICATION_JSON,
      Authorization,
    },
    body: JSON.stringify({
      data: {
        type: 'template',
        attributes: {
          name: 'Monthly Newsletter Template',
          html: htmlToPost,
          text: 'hello world',
          editor_type: 'CODE',
        },
      },
    }),
  };
  
  const data = await fetch(url, optionsPost)
    .then((resp) => resp.json())
    .then((json) => json)
    .then((err) => `error${err}`);

  return data;
};

export default { getKlaviyo, postKlaviyo };