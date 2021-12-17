const BasePage = require("../base_page/base_page"),
Element = require("../base_elements/base_element");


class HomePage extends BasePage {
    constructor() {
      super();
      this.HomePageUrl = "https://www.bosch.com/";
      this.CookieButton = new Element("CookieButton" , "className", "BoschPrivacySettingsV2__button BoschPrivacySettingsV2__button--primary");
           
    };
    
    async open() {
      await super.open(this.HomePageUrl);
    };
};

module.exports = HomePage;