import { readFile } from 'fs';
import lodash from 'lodash';

import Components from '../../Models/Components';
import defaultData from '../../assets/mjml/default';
import BrandProfile from '../../Models/Brand/BrandProfile';

const fileNames = [
  '01.header.mjml',
  '02.heroBanner.mjml',
  '03.textFolder.mjml',
  '04.subTextFolder.mjml',
  '06.footer.mjml',
  '05.buttonBuy.mjml',
];

const ensureKeyExists = (component: Record<string, unknown>) => {
  if (!component) return defaultData;

  return Object.keys(defaultData).reduce((acc, key) => {
    const value: unknown = component[key];
    return { ...acc, [key]: value || defaultData[key] };
  }, {});
};

const findComponentType = (type: string, component: any) =>
  component.find((comp: Record<string, string>) => comp.type === type);

const findImage = (profile: string, component: any, type: string) => 
  component.find((comp: { type: string, name: string }) =>
    (comp.name.toLowerCase().includes(type.toLowerCase())
    && comp.name.toLowerCase().includes(
      profile.split(' ')[0].toLowerCase(),
    )));

const convertToHTML = (attributes: any) => {
  if (!attributes
    || typeof attributes !== 'object' 
    || Array.isArray(attributes)) return '';

  return Object.keys(attributes.attributes).reduce((acc, key) => {
    const value = attributes.attributes[key];
    return `${acc} ${key}="${value}"`;
  }, '');
};

const getMJMLStyles = async (styleId: string, fileName:string, profile: string) => {
  const components = await Components.find({ styleId });
  const brandProfile = await BrandProfile.find({
    profile: { 
      $regex: profile, 
      $options: 'i', 
    },
  });

  const sectionComponents: { type: string, name:string }[] = components.filter((component) => 
    (component.name.toLowerCase()).includes((fileName.split('.')[1]).toLowerCase()));

  const imageComponent = findImage(profile, sectionComponents, 'logo');
  const mjHeroImageAttributes = findImage(profile, sectionComponents, 'hero');

  return ensureKeyExists({
    mjSectionAttributes: convertToHTML(findComponentType('section', sectionComponents)),
    mjColumnAttributes: convertToHTML(findComponentType('column', sectionComponents)), 
    mjTextAttributes: convertToHTML(findComponentType('text', sectionComponents)), 
    mjImageAttributes: convertToHTML(imageComponent),
    mjLogoImageAttributes: convertToHTML(mjHeroImageAttributes),
    mjButtonAttributes: (
      `${convertToHTML(findComponentType('button', sectionComponents))}
      href="${brandProfile[0].website}" target="_blank" rel="noreferrer"`
    ),
  });
};

const getMJMLSections = async (styleId: string, response:string, profile: string) =>
  Promise.all(fileNames.map((fileName) => new Promise((resolve, reject) => {
    readFile(`./src/templates/mj-sections/${fileName}`, async (err, data) => {
      if (err) return reject(err);

      const template = lodash.template(data.toString());
      const options = await getMJMLStyles(styleId, fileName, profile);

      const [
        mjTextFolderContent,
        mjSubTextFolderContent,
        mjFooterTextContent,
      ] = response.split('///');

      return resolve(template({
        ...options,
        mjTextFolderContent,
        mjSubTextFolderContent,
        mjFooterTextContent,
        mjButtonText: 'Try it now',
      }));
    });
  })));

const getMJML = async (styleId: string, response: string, profile:string) => {
  const [header, ...body] = await getMJMLSections(styleId, response, profile);

  return (
    `<mjml>
    <mj-body>
    ${header}
    <mj-wrapper >
    ${body.join('')}
    </mj-wrapper>
    </mj-body>
    </mjml>`
  ).replace(/\n/g, '').replace('\\', '');
};

export default getMJML;