// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
// Your code here
class Kue {
  constructor(name) {
    this.name = name
    this.status = 'mentah'
  }
}

class KueCokelat extends Kue{
  constructor(name) {
    super(name)
    this.cooked = 20
  }
}

class KueKacang extends Kue{
  constructor(name) {
    super(name)
    this.cooked = 30
  }
}

class KueKeju extends Kue{
  constructor(name) {
    super(name)
    this.cooked = 35
  }
}

class Cooking {
  static list(name) {
    if(name == 'kue cokelat') {
      return new KueCokelat(name)
    } else if(name == 'kue kacang') {
      return new KueKacang(name)
    } else if(name == 'kue keju') {
      return new KueKeju(name)
    }
  }

  static baking(kue, time) {
    for(let i=0; i<=time; i+=5) {
      if(kue.cooked-5 == i) {
        kue.status = 'hampir matang'
        console.log(`${kue.name}, menit ke ${i} : ${kue.status}`);
      } else if(kue.cooked == i) {
        kue.status = 'matang'
        console.log(`${kue.name}, menit ke ${i} : ${kue.status}`);
      } else if(kue.cooked > i) {
        kue.status = 'mentah'
        console.log(`${kue.name}, menit ke ${i} : ${kue.status}`);
      } else if(kue.cooked < i) {
        kue.status = 'hangus'
        console.log(`${kue.name}, menit ke ${i} : ${kue.status}`);
      }
    }
  }
}

let kueCoklat = Cooking.list('kue cokelat')
let kueKacang = Cooking.list('kue kacang')
let kueKeju = Cooking.list('kue keju')

Cooking.baking(kueCoklat, 20)
Cooking.baking(kueKacang, 40)
Cooking.baking(kueKeju, 35)
