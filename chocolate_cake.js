let cake = require('./cake.js')
let Cake = cake.Cake

class ChocolateCake extends Cake {
  constructor(name) {
    super(name)
    this.time_to_bake = 20
  }
}

// console.log( new ChocolateCake());

module.exports = {
  ChocolateCake : ChocolateCake
}
