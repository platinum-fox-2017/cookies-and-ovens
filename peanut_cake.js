let cake = require('./cake.js')
let Cake = cake.Cake

class PeanutCake extends Cake {
  constructor(name) {
    super(name)
    this.time_to_bake = 30
  }
}

// console.log( new PeanutCake());

module.exports = {
  PeanutCake : PeanutCake
}
