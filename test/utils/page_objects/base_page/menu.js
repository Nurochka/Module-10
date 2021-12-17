const Element = require("../base_elements/base_element");

class Menu{
    constructor() {
        this.menuButton = new Element('Menu', 'className', 'M-Main-Navigation__toggle__icon');
        this.productsButton = new Element('ProductsAndServices', 'className', 'M-Main-Navigation__link M-Main-Navigation__linkToSecond');
        this.atHomeLink = new Element('AtHome', 'linkText', 'At home');
    };
};

module.exports = Menu;