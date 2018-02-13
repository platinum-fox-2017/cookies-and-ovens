let cake = require('./cake.js')
let Cake = cake.Cake

class CheeseCake extends Cake {
  constructor(name) {
    super(name)
    this.time_to_bake = 35
  }
}

// console.log( new CheeseCake());

module.exports = {
  CheeseCake : CheeseCake
}
