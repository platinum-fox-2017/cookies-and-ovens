const Oven = require('./oven.js');

class Cookies{
    constructor(name){
        this._name = name;
        this._cookingTime = 0;
    }

    bake(){
        let cook = new Oven(this._name, this._cookingTime);
        return cook.bake();
    }
}

module.exports = Cookies;