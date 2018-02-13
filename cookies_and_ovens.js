/* Answer These Questions:

- What are essential classes?
Oven, kue
// - What attributes will each class have?
Oven
 - kue = []
 - baketime

Bread
 - breadName
 - cookingTime
 - matang {[time] : [matang]}

- What interface will each class provide?
Oven
  bake(time)
Kue
  waktu matang dan tingkat kematangan

- How will the classes interact with each other?
  Kue will be called in Oven

- Which classes will inherit from others, if any?
  kue macam macam inherit characteristic from kue
*/


class Oven {
  constructor() {
    this.kue = []
    this.bakeTime = 0
  }

  addKue(kue){
    this.kue.push(kue)
  }

  bake(time){
    this.bakeTime += time
    for (var i = 0; i < this.kue.length; i++) {
      let tingkatMatang = Object.keys(this.kue[i].matang)
      for (var j = tingkatMatang.length-1; j >= 0; j--) {
        if(tingkatMatang[j] < this.bakeTime){
          this.kue[i].status = this.kue[i].matang[tingkatMatang[j]]
          break;
        }
      }
    }
  }

  checkIsiOven(){
    for (var i = 0; i < this.kue.length; i++) {
      console.log(`${this.kue[i].nama}, menit ke ${this.bakeTime} : (${this.kue[i].status})`);
    }
  }

  kueMatang(){
    let count = 0
    for (var i = 0; i < this.kue.length; i++) {
      let tingkatMatang = Object.keys(this.kue[i].matang)
      for (var j = tingkatMatang.length-1; j >= 0; j--) {
        console.log(tingkatMatang[j]);

      }

      console.log(Object.keys(this.kue[i].matang));
    }
  }
}

class Kue {
  constructor() {
    this.nama = 'kue'
    this.status = 'mentah'
  }
}

class KueKeju extends Kue {
  constructor() {
    super()
    this.nama = 'Kue Keju'
    this.matang = {
      3 : 'mentah',
      8 : 'hampir matang',
      10 : 'matang',
      15 : 'hangus'
    }
  }
}

class KueKacang extends Kue {
  constructor() {
    super()
    this.nama = 'Kue Kacang'
    this.matang = {
      10 : 'mentah',
      12 : 'hampir matang',
      18 : 'matang',
      30 : 'hangus'
    }
  }
}

class KueCoklat extends Kue {
  constructor() {
    super()
    this.nama = 'Kue cokelat'
    this.matang = {
      5 : 'mentah',
      15 : 'hampir matang',
      20 : 'matang',
      25 : 'hangus'
    }
  }
}

let oven = new Oven()

oven.addKue(new KueKeju())
oven.addKue(new KueKacang())
oven.addKue(new KueCoklat())

for (var i = 0; i < 10; i++) {
  let count = 0
  oven.bake(count+5)
  console.log('---');
  oven.checkIsiOven()
  // console.log(i);
}
