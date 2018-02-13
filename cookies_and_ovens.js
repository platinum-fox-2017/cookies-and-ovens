// Answer These Questions:
//
// - What are essential classes?
    // Class Oven
// - What attributes will each class have?
     
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Oven{
    constructor(){
        this._collection = []

    }

    getBaked(cake){
        this._collection.push(cake)
        return this
    }

    bakedProcess(num){
        
        
        for(let i = 0;i < num; i++){
            for(let j = 0; j < this._collection.length; j++){
                if(this._collection[j].cooked + 5 === i){
                    console.log(`Kue ${this._collection[j].name} Hangus`)
                }else if(this._collection[j].cooked === i){
                    console.log(`Kue ${this._collection[j].name} matang`)
                }
                else if(this._collection[j].cooked - 5 === i){
                    console.log(`Kue ${this._collection[j].name} hampir matang`)
                }else if(this._collection[j].cooked - 10 === i){
                    console.log(`Kue ${this._collection[j].name} masih mentah`)
                }
            }
        }

        return ""
    }
}

class Cake{
    constructor(name,cooked){
        this.name = name
        this.cooked = cooked
    }
}

let oven = new Oven()

let coklat = new Cake('coklat', 20)
let kacang = new Cake('kacang', 30)
let keju = new Cake('keju', 35)

oven.getBaked(coklat).getBaked(kacang).getBaked(keju)

console.log(oven.bakedProcess(30))




