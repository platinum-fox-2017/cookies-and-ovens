// Answer These Questions:
//
// - What are essential classes? kue
// - What attributes will each class have? waktu
// - What interface will each class provide?
// - How will the classes interact with each other? cooking time
// - Which classes will inherit from others, if any? kue coklat, kue kacang, kue keju
//
//
// Your code here


//RELEASE 0,1

// class kue {
//     constructor(name) {
//         this._name = name;
//         this._status = 'mentah';
//         this._time = 0;
//     }
// }


// class kueCoklat extends kue{
//     constructor(name) {
//         super(name)
//         this._cookingtime = 25;
//     }

//     cooking() {
//         for (var i = this._time+5; i <= this._cookingtime; i += 5) {
//             this._time += 5;
//             if (this._time < 20 && this._time > 10) {
//                 this._status = 'hampir matang';
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else if (this._time == 20) {
//                 this._status = 'matang';
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else if (this._time > 20) {
//                 this._status = 'hangus'
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else {
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             }
//         }
//     }

// }

// class kueKacang extends kue{
//     constructor(name) {
//         super(name)
//         this._cookingtime = 35;
//     }

//     cooking() {
//         for (var i = this._time+5; i <= this._cookingtime; i += 5) {
//             this._time += 5;
//             if (this._time < 30 && this._time > 10) {
//                 this._status = 'hampir matang';
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else if (this._time == 30) {
//                 this._status = 'matang';
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else if (this._time > 30) {
//                 this._status = 'hangus'
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else {
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             }
//         }
//     }

// }

// class kueKeju extends kue{
//     constructor(name) {
//         super(name)
//         this._cookingtime = 40;
//     }

//     cooking() {
//         for (var i = this._time+5; i <= this._cookingtime; i += 5) {
//             this._time += 5;
//             if (this._time < 35 && this._time > 10) {
//                 this._status = 'hampir matang';
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else if (this._time == 35) {
//                 this._status = 'matang';
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else if (this._time > 35) {
//                 this._status = 'hangus'
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             } else {
//                 console.log(`${this._name}, menit ke ${i} : ${this._status}`);
//             }
//         }
//     }

// }

// var coklat = new kueCoklat('ChocoCookies');
// coklat.cooking();

// console.log('=============================')

// var kacang = new kueKacang('PeanutCookies');
// kacang.cooking();

// console.log('=============================')

// var keju = new kueKeju('CheeseCookies')
// keju.cooking();


// Release 2

class kue {
    constructor(name) {
        this._name = name;
        this._status = 'mentah';
        this._time = 0;
    }
}


class kueCoklat extends kue{
    constructor(name) {
        super(name)
        this._cooktime = 20;
    }

}

class kueKacang extends kue{
    constructor(name) {
        super(name)
        this._cooktime = 30;
    }

}

class kueKeju extends kue {
    constructor(name) {
        super(name)
        this._cooktime = 35;
    }
}

class baking {
    constructor() {

    }

    static listkue(name) {
        if (name == 'kue coklat') {
            return new kueCoklat(name);
        } else if (name == 'kue kacang') {
            return new kueKacang(name);
        } else if (name == 'kue keju') {
            return new kueKeju(name);
        }
    }

    static cooking(kue,time) {
        for (var i = 5; i <= time; i += 5) {
            if (kue._cooktime-5 == i) {
                kue._status = 'hampir matang';
                console.log(`${kue._name}, menit ke ${i} : ${kue._status}`);
            } else if (kue._cooktime == i) {
                kue._status = 'matang';
                console.log(`${kue._name}, menit ke ${i} : ${kue._status}`);
            } else if (kue._cooktime > i) {
                console.log(`${kue._name}, menit ke ${i} : ${kue._status}`);
            } else if (kue._cooktime < i) {
                kue._status = 'hangus';
                console.log(`${kue._name}, menit ke ${i} : ${kue._status}`);
            }
        }
        
    }

}

let ChocoCookies = baking.listkue('kue coklat');
// console.log(ChocoCookies._cooktime);
let PeanutCookies = baking.listkue('kue kacang');
let CheeseCookies = baking.listkue('kue keju');

baking.cooking(ChocoCookies, 25);
console.log('==========================')
baking.cooking(PeanutCookies, 35);
console.log('==========================')
baking.cooking(CheeseCookies, 40);