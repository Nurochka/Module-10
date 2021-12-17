const BasePage = require("../base_page/base_page"),
Element = require("../base_elements/base_element"),
Collection = require("../base_elements/base_collection");

class AtHomePage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.bosch.com/products-and-services/at-home/";
      this.HomeAppliancesButton = new Element("HomeAppliancesButton", "css", '[data-a-modal-trigger="CountrySelectorModal1-493941_2"] > .A-Button-Core__label');
      this.ContinentDropdown = new Element("ContinentDropdown", "css", '[name="selectedRegion-{{$ctrl.businessActivityDetails.id}}"]');
      this.CountryDropdown = new Element("CountryDropdown", "css", '[name="selectedCountry-{{$ctrl.businessActivityDetails.id}}"]');
      this.HouseholdAppliancesPopup = new Element("HouseholdAppliance", "className", "M-Modals-CountrySelector__headline");
      this.GoToHomeAppliancesButton = new Element("GoToHomeAppliances", "className", 'A-Link__link A-Link__link--button');
      this.selectContinent = new Collection("Continent", "css", '[name="selectedRegion-{{$ctrl.businessActivityDetails.id}}"] option');
      this.selectCountry = new Collection("Country", "css", '[name="selectedCountry-{{$ctrl.businessActivityDetails.id}}"] option');  
      
    };

    async open() {
      await super.open(this.url);
    };
};

module.exports = AtHomePage;