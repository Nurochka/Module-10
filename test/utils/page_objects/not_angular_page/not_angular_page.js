const Element = require("../base_elements/base_element");

class NotAngularPage{
    constructor() {
      this.NotAngularPageUrl = "https://www.bosch-home.by/";
      this.SearchField = new Element("SearchField", "className", 'm-forminput input normal js-search-input');
      this.SearchButton = new Element("SearchButton", "className", "icon icon-search icon-m");
    };

    async open() {
      logger.info(`Opening "${this.NotAngularPageUrl}" url`);
      await browser.get(this.NotAngularPageUrl);
    };
};

module.exports = NotAngularPage;