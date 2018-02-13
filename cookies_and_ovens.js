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

// class cake => class variery of cakes => class for chef baking stuff
let chocolate_cake = require('./chocolate_cake.js')
let cheese_cake = require('./cheese_cake.js')
let peanut_cake = require('./peanut_cake.js')

class OvenForBaking {
  constructor(cakes) {
    this.cakes_to_bake = cakes
    this.cakes_baked = []
  }

  update_cake_status(){
    for (let i = 0; i < this.cakes_to_bake.length; i++) {
      if(this.cakes_to_bake[i].time_to_bake === this.cakes_to_bake[i].time_baking) {
        this.cakes_to_bake[i].status = 'matang'
      } else if (this.cakes_to_bake[i].time_to_bake < this.cakes_to_bake[i].time_baking) {
        this.cakes_to_bake[i].status = 'hangus'
      } else if (this.cakes_to_bake[i].time_to_bake-5 === this.cakes_to_bake[i].time_baking) {
        this.cakes_to_bake[i].status = 'hampir matang'
      } else {
        this.cakes_to_bake[i].status = 'mentah'
      }
    }
  }

  show_cake_status() {
    for (let i = 0; i < this.cakes_to_bake.length; i++) {
      console.log(this.cakes_to_bake[i].status);
    }
    return this
  }

  bake(time){ // incr time_baking by time
    for (let i = 0; i < this.cakes_to_bake.length; i++) {
      this.cakes_to_bake[i].time_baking += time;
    }
    this.update_cake_status()
    return this
  }

  pick_cake(nameOfCake){ // remove cake from cakes_to_bake, return cake
    for (let i = 0; i < this.cakes_to_bake.length; i++) {
      if (this.cakes_to_bake[i].name === nameOfCake) {
        let picked_cake = this.cakes_to_bake[i]
        this.cakes_to_bake.splice(i,1)
        return picked_cake
      }
    }
    return 'cake is not inside oven'
  }

}
let cakes_to_bake = [ new chocolate_cake.ChocolateCake('Choco cake'),
                      new cheese_cake.CheeseCake('Cheesy cake'),
                      new peanut_cake.PeanutCake('Nutty cake') ]
let cake_done = []
let chef = new OvenForBaking(cakes_to_bake)

chef.bake(20).show_cake_status()
cake_done.push(chef.pick_cake('Choco cake'))

chef.bake(15).show_cake_status()
cake_done.push(chef.pick_cake('Cheesy cake'))
cake_done.push(chef.pick_cake('Nutty cake'))

console.log(cake_done);
