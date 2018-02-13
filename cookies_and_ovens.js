// Answer These Questions:
//
// - What are essential classes?
//  Class kue, class kacang, class coklat, class keju

// - What attributes will each class have?
//  Class Cookie => cookie_name, cookie_time
//  Others => nerusin

// - What interface will each class provide?

// - How will the classes interact with each other?

// - Which classes will inherit from others, if any?
//  coklat, keju, kacang from kue
//
// Your code here
// Jenis Kue: Kue kacang, coklat, keju
// kacang => 30 menit
// coklat => 20 menit
// keju => 35 menit
// Bisa mengatur berapa lama

//Tingkat kematangan -> hampir matang mentah selesai hangus per 5/10 menit
// Kue cokelat, menit ke 5 mentah
// Kue coklat, menit ke 10 mentah

class Kue {
    constructor(name,cooking_time) {
        this._name = name;
        this._cooking_time = cooking_time;
        this._condition = 'mentah'
    }
    get name(){
        return this.name;
    }

    cook(time){
        let i = 5;
        while(i < time){
            this.check_cook(i);
            i += 5;
        }
        this.check_cook(time);
    }

    check_cook(time){
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

        console.log(`Kue ${this._name}, menit ke ${time} ${this._condition}`);
    }
}

class Coklat extends Kue {
    constructor(time) {
        super('coklat',20);
    }
}

class Keju extends Kue {
    constructor(time) {
        super('keju',35)
    }
}

class Kacang extends Kue {
    constructor(time) {
        super('kacang',30)
    }
}

console.log("\nMasak Kue Coklat:");
coklat = new Coklat();
coklat.cook(28);

console.log("\nMasak Kue Keju:");
keju = new Keju();
keju.cook(37);

console.log("\nMasak Kue Kacang:");
kacang = new Kacang();
kacang.cook(27);
