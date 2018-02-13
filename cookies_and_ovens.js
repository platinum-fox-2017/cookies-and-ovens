// Answer These Questions:
//
// - What are essential classes?
//  Class kue, class kacang, class coklat, class keju

// - What attributes will each class have?
//  Class Kue => name, cookie_time, condition, method cook, method check_cook
//  Others => time (cooking time)

// - What interface will each class provide?
//  Class Kue =>
//  Others =>

// - How will the classes interact with each other?
//

// - Which classes will inherit from others, if any?
//  coklat, keju, kacang from kue
//
// Your code here


class Kue {
    constructor(name,cooking_time) {
        this._name = name;
        this._cooking_time = cooking_time;
        this._condition = 'mentah'
    }

    cook(time){
        if(time<this._cooking_time-5){
            this._condition = 'mentah';
        }
        else if(time<this._cooking_time){
            this._condition = 'hampir matang';
        }
        else if(time<this._cooking_time+5){
            this._condition = 'matang';
        }
        else if(time<this._cooking_time+10){
            this._condition = 'hampir gosong';
        }
        else{
            this._condition = 'gosong';
        }

        console.log(`${this._name}, menit ke ${time} ${this._condition}`);
    }
}

class Coklat extends Kue {
    constructor(time) {
        super('Kue coklat',20);
    }
}

class Keju extends Kue {
    constructor(time) {
        super('Kue keju',35)
    }
}

class Kacang extends Kue {
    constructor(time) {
        super('Kue kacang',30)
    }
}

function cook_kue(time,arr){
    for(let i = 5; i <= time+5; i+=5){
        for(let j = 0; j < arr.length; j++){
            arr[j].cook(i);
        }
        console.log("") ;
    }
}

coklat = new Coklat();
keju = new Keju();
kacang = new Kacang();
let arrayKue = [coklat,kacang,keju];
cook_kue(33,arrayKue);
