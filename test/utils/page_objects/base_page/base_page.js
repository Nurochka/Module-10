const Menu = require('./menu'),
logger = require('../../../config/logger.config');

class BasePage{
    constructor() {
        this.Menu = new Menu();
    };
    
    async wait(waitInMilliseconds) {
        logger.info(`Waiting "${waitInMilliseconds}" milliseconds`);
        await browser.sleep(waitInMilliseconds);
    };

    async getCurrenUrl() {
        const currentUrl = await browser.getCurrentUrl();
        logger.debug(`Current url is "${currentUrl}"`)       
        return currentUrl;
    };

    async getTitle() {
        const currentTitle = await browser.getTitle();        
        return currentTitle;
    };

    async open(url) {
        logger.info(`Opening "${url}" url`);
        await browser.get(url);
    };
};

module.exports = BasePage;