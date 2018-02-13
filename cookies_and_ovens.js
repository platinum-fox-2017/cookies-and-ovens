'use strict'
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
class Kue {
  constructor(name){
    this.name = name
    this.bakeTime = null
    this.status = null
  }

  bake(input) {
    for (let i = 5; i <= input; i+=5) {
      this.status = 'mentah'
      if(this.bakeTime - 5 === i) {
        this.status = 'hampir matang'
      } else if(this.bakeTime === i) {
        this.status = 'matang'
      } else if(i > this.bakeTime) {
        this.status = 'gosong'
      }
      console.log(`Kue ${this.name}, menit ke ${i} : ${this.status}`);
    }
  }
}

class KueCokelat extends Kue {
  constructor () {
    super()
    this.bakeTime = 20
  }
}

class KueKacang extends Kue {
  constructor () {
    super()
    this.bakeTime = 30
  }
}

class KueKeju extends Kue {
  constructor () {
    super()
    this.bakeTime = 35
  }
}

let choco = new KueCokelat('Choco')

choco.bake(25)
