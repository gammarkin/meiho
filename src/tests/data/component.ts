/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */

const baseComponents = [
  { _id: 'footer_section', name: 'Footer Section', type: 'section', parentId: null, data: { hidden: false }, attributes: { 'background-repeat': 'repeat', 'background-size': 'auto', 'background-position': 'top center', border: 'none', direction: 'ltr', 'text-align': 'center', padding: '0px 0px 0px 0px' }, styleId: 'style_footer_section', children: ['footer_column'] },
  { _id: 'header_image_logo', name: 'Logo Image', type: 'image', parentId: 'header_column_logo_centric', attributes: { src: 'https://www.3chi.com/wp-content/uploads/2023/03/3Chi_favicon_Flower_512x512.webp', alt: 'Logo', href: 'https://club13.com', width: '100px', height: '100px' }, data: { content: '', hidden: false }, styleId: '', children: [] },
  { _id: 'header_column_logo_centric', name: 'Logo Centric Header Column', type: 'column', parentId: 'header_logo_centric', attributes: { 'vertical-align': 'top', 'text-align': 'center', padding: '10px' }, data: { content: '', hidden: false }, styleId: '', children: ['header_image_logo'] },
];

export const createdComponent = { _id: 'header_nav_link_2', name: 'Navigation Link 2', type: 'navlink', parentId: 'header_navbar', attributes: { color: '#555555', href: 'https://www.example.com/link2' }, data: { content: 'Link 2', hidden: false }, styleId: 'navlink_style_1', children: [] };
export const componentToCreate = { _id: 'header_nav_link_2', name: 'Navigation Link 2', type: 'navlink', parentId: 'header_navbar', attributes: { color: '#555555', href: 'https://www.example.com/link2' }, data: { content: 'Link 2', hidden: false }, styleId: 'navlink_style_1', children: [] };

export default baseComponents;