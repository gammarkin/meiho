/* eslint-disable max-len */
import IProductList from '../interfaces/IProductList';

class MJMLCreator {
  createHeader(
    bgColor: string, 
    color: string, 
    borderColor: string, 
    fontSize: string, 
    headerImageUrl: string, 
    website: string,
  ) {
    return `
            <mj-section background-color=${bgColor} color=${color} border-color=${borderColor} font-size=${fontSize}
                background-repeat="repeat" background-size="auto" background-position="top center" 
                border="none" direction="ltr" text-align="center" padding="0px 0px 0px 0px">
                <mj-column vertical-align="top" text-align="center" padding="10px">
                    <mj-image src=${headerImageUrl} alt="Logo" href=${website} width="100px" height="100px">
                    </mj-image>
                </mj-column>
            </mj-section>`;
  }

  createHero(heroBannerImageUrl: string, website: string) {
    return `
            <mj-section background-repeat="repeat" background-size="auto" background-position="top center" border="none" direction="ltr" text-align="center" padding="0px 0px 0px 0px">
                <mj-column vertical-align="top" text-align="center" padding="0px">
                    <mj-image src=${heroBannerImageUrl} alt="Hero Image" href=${website} width="600px" height="auto" align="center" padding="0px 0px 0px 0px">
                    </mj-image>
                </mj-column>
            </mj-section>`;
  }

  createContent(content: string) {
    return `
            <mj-section background-repeat="repeat" background-size="auto" background-position="top center" border="none" direction="ltr" text-align="center" padding="0px 0px 0px 0px">
                <mj-column border="none" vertical-align="top" width="480px" padding="0px 0px 0px 0px">
                    <mj-text align="left" mj-class="body-text" font-size="16px" line-height="22px" padding="10px 25px 10px 25px">
                        <div style="text-align: center;">
                            <span style="word-spacing: normal;">
                                <mj-text font-size="20px" color="#F45E43" font-family="helvetica">${content}</mj-text>
                            </span>
                        </div>
                    </mj-text>
                </mj-column>
            </mj-section>`;
  }

  createButton(bgColor: string, website: string) {
    return `
            <mj-section background-repeat="repeat" background-size="auto" background-position="top center" border="none" direction="ltr" text-align="center" padding="10px 0px 10px 0px">
                <mj-column border="none" vertical-align="top" padding="0px 0px 0px 0px">
                    <mj-button align="center" background-color=${bgColor} color="#111111" font-weight="normal" border-radius="3px" line-height="120%" target="_blank" vertical-align="middle" border="none" text-align="center" href=${website} font-family="Open Sans, Arial, sans-serif" font-size="16px" width="270px" padding="0px 0px 0px 0px" inner-padding="10px 25px 10px 25px">
                        <span style="letter-spacing: 2px; text-transform: uppercase; text-decoration:underline;">shop in store
                        </span>
                    </mj-button>
                </mj-column>
            </mj-section>`;
  }

  renderProducts(products: IProductList[], rows: number, columns: number) {
    let productRows = '';
  
    for (let r = 0; r < rows; r++) {
      let productColumns = '';
      
      for (let c = 0; c < columns; c++) {
        const index = r * columns + c;
        
        if (products[index]) {
          productColumns += this.renderProduct(products[index]);
        }
      }
  
      const productSection = `
        <mj-section background-repeat="repeat" background-size="auto" background-position="top center" border="none" direction="ltr" text-align="center" padding="10px 0px 10px 0px">
          ${productColumns}
        </mj-section>
      `;
      productRows += productSection;
    }
  
    return productRows;
  }
  
  renderProduct(product: IProductList) {
    return `
        <mj-column border="none" vertical-align="top" padding="0px 0px 0px 0px">
            <mj-image src="${product.src}" alt="${product.name}" href=${product.url} width="200px" height="auto" align="center" padding="0px 0px 0px 0px"></mj-image>
            <mj-text align="center" mj-class="body-text" font-size="16px" line-height="22px" padding="10px 25px 10px 25px">
                <div style="text-align: center;">
                    <span style="word-spacing: normal;">
                        <mj-text font-size="20px" color="#111111" font-family="helvetica">${product.name}<br /></mj-text>
                        <mj-text font-size="16px" color="#111111" font-family="helvetica">$ ${product.price}</mj-text>
                    </span>
                </div>
            </mj-text>
        </mj-column>
    `;
  }

