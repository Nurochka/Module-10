const PageFactory = require("../utils/page_objects/pageFactory");
let EC = protractor.ExpectedConditions;

describe("Searching for a product on regional https://www.bosch-home.by/ site", function(){

    it('go to not angular https://www.bosch-home.by/ page', async function(){
        await PageFactory.getPage("At Home").HomeAppliancesButton.click();  
        await PageFactory.getPage("At Home").ContinentDropdown.click();
        await PageFactory.getPage("At Home").selectContinent.clickElementByText("Europe");
        await PageFactory.getPage("At Home").CountryDropdown.click();
        await PageFactory.getPage("At Home").selectCountry.clickElementByText("Belarus");
        await PageFactory.getPage("At Home").GoToHomeAppliancesButton.click();
        await browser.wait(EC.urlContains('by'), 5000);
        browser.waitForAngularEnabled(false);
        expect(browser.getTitle()).toContain("Беларусь");                         
    }); 
    
    it('check there are 20 resutls on one page', async function(){ 
        await PageFactory.getPage("Regional Page").SearchField.search('пылесос');
        await PageFactory.getPage("Regional Page").SearchButton.click();
        const result = PageFactory.getPage("Search Result").SearchResults.getCount();
        expect(result).toEqual(20);
    });    

});