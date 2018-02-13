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

class Cookie {
  constructor()  {
    this.status = 'mentah';
    this.ingredients = [];
  }
  bake(){
    this.status = "selesai dimasak";
  }
}

class PeanutButter extends Cookie {
  constructor(){
    super();
    this.name = 'peanut butter';
    this.peanut_conut = 100;  
  }
}
class ChocholateChip extends Cookie {
  constructor(){
    super();
    this.name = 'chocolate chip';
    this.choc_chip_count = 200;  
  }
}
class OtherCookie extends Cookie {
  constructor(name){
    super();
    this.name = name;
    this.other_count = 150;  
  }
}


module.exports = {
   PeanutButter: PeanutButter,
   ChocholateChip: ChocholateChip,
   OtherCookie: OtherCookie
}
