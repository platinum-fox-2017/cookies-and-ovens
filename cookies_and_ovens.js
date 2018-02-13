const Chocolate = require('./chocolate.js');
const Peanut = require('./peanut.js');
const Cheese = require('./cheese.js');

let kueCokelat = new Chocolate('Kue cokelat');
kueCokelat.bake();
let kueKacang = new Peanut('Kue kacang');
kueKacang.bake();
let kueKeju = new Cheese('Kue keju');
kueKeju.bake();