const logger = require('../../../config/logger.config');

class Element {
    constructor(elementName, selectorType, selector) {
        if (selectorType === 'className'){
            this.element = element(by.className(selector));
        } else if (selectorType === 'css') {
            this.element = element(by.css(selector));
            } else if (selectorType === 'linkText') {
                this.element = element(by.linkText(selector));
            }
        this.elementName = elementName;}
    
    async click() {
        logger.info(`Clicking "${this.elementName}"`);
        await this.element.click();        
    };

    async search(text) {
        await this.element.sendKeys(text);        
    };

    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };
};

module.exports = Element;