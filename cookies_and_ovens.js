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
    constructor(){
        this._time = 0;
        this._status = 'uncooked';
        this._time_to_cook = {
            raw: 5,
            medium: 10,
            medium_well: 15,
            well_done: 20,
            over_cooked: 21,
            burnt:22
        }
    }
}
class KueCoklat extends Kue {
    constructor(){
        super()
    }
}
class KueKacang extends Kue {
    constructor(){
        super()
        this._time_to_cook = {
            raw: 5,
            medium: 10,
            medium_well: 15,
            well_done: 25,
            over_cooked: 26,
            burnt:27
        }
    }
}
class KueKeju extends Kue {
    constructor(){
        super()
        this._time_to_cook = {
            raw: 6,
            medium: 12,
            medium_well: 15,
            well_done: 35,
            over_cooked: 36,
            burnt:37
        }
    }
}

class Oven {
    constructor(){
        this.batch =[];
    }
    add_kue(object){
        this.batch.push(object);
    }
    bake(){
        this.batch[0]._time += 1;
        if(this.batch[0]._time === this.batch[0]._time_to_cook.medium) {
            this.batch[0]._status = "medium";
        }
        if(this.batch[0]._time === this.batch[0]._time_to_cook.medium_well) {
            this.batch[0]._status = "medium_well";
        }
        if(this.batch[0]._time === this.batch[0]._time_to_cook.well_done) {
            this.batch[0]._status = "well_done";
        }
        if(this.batch[0]._time === this.batch[0]._time_to_cook.over_cooked) {
            this.batch[0]._status = "over_cooked";
        }
        if(this.batch[0]._time === this.batch[0]._time_to_cook.burnt) {
            this.batch[0]._status = "burnt";
        }
        console.log(`Kue Cokelat, menit ke ${this.batch[0]._time}: ${this.batch[0]._status}`);
    }
}


let kue_lapis_coklat = new KueCoklat;
let kue_lapis_kacang = new KueKacang;
let kue_lapis_keju = new KueKeju;

let batch_1 = new Oven;
batch_1.add_kue(kue_lapis_coklat);

do{
    batch_1.bake();
} while(kue_lapis_coklat._status !== 'well_done');

// console.log(kue_lapis_coklat);
// console.log(kue_lapis_kacang);
// console.log(kue_lapis_keju);

















// +class Oven {
//     +  constructor() {
//     +    this.roti = []
//     +    this.bakeTime = 0
//     +  }
//     +
//     +  addRoti(roti){
//     +    this.roti.push(roti)
//     +  }
//     +
//     +  bake(time){
//     +    this.bakeTime += time
//     +    for (var i = 0; i < this.roti.length; i++) {
//     +      // console.log(this.roti[i].breadDoneness);
//     +      let tingkatMatang = Object.keys(this.roti[i].breadDoneness)
//     +      for (var j = tingkatMatang.length-1; j >= 0; j--) {
//     +        if(tingkatMatang[j] < this.bakeTime){
//     +          this.roti[i].status = this.roti[i].breadDoneness[tingkatMatang[j]]
//     +          break;
//     +        }
//     +      }
//     +    }
//     +  }
//     +
//     +  checkIsiOven(){
//     +    // console.log(`=-=-=-= KUE YANG SEDANG DI DALAM OVEN : =-=-=`);
//     +    for (var i = 0; i < this.roti.length; i++) {
//     +      console.log(`${this.roti[i].nama}, menit ke ${this.bakeTime} : (${this.roti[i].status})`);
//     +    }
//     +    // console.log(`=-=-=-=-=-=-=-=-=-=-=-=-==-=-=`)
//     +  }
//     +
//     +  rotiMatang(){
//     +    let count = 0
//     +    console.log('KUE YANG SUDAH MATANG SAAT INI :');
//     +    for (var i = 0; i < this.roti.length; i++) {
//     +      // console.log(this.roti[i].breadDoneness);
//     +      let tingkatMatang = Object.keys(this.roti[i].breadDoneness)
//     +      for (var j = tingkatMatang.length-1; j >= 0; j--) {
//     +        console.log(tingkatMatang[j]);
//     +
//     +        // if(this.roti[i].)
//     +
//     +      }
//     +
//     +      console.log(Object.keys(this.roti[i].breadDoneness));
//     +      // console.log(this.roti[i].breadDoneness);
//     +      // if(this.roti[i].status == 'matang'){
//     +      //   count++
//     +      //   console.log(`${count}. ${this.roti[i].nama}`);
//     +      // }
//     +    }
//     +  }
//     +}
//     +
//     +class Roti {
//     +  constructor() {
//     +    this.nama = 'roti'
//     +    this.status = 'mentah'
//     +    this.breadDoneness
//     +  }
//     +}
//     +
//     +class KueKeju extends Roti {
//     +  constructor() {
//     +    super()
//     +    super.nama = 'Kue Keju'
//     +    super.breadDoneness = {
//     +      3 : 'mentah',
//     +      8 : 'hampir matang',
//     +      10 : 'matang',
//     +      15 : 'hangus'
//     +    }
//     +  }
//     +}
//     +
//     +class KueKacang extends Roti {
//     +  constructor() {
//     +    super()
//     +    super.nama = 'Kue Kacang'
//     +    super.breadDoneness = {
//     +      10 : 'mentah',
//     +      12 : 'hampir matang',
//     +      18 : 'matang',
//     +      30 : 'hangus'
//     +    }
//     +  }
//     +}
//     +
//     +class KueCoklat extends Roti {
//     +  constructor() {
//     +    super()
//     +    super.nama = 'Kue cokelat'
//     +    super.breadDoneness = {
//     +      5 : 'mentah',
//     +      15 : 'hampir matang',
//     +      20 : 'matang',
//     +      25 : 'hangus'
//     +    }
//     +  }
//     +}
//     +
//     +let oven = new Oven()
//     +
//     +oven.addRoti(new KueKeju())
//     +oven.addRoti(new KueKacang())
//     +oven.addRoti(new KueCoklat())
//     +// oven.bake(18)
//     +// oven.checkIsiOven()
//     +// oven.rotiMatang()
//     +// console.log(oven);
//     +
//     +for (var i = 0; i < 10; i++) {
//     +  let count = 0
//     +  oven.bake(count+5)
//     +  console.log('---');
//     +  oven.checkIsiOven()
//     +  // console.log(i);
//     +}