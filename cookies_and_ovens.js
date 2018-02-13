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

  static baking(name, time) {
    for(let i=0; i<=time; i+=5) {
      if(name.cooked-5 == i) {
        console.log(`${name.name}, menit ke ${i} : hampir matang`);
      } else if(name.cooked > i) {
        console.log(`${name.name}, menit ke ${i} : mentah`);
      } else if(name.cooked == i) {
        console.log(`${name.name}, menit ke ${i} : matang`);
      } else if(name.cooked < i) {
        console.log(`${name.name}, menit ke ${i} : hangus`);
      }
    }
  }
}

let kueCoklat = Cooking.list('kue cokelat')
let kueKacang = Cooking.list('kue kacang')
let kueKeju = Cooking.list('kue keju')

Cooking.baking(kueCoklat, 20)
Cooking.baking(kueKacang, 30)
Cooking.baking(kueKeju, 35)
