/* eslint-disable max-params */
/* eslint-disable max-len */
import lodash from 'lodash';
import fs from 'fs';
import mjmlToHtml from 'mjml';
import Header from '../Models/MJML/01.Header';
import HeroBanner from '../Models/MJML/02.HeroBanner';
import IHeader from '../interfaces/IHeader';
import IHeroBanner from '../interfaces/IHeroBanner';
import MJMLCreator from './createSectionsMJML';
import ProductList from '../Models/Products/ProductList';
import IProductList from '../interfaces/IProductList';

const template = lodash.template(`
<mjml>
  <mj-body>
    <%= myHeader %>

    <mj-wrapper>
      <%= myHero %>
      <%= content %>
      <%= productList %>
      <%= buttonBuy %>
      <%= footer %>
      
    </mj-wrapper>
  </mj-body>
</mjml>
`);

const generateMJML = async (
  response: string, 
  selectedStyle: any, 
  style: any,
  website: any, 
  client: string, 
  rows: number,
  columns: number, 
  selectedCategories: string[],
) => {
  const header = await Header.find();
  const heroBanner = await HeroBanner.find();
  let headerImage;
  if (header.filter((i) => i.profile === client).length > 0) {
    headerImage = header.filter((i) => i.profile === client)[0] as any;
  } else {
    headerImage = header.filter((i) => i.style === style)[0] as IHeader;
  }
  const headerImageUrl = headerImage.mjImage.src;

  let heroBannerImage;
  if (heroBanner.filter((i) => i.profile === client).length > 0) {
    heroBannerImage = heroBanner.filter((i) => i.profile === client)[0] as IHeroBanner;
  } else {
    heroBannerImage = heroBanner.filter((i) => i.style === style)[0] as IHeroBanner;
  }
  const heroBannerImageUrl = heroBannerImage.mjImage.src;

  const bgColor = selectedStyle['background-color'];
  const borderColor = selectedStyle['border-color'];
  const fontSize = selectedStyle['font-size'];
  const { color } = selectedStyle;

  const paragraphs = response.split('\n').filter((line) => line.trim() !== '');
  const contentString = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');

  const MJML = new MJMLCreator();
  const myHeader = MJML.createHeader(bgColor, color, borderColor, fontSize, headerImageUrl, website);
  const myHero = MJML.createHero(heroBannerImageUrl, website);
  const content = MJML.createContent(contentString);
  const buttonBuy = MJML.createButton(bgColor, website);
  const footer = MJML.createFooter();

  const products = await ProductList.find({ profile: client }) as IProductList[];
  const filteredProducts = products.filter((product) =>
    product.categories.some((category) => selectedCategories.includes(category)));

  const productList = products.length > 0 ? MJML.renderProducts(filteredProducts, rows, columns) : '';

  const mjml = template({ myHeader, myHero, content, productList, buttonBuy, footer });

  const htmlOutput = mjmlToHtml(mjml);
  fs.writeFileSync('./src/output/index.html', htmlOutput.html);  
  fs.writeFileSync('./src/output/index.mjml', mjml);
  return mjml;
};

export default generateMJML;