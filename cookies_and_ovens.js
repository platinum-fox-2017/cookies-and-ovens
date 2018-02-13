"use strict"
// import { error } from "util";

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

class Cake {
    constructor(bakeTime, name, bakeTimeNeeded) {
        this._name = name || 'Regular Cake'
        this._bakeTime = bakeTime || 25
        this._bakeTimeNeeded = bakeTimeNeeded ||25
        this._status = this.setStatus()
    }

    get name() {
        return this._name
    }

    get bakeTime() {
        return this._bakeTime;
    }

    get bakeTimeNeeded() {
        return this._bakeTimeNeeded;
    }

    get status() {
        return this._status;
    }

    set bakeTime(value) {
        this._bakeTime=value;
    }

    setStatus() {
        if(this.bakeTime>this.bakeTimeNeeded+4) return 'Hangus';
        else if(this.bakeTime>=this.bakeTimeNeeded) return 'matang';
        else if(this.bakeTime>=this.bakeTimeNeeded-5) return 'hampir matang';
        else if(this.bakeTime<this.bakeTimeNeeded-5) return 'mentah';
    }
}

class ChocolateCake extends Cake {
    constructor(bakeTime) {
        super(bakeTime, 'Chocolate Cake', 20)
    }
}

class PeanutCake extends Cake {
    constructor(bakeTime) {
        super(bakeTime, 'Peanut Cake', 30)
    }
}

class CheeseCake extends Cake {
    constructor(bakeTime) {
        super(bakeTime, 'Cheese Cake', 35)
    }
}

class Baker {
    constructor() {
        this.made = []
    }

    bake(bakeTime,option) {
        if(option === 'Chocolate Cake' || option === 'Kue Coklat') this.made.push(new ChocolateCake(bakeTime))
        else if(option === 'Peanut Cake' || option === 'Kue Kacang') this.made.push(new PeanutCake(bakeTime))
        else if(option === 'Cheese Cake' || option === 'Kue Keju') this.made.push(new CheeseCake(bakeTime))
        else {this.made.push(new Cake(bakeTime, option))}
    }
}

let ervan = new Baker()
ervan.bake(10, 'Kue Coklat')
ervan.bake(20, 'Kue Keju')
ervan.bake(25, 'Kue Kacang')
ervan.bake(35, 'Kue Keju')
ervan.bake(25, 'Kue Apel')
ervan.bake(25)
console.log(ervan)
for(let i in ervan.made) {
    console.log(`${ervan.made[i].name}, bake selama ${ervan.made[i].bakeTime} menit : ${ervan.made[i].status}`)
}