const PageFactory = require("../utils/page_objects/pageFactory");

describe("Bosch.com site testing", function(){

    it('open bosch.com angular page', async function(){
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").CookieButton.click();
        expect(browser.getTitle()).toEqual("Invented for life | Bosch Global");
    });

    it('go to search "At home" products', async function(){ 
        await PageFactory.getPage("Home").Menu.menuButton.click();  
        browser.sleep(1000);      
        await PageFactory.getPage("Home").Menu.productsButton.click();
        await PageFactory.getPage("Home").Menu.atHomeLink.click();
        expect(browser.getTitle()).toEqual("At home | Bosch Global");        
    });

});