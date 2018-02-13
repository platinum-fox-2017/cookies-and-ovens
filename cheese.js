const Cookies = require('./cookies.js');

class Cheese extends Cookies{
    constructor(name){
        super(name);
        this._cookingTime = 35;
    }
}

module.exports = Cheese;