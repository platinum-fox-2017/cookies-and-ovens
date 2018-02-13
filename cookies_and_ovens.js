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
'use strict'

class Cake {
    constructor() {
        this.name = 'kue'
        this.timeCooked = 30
        this.status = 'mentah'
    }
}

class Oven {
    constructor(ovenTime) {
        this.ovenTime = ovenTime
        this.cakes = []
    }

    createCake(cake) {
        this.cakes.push(cake)
    }

    bake() {
        for (let j = 0; j < this.cakes.length; j++) {
            for (let i = 5; i <= this.ovenTime; i += 5) {
                if (i < Math.floor(this.cakes[j].timeCooked / 4)) {
                    this.cakes[j].status = 'mentah'
                } else if (i >= Math.floor(this.cakes[j].timeCooked / 4) && i < Math.floor(this.cakes[j].timeCooked / 3)) {
                    this.cakes[j].status = 'mentah'
                } else if (i >= Math.floor(this.cakes[j].timeCooked / 3) && i < Math.floor(this.cakes[j].timeCooked / 2)) {
                    this.cakes[j].status = 'sepertiga mateng'
                } else if (i >= Math.floor(this.cakes[j].timeCooked / 2) && i < this.cakes[j].timeCooked) {
                    this.cakes[j].status = 'hampir mateng'
                } else if (i == this.cakes[j].timeCooked) {
                    this.cakes[j].status = 'matang'
                } else if (i > this.cakes[j].timeCooked) {
                    this.cakes[j].status = 'angus :('
                }
                this.result(i, j, this.cakes[j].status)
            }
        }
    }

    result(minutes, j, status) {
        console.log(`Kue ${this.cakes[j].name}, menit ke ${minutes} : ${status}`);
    }
}

class PeanutCake extends Cake {
    constructor() {
        super()
        super.name = 'peanut cake'
        super.timeCooked = 30
    }
}

class ChocolateCake extends Cake {
    constructor() {
        super()
        super.name = 'chocolate cake'
        super.timeCooked = 20
    }
}

class CheeseCake extends Cake {
    constructor() {
        super()
        super.name = 'cheese cake'
        super.timeCooked = 40
    }
}

let peanutCake = new PeanutCake()
let chocolateCake = new ChocolateCake()
let cheeseCake = new CheeseCake()
let oven = new Oven(20)
oven.createCake(peanutCake)
oven.createCake(chocolateCake)
oven.createCake(cheeseCake)
oven.bake()