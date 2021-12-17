const logger = require('../../../config/logger.config');

class Collection {
    constructor(elementName, selectorType, selector) {
        if (selectorType === 'className'){
            this.collection = element.all(by.className(selector));
        } else {
            this.collection = element.all(by.css(selector));}
        this.elementName = elementName;
    };

    async getCount() {
        const collectionCount = await this.collection.count();
        logger.debug(`Count of "${this.elementName}" is "${collectionCount}"`); 
        return collectionCount;
    };

    async getText() {
        const arrayOfCollectionTexts = await this.collection.getText();
        logger.info(`Texts of "${this.elementName}" are [${arrayOfCollectionTexts}]`);
        return arrayOfCollectionTexts;
    };

    async clickElementByText(textToClick) {
        const ElementWithTextToClick = await this.collection.filter(function(elem){
                return elem.getText().then(function(text){
                    return text === textToClick;
                });   
            }).first();
        logger.info(`Clicking "${textToClick}" text in "${this.elementName}"`);
        await ElementWithTextToClick.click();          
    };
};

module.exports = Collection;