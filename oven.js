class Oven{
    constructor(name, cookingTime){
        this._name = name;
        this._cookingTime = cookingTime;
    }

    bake(){
        for(let i=5; i<=this._cookingTime; i+=5){
            console.log(`${this._name}, menit ke ${i} : ${this.status(i)}`)
        }
    }

    status(cookingTime){
        if(cookingTime < this._cookingTime/2){
            return 'Mentah'
        }
        if(cookingTime >= this._cookingTime/2 && cookingTime < this._cookingTime){
            return 'Hampir Matang'
        }
        if(cookingTime == this._cookingTime){
            return 'Matang'
        }
        if(cookingTime > this._cookingTime){
            return 'Hangus'
        }
    }
}

module.exports = Oven;