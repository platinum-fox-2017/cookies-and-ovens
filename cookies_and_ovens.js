"use strict"

class Cookie {
  constructor(name) {
    this._name = name
    this._timer = 0
    this._bakingTime = 15
  }

  get timer() {
    return this._timer
  }

  get baking_time() {
    return this._bakingTime
  }

  status() {
    if(this.timer < this.baking_time) {
      if(this.timer <= 5) {
        console.log(`status: just in`)
      } else if(this.timer > 5 && this.timer <= 10) {
        console.log(`status: not yet`)
      } else if(this.timer > 10 && this.timer <= 15) {
        console.log(`status: almost`)
      } else if(this.timer === (this.baking_time - 5)) {
        console.log(`status: almossstttt`)
      } else {
        console.log(`status: getting there`)
      }
    }
  }

  bake() {
    if(this.timer === 0) {
      console.log(`Baking ${this._name} cake`);
    }
    this._timer += 5;
    if(this.timer === this.baking_time) {
      console.log(`<<<HERE IS YOUR CAKE>>>`)
    }
  }
}

class Chocolate extends Cookie {
  constructor(name) {
    super(name)
    this._name = name || 'Chocolate'
    this._bakingTime = 20
  }
}

class Peanut extends Cookie {
  constructor(name) {
    super(name)
    this._name = name || 'Peanut'
    this._bakingTime = 30
  }
}

class Cheese extends Cookie {
  constructor(name) {
    super(name)
    this._name = name || 'Cheese'
    this._bakingTime = 35
  }
}

let choco = new Chocolate()

do {
  choco.bake();
  choco.status()
} while (choco.timer <= choco.baking_time)

let peanut = new Peanut()

do {
  peanut.bake();
  peanut.status();
} while (peanut.timer <= peanut.baking_time)

let cheese = new Cheese()

do {
  cheese.bake();
  cheese.status();
} while (cheese.timer <= cheese.baking_time)