"use strict"

class Cookies {
  constructor(name,time) {
    this.name = name;
    this._time = 0;
    this.cookedTime = time; // waktu saat kuenya matang
    this._cooked = false; // belum matang
  }

  get timed(){
    return this._time;
  }

  get cookedStatus(){
    return this._cooked;
  }

  cookingTime(){
    this._time += 5;
    if(this._time<(this.cookedTime-5)){
      console.log(`${this.name}, menit ke-${this._time}: mentah`);
    } else if(this._time===(this.cookedTime-5)){
      console.log(`${this.name}, menit ke-${this._time}: hampir matang`);
    } else if(this._time===this.cookedTime){
      console.log(`${this.name}, menit ke-${this._time}: matang`);
    } else {
      console.log(`${this.name}, menit ke-${this._time}: hangus`);
      this._cooked = true;
    }
  }

}

// nama kue dan waktu matangnya dimasukkan sebagai parameter class

let kueCoklat = new Cookies('Kue Coklat',20);
do {
  kueCoklat.cookingTime();
} while (kueCoklat.cookedStatus !== true);

console.log('--------------------------');
let kueKacang = new Cookies('Kue Kacang',30);
do {
  kueKacang.cookingTime();
} while (kueKacang.cookedStatus !== true);

console.log('--------------------------');
let kueKeju = new Cookies('Kue Keju',35);
do {
  kueKeju.cookingTime();
} while (kueKeju.cookedStatus !== true);
