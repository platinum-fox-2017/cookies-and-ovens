// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
class Cake {
    constructor(name,bakedTime) {
        this._name      = name;
        this._time      = 0;
        this._status    = "mentah";
        this._bakedTime = bakedTime;
    }

    get name() {
        return this._name;
    }

    get status() {
        return this._status;
    }

    get time() {
        return this._time;
    }

    cookCake() {
        this._time  = this._time + 5;
        
        if(this._time == (this._bakedTime - 5)) {            
            this._status = "hampir matang";
        } else if (this._time == this._bakedTime) {
            this._status = "matang"
        } else if (this._time > this._bakedTime) {
            this._status = "hangus"
        }
    }
}

class ChocolateCake extends Cake {
    constructor(name,bakedTime) {
        super(name,bakedTime);
    }
}

class CheeseCake extends Cake {
    constructor(name,bakedTime) {
        super(name,bakedTime);
    }
}

class PeanuteCake extends Cake {
    constructor(name,bakedTime) {
        super(name,bakedTime);
    }
}

let choco   = new ChocolateCake('kue coklat', 20);
let peanute = new PeanuteCake('kue kacang', 30);
let cheese  = new CheeseCake('kue keju', 35);

for(let i = 0; i < 8; i++) {
    choco.cookCake();
    console.log(choco.name + ", menit ke " + choco.time + " : " + choco.status);
    peanute.cookCake();
    console.log(peanute.name + ", menit ke " + peanute.time + " : " + peanute.status);
    cheese.cookCake(1);
    console.log(cheese.name + ", menit ke " + cheese.time + " : " + cheese.status);
    console.log("=========================================");
}