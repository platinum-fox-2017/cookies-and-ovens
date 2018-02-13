// Answer These Questions:
//
// - What are essential classes?
// Cookies, Cookies Cheese , Cookies Chocolate, and Cookies Peanut
// - What attributes will each class have?
// name and time to cook
// - What interface will each class provide?
// class cookies Chocolate, cheese, and peanut inherit from cookies
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookie {
    constructor(name, time) {
        this.name = name
        this.time = time
    }

    bake(time) {
        for (let i = 5; i <= time; i += 5) {
            let status = ''
            if (i > this.time) {
                status = 'hangus'
            } else if (i === this.time) {
                status = 'matang'
            } else if (i > this.time / 2) {
                status = 'hampir matang'
            } else if (i < this.time) {
                status = 'mentah'
            }
            console.log(`${this.name} menit ke ${i} ${status}`)
        }
    }
}

class Chocolate extends Cookie {
    constructor() {
        super('Chocolate', 20)
    }
}

class Cheese extends Cookie {
    constructor() {
        super('Cheese', 20)
    }
}

class Peanut extends Cookie {
    constructor() {
        super('Peanut', 20)
    }
}

let cheese = new Cheese()
cheese.bake(30)
console.log(cheese)

let chocolate = new Chocolate()
chocolate.bake(40)
console.log(chocolate)

let peanut = new Peanut()
peanut.bake(40)
console.log(peanut)