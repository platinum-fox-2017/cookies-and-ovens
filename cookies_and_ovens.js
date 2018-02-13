// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookie {
    constructor(name){
        this._name = name || 'Kue'
        this._time = 0
        this._bakeTime = 40
        this._status = this.status()
    }
    addTime(){
        this._time += 5
    }
    status (){
        if (this._time < this._bakeTime-10){
            console.log(`${this._name}, menit ke-${this._time} : mentah`)
        } else if (this._time < this._bakeTime-5){
            console.log(`${this._name}, menit ke-${this._time} : hampir matang`)
        } else if (this._time < this._bakeTime){
            console.log(`${this._name}, menit ke-${this._time} : matang`)
        } else {
            console.log(`${this._name}, menit ke-${this._time} : hangus`)
        }
    }
}

class PeanutCookie extends Cookie {
    constructor(){
        super('Kue Kacang')
    }
}

class ChocolateCookie extends Cookie {
    constructor(){
        super('Kue Coklat')
        this._bakeTime = 30
    }
}

class CheeseCookie extends Cookie {
    constructor(){
        super('Kue Keju')
        this._bakeTime = 35
    }   
}

let peanut = new PeanutCookie()
let chocolate = new ChocolateCookie()
let cheese = new CheeseCookie()

for (let i = 0; i < 10; i++){
    kacang.addTime()
    kacang.status()
}