  createProductsList(products: IProductList[]) {
    let productSections = '';
    
    products.forEach((product: IProductList) => {
      const productSection = `
            <mj-section background-repeat="repeat" background-size="auto" background-position="top center" border="none" direction="ltr" text-align="center" padding="10px 0px 10px 0px">
                <mj-column border="none" vertical-align="top" padding="0px 0px 0px 0px">
                    <mj-image src="${product.src}" alt="${product.name}" width="200px" height="auto" align="center" padding="0px 0px 0px 0px"></mj-image>
                    <mj-text align="center" mj-class="body-text" font-size="16px" line-height="22px" padding="10px 25px 10px 25px">
                        <div style="text-align: center;">
                            <span style="word-spacing: normal;">
                                <mj-text font-size="20px" color="#111111" font-family="helvetica">${product.name}</mj-text>
                                <mj-text font-size="16px" color="#111111" font-family="helvetica">${product.price}</mj-text>
                            </span>
                        </div>
                    </mj-text>
                </mj-column>
            </mj-section>
        `;
        
      productSections += productSection;
    });

    return productSections;
  }

  createFooter() {
    return `
    <mj-section background-repeat="repeat" background-size="auto" background-position="top center" border="none" direction="ltr" text-align="center" padding="0px 0px 0px 0px">
    <mj-column border="none" vertical-align="top" padding="0px 0px 0px 0px">
      <mj-text align="center" mj-class="footer-text" container-background-color="#000000" color="#FFFFFF" padding="20px 15px 0px 15px">
        <p style="margin: 0px 0px 10px; padding-bottom: 10px; font-size: 10px; line-height: 15px; font-family: &quot;Open Sans&quot;, Raleway, Arial, Helvetica, sans-serif;">We only send emails to individuals who have registered at our site:
        <a href="http://www.ugg.com/" name="footer_ugghomepage" style="text-decoration: underline;" tabindex="-1">www.ugg.com</a>
      </p>
      <p style="margin: 0px 0px 10px; padding-bottom: 10px; font-size: 10px; line-height: 15px; font-family: &quot;Open Sans&quot;, Raleway, Arial, Helvetica, sans-serif;">*A free return label will be included with your order. This offer only applies to full-price orders shipped within the continental United States and placed on
        <span class="apple-link-black">ugg.com</span>. Please note this offer does not apply to clearance product.
      </p>
      <p style="margin: 0px 0px 10px; padding-bottom: 10px; font-size: 10px; line-height: 15px; font-family: &quot;Open Sans&quot;, Raleway, Arial, Helvetica, sans-serif;">
        <span style="text-decoration: none;">
            <strong>1.888.432.8530</strong>
            <br> 123 North Leroux Street, Flagstaff, AZ 86001
          </span>
        <br>
        <a href="http://www.ugg.com/" name="footer_privacy" style="text-decoration: underline;" tabindex="-1">
            <strong>Privacy Policy</strong>
          </a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="{%unsubscribe_link%}" style="text-decoration: underline;" tabindex="-1">
            <strong>Unsubscribe</strong>
          </a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://email.ugg.com/pub/sf/ResponseForm?_ri_=X0Gzc2X%3DYQpglLjHJlTQGjmR9kDzfwzbMzackp9f3F8d45ze2zfbW8hYB6AzgB7gaIYB3tN5qwvasVXMtX%3DYQpglLjHJlTQGNXlMNF3fFUYHWCzdBj2rGzgJpzem2KonGoezgzbfUyABevzgl4CepTMC&amp;_ei_=EolaGGF4SNMvxFF7KucKuWP7XpARYKtbBY43fLBYxvXNpGx2Z89j4M" style="text-decoration: underline;" tabindex="-1">View in Browser</a>
      </p>
      </mj-text>
    </mj-column>
  </mj-section>`;
  }
}

export default MJMLCreator;
