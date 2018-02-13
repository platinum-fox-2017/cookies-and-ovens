class OvenCake {
    constructor() {
        this._cake_in_oven = []
    }

    ovenCake(cake) {
        this._cake_in_oven.push(cake);
    }

    timeCook() {
        for (let j = 0; j < this._cake_in_oven.length; j++) {
            for (let i = 5; i <= 50; i += 5) {
                if (i === (this._cake_in_oven[j]._oven_time - 5)) {
                    console.log(`${this._cake_in_oven[j]._name}, menit ke ${i}: hampir matang`)
                } else if (i < this._cake_in_oven[j]._oven_time) {
                    console.log(`${this._cake_in_oven[j]._name}, menit ke ${i}: mentah`)
                } else if (i === (this._cake_in_oven[j]._oven_time)) {
                    console.log(`${this._cake_in_oven[j]._name}, menit ke ${i}: matang`)
                } else if (i > this._cake_in_oven[j]._oven_time) {
                    console.log(`${this._cake_in_oven[j]._name}, menit ke ${i}: hangus`)
                }
            }
        }
    }
}

class Cake {
    constructor(name, oven_time) {
        this._name = name
        this._oven_time = oven_time
    }
}

class PeanutCake extends Cake {
    constructor(name, oven_time) {
        super(name, oven_time)
    }
}

class CheseeCake extends Cake {
    constructor(name, oven_time) {
        super(name, oven_time)
    }
}

class ChocolateCake extends Cake {
    constructor(name, oven_time) {
        super(name, oven_time)
    }
}

cookingCake = new OvenCake()
peeanutCake = new PeanutCake('Kue Kacang', 30)
cheseeCake = new CheseeCake('Kue Keju', 35)
chocolateCake = new ChocolateCake('Kue Cokelat', 20)

// cookingCake.ovenCake(cheseeCake);
// cookingCake.ovenCake(chocolateCake);
cookingCake.ovenCake(peeanutCake);

cookingCake.timeCook()