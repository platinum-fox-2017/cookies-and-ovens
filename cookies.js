const Oven = require('./oven.js');

class Cookies{
    constructor(name, cookingTime){
        this._name = name;
        this._cookingTime = cookingTime;
    }

    bake(){
        let cook = new Oven(this._name, this._cookingTime);
        return cook.bake();
    }
}

module.exports = Cookies;