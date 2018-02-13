const Cookies = require('./cookies.js');

class Chocolate extends Cookies{
    constructor(name){
        super(name);
        this._cookingTime = 20;
    }
}

module.exports = Chocolate;