const Cookies = require('./cookies.js');

class Peanut extends Cookies{
    constructor(name){
        super(name);
        this._cookingTime = 30;
    }
}

module.exports = Peanut;