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
    constructor(object){
        this._time_to_bake = 20;
    }
}
class KueCoklat extends Kue {
    constructor(object){
        super(object)
    }
}
class KueKacang extends Kue {
    constructor(object){
        super(object)
        this._time_to_bake = 30;
    }
}
class KueKeju extends Kue {
    constructor(object){
        super(object)
        this._time_to_bake = 35;
    }
}

let kue_lapis_coklat = new KueCoklat;
let kue_lapis_kacang = new KueKacang;
let kue_lapis_keju = new KueKeju;

console.log(kue_lapis_coklat);
console.log(kue_lapis_kacang);
console.log(kue_lapis_keju);