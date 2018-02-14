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
    this.timeCooked = 20
  }
}

class KueKacang extends Kue{
  constructor(name) {
    super(name)
    this.timeCooked = 30
  }
}

class KueKeju extends Kue{
  constructor(name) {
    super(name)
    this.timeCooked = 35
  }
}

class Cooking {
  constructor() {
    this.list_cookies = []
  }

  addCookie(cookieType) {
    if(cookieType == 'kue cokelat') {
      this.list_cookies.push(new KueCokelat(cookieType))
    } else if(cookieType == 'kue kacang') {
      this.list_cookies.push(new KueKacang(cookieType))
    } else if(cookieType == 'kue keju') {
      this.list_cookies.push(new KueKeju(cookieType))
    }
  }

  list() {
    console.log(this.list_cookies)
  }

  baking(time) {
    for(let j=0; j<this.list_cookies.length; j++) {
      for(let i=0; i<=time; i+=5) {
        if(this.list_cookies[j].timeCooked-5 == i) {
          this.list_cookies[j].status = 'hampir matang'
          console.log(`${this.list_cookies[j].name}, menit ke ${i} : ${this.list_cookies[j].status}`);
        } else if(this.list_cookies[j].timeCooked == i) {
          this.list_cookies[j].status = 'matang'
          console.log(`${this.list_cookies[j].name}, menit ke ${i} : ${this.list_cookies[j].status}`);
        } else if(this.list_cookies[j].timeCooked > i) {
          this.list_cookies[j].status = 'mentah'
          console.log(`${this.list_cookies[j].name}, menit ke ${i} : ${this.list_cookies[j].status}`);
        } else if(this.list_cookies[j].timeCooked < i) {
          this.list_cookies[j].status = 'hangus'
          console.log(`${this.list_cookies[j].name}, menit ke ${i} : ${this.list_cookies[j].status}`);
        }
      }
    }
  }
}

let cooking = new Cooking()
cooking.addCookie('kue cokelat')
cooking.addCookie('kue kacang')
cooking.addCookie('kue keju')
cooking.list()
cooking.baking(20)